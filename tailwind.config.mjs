/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#ef233c',
          200: '#f54b4f',
          300: '#fb6763',
          400: '#ff7f78',
          500: '#ff968d',
          600: '#ffaba3',
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
};
