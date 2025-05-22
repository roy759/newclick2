import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, delay = 0 }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col border border-gray-100 hover:border-orange-200"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="p-8 flex flex-col h-full">
        <div className="mb-6 bg-orange-50 p-4 rounded-xl w-fit group-hover:bg-orange-100 transition-colors duration-300">
          {icon}
        </div>
        
        <h4 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">
          {title}
        </h4>
        
        <p className="text-gray-600 mb-6 flex-grow">
          {description}
        </p>
        
        <div className="border-t border-gray-100 pt-6 mt-auto">
          <p className="font-medium text-navy-900 mb-4">Key Features:</p>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <svg className="h-4 w-4 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-auto">
        <div className="h-1 w-0 group-hover:w-full bg-orange-500 transition-all duration-300"></div>
      </div>
    </div>
  );
};

export default ServiceCard;