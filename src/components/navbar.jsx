import { useState } from "react";
import { lenis } from "../main.jsx"; // Adjust the import path as necessary
import Headroom from "react-headroom";

function handleScrollTo(event, targetId, setDropdownOpen) {
	event.preventDefault();
	const targetElement = document.getElementById(targetId);
	if (targetElement) {
		lenis.scrollTo(targetElement);
		setDropdownOpen(false); // Close the dropdown after scrolling
	}
}

const Navbar = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	return (
		<Headroom
			style={{
				webkitTransition: "all .5s ease-in-out",
				mozTransition: "all .5s ease-in-out",
				oTransition: "all .5s ease-in-out",
				transition: "all .5s ease-in-out",
			}}
		>
			<nav className="navbar bg-base-300">
				<div className="flex-1">
					<a className="ml-2 text-3xl underline special" href="/">
						Whirl
					</a>
				</div>
				<div className="flex-none">
					<ul className="px-1 menu menu-horizontal">
						<li>
							<button
								type="button"
								className="text-lg transition-colors duration-300 hover:bg-transparent hover:text-accent"
								href="#about"
								onClick={(e) => handleScrollTo(e, "about", setDropdownOpen)}
							>
								About
							</button>
						</li>
						<li>
							<details
								open={dropdownOpen}
								onToggle={(e) => setDropdownOpen(e.target.open)}
							>
								<summary
									className="text-lg transition-colors duration-300 hover:bg-transparent hover:text-accent"
									onClick={() => setDropdownOpen(dropdownOpen)}
									onKeyUp={(e) => {
										setDropdownOpen(e.key === "Enter" ? false : dropdownOpen);
									}}
								>
									Contact
								</summary>
								<ul className="p-4 rounded-t-none bg-base-100">
									<li>
										<button
											type="button"
											onClick={(e) =>
												handleScrollTo(e, "contact", setDropdownOpen)
											}
											className="text-base hover:bg-transparent hover:text-accent"
											href="#contact"
										>
											Message
										</button>
									</li>
									<li>
										<a
											className="text-base hover:bg-transparent hover:underline"
											href="https://discord.com/users/808332105108553759"
											target="_blank"
											rel="noreferrer"
											onClick={() => setDropdownOpen(false)}
										>
											Discord
										</a>
									</li>
								</ul>
							</details>
						</li>
					</ul>
				</div>
			</nav>
		</Headroom>
	);
};

export default Navbar;
