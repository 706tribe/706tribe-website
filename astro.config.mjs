// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from "@astrojs/mdx";
// https://astro.build/config
export default defineConfig({
  site: 'https://706tribe.com',
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ["zh", "en"],
    defaultLocale: "zh",
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [mdx()]
});