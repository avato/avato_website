/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "site-bg": "#DEDDDD",
        primary: "#666465",
        secondary: "#c84d5e",
        tertiary: "#88d0cd",
        dark: "#363148",
      },
    },
  },
  plugins: [],
};

