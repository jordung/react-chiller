/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00BCD4",
        secondary: "#a12c34",
        tertiary: "#99a0a3",
        border: "#1a2e35",
        background: "#ffffff",
      },
    },
  },
  plugins: [],
};
