import React, { useEffect } from "react";

const RedirectToGoogleDrive = ({ folderUrl }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = folderUrl;
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [folderUrl]);

  const pdfURL = "/GOVERNMENT CONTROL OF DATA VS.pdf";

  return (
    <div>
      <div className="grid h-screen px-4 place-content-center bg-base-200">
        <div className="text-center">
          <h1 className="font-black text-gray-700 text-9xl">202</h1>

          <p className="text-2xl font-bold tracking-tight text-gray-500 sm:text-4xl">
            Hang Tight
          </p>

          <p className="mt-4 text-gray-400">
            Incase the redirect fails click below
          </p>

          <a
            href={folderUrl}
            className="mt-8 btn btn-primary hover:bg-primary-700 focus:ring-primary-500 focus:ring-offset-primary-200 focus:ring-2 focus:ring-offset-2"
          >
            Download
          </a>
          <a
            href={pdfURL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 font-bold btn btn-secondary hover:bg-primary-700 focus:ring-primary-500 focus:ring-offset-primary-200 focus:ring-2 focus:ring-offset-2"
          >
            PDF ver
          </a>
        </div>
      </div>
    </div>
  );
};

export default RedirectToGoogleDrive;
