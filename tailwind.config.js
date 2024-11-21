/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "430px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#ff6900",
        secondary: "rgb(235,178,55)",
        black: "#151419",
        gray: "#878787",
        gray2: "#262626",
        gray3: "#1b1b1e",
        whiteCustom:"#DEDEDE"
      },
      fontFamily: {
        title: ["Orbitron", "sans-serif"],
        text: ["Funnel Display", "serif"],
        text2: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
