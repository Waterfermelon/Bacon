/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],  theme: {
    extend: {
      colors: {
        'baconBlue': '#008ed2',
        'baconYellow': '#fce416',
        'baconLightBlue': ' #00ade9'
      }
    },
  },
  plugins: [],
}

