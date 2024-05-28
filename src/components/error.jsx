import React from "react";

const errorpage = () => {
  return (
    <div>
      <div class="grid h-screen place-content-center bg-base-200 px-4">
        <div class="text-center">
          <h1 class="text-9xl font-black text-gray-200">404</h1>

          <p class="text-2xl font-bold tracking-tight text-gray-500 sm:text-4xl">
            Uh-oh!
          </p>

          <p class="mt-4 text-gray-400">We can't find that page.</p>

          <a
            href="/"
            class="btn btn-accent mt-8 hover:bg-primary-700 focus:ring-primary-500 focus:ring-offset-primary-200 focus:ring-2 focus:ring-offset-2"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </div>
  );
};
{
  /* <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3"></div> */
}
export default errorpage;
