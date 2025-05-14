import React from 'react';
import { Home, Instagram, Facebook, Twitter, Youtube, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Home size={24} className="text-yellow-500" />
              <span className="text-xl font-bold">Home Transformations</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming houses into dream homes with quality craftsmanship and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-yellow-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-yellow-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-yellow-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-yellow-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio" 
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#services" 
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Renovation & Remodeling
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Interior Painting
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Furniture Restoration
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Climate Control Systems
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-400 hover:text-yellow-500 transition-colors"
                >
                  Lighting Design
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for tips, news, and promotions.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800"
                  required
                />
                <button 
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-r-md transition-colors"
                  aria-label="Subscribe"
                >
                  <Mail size={20} />
                </button>
              </div>
            </form>
            <p className="text-gray-400 text-sm">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Home Transformations. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-600 text-gray-900 p-3 rounded-full shadow-lg transition-colors z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;