import React, { useState, useEffect } from 'react';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Jennifer Thompson",
      position: "Marketing Director",
      company: "Altura Finance",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "Click N Flickz transformed our digital presence. Their strategic approach to our Google Ads campaign increased our qualified leads by 215% while reducing our cost per acquisition. I highly recommend their services!"
    },
    {
      name: "Mark Davidson",
      position: "CEO",
      company: "Vertex Solutions",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "After struggling with our SEO for years, Click N Flickz helped us achieve page one rankings for our most competitive keywords within just 4 months. Their team is responsive, transparent, and truly delivers results."
    },
    {
      name: "Sarah Johnson",
      position: "E-commerce Manager",
      company: "Urban Threads",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "The social media strategy Click N Flickz developed for us has completely transformed our online presence. Our engagement is up 300% and sales directly from social have increased by 150%. True professionals!"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">Reviews</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">What Our Clients Say</h3>
          <p className="text-gray-700 text-lg">
            Don't just take our word for it. Here's what our clients have to say about working with Click N Flickz.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute inset-0 flex items-center justify-between z-10 pointer-events-none">
            <div className="w-16 h-full bg-gradient-to-r from-gray-50 to-transparent"></div>
            <div className="w-16 h-full bg-gradient-to-l from-gray-50 to-transparent"></div>
          </div>
          
          {/* Testimonial Cards */}
          <div className="overflow-hidden py-8">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div 
                    className="bg-white rounded-xl shadow-lg p-8 md:p-10 relative"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    {/* Quote Icon */}
                    <div className="absolute top-8 right-8 text-orange-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
                      </svg>
                    </div>
                    
                    <p className="text-gray-700 text-lg mb-8 relative z-10">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center">
                      <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-navy-900">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.position}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === activeIndex ? 'bg-orange-500' : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;