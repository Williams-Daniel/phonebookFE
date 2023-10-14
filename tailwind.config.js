/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens:{
        medium:{max:"760px"},
        small:{max:"340px"}
      }
    },
  },
  plugins: [],
}

