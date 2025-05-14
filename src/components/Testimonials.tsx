import React, { useRef, useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import SectionTitle from './common/SectionTitle';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  quote: string;
  isVisible: boolean;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, role, image, quote, isVisible }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      <div className="mb-6 text-yellow-500">
        <Quote size={40} />
      </div>
      <p className="text-gray-600 mb-6 italic">{quote}</p>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "Home Transformations completely renovated our kitchen, and we couldn't be happier with the results. The team was professional, punctual, and the quality of their work exceeded our expectations. We're already planning our next project with them!"
    },
    {
      name: "David Thompson",
      role: "Property Developer",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "I've worked with many contractors over the years, but Home Transformations stands out for their attention to detail and commitment to quality. They've completed several projects for me, and each one has been delivered on time and within budget."
    },
    {
      name: "Jennifer Martinez",
      role: "Interior Designer",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "As an interior designer, I often collaborate with Home Transformations to bring my designs to life. Their craftsmanship is exceptional, and they always find solutions to the most challenging design elements. It's a pleasure to work with such talented professionals."
    },
    {
      name: "Michael Wilson",
      role: "Homeowner",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "Our bathroom renovation was a complex project, but Home Transformations handled it with ease. They guided us through the entire process, from design to completion, and the result is stunning. We appreciate their expertise and dedication."
    },
    {
      name: "Amanda Carter",
      role: "Real Estate Agent",
      image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quote: "I recommend Home Transformations to my clients who need renovations before selling their homes. The transformations are always impressive, and the increase in property value is substantial. They're reliable, efficient, and produce outstanding results."
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Testimonials"
          subtitle="What Our Clients Say"
          description="Read what our satisfied clients have to say about their experience"
          isVisible={isInView}
        />

        {/* Testimonial Carousel */}
        <div className="mt-12 relative">
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Testimonial
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                quote={testimonial.quote}
                isVisible={isInView}
              />
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Testimonial
              name={testimonials[activeSlide].name}
              role={testimonials[activeSlide].role}
              image={testimonials[activeSlide].image}
              quote={testimonials[activeSlide].quote}
              isVisible={isInView}
            />
            
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    activeSlide === index ? 'bg-yellow-500' : 'bg-gray-300'
                  }`}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex justify-between mt-6">
              <button 
                onClick={prevSlide}
                className="bg-white rounded-full p-2 shadow-md text-gray-800 hover:text-yellow-500 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="bg-white rounded-full p-2 shadow-md text-gray-800 hover:text-yellow-500 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;