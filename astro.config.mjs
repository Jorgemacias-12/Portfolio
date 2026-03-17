// @ts-check
import { defineConfig } from "astro/config";

import compress from "astro-compress";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://www.jorgemacias.dev/",
  base: process.env.PUBLIC_BASE_URL || "",

  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [compress(), react()],
});