import React from 'react';
import { Globe, LineChart, Search, Code, Target } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe className="h-10 w-10 text-orange-500" />,
      title: "Social Media Management",
      description: "Boost engagement and grow your audience on Instagram, Facebook, LinkedIn, and more platforms with targeted content strategies.",
      features: ["Content Creation", "Community Management", "Growth Strategies", "Analytics & Reporting"]
    },
    {
      icon: <LineChart className="h-10 w-10 text-orange-500" />,
      title: "Google Ads (PPC)",
      description: "ROI-focused campaigns for local & e-commerce businesses that drive qualified leads and sales to your business.",
      features: ["Search Campaigns", "Display Network", "Shopping Ads", "Remarketing"]
    },
    {
      icon: <Search className="h-10 w-10 text-orange-500" />,
      title: "SEO Services",
      description: "Climb search rankings with our comprehensive approach to technical SEO, content, and off-page optimization.",
      features: ["Keyword Research", "On-Page SEO", "Link Building", "Technical Audits"]
    },
    {
      icon: <Code className="h-10 w-10 text-orange-500" />,
      title: "Website Development",
      description: "Custom, responsive websites built for conversion, speed, and brand impact that drives business results.",
      features: ["WordPress", "Custom HTML/CSS", "E-commerce", "Landing Pages"]
    },
    {
      icon: <Target className="h-10 w-10 text-orange-500" />,
      title: "Lead Generation",
      description: "Create optimized funnels and high-conversion landing pages that turn visitors into qualified leads and customers.",
      features: ["Landing Pages", "Funnel Optimization", "Email Marketing", "Lead Nurturing"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">What We Do</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Our Digital Marketing Services</h3>
          <p className="text-gray-700 text-lg">
            We offer a full suite of digital marketing solutions to help your business reach its goals.
            Each service is tailored to your specific needs and objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
              features={service.features}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up">
          <a 
            href="#contact" 
            className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 inline-flex items-center"
          >
            Get a Custom Strategy
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;