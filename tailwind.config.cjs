/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:"Poppins",
    },
    container: {
      padding:{
        DEFAULT:"1.5rem",
        lg:"3rem"
      }
    },
    screens: {
      sm: "640px",
      md:"768px",
      lg:"1024px",
      xl:"1280px"
    }
  },
  plugins: [],
}
