import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://gepprotect.es',
  integrations: [tailwind({ applyBaseStyles: false })],
});
