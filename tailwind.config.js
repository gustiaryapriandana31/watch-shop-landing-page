/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      screens: {
        sm: "400px",
        // => @media (min-width: 400px) { ... }

        md: "721px",
        // => @media (min-width: 700px) { ... }
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30 : "7.5rem",
        68: "17rem",
        76: "19rem",
        82: "20.5rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
        98: "24.5rem",
        100: "25rem",
        104: "26rem",
        120: "30rem",
        125: "31.25rem",
        130: "32.5rem",
        140: "35rem",
        160: "40rem",
        200: "50rem",
        240: "60rem",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        neue: ["Bebas Neue", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        "roboto-mono": ["Roboto Mono", "sans-serif"],
        audiowide: ["Audiowide", "sans-serif"],
        tenali: ["Tenali Ramakrishna", "sans-serif"],
      },
    },
  },
  plugins: [],
};

