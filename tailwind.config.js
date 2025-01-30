/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        celeste: "#BBE8F2",
        azulNavy: "#012840",
        rojoFuerte: "#F20C1F",
        rojoVino: "#A0162A",
        cafe:" #732509",
      },
    },
    fontFamily: {
      'bebas-neue': ['Bebas Neue', 'sans-serif'],
      'space-grotesk': ['Space Grotesk', 'sans-serif'],
    },
  },
  plugins: [],
};