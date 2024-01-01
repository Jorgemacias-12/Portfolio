/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderColor: {
        primary: '#087e8b',
      },
      colors: {
        primary: {
          100: '#087e8b',
          200: '#398c97',
          300: '#569aa4',
          400: '#70a8b0',
          500: '#88b6bd',
          600: '#a0c4ca',
        },
        surface: {
          100: '#2b2d42',
          200: '#404155',
          300: '#555668',
          400: '#6b6c7c',
          500: '#828391',
          600: '#9a9aa6',
        },
        'surface-mixed': {
          100: '#413042',
          200: '#544455',
          300: '#675968',
          400: '#7c6f7c',
          500: '#908591',
          600: '#a69ca6',
        },
      },
    },
  },
}
