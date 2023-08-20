/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat-Regular", "sans-serif"],
        "montserrat-bold": ["Montserrat-Bold", "sans-serif"],
        raleway: ["Raleway-Regular", "sans-serif"],
        "raleway-bold": ["Raleway-Bold", "sans-serif"],
      },
      colors: {
        "background-cream": "#F1FAEE",
        "shadow-color": "rgb(165 165 165 / 40%)",
        "example-white": "#fff",
        "example-black": "#333",
        "example-link": "#1ea7fd",
        "example-tip": "#66bf3c",
        "example-bg-svg": "#1ea7fd",
      },
    },
  },
  plugins: [],
};
