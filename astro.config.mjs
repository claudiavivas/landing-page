// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  base: "/landing-page/",
  vite: {
    plugins: [tailwindcss()]
  }
});
