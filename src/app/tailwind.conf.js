// tailwind.config.js
const theming = require('tailwindcss-theming');

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',  
  plugins: [theming()],
};
