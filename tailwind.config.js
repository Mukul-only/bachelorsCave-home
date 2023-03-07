/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        darkestBlue: "#03045e",
        lightestBlue: "#caf0f8",
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata'],
        tiltWrap:['Tilt Warp', 'cursive']
      },
    },
  },
  plugins: [],
};
