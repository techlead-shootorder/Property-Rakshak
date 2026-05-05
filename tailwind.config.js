/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#0066b3',
          green: '#7ab800',
        }
      }
    },
  },
  plugins: [],
};