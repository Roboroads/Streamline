/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        casal: {
          DEFAULT: '#345E77',
          50: '#93B9D0',
          100: '#85B0CA',
          200: '#689DBD',
          300: '#4D8BB0',
          400: '#407493',
          500: '#345E77',
          600: '#233F50',
          700: '#122029',
          800: '#010102',
          900: '#000000',
          950: '#000000'
        },
        aqua: {
          DEFAULT: '#A4C6DA',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FBFDFD',
          300: '#DEEAF2',
          400: '#C1D8E6',
          500: '#A4C6DA',
          600: '#7CADCA',
          700: '#5494BA',
          800: '#3E7798',
          900: '#2E5770',
          950: '#25485C'
        }
      }
    }
  },
  plugins: []
};
