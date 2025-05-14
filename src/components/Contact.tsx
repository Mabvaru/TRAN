import React, { useRef, useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import SectionTitle from './common/SectionTitle';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  details: string | React.ReactNode;
  delay: number;
  isVisible: boolean;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, details, delay, isVisible }) => {
  return (
    <div 
      className={`flex items-start transform transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay * 150}ms` }}
    >
      <div className="text-yellow-500 mr-4 mt-1">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-lg mb-1">{title}</h4>
        <div className="text-gray-600">{details}</div>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Our Location",
      details: "123 Renovation Street, Transformation City, TC 12345"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone Number",
      details: "+1 (555) 123-4567"
    },
    {
      icon: <Mail size={24} />,
      title: "Email Address",
      details: "info@hometransformations.com"
    },
    {
      icon: <Clock size={24} />,
      title: "Working Hours",
      details: (
        <>
          <div>Monday - Friday: 8:00 AM - 6:00 PM</div>
          <div>Saturday: 9:00 AM - 3:00 PM</div>
          <div>Sunday: Closed</div>
        </>
      )
    }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Contact Us"
          subtitle="Get In Touch"
          description="Let's discuss your project and bring your vision to life"
          isVisible={isInView}
        />

        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Contact Form */}
          <div 
            className={`lg:w-1/2 transform transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
              {formSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                  Thank you for your message! We'll get back to you shortly.
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="service" className="block text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select 
                    id="service" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <option value="">Select a service</option>
                    <option value="renovation">Renovation & Remodeling</option>
                    <option value="painting">Interior Painting</option>
                    <option value="furniture">Furniture Restoration</option>
                    <option value="climate">Climate Control Systems</option>
                    <option value="exterior">Exterior Finishing</option>
                    <option value="lighting">Lighting Design</option>
                    <option value="electrical">Electrical Upgrades</option>
                    <option value="plumbing">Plumbing Solutions</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-3 px-6 rounded-md transition-colors duration-300 w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact Information */}
          <div 
            className={`lg:w-1/2 transform transition-all duration-700 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <ContactInfo
                    key={index}
                    icon={info.icon}
                    title={info.title}
                    details={info.details}
                    delay={index}
                    isVisible={isInView}
                  />
                ))}
              </div>
            </div>
            
            {/* Map */}
            <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2s!4v1560575084477!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Home Transformations Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;