import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface WorkItem {
  title: string;
  category: string;
  image: string;
}

const OurWork: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const workItems: WorkItem[] = [
    {
      title: "Banner",
      category: "E-commerce Redesign",
      image: "/pics/revive fitness BANNER 1.jpg"
    },
    {
      title: "Brand Identity",
      category: "Branding",
      image: "/pics/euro kid barasat2.jpg"
    },
    {
      title: "Brand Identity",
      category: "Branding",
      image: "/pics/Roys Cafe 3.jpg"
    },
    {
      title: "Brand Identity",
      category: "Branding",
      image: "/pics/sn int3.jpg"
    },
    {
      title: "Brand Identity",
      category: "Branding",
      image: "/pics/monohari 1.jpg"
    },
    {
      title: "Social Media Campaign",
      category: "Digital Marketing",
      image: "/pics/Jeevan Arogya Hospital banner 8.1.jpg"
    },
    {
      title: "Brand Identity",
      category: "Branding",
      image: "/pics/abstract interior 4.1.jpg"
    },
    {
      title: "App Interface Design",
      category: "UI/UX",
      image: "/pics/golden spoon 1.jpg"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 500;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">Our Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Featured Projects</h3>
          <p className="text-gray-700 text-lg">
            Browse through our portfolio of creative designs and successful digital marketing campaigns.
          </p>
        </div>

        <div className="relative">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-primary-600" />
          </button>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto hide-scrollbar gap-6 py-8 px-4 scroll-smooth snap-x snap-mandator"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {workItems.map((item, index) => (
              <div 
                key={index}
                className="flex-none w-80 group relative overflow-hidden rounded-xl shadow-lg snap-start"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative w-full h-96">
                  <img 
                   src={item.image} 
                   alt={item.title}
                 className="w-full h-full object-cover"
                />
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
  
                <div className="absolute bottom-6 left-6 right-6 z-10">
                 <p className="text-yellow-400 text-sm mb-2">{item.category}</p>
                  <h4 className="text-xl font-bold text-white">{item.title}</h4>
               </div>
              </div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-primary-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurWork;