// @ts-check
import { defineConfig } from "astro/config";

import maintenance from "astro-maintenance";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), maintenance({
    enabled: process.env.MAINTENANCE_ENABLED === "true",
  }), react(), sitemap({}), compress(), purgecss()],
  site: "https://jorgemacias.dev",
  base: process.env.PUBLIC_BASE_URL || "",
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});