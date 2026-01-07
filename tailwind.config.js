const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
         fontFamily: {
        outfit: ['"Outfit"', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}

