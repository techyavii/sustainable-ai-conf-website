
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
          <div className="max-w-7xl px-4 ">
            <div className="neo-h3 mb-1 text-white max-md:text-base md:text-3xl">
              International Conference on Artificial Intelligence for Sustainable Development
            </div>
            <div className="neo-h3 mb-2 text-white max-md:text-base md:text-3xl">(ICAISD-2025)</div>
            <div className="neo-body font-semibold text-white max-md:text-base md:text-2xl">
              October 25-26th, 2025 | Mode: ONLINE (ZOOM)
            </div>
            
            {/* Logos Section */}
            <div className="flex justify-center items-center gap-4 md:gap-8 mt-4">
              <img 
                src="/lovable-uploads/3e93bd98-669b-4b27-930f-31e35dc847ed.png" 
                alt="AdroidCMS" 
                className="h-8 md:h-12 object-contain"
              />
              <img 
                src="/lovable-uploads/4f5151ec-89e7-409b-9e96-54d75e64c96d.png" 
                alt="Adroid" 
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
    </div>
  );
};

export default Banner;
