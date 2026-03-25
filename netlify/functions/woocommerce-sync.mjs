import { getStore } from '@netlify/blobs';

const CORTE_FECHA = '2026-01-01T00:00:00.000Z';

const jsonResponse = (statusCode, payload) => ({
  statusCode,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: JSON.stringify(payload),
});

const parseOrderDate = (order) => {
  if (order?.date_created_gmt) return new Date(order.date_created_gmt);
  if (order?.date_created) return new Date(order.date_created);
  return new Date('1900-01-01T00:00:00.000Z');
};

const isCompletedOrder = (order) => {
  const status = String(order?.status || '').toLowerCase();
  return status === 'completed' || status === 'completado';
};

export default async (request) => {
  if (request.httpMethod !== 'POST') {
    return jsonResponse(405, { error: 'Method Not Allowed' });
  }

  const claveCliente = process.env.CLAVE_CLIENTE_WC;
  const claveSecreta = process.env.CLAVE_SECRETA_WC;

  if (!claveCliente || !claveSecreta) {
    return jsonResponse(500, {
      error: 'Faltan variables de entorno de WooCommerce (CLAVE_CLIENTE_WC / CLAVE_SECRETA_WC).',
    });
  }

  const baseUrl = process.env.WOOCOMMERCE_BASE_URL;

  if (!baseUrl) {
    return jsonResponse(500, {
      error: 'Falta la variable WOOCOMMERCE_BASE_URL con la URL base de WooCommerce.',
    });
  }

  const endpoint = new URL('/wp-json/wc/v3/orders', baseUrl);
  endpoint.searchParams.set('consumer_key', claveCliente);
  endpoint.searchParams.set('consumer_secret', claveSecreta);
  endpoint.searchParams.set('per_page', '100');
  endpoint.searchParams.set('orderby', 'date');
  endpoint.searchParams.set('order', 'desc');
  endpoint.searchParams.set('status', 'completed');
  endpoint.searchParams.set('after', CORTE_FECHA);

  const wcResponse = await fetch(endpoint, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  if (!wcResponse.ok) {
    const raw = await wcResponse.text();
    return jsonResponse(502, {
      error: 'WooCommerce devolvió un error al consultar pedidos.',
      detail: raw.slice(0, 500),
    });
  }

  const orders = await wcResponse.json();
  const pedidos = Array.isArray(orders) ? orders : [];

  const pedidosCompletados = pedidos
    .filter(isCompletedOrder)
    .filter((order) => parseOrderDate(order).toISOString() >= CORTE_FECHA)
    .sort((a, b) => parseOrderDate(b) - parseOrderDate(a));

  const store = getStore('woocommerce-compras');
  const indice = (await store.getJSON('pedidos_ids')) ?? [];
  const idsExistentes = new Set(indice.map((id) => Number(id)));

  const nuevosPedidos = pedidosCompletados.filter((pedido) => !idsExistentes.has(Number(pedido.id)));

  for (const pedido of nuevosPedidos) {
    await store.setJSON(`pedido_${pedido.id}`, {
      id: Number(pedido.id),
      number: pedido.number,
      status: pedido.status,
      total: pedido.total,
      currency: pedido.currency,
      date_created: pedido.date_created,
      date_created_gmt: pedido.date_created_gmt,
      customer_id: pedido.customer_id,
      billing: pedido.billing,
      shipping: pedido.shipping,
      line_items: pedido.line_items,
      meta_data: pedido.meta_data,
      raw: pedido,
      synced_at: new Date().toISOString(),
    });

    idsExistentes.add(Number(pedido.id));
  }

  await store.setJSON('pedidos_ids', Array.from(idsExistentes).sort((a, b) => b - a));

  const ultimoPedido = pedidosCompletados[0] ?? null;

  return jsonResponse(200, {
    message: `Sincronización completada. ${nuevosPedidos.length} pedido(s) nuevo(s) incorporado(s).`,
    ultimoPedido: ultimoPedido
      ? {
          id: ultimoPedido.id,
          numero: ultimoPedido.number,
          fecha: ultimoPedido.date_created_gmt || ultimoPedido.date_created,
          estado: ultimoPedido.status,
        }
      : null,
    revisados: pedidosCompletados.length,
    nuevos: nuevosPedidos.map((p) => ({ id: p.id, numero: p.number })),
    fechaCorte: CORTE_FECHA,
  });
};
