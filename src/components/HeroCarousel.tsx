
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
  image: string;
  title: string;
  subtitle: string;
}

const items: CarouselItem[] = [
  {
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2000&auto=format&fit=crop",
    title: "Building a Brighter Tomorrow",
    subtitle: "Excellence in Construction Since 1986",
  },
  {
    image: "https://images.unsplash.com/photo-1429041966141-44d228a42775?q=80&w=2000&auto=format&fit=crop",
    title: "Quality Craftsmanship",
    subtitle: "Delivering Projects That Exceed Expectations",
  },
  {
    image: "https://images.unsplash.com/photo-1467533003447-e295ff1b0435?q=80&w=2000&auto=format&fit=crop",
    title: "Innovative Solutions",
    subtitle: "Modern Approach to Construction Challenges",
  },
];

const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
            <div className={`transition-all duration-1000 ${
              index === currentIndex ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                {item.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                {item.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/projects" className="button-primary">
                  View Our Projects
                </a>
                <a href="/contact" className="button-outline text-white border-white hover:bg-white hover:text-willis-dark">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-willis-red text-white p-2 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-willis-red text-white p-2 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-30">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 md:h-3 md:w-12 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-willis-red w-8 md:w-20" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
