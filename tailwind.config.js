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
      spacing: {
        128: "32rem",
      },
      colors: {
        darkestBlue: "rgb(0,0,0)",
        lightestBlue: "#caf0f8",
        matteBlue: "#023047",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        alata: ["Alata"],
        tiltWrap: ["Tilt Warp", "cursive"],
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};
