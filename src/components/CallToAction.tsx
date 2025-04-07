
import React from "react";
import { Link } from "react-router-dom";

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
}

const CallToAction: React.FC<CTAProps> = ({
  title = "Ready to Start Your Construction Project?",
  subtitle = "Let's turn your vision into reality. Get in touch with our expert team today.",
  buttonText = "Contact Us",
  buttonLink = "/contact",
  backgroundImage = "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2000&auto=format&fit=crop",
}) => {
  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Construction background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-willis-dark/90 to-willis-dark/70"></div>
      </div>
      
      {/* Content */}
      <div className="willis-container relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in">
            {title}
          </h2>
          <p className="text-white/90 text-lg mb-10 animate-fade-in">
            {subtitle}
          </p>
          <Link to={buttonLink} className="button-primary text-lg px-8 py-4 animate-fade-in">
            {buttonText}
          </Link>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 w-32 h-32 bg-willis-red opacity-10 rounded-br-full"></div>
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-willis-red opacity-10 rounded-tl-full"></div>
    </div>
  );
};

export default CallToAction;
