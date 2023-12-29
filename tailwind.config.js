/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0E302F",
        secondary: "#386261",
        yellow: "#FCB336",
        yellowlight: "#FECD1A",
        mostafa: "#FDCB9E",
        mostafaSecond: "#6E7274",
      },
    },
  },
  plugins: [],
};

