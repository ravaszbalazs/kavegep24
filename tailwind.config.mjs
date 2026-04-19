/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        coffee: {
          DEFAULT: '#4c0b15',
          50: '#f9f0f2',
          100: '#f0d4d8',
          200: '#d9a0a8',
          300: '#bf6570',
          400: '#a33040',
          DEFAULT: '#4c0b15',
          600: '#3d0911',
          700: '#2e070d',
          800: '#1e040a',
          900: '#0f0205',
        },
        yellow: '#cf7019',
      },
      fontFamily: {
        hisense: ['HISENSE', 'sans-serif'],
        sans: ['HISENSE', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: '#000',
            h1: { color: theme('colors.coffee.DEFAULT') },
            h2: { color: theme('colors.coffee.DEFAULT') },
            h3: { color: theme('colors.coffee.DEFAULT') },
            h4: { color: theme('colors.coffee.DEFAULT') },
            a: { color: theme('colors.coffee.DEFAULT') },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
