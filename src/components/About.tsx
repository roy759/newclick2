import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image Side */}
          <div className="md:w-1/2" data-aos="fade-right">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="pics\team.jpg" 
                  alt="Marketing team working together" 
                  className="w-auto h-auto"
                />
              </div>
              {/* Stats Overlay */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-lg p-6 w-64">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-orange-100 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-black-500 text-sm">Average</p>
                    <p className="font-bold text-teal-900 text-lg">Growth</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-4xl font-bold text-teal-500">48%</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="md:w-1/2" data-aos="fade-left">
            <h2 className="text-sm font-semibold text-teal-900 uppercase tracking-wider mb-2">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">We Drive Real Results for Businesses Like Yours</h3>
            
            <p className="text-gray-700 text-lg mb-8">
              Clicknflickz, established in the year 2023, is a top provider of full-service digital marketing and social media management services. Based in Kolkata, India, the company specializes in digital marketing, social media management, Facebook advertising, YouTube campaigns, LinkedIn advertising, PPC campaigns, lead generation campaigns, website hosting, website design, Google Ads, Logo Design, PPC campaigns, and website design.
              We follow the core premise of modern company survival, which states that adaptability is essential to a successful business. We invite you to take a virtual tour of the worlds in which we live. We take great satisfaction in having served as a catalyst for hundreds of businesses in Eastern India that have prospered since 2023. Clicknflickz is Google Ads Partner, Google Workspace Partner agency as well.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-teal-500 mr-3" />
                <span className="text-navy-900 font-semibold">100+ Campaigns Run</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-teal-500 mr-3" />
                <span className="text-navy-900 font-semibold">50+ Website Projects</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-teal-500 mr-3" />
                <span className="text-navy-900 font-semibold">24/7 Client Support</span>
              </div>
            </div>
            
            <a 
              href="#services" 
              className="px-8 py-3 bg-navy-900 hover:bg-navy-800 text-white font-bold rounded-full transition-all duration-300 inline-flex items-center"
            >
              Our Services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;