
import React from "react";

interface InfoSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  image: string;
  imagePosition?: "left" | "right";
  bgColor?: string;
  textColor?: string;
  buttonText?: string;
  buttonLink?: string;
  imagePriority?: boolean;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  subtitle,
  children,
  image,
  imagePosition = "right",
  bgColor = "bg-white",
  textColor = "text-gray-800",
  buttonText,
  buttonLink,
  imagePriority = false,
}) => {
  return (
    <section className={`${bgColor} ${textColor} py-16 md:py-24 overflow-hidden`}>
      <div className="willis-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {imagePosition === "left" && (
            <div className="relative overflow-hidden rounded-xl animate-fade-in-left">
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-cover rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105"
                loading={imagePriority ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-willis-red/20 to-transparent opacity-70 mix-blend-multiply"></div>
            </div>
          )}

          <div className={`space-y-6 ${imagePosition === "right" ? "animate-fade-in-right" : "animate-fade-in-left"}`}>
            {subtitle && <p className="text-willis-red uppercase tracking-wide font-medium">{subtitle}</p>}
            <h2 className="text-3xl md:text-4xl font-bold relative">
              {title}
              <span className="block w-24 h-1 bg-willis-red mt-4"></span>
            </h2>
            <div className="space-y-4 text-base md:text-lg">{children}</div>
            {buttonText && buttonLink && (
              <a
                href={buttonLink}
                className="button-primary inline-block mt-6"
              >
                {buttonText}
              </a>
            )}
          </div>

          {imagePosition === "right" && (
            <div className="relative overflow-hidden rounded-xl animate-fade-in-right">
              <img
                src={image}
                alt={title}
                className="w-full h-auto object-cover rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105"
                loading={imagePriority ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-willis-red/20 to-transparent opacity-70 mix-blend-multiply"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
