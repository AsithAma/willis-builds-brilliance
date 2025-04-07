
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Willis Construction exceeded our expectations in every way. Their attention to detail and commitment to quality is unmatched in the industry.",
    author: "Sarah Johnson",
    position: "Project Manager, Cardiff Development Group",
  },
  {
    quote: "We've worked with many contractors over the years, but Willis has consistently delivered exceptional results. Their team is professional, skilled, and a pleasure to work with.",
    author: "Michael Davies",
    position: "Director, Welsh Housing Association",
  },
  {
    quote: "From the initial planning stages to the final walkthrough, Willis Construction demonstrated exceptional professionalism and expertise. They completed our project on time and within budget.",
    author: "John Williams",
    position: "Facilities Manager, Cardiff University",
  },
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative px-4 py-16 md:py-24 bg-gray-50">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-8 left-8 text-[180px] font-serif text-willis-red opacity-10">"</div>
        <div className="absolute bottom-8 right-8 text-[180px] font-serif text-willis-red opacity-10">"</div>
      </div>
      
      <div className="relative willis-container max-w-4xl mx-auto">
        <div className="relative overflow-hidden">
          <div
            className="transition-transform duration-500 ease-in-out flex"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="text-center">
                  <blockquote className="text-xl md:text-2xl italic text-gray-700 mb-8">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex flex-col items-center">
                    <div className="bg-willis-red w-12 h-0.5 mb-4"></div>
                    <p className="font-bold text-lg">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-willis-red w-10" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full text-willis-red hover:bg-willis-red hover:text-white transition-all duration-300"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full text-willis-red hover:bg-willis-red hover:text-white transition-all duration-300"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
