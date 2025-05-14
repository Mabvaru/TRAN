import React, { useRef, useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import SectionTitle from './common/SectionTitle';

interface PortfolioItemProps {
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  index: number;
  isVisible: boolean;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ 
  title, 
  category, 
  beforeImage, 
  afterImage,
  index,
  isVisible
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:-translate-y-2 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <div 
          className={`absolute inset-0 transition-opacity duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <img 
            src={beforeImage} 
            alt={`${title} - Before`} 
            className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute top-2 left-2 bg-yellow-500 text-xs text-gray-900 px-2 py-1 rounded">
            Before
          </div>
        </div>
        <div 
          className={`absolute inset-0 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={afterImage} 
            alt={`${title} - After`}
            className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute top-2 left-2 bg-yellow-500 text-xs text-gray-900 px-2 py-1 rounded">
            After
          </div>
        </div>
      </div>
      <div className="p-4 bg-white">
        <p className="text-sm text-yellow-500 mb-1">{category}</p>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'kitchen', name: 'Kitchen' },
    { id: 'bathroom', name: 'Bathroom' },
    { id: 'living', name: 'Living Room' },
    { id: 'exterior', name: 'Exterior' }
  ];
  
  const projects = [
    {
      id: 1,
      title: "Modern Kitchen Remodel",
      category: "Kitchen",
      beforeImage: "/website pics/before1.jpg",
      afterImage: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      title: "Bathroom Transformation",
      category: "Bathroom",
      beforeImage: "/website pics/before2.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      afterImage: "https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      title: "Living Room Renovation",
      category: "Living Room",
      beforeImage: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      afterImage: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      title: "House Façade Update",
      category: "Exterior",
      beforeImage: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      afterImage: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 5,
      title: "Contemporary Kitchen Design",
      category: "Kitchen",
      beforeImage: "https://images.pexels.com/photos/7061071/pexels-photo-7061071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      afterImage: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 6,
      title: "Luxury Bathroom Upgrade",
      category: "Bathroom",
      beforeImage: "https://images.pexels.com/photos/2127969/pexels-photo-2127969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      afterImage: "https://images.pexels.com/photos/6958519/pexels-photo-6958519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === activeFilter);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      <div className="absolute top-40 -left-20 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute bottom-40 -right-20 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '-15s' }}></div>

      <div className="container mx-auto px-4 relative">
        <SectionTitle
          title="Our Portfolio"
          subtitle="Recent Projects"
          description="Explore our collection of stunning home transformations"
          isVisible={isInView}
        />
        
        <div className="flex flex-wrap justify-center gap-4 mt-10 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-yellow-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <PortfolioItem
              key={project.id}
              title={project.title}
              category={project.category}
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
              index={index}
              isVisible={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;