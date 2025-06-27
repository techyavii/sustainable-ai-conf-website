

import React from 'react';

const Banner = () => {
  return (
    <div className="relative h-auto md:h-52 overflow-hidden">
      <div
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(/lovable-uploads/6e5e8c02-c4ef-4042-89af-a47b9f22a50a.png)`,
        }}
      >
        <div className="absolute inset-0 bg-sustainable-green bg-opacity-80"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between text-white py-6 max-w-full px-11 mx-auto h-full">
          
          {/* Left Logos (Adroid and Jaypee University) */}
          <div className="hidden md:flex items-center justify-start gap-4 w-1/3">
          <img
              src="/lovable-uploads/bd52a350-b560-47d3-b06a-0d4ba86d31ce.png"
              alt="Jaypee University Anoopshahr"
              className="h-8 md:h-20 object-contain"
            />
            <img
              src="/lovable-uploads/4f5151ec-89e7-409b-9e96-54d75e64c96d.png"
              alt="Adroid"
              className="h-8 md:h-12 object-contain"
            />
            
          </div>

          {/* Center Text */}
          <div className="flex flex-col items-center text-center w-full md:w-4/5">
            {/* Mobile logo section */}
            <div className="flex md:hidden items-center justify-center gap-4 mb-3 flex-wrap">
              <img
                src="/lovable-uploads/bd52a350-b560-47d3-b06a-0d4ba86d31ce.png"
                alt="Jaypee University Anoopshahr"
                className="h-8 object-contain"
              />
              <img
                src="/lovable-uploads/4f5151ec-89e7-409b-9e96-54d75e64c96d.png"
                alt="Adroid"
                className="h-8 object-contain"
              />
              
              <div className=''>
              <img
                src="/lovable-uploads/3e93bd98-669b-4b27-930f-31e35dc847ed.png"
                alt="AdroidCMS"
                className="h-8 object-contain"
              />
              </div>
              <img
                src="/lovable-uploads/61e25d68-1de4-48e1-9948-0a3b0003598d.png"
                alt="Adroid Conference Proceedings"
                className="h-8 object-contain"
              />
            </div>

            <div className="neo-h3 mb-1 text-white max-md:text-base md:text-3xl">
              International Conference on Artificial Intelligence for Sustainable Development
            </div>
            <div className="neo-h3 mb-2 text-white max-md:text-base md:text-3xl">(ICAISD-2025)</div>
            <div className="neo-body font-semibold text-white max-md:text-sm md:text-xl mb-1">
              October 25-26th, 2025 | Mode: HYBRID
            </div>
            <div className="neo-body font-semibold text-white max-md:text-xs md:text-lg">
              Organized by: Jaypee University Anoopshahr, UP, India
            </div>
          </div>

          {/* Right Logos */}
          <div className="hidden md:flex justify-end items-center gap-4 w-1/3">
            <img
              src="/lovable-uploads/3e93bd98-669b-4b27-930f-31e35dc847ed.png"
              alt="AdroidCMS"
              className="h-8 md:h-12 object-contain"
            />
            <img
              src="/lovable-uploads/61e25d68-1de4-48e1-9948-0a3b0003598d.png"
              alt="Adroid Conference Proceedings"
              className="h-8 md:h-12 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
