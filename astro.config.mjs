import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.gepprotect.es',
  integrations: [sitemap()],
  output: 'server',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  },
  sitemap: {
    filter: (page) => !page.endsWith('/gracias/') && !page.endsWith('/404/')
  }
});
