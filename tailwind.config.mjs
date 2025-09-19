/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: "1px",
      },
      maxWidth: {
        "screen-xs": "400px",
      },
      colors: {
        base: {
          light: "#F9FAFB",
          dark: "#141619",
        },
        surface: {
          light: "#FFFFFF",
          dark: "#1E2126",
        },
        surfaceElevated: {
          light: "#F3F4F6",
          dark: "#2A2E35",
        },
        textPrimary: {
          light: "#111827",
          dark: "#F8FAFC",
        },
        textSecondary: {
          light: "#4B5563",
          dark: "#CBD5E1",
        },
        accent: {
          light: "#6758b8",
          dark: "#A78BFA",
        },
      },
    },
  },
  plugins: [],
};
