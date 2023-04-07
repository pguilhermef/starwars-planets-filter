/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        starwars: {
          yellow: '#FFE81F',
          red: '#EB212E',
        },
      },
    },
  },
  plugins: [],
};
