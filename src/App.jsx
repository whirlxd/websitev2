import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Contactform from "./components/contactform";
import Errorpage from "./components/error";
import Headroom from "react-headroom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "animate.css/animate.compat.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar /> <Hero />
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
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
