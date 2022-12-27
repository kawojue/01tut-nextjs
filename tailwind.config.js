/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.jsx', './components/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        cabin: ['Cabin', 'sans-serif']
      },
      colors: {
        "pry-clr-0": "rgb(245, 248, 240)"
      }
    },
  },
  plugins: [],
}
