/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'aquire': ['AquireBold', 'sans-serif'],
      },
      colors: {
        green: {
          500: '#00ff00',
          600: '#00cc00',
          700: '#009900',
        },
        red: {
          500: '#ff1a1a',
          600: '#ff0000',
          700: '#e60000',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};