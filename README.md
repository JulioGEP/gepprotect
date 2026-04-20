# GEP Protect Web (Astro + Tailwind v4)

Web pública de GEP Protect para captación SEO/CRO de servicios PCI.

## Requisitos
- Node.js 20+
- npm 10+

## Instalación
```bash
npm install
npm run dev
```

## Variables de entorno
Crea `.env` con:

```bash
PUBLIC_ANALYTICS_DOMAIN=gepprotect.es
```

Si no se define, no se inyecta script de analítica.

## Scripts
- `npm run dev`: entorno local
- `npm run build`: build producción
- `npm run preview`: preview local
- `npm run check`: chequeo Astro

## Estructura de contenido
- `src/pages/servicios/*/index.astro`: páginas transaccionales por servicio
- `src/pages/sectores/*/index.astro`: páginas por vertical
- `src/pages/normativa/*/index.astro`: clúster informacional

## Cómo añadir una nueva página con el patrón actual
1. Crear ruta en `src/pages/.../index.astro`.
2. Usar `BaseLayout` con `title` y `description` transaccionales.
3. Añadir `Breadcrumb` y un único `<h1>` con keyword principal.
4. Incluir enlaces internos a páginas hermanas y clúster padre.
5. Si incluye FAQs, reutilizar `FaqAccordion` para emitir schema FAQPage.
6. En páginas de servicio, pasar `servicePreset` a `ContactForm` para preselección.

## SEO técnico incluido
- Canonical dinámico por ruta.
- Open Graph completo desde `SeoHead`.
- Hreflang base preparado.
- Sitemap con exclusión de `/gracias/`.
- Robots con bloqueo de `/gracias/` y querystrings.
