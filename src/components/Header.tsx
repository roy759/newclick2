import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black shadow-lg py-3' 
          : 'bg-gradient-to-r from-black via-teal-1000 to black shadow-lg py-10'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-4">
            <img
              src="/pics/logo_2.0-removebg-preview (1).png"
              alt="Click N Flickz Logo"
              className="h-20 w-auto object-contain" 
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 pt-8">
            <a href="#hero" className="text-white hover:text-secondary-300 font-medium transition-colors">
              Home
            </a>
            <a href="#about" className="text-white hover:text-secondary-300 font-medium transition-colors">
              About
            </a>
            <a href="#services" className="text-white hover:text-secondary-300 font-medium transition-colors">
              Services
            </a>
            <a href="#team" className="text-white hover:text-secondary-300 font-medium transition-colors">
              Our Team
            </a>
            <a href="#campaigns" className="text-white hover:text-secondary-300 font-medium transition-colors">
              Campaigns
            </a>
            <a href="#work" className="text-white hover:text-secondary-300 font-medium transition-colors">
              Our Work
            </a>
            <a href="#testimonials" className="text-white hover:text-secondary-300 font-medium transition-colors">
              Client Reviews
            </a>
            <a href="#contact" className="text-white hover:text-secondary-300 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="mt-4 md:hidden py-4 px-2 bg-primary-800 rounded-lg">
            <div className="flex flex-col space-y-4">
              <a 
                href="#hero" 
                className="text-white hover:text-secondary-300 font-medium transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-white hover:text-secondary-300 font-medium transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#services" 
                className="text-white hover:text-secondary-300 font-medium transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#team" 
                className="text-white hover:text-secondary-300 font-medium transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Team
              </a>
              <a 
                href="#campaigns" 
                className="text-white hover:text-secondary-300 font-medium transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Campaigns
              </a>
              <a 
                href="#work" 
                className="text-white hover:text-secondary-300 font-medium transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Work
              </a>
              <a 
                href="#testimonials" 
                className="text-white hover:text-secondary-300 font-medium transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Client Reviews
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-secondary-300 font-medium transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a 
                href="#contact" 
                className="bg-secondary-500 hover:bg-secondary-600 text-white px-5 py-2 rounded-full font-medium transition-colors text-center mx-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Free Strategy Call
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;