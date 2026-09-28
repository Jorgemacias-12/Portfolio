// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.jorgemacias.dev/",
  base: process.env.PUBLIC_BASE_URL || "",
});
