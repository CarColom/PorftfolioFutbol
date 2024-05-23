/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Libre-Baskerville': ['Libre Baskerville', 'serif'],
        'allura': ['Allura', 'cursive'],
      },
      colors: {
        'dark-green': '#013220',
      },
    },
  },
  plugins: [],
}
