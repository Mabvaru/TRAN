import React, { useState, useEffect, useRef } from 'react';

interface AnimatePresenceProps {
  children: React.ReactNode;
}

export const AnimatePresence: React.FC<AnimatePresenceProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      if (loaderRef.current) {
        loaderRef.current.classList.add('opacity-0');
        setTimeout(() => {
          if (loaderRef.current) {
            loaderRef.current.style.display = 'none';
          }
        }, 1000);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div 
        ref={loaderRef}
        className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center transition-opacity duration-1000"
      >
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-t-4 border-yellow-500 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-r-4 border-yellow-400 rounded-full animate-spin animate-reverse"></div>
          <div className="absolute inset-4 border-b-4 border-yellow-300 rounded-full animate-spin"></div>
        </div>
        <h2 className="mt-6 text-xl font-bold">Home Transformations</h2>
        <p className="text-gray-500 mt-2">Building dreams, one space at a time</p>
      </div>
      <div 
        className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        {children}
      </div>
    </>
  );
};