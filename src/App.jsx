import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Contactform from "./components/contactform";
import Errorpage from "./components/error";
import RedirectToGoogleDrive from "./components/pptHistory";
import Footer from "./components/footer";
import Headroom from "react-headroom";
import Blog from "./components/blog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "animate.css/animate.compat.css";
import "./App.css";

function App() {
  const drivelink =
    "https://1drv.ms/p/c/749e4138a9a3feb3/ESN9iBILYJpNtPsr1paDqd8BcicQmVhn0o3dY_J5LT937w?e=Z2sfbR";
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
                  <section id="hero">
                    <Hero />
                  </section>
                  <section id="about">
                    <About />
                  </section>
                  <section id="contact">
                    <Contactform />
                  </section>
                  <footer>
                    <Footer />
                  </footer>
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
            <Route path="/blog/:blogId " element={<Blog />} />
            <Route path="*" element={<Errorpage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
