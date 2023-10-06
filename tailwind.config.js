/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "site-bg": "#DEDDDD",
        primary: "#666465",
        secondary: "#c84d5e",
        tertiary: "#41af9b",
        dark: "#363148",
      },
    },
  },
  plugins: [],
};

