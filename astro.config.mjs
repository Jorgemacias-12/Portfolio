// @ts-check
import { defineConfig } from "astro/config";
import { LOCALES } from "@/types";

// https://astro.build/config
export default defineConfig({
  site: "https://www.jorgemacias.dev/",
  base: process.env.PUBLIC_BASE_URL || "",

  i18n: {
    defaultLocale: "es",
    locales: LOCALES,
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [],
});
