import React from "react";

const navbar = () => {
  const [isdark, setIsdark] = React.useState(
    JSON.parse(localStorage.getItem("isdark"))
  );
  React.useEffect(() => {
    localStorage.setItem("isdark", JSON.stringify(isdark));
  }, [isdark]);
  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="flex-1">
          <a
            className="ml-2 text-2xl underline special cursor-crosshair "
            href="/"
          >
            Whirl
          </a>
        </div>

        <div className="flex-none">
          <ul className="px-1 menu menu-horizontal">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a target="_blank" href="https://itp.whirlxd.xyz">
                iTp
              </a>
            </li>
            <li>
              <details>
                <summary>Contact</summary>
                <ul className="p-2 rounded-t-none bg-base-100">
                  <li>
                    <a href="/contact">Message</a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href=" https://discordapp.com/users/808332105108553759"
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

export default navbar;
