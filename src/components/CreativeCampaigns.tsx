import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Campaign {
  title: string;
  description: string;
  image: string;
  stats: {
    label: string;
    value: string;
  }[];
}

const CreativeCampaigns: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const campaigns: Campaign[] = [
    {
      title: "Tribute to the King",
      description: "Social media campaign",
      image: "public/pics/vk1.jpg",
      stats: [
        { label: "Engagement Rate", value: "12.5%" },
        { label: "Reach", value: "1M+" },
        { label: "ROI", value: "320%" }
      ]
    },
    {
      title: "Celebrating the Birthday of The Icon Satyajit Ray",
      description: "Social media campaign",
      image: "/pics/birth anniversary Satyajit Ray 2.jpg",
      stats: [
        { label: "Lead Quality", value: "92%" },
        { label: "Conversion Rate", value: "8.3%" },
        { label: "Cost per Lead", value: "$42" }
      ]
    },
    {
      title: "Sarawati Puja",
      description: "Social media campaign",
      image: "/pics/office fest saraswati puja.jpg",
      stats: [
        { label: "Store Visits", value: "+150%" },
        { label: "ROAS", value: "4.2x" },
        { label: "New Customers", value: "1,200+" }
      ]
    },
    {
      title: "Buddha",
      description: "Social media campaign",
      image: "/pics/buddha 2.jpg",
      stats: [
        { label: "Store Visits", value: "+150%" },
        { label: "ROAS", value: "4.2x" },
        { label: "New Customers", value: "1,200+" }
      ]
    },
    {
      title: "Honoring the Brave: Kashmir Attack Campaign",
      description: "Social media campaign",
      image: "/pics/kashmir attack 1.jpg",
      stats: [
        { label: "Store Visits", value: "+150%" },
        { label: "ROAS", value: "4.2x" },
        { label: "New Customers", value: "1,200+" }
      ]
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="campaigns" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">Creative Campaigns</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Creations</h3>
          <p className="text-gray-700 text-lg">
            Explore some of our most successful digital marketing campaigns and their impressive results.
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
            {campaigns.map((campaign, index) => (
              <div 
                key={index}
                className="flex-none w-96 bg-white rounded-xl shadow-lg overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-144">
                  <img 
                    src={campaign.image} 
                    alt={campaign.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-xl font-bold text-white mb-1">{campaign.title}</h4>
                    <p className="text-white/80 text-sm">{campaign.description}</p>
                  </div>
                </div>
                {/* <div className="p-6">
                  <div className="grid grid-cols-3 gap-4">
                    {campaign.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <p className="text-2xl font-bold text-primary-600">{stat.value}</p>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>*/}
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

export default CreativeCampaigns;