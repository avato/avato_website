/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "site-bg": "#cecbcc",
        primary: "#666465",
        secondary: "#c84d5e",
        tertiary: "#3b95bc",
        dark: "#363148",
      },
    },
  },
  plugins: [],
};

