/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#de2c4c",
        secondary: "#fb923c",
      },

      fontFamily:{
        poppins:["Poppins", "sans-serif"],
        averia:["Averia Serif Libre", "serif"]
      },

      container:{
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          "2xl": "6rem",
        },
      }
    },
  },
  plugins: [],
}
