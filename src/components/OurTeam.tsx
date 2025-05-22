import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const OurTeam: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const teamMembers: TeamMember[] = [
    {
      name: "Amit Kritania",
      role: "Head Of Business Strategy",
      image: "pics/FB_IMG_1747941963914.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      image: "pics/welcome Soumyakanti.jpg"
    },
    {
      name: "Aniket Das",
      role: "Lead Strategist",
      image: "pics/PXL_20250205_134726542~2.jpg"
    },
    {
      name: "Soumyakanti Ghosh",
      role: "Social Media Marketer",
      image: ""
    },
    {
      name: "Emily Brown",
      role: "SEO Specialist",
      image: ""
    },
    {
      name: "Emily Brown",
      role: "SEO Specialist",
      image: ""
    },
    {
      name: "David Lee",
      role: "PPC Manager",
      image: ""
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">Our Team</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet the Experts</h3>
          <p className="text-gray-700 text-lg">
            Our talented team of digital marketing professionals is dedicated to helping your business grow.
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
            className="flex overflow-x-auto hide-scrollbar gap-6 py-8 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="flex-none w-64 bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="aspect-w-1 aspect-h-1 relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-primary-600">{member.role}</p>
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

export default OurTeam;