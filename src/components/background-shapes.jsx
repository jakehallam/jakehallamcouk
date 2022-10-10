import React from 'react';

const BackgroundShapes = () => (
  <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full bg-transparent z-0">
    <svg className="blob-1 absolute top-0 left-0 max-w-sm text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
      <path d="M462 150c32.8 20.8 33.9 85.4 18.1 134.2-15.8 48.8-48.4 81.8-81.3 110.5-32.8 28.6-65.8 53-111.4 65.6-45.6 12.6-103.8 13.5-143-15.2s-59.3-86.9-55.9-141.7c3.5-54.8 30.4-106.2 69.6-127 39.1-20.8 90.5-11.1 148.5-17.7S429.2 129.2 462 150z" className="fill-current" />
    </svg>

    <svg className="hidden md:block blob-2 absolute bottom-0 right-0 max-w-sm text-gray-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
      <path d="M462 150c32.8 20.8 33.9 85.4 18.1 134.2-15.8 48.8-48.4 81.8-81.3 110.5-32.8 28.6-65.8 53-111.4 65.6-45.6 12.6-103.8 13.5-143-15.2s-59.3-86.9-55.9-141.7c3.5-54.8 30.4-106.2 69.6-127 39.1-20.8 90.5-11.1 148.5-17.7S429.2 129.2 462 150z" className="fill-current" />
    </svg>
  </div>
);

export default BackgroundShapes;
