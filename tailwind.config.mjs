/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },

        dark: {
          900: "#000000",
          850: "#0A0A0A",
          800: "#121416",
          750: "#141619",
          700: "#1A1D21",
          650: "#202327",
          600: "#2C3036",
          550: "#373C43",
          500: "#444B54",
          450: "#525965",
          400: "#646B75",
          350: "#7A828C",
          300: "#959DA8",
          250: "#B1BAC4",
          200: "#CED4DB",
          150: "#E1E7EF",
          100: "#F0F3F8",
          50: "#F9FBFF",
        },

        accent: {
          950: "#2A0C00",
          900: "#3A1500",
          850: "#4A1D00",
          800: "#5A2600",
          750: "#6A2E00",
          700: "#7A3600",
          650: "#8A3E00",
          600: "#9A4600",
          550: "#AA4E00",
          500: "#FF5C00",
          450: "#FF6F1A",
          400: "#FF8333",
          350: "#FF974D",
          300: "#FFAB66",
          250: "#FFBF80",
          200: "#FFD399",
          150: "#FFE7B3",
          100: "#FFF3CC",
          50: "#FFF9E6",
        },
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /text-(blue|green|orange|red|yellow|purple|pink|indigo|rose|violet|cyan)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern:
        /bg-(blue|green|orange|red|yellow|purple|pink|indigo|rose|violet|cyan)-(50|100|200|300|400|500|600|700|800|900)/,
    },
  ],
};
