import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.gepprotect.es',
  integrations: [sitemap()],
  output: 'server',
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()]
  },
  sitemap: {
    filter: (page) => !page.endsWith('/gracias/') && !page.endsWith('/404/')
  }
});
