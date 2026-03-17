/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9ecff',
          600: '#0d4b8f',
          700: '#0a3a70',
          900: '#07233f',
        },
      },
    },
  },
  plugins: [],
};
