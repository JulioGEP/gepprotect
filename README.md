# gepprotect

Borrador inicial de la nueva web pública de **GEP Protect** construida con **Astro + Tailwind**.

## Scripts

- `npm ci`: instala dependencias.
- `npm run dev`: arranca entorno local.
- `npm run build`: genera la build estática optimizada.
- `npm run preview`: previsualiza la build.

## Estructura actual

- Landing principal (`/`)
- `/servicios`
- `/sectores`
- `/normativa`
- `/casos-de-exito`
- `/contacto`

Contenido en modo borrador, orientado por intención de búsqueda y preparado para escalar arquitectura SEO.

## Sincronización WooCommerce (reporting)

Se añadió la página `/reporting/woocommerce_compras` con un botón **Actualizar** que llama a la función `/.netlify/functions/woocommerce-sync`.

Variables de entorno necesarias en Netlify:

- `WOOCOMMERCE_BASE_URL` (ej: `https://tu-tienda.com`)
- `CLAVE_CLIENTE_WC`
- `CLAVE_SECRETA_WC`

La sincronización incorpora únicamente pedidos `completed` / `completado` con fecha igual o posterior al `2026-01-01`.
