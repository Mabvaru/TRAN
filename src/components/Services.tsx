import React, { useRef } from 'react';
import { 
  Hammer, PaintBucket, Sofa, Thermometer, 
  Paintbrush, LampFloor, CircuitBoard, Wrench 
} from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import SectionTitle from './common/SectionTitle';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  isVisible: boolean;
}

const Service: React.FC<ServiceProps> = ({ 
  title, 
  description, 
  icon, 
  delay, 
  isVisible 
}) => {
  return (
    <div 
      className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ 
        transitionDelay: `${delay * 150}ms`,
        transitionProperty: 'all' 
      }}
    >
      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-yellow-500 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-4">
        <a 
          href="#contact" 
          className="text-yellow-500 font-medium inline-flex items-center group-hover:text-yellow-600 transition-colors"
        >
          Learn More
          <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const services = [
    {
      title: "Renovation & Remodeling",
      description: "Complete home renovation services tailored to transform your living spaces into beautiful, functional areas.",
      icon: <Hammer size={28} />
    },
    {
      title: "Interior Painting",
      description: "Professional interior painting services using premium quality paints and techniques for flawless finishes.",
      icon: <PaintBucket size={28} />
    },
    {
      title: "Furniture Restoration",
      description: "Breathe new life into your cherished furniture pieces with our expert restoration services.",
      icon: <Sofa size={28} />
    },
    {
      title: "Climate Control Systems",
      description: "Installation and maintenance of energy-efficient heating and cooling systems for your home.",
      icon: <Thermometer size={28} />
    },
    {
      title: "Exterior Finishing",
      description: "Transform your home's exterior with our professional painting and finishing services.",
      icon: <Paintbrush size={28} />
    },
    {
      title: "Lighting Design",
      description: "Enhance your home's ambiance with custom lighting solutions designed for style and functionality.",
      icon: <LampFloor size={28} />
    },
    {
      title: "Electrical Upgrades",
      description: "Comprehensive electrical system upgrades to improve safety and efficiency in your home.",
      icon: <CircuitBoard size={28} />
    },
    {
      title: "Plumbing Solutions",
      description: "Expert plumbing services from repairs to complete bathroom and kitchen renovations.",
      icon: <Wrench size={28} />
    }
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-pattern opacity-30"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '-10s' }}></div>

      <div className="container mx-auto px-4 relative">
        <SectionTitle
          title="Our Services"
          subtitle="What We Offer"
          description="We provide comprehensive home transformation services to bring your vision to life"
          isVisible={isInView}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index}
              isVisible={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;