/** @type {import('tailwindcss').Config} */
import daisyui from "./node_modules/daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#6bbfc7",
          secondary: "#4f545f",
          accent: "#f817b1",
          neutral: "#1b1e32",
          "base-100": "#10121e",
        },
        dark: {
          primary: "#6bbfc7",
          secondary: "#4f545f",
          accent: "#f817b1",
          neutral: "#1b1e32",
          "base-100": "#10121e",
        },
      },
    ],
  },
};
