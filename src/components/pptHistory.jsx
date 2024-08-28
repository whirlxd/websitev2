import React, { useEffect } from 'react';

const RedirectToGoogleDrive = ({ folderUrl }) => {
  useEffect(() => {
    window.location.href = folderUrl;
  }, [folderUrl]);

  return (
    <div>
    <div class="grid h-screen place-content-center bg-base-200 px-4">
      <div class="text-center">
        <h1 class="text-9xl font-black text-gray-200">202</h1>

        <p class="text-2xl font-bold tracking-tight text-gray-500 sm:text-4xl">
          Hang Tight
        </p>

        <p class="mt-4 text-gray-400">Incase the redirect fails click below</p>

        <a
          href={folderUrl}
          class="btn btn-accent mt-8 hover:bg-primary-700 focus:ring-primary-500 focus:ring-offset-primary-200 focus:ring-2 focus:ring-offset-2"
        >
          Download
        </a>
      </div>
    </div>
  </div>
  )
};

export default RedirectToGoogleDrive;
