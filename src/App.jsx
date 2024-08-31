import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Contactform from "./components/contactform";
import Errorpage from "./components/error";
import RedirectToGoogleDrive from "./components/pptHistory";
import Headroom from "react-headroom";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "animate.css/animate.compat.css";
import "./App.css";
import { Scrollbar } from "react-scrollbars-custom";
function App() {
  const drivelink =
    "https://drive.google.com/drive/folders/1C1azwQtYCyRwtwCSk6w0QGuW5yL6iCty?usp=sharing";
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Hero />
                </>
              }
            ></Route>
            <Route
              path="/about"
              element={
                <>
                  <Headroom
                    style={{
                      webkitTransition: "all .5s ease-in-out",
                      mozTransition: "all .5s ease-in-out",
                      oTransition: "all .5s ease-in-out",
                      transition: "all .5s ease-in-out",
                    }}
                  >
                    <Navbar />{" "}
                  </Headroom>{" "}
                  <About />
                </>
              }
            ></Route>
            <Route
              path="/contact"
              element={
                <>
                  <Navbar /> <Contactform />
                </>
              }
            ></Route>
            <Route
              path="/download"
              element={
                <>
                  <RedirectToGoogleDrive folderUrl={drivelink} />
                </>
              }
            ></Route>
            <Route
              path="/dl"
              element={
                <>
                  <RedirectToGoogleDrive folderUrl={drivelink} />
                </>
              }
            ></Route>
            <Route path="*" element={<Errorpage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
