// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Lenis from "@studio-freight/lenis";

// const lenis = new Lenis({
//   duration: 1.5,
//   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//   smooth: true,
// });
const lenis = new Lenis({
  duration: 1.4, // Longer duration for smoother scroll
  easing: (t) => 1 - Math.pow(1 - t, 3), // Ease-out cubic easing
  smooth: true, // Smooth scrolling
  syncTouch: true,
  gestureDirection: "both",
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
export { lenis };
