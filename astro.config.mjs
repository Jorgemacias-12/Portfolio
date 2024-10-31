// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import { config } from 'dotenv';

config();

// https://astro.build/config
export default defineConfig({
  site: "https://Jorgemacias-12.github.io",
  base: `${process.env.PUBLIC_BASE_URL}`,
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