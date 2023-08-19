/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        example: [
          "Nunito Sans",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        sami: "#000",
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
