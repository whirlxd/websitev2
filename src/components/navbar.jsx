import { lenis } from "../main.jsx"; // Adjust the import path as necessary

function handleScrollTo(event, targetId) {
  event.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    lenis.scrollTo(targetElement);
  }
}

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="ml-2 text-3xl underline special" href="/">
            Whirl
          </a>
        </div>
        <div className="flex-none">
          <ul className="px-1 menu menu-horizontal">
            <li>
              <a
                className="text-lg"
                href="#about"
                onClick={(e) => handleScrollTo(e, "about")}
              >
                About
              </a>
            </li>
            <li>
              <details>
                <summary className="text-lg">Contact</summary>
                <ul className="p-4 rounded-t-none bg-base-100">
                  <li>
                    <a
                      onClick={(e) => handleScrollTo(e, "contact")}
                      className="text-base"
                      href="#contact"
                    >
                      Message
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-base "
                      href="https://discord.com/users/808332105108553759"
                      target="_blank"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
