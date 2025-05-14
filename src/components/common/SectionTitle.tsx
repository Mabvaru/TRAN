import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  description: string;
  isVisible: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  description,
  isVisible 
}) => {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <p 
        className={`text-yellow-500 uppercase font-semibold mb-2 transform transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {subtitle}
      </p>
      <h2 
        className={`text-3xl md:text-4xl font-bold mb-4 transform transition-all duration-700 delay-150 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {title}
      </h2>
      <p 
        className={`text-gray-600 transform transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;