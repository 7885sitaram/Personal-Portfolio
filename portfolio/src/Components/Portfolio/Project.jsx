import { useState, useEffect } from 'react';

const Project = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    // Check on mount
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      setIsClicked(!isClicked);
    }
  };

  // Determine if buttons should be visible
  const showButtons = isMobile ? isClicked : true;

  return (
    <div 
      className="relative group rounded-xl overflow-hidden shadow-xl w-full md:max-w-sm mx-auto h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px] bg-gray-900 transition-all duration-300 border-3 border-[#20f6a733]"
      onClick={handleClick}
    >
      {/* Background Image */}
      <img
        src={props.img}
        alt="Project"
        className="w-full h-full object-fill md:object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      {/* Project Info */}
      <div className="absolute bottom-4 left-4 right-4 text-white z-20">
        <h3 className="text-base sm:text-lg font-bold">{props.name}</h3>
        <p className="text-xs sm:text-sm text-green-400">{props.type}</p>
      </div>

      {/* Action Buttons */}
      <div className={`absolute inset-0 flex items-center justify-center ${isMobile ? (isClicked ? 'opacity-100' : 'opacity-0') : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-500 z-30`}>
        <div className="flex space-x-4">
          <a
            href={props.code}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 bg-green-500 text-white rounded-full shadow-md ${isMobile ? (isClicked ? 'scale-100' : 'scale-0') : 'scale-0 group-hover:scale-100'} transition-transform duration-300`}
            onClick={(e) => e.stopPropagation()} // Prevent click from bubbling to parent
          >
            <i className="fa-solid fa-code"></i>
          </a>
          <a
            href={props.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 bg-green-500 text-white rounded-full shadow-md ${isMobile ? (isClicked ? 'scale-100' : 'scale-0') : 'scale-0 group-hover:scale-100'} transition-transform duration-300 delay-100`}
            onClick={(e) => e.stopPropagation()} // Prevent click from bubbling to parent
          >
            <i className="fa-solid fa-link"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;