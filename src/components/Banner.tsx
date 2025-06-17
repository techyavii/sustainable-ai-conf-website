
import React from 'react';

const Banner = () => {
  return (
    <div className="relative h-36 md:h-52 overflow-hidden">
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(/lovable-uploads/6e5e8c02-c4ef-4042-89af-a47b9f22a50a.png)` }}
      >
        <div className="absolute inset-0 bg-sustainable-green bg-opacity-80"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4">
            <div className="neo-h3 mb-1 text-white max-md:text-base">
              International Conference on Artificial Intelligence for Sustainable Development
            </div>
            <div className="neo-h3 mb-2 text-white max-md:text-base">(ICAISD-2025)</div>
            <div className="neo-body font-semibold text-white max-md:text-base">
              October 25-26th, 2025 | Mode: ONLINE (ZOOM)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
