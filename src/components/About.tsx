import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import SectionTitle from './common/SectionTitle';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';

interface StatItemProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  delay: number;
  isVisible: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, icon, delay, isVisible }) => {
  return (
    <div 
      className={`flex flex-col items-center transform transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay * 150}ms` }}
    >
      <div className="text-yellow-500 mb-2">
        {icon}
      </div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-gray-500">{label}</div>
    </div>
  );
};

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const stats = [
    {
      value: "500+",
      label: "Projects Completed",
      icon: <CheckCircle size={32} />
    },
    {
      value: "20+",
      label: "Years Experience",
      icon: <Award size={32} />
    },
    {
      value: "50+",
      label: "Team Members",
      icon: <Users size={32} />
    },
    {
      value: "98%",
      label: "On-time Completion",
      icon: <Clock size={32} />
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="About Us"
          subtitle="Our Story"
          description="Learn about our team and our commitment to excellence"
          isVisible={isInView}
        />

        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Image */}
          <div 
            className={`lg:w-1/2 transform transition-all duration-700 ${
              isInView 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-500 z-0"></div>
              <img 
                src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team at work" 
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>

          {/* Content */}
          <div 
            className={`lg:w-1/2 transform transition-all duration-700 ${
              isInView 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">Transforming Houses into Dream Homes Since 2004</h3>
            <p className="text-gray-600 mb-6">
              At Home Transformations, we believe that everyone deserves to live in a space that reflects their personality and meets their needs. Our journey began when our founder, Michael Reynolds, recognized the need for a renovation company that truly understood the dreams and aspirations of homeowners.
            </p>
            <p className="text-gray-600 mb-6">
              What started as a small team of dedicated craftsmen has grown into a full-service home transformation company with over 50 skilled professionals. Our team includes interior designers, carpenters, painters, electricians, plumbers, and project managers who work together seamlessly to bring your vision to life.
            </p>
            <p className="text-gray-600 mb-6">
              We take pride in our attention to detail, commitment to quality, and adherence to schedules and budgets. Our goal is not just to meet your expectations but to exceed them, creating spaces that inspire and delight.
            </p>
            <div className="flex gap-4 mt-8">
              <a 
                href="#contact" 
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-3 px-6 rounded-md transition-colors duration-300"
              >
                Contact Us
              </a>
              <a 
                href="#testimonials" 
                className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 font-medium py-3 px-6 rounded-md transition-colors duration-300"
              >
                Read Testimonials
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              delay={index}
              isVisible={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;