import React, { useState } from 'react';
import { Send, MessageSquare, Phone, Mail, MapPin } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  business: string;
  budget: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    business: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after success message
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: '',
          email: '',
          business: '',
          budget: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-2">Contact Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Let's Plan Your Digital Growth</h3>
          <p className="text-gray-700 text-lg">
            Ready to take your business to the next level? Reach out to us for a free consultation
            and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-xl">
          {/* Contact Information */}
          <div className="lg:w-2/5 bg-navy-900 text-white p-8 md:p-12" data-aos="fade-right">
            <h4 className="text-2xl font-bold mb-6">Get in Touch</h4>
            <p className="text-gray-900 mb-8">
              Have questions about our services or want to discuss your project? 
              Contact us using the form or reach out directly through the following channels:
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-navy-800 p-3 rounded-lg mr-4">
                  <Phone className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p className="text-gray-800">+91 9674146627</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-navy-800 p-3 rounded-lg mr-4">
                  <Mail className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p className="text-gray-800">contact@clicknflickz.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-navy-800 p-3 rounded-lg mr-4">
                  <MapPin className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Office</p>
                  <p className="text-gray-800">PN, Priyanath Banerjee Rd <br />Nabin Nagar, Nimta<br />North Dumdum, Kolkata, West Bengal 700049</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <a 
                href="https://wa.me/9674146627?text=Hi%2C%20I%27m%20looking%20forward%20to%20connecting%20with%20your%20Company." target="_blank" 
                className="flex items-center text-white bg-green-600 hover:bg-green-700 py-3 px-6 rounded-lg font-medium transition-colors w-fit"
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                WhatsApp Inquiry
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:w-3/5 bg-white p-8 md:p-12" data-aos="fade-left">
            <h4 className="text-2xl font-bold text-navy-900 mb-6">Send Us a Message</h4>
            
            {submitSuccess ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 flex items-center">
                <svg className="h-12 w-12 text-green-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h5 className="font-bold text-lg">Message Sent Successfully!</h5>
                  <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-orange-200 focus:border-orange-500 outline-none transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-orange-200 focus:border-orange-500 outline-none transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="business" className="block text-gray-700 font-medium mb-2">Business Type</label>
                    <select
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-orange-200 focus:border-orange-500 outline-none transition-all"
                      required
                    >
                      <option value="">Select Business Type</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="local">Local Business</option>
                      <option value="saas">SaaS/Tech</option>
                      <option value="professional">Professional Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-gray-700 font-medium mb-2">Monthly Budget</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-orange-200 focus:border-orange-500 outline-none transition-all"
                      required
                    >
                      <option value="">Select Budget Range</option>
                      <option value="1000-2500">$1,000 - $2,500</option>
                      <option value="2500-5000">$2,500 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000+">$10,000+</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring focus:ring-orange-200 focus:border-orange-500 outline-none transition-all"
                    placeholder="Tell us about your project or goals..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-bold text-white flex items-center justify-center transition-all ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-orange-500 hover:bg-orange-600'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;