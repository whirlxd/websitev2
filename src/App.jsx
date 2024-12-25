import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Contactform from "./components/contactform";
import Errorpage from "./components/error";
import Footer from "./components/footer";
import Headroom from "react-headroom";
import Blog from "./components/blog";
import Infographic from "./components/infographic";
import { redirects } from "./redirects";
import RedirectTo from "./components/redirectTo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "animate.css/animate.compat.css";
import "./App.css";

function App() {
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
										<Infographic />

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
						/>
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
						/>
						<Route
							path="/contact"
							element={
								<>
									<Navbar /> <Contactform />
								</>
							}
						/>

						<Route path="/blog/:blogId" element={<Blog />} />
						<Route path="*" element={<Errorpage />} />
						{redirects.map(({ from, to, alt }) => (
							<Route
								key={from}
								path={from}
								element={<RedirectTo folderUrl={to} pdfURL={alt} />}
							/>
						))}
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
