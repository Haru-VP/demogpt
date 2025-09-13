/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        rosa: {
          50: '#fff5f7',
          100: '#ffeef2',
          200: '#ffd1e0',
          300: '#ff9ec6',
          400: '#ff6b9a',
          500: '#ff4b83',
          600: '#e93a72',
          700: '#c02b5d',
          800: '#9b2348',
          900: '#7a1834'
        }
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
