/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: '1px'
      },
      maxWidth:{
        'screen-xs': '400px'
      },
      colors: {
        'raisin-black': {
          DEFAULT: '#1a202c',
          100: '#050709',
          200: '#0b0d12',
          300: '#10141b',
          400: '#151a24',
          500: '#1a202c',
          600: '#3b4964',
          700: '#5b719c',
          800: '#90a0be',
          900: '#c8cfdf'
        },
        'white-smoke': {
          DEFAULT: '#f5f5f5',
          100: '#313131',
          200: '#626262',
          300: '#939393',
          400: '#c4c4c4',
          500: '#f5f5f5',
          600: '#f7f7f7',
          700: '#f9f9f9',
          800: '#fbfbfb',
          900: '#fdfdfd'
        },
        'seasalt': {
          DEFAULT: '#f8f9fa',
          100: '#29323a',
          200: '#536475',
          300: '#8496a8',
          400: '#bfc8d1',
          500: '#f8f9fa',
          600: '#fafbfc',
          700: '#fbfcfc',
          800: '#fdfdfd',
          900: '#fefefe'
        },
        'tekhelet': {
          DEFAULT: '#3d348b',
          100: '#0c0a1c',
          200: '#181437',
          300: '#241f53',
          400: '#30296e',
          500: '#3d348b',
          600: '#5044b9',
          700: '#7b72cb',
          800: '#a7a1dc',
          900: '#d3d0ee'
        },
        'persimmon': {
          DEFAULT: '#f35b04',
          100: '#301201',
          200: '#602401',
          300: '#913602',
          400: '#c14903',
          500: '#f35b04',
          600: '#fc792e',
          700: '#fd9b62',
          800: '#fdbc97',
          900: '#fedecb'
        }
      }
    },
  },
  plugins: [],
}
