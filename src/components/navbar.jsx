import React from "react";

const navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl" href="/">
            Whirl
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <details>
                <summary>Contact</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <a href="/contact">Message</a>
                  </li>
                  <li>
                    <a href="mailto:ninja21official@gmail.com">Mail</a>
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
