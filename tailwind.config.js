/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#6bbfc7",
          secondary: "#121723",
          accent: "#f817b1",
          neutral: "#1b1e32",
          "base-100": "#10121e",
        },
        dark: {
          primary: "#6bbfc7",
          secondary: "#121723",
          accent: "#f817b1",
          neutral: "#1b1e32",
          "base-100": "#10121e",
        },
      },
    ],
  },
};
