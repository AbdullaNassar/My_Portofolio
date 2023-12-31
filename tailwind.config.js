/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0E302F",
        primaryDark: "#c18215",
        secondary: "#386261",
        yellow: "#FCB336",
        yellowlight: "#FECD1A",
        yellow3: "#ffff20",
        mostafa: "#FDCB9E",
        mostafaSecond: "#6E7274",
        primary2: "#195351",
        primaryLight: "#1e5654",
        skill: "#1D252A",
      },

      gridTemplateColumns: {
        edu: "auto 1fr",
        skill: "repeat(auto-fit, minmax(270px,1fr))",
        project: "repeat(auto-fit,minmax(350px,1fr))",
      },

      animation: {
        "fade-in-right":
          "fade-in-right 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;",
        "tracking-in-expand":
          "tracking-in-expand 0.7s 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;",
        "bounce-in-top": "bounce-in-top 1.1s 2s both",
        "fade-in":
          "fade-in 1.2s 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;",
      },
    },
  },
  plugins: [],
};

