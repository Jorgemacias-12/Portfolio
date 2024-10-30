// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: "https://Jorgemacias-12.github.io",
  base: import.meta.env.BASE_URL,
  integrations: [tailwind(), react()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
      strategy: 'pathname'
    }
  }
});