/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // ou 'media' ou 'class'
  theme: {
    extend: {
      colors: {
        wine: {
          DEFAULT: "#8B0000",
          light: "#A52A2A",
          dark: "#640000",
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
