import React, { useState, useEffect } from 'react';
import { Home, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;

  const linkClasses = `relative font-medium ${
    isScrolled ? 'text-gray-800' : 'text-white'
  } hover:text-yellow-500 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-yellow-500 after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left`;

  const mobileMenuClasses = `fixed top-0 right-0 h-full w-full sm:w-2/3 md:w-1/2 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          className="flex items-center gap-2"
        >
          <Home 
            size={28} 
            className={`${isScrolled ? 'text-yellow-500' : 'text-yellow-400'}`}
          />
          <span 
            className={`text-xl font-bold ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            Home Transformations
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className={linkClasses}>Home</a>
          <a href="#services" className={linkClasses}>Services</a>
          <a href="#portfolio" className={linkClasses}>Portfolio</a>
          <a href="#about" className={linkClasses}>About Us</a>
          <a href="#testimonials" className={linkClasses}>Testimonials</a>
          <a href="#contact" className={linkClasses}>Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu 
            size={24} 
            className={`${isScrolled ? 'text-gray-800' : 'text-white'}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={mobileMenuClasses}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <a href="#" className="flex items-center gap-2">
              <Home size={28} className="text-yellow-500" />
              <span className="text-xl font-bold">Home Transformations</span>
            </a>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="focus:outline-none"
              aria-label="Close Menu"
            >
              <X size={24} className="text-gray-800" />
            </button>
          </div>
          <div className="flex flex-col space-y-6">
            <a 
              href="#home" 
              className="text-gray-800 font-medium hover:text-yellow-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#services" 
              className="text-gray-800 font-medium hover:text-yellow-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#portfolio" 
              className="text-gray-800 font-medium hover:text-yellow-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </a>
            <a 
              href="#about" 
              className="text-gray-800 font-medium hover:text-yellow-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-800 font-medium hover:text-yellow-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="text-gray-800 font-medium hover:text-yellow-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;