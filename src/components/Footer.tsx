import React from 'react';
import { Rocket, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Rocket size={28} className="text-orange-500" />
              <span className="text-xl font-bold">Click N Flickz</span>
            </div>
            <p className="text-gray-900 mb-6">
              Your partner in digital growth. We help businesses of all sizes achieve their marketing goals with tailored strategies and data-driven results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-navy-800 hover:bg-navy-700 p-2 rounded-full transition-colors">
                <Facebook size={20} className="text-gray-900" />
              </a>
              <a href="#" className="bg-navy-800 hover:bg-navy-700 p-2 rounded-full transition-colors">
                <Twitter size={20} className="text-gray-900" />
              </a>
              <a href="#" className="bg-navy-800 hover:bg-navy-700 p-2 rounded-full transition-colors">
                <Instagram size={20} className="text-gray-900" />
              </a>
              <a href="#" className="bg-navy-800 hover:bg-navy-700 p-2 rounded-full transition-colors">
                <Linkedin size={20} className="text-gray-900" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h5 className="font-bold text-lg mb-6">Quick Links</h5>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-gray-900 hover:text-orange-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-900 hover:text-orange-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-900 hover:text-orange-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-900 hover:text-orange-400 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h5 className="font-bold text-lg mb-6">Our Services</h5>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-900 hover:text-orange-400 transition-colors">Social Media Management</a>
              </li>
              <li>
                <a href="#services" className="text-gray-900 hover:text-orange-400 transition-colors">Google Ads (PPC)</a>
              </li>
              <li>
                <a href="#services" className="text-gray-900 hover:text-orange-400 transition-colors">SEO Services</a>
              </li>
              <li>
                <a href="#services" className="text-gray-900 hover:text-orange-400 transition-colors">Website Development</a>
              </li>
              <li>
                <a href="#services" className="text-gray-900 hover:text-orange-400 transition-colors">Lead Generation</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h5 className="font-bold text-lg mb-6">Contact Information</h5>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-900">
                  PN, Priyanath Banerjee Rd <br />
                  Nabin Nagar, Nimta<br />
                  North Dumdum, Kolkata, West Bengal 700049
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-gray-900">+91 9674146627</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-gray-900">contact@clicknflickz.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-navy-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Click N Flickz. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;