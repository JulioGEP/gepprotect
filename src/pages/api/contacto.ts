import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData();
  if (form.get('website')) {
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }

  const nombre = form.get('nombre');
  const telefono = form.get('telefono');
  const servicio = form.get('servicio');

  if (!nombre || !telefono || !servicio) {
    return new Response(JSON.stringify({ error: 'Campos obligatorios incompletos' }), { status: 400 });
  }

  // Aquí se conectaría con el CRM o proveedor de email transaccional.
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
