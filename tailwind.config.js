/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.jsx', './components/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        cabin: ['Cabin', 'sans-serif']
      }
    },
  },
  plugins: [],
}
