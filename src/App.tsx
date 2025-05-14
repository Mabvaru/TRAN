import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AnimatePresence } from './components/animations/AnimatePresence';

function App() {
  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      <Navbar />
      <AnimatePresence>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </AnimatePresence>
    </div>
  );
}

export default App;