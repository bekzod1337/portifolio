/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff6600", // Custom orange color
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "border-spin": "borderRotate 3s linear infinite",
      },
      keyframes: {
        borderRotate: {
          "0%": { borderColor: "rgb(59, 130, 246)" }, // Blue-500
          "25%": { borderColor: "rgb(96, 165, 250)" }, // Blue-400
          "50%": { borderColor: "rgb(147, 197, 253)" }, // Blue-300
          "75%": { borderColor: "rgb(59, 130, 246)" }, // Blue-500
          "100%": { borderColor: "rgb(96, 165, 250)" }, // Blue-400
        },
      },
    },
  },
  plugins: [],
};
