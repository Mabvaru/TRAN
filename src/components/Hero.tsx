import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(heroRef, { threshold: 0.1 });

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg"
          alt="Modern home interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <h1 
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transform transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Transform Your <span className="text-yellow-400">Home</span>
          <br />Into Your <span className="text-yellow-400">Dream Space</span>
        </h1>
        <p 
          className={`text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-8 transform transition-all duration-1000 delay-300 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          From concept to completion, we bring your vision to life with expert craftsmanship and attention to detail.
        </p>
        <div 
          className={`flex flex-col sm:flex-row justify-center gap-4 transform transition-all duration-1000 delay-500 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <a 
            href="#services" 
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-3 px-8 rounded-md transition-colors duration-300"
          >
            Our Services
          </a>
          <a 
            href="#contact" 
            className="bg-transparent hover:bg-white/10 text-white border-2 border-white hover:border-white/80 font-medium py-3 px-8 rounded-md transition-colors duration-300"
          >
            Get a Quote
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
      >
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center">
          <div className="w-1 h-3 bg-white mt-2 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;