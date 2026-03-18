import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://gepprotect.netlify.app',
  integrations: [tailwind({ applyBaseStyles: false })],
});
