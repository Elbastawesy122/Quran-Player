/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tall': { 'raw': '(max-width: 800px)' },
        'maxsc': { 'raw': '(min-width: 801px)' },
      }
    }
  },
  plugins: [],
}

