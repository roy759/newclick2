import React, { useState, useEffect } from 'react';
import { ArrowRight, LineChart, Users, Search, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const services = ["Google Ads", "Social Media Growth", "SEO Experts", "Website Development"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTypewriterIndex((prev) => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
  id="hero"
  className="relative min-h-screen flex items-center pt-16 bg-black"
>
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src="pics/121602-724710304.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Optional Dark Overlay */}
  <div className="absolute inset-0 bg-black/50 z-10" />

<section></section>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3Atb3BhY2l0eT0iMC4wNSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1vcGFjaXR5PSIwLjEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0dGVybiBpZD0iYyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxLjUiIGZpbGw9InVybCgjZykiLz48L3BhdHRlcm4+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNjKSIvPjwvc3ZnPg==')] opacity-10"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <div 
            className="mb-8 inline-block py-1 px-3 bg-secondary-500 rounded-full text-white font-medium"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Digital Marketing Agency
          </div>
          
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Skyrocket Your Brand with Click N Flickz
          </h1>
          
          <p 
            className="text-xl text-primary-100 mb-8"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            We grow your business using targeted ads, SEO, and smart design.
          </p>
          
          <div className="h-12 mb-8">
            <h2 
              className="text-2xl text-secondary-300 font-semibold flex items-center"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <span className="mr-3">Experts in:</span>
              <span key={typewriterIndex} className="animate-fadeIn">
                {services[typewriterIndex]}
              </span>
            </h2>
          </div>
          
          <div 
            className="flex flex-col sm:flex-row gap-4"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <a 
              href="#contact" 
              className="px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white font-bold rounded-full transition-all duration-300 text-center flex items-center justify-center"
            >
              Call Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 bg-transparent hover:bg-white/10 border border-white text-white font-bold rounded-full transition-all duration-300 text-center"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="hidden lg:block absolute right-10 top-1/3">
          <div className="relative">
            <div className="absolute -top-16 -left-20 bg-primary-800/80 p-4 rounded-2xl shadow-lg animate-float-slow">
              <LineChart size={40} className="text-secondary-400" />
            </div>
            <div className="absolute top-20 -left-10 bg-primary-800/80 p-4 rounded-2xl shadow-lg animate-float">
              <Users size={40} className="text-secondary-400" />
            </div>
            <div className="absolute top-0 left-20 bg-primary-800/80 p-4 rounded-2xl shadow-lg animate-float-alt">
              <Search size={40} className="text-primary-300" />
            </div>
            <div className="absolute top-32 left-10 bg-primary-800/80 p-4 rounded-2xl shadow-lg animate-float-slow">
              <Globe size={40} className="text-secondary-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-scrollDown"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;