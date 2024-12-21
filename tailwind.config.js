/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],  theme: {
    extend: {
      colors: {
        'baconBlue': '#008ed2',
        'baconDarkBlue': '#007dc3',
        'baconYellow': '#fce416',
        'baconLightBlue': '#00ade9'
      },

    },
  },
  plugins: [],
}
