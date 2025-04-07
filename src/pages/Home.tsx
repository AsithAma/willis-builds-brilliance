
import React from "react";
import HeroCarousel from "@/components/HeroCarousel";
import InfoSection from "@/components/InfoSection";
import ServiceCard from "@/components/ServiceCard";
import StatsCounter from "@/components/StatsCounter";
import ProjectCard from "@/components/ProjectCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import CallToAction from "@/components/CallToAction";
import { ArrowRight, Building, Home, Calendar, MapPin, BarChart, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const services = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "New Build Development",
      description: "We deliver exceptional new construction projects from residential to commercial buildings.",
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Major Refurbishment",
      description: "Transform existing structures with our comprehensive refurbishment services.",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Planned Refurbishment",
      description: "Scheduled maintenance and improvements to keep your property in optimal condition.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Insurance Repairs",
      description: "Expert repairs and renovations for insurance-covered structural damage.",
    },
  ];

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format&fit=crop",
      title: "Cardiff Office Complex",
      category: "Commercial",
      description: "A modern office building with state-of-the-art facilities and sustainable design elements.",
      link: "/projects",
    },
    {
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=800&auto=format&fit=crop",
      title: "Luxury Apartments",
      category: "Residential",
      description: "Premium residential complex featuring high-end finishes and community amenities.",
      link: "/projects",
    },
    {
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&w=800&auto=format&fit=crop",
      title: "Community Center",
      category: "Public",
      description: "Multi-purpose community facility designed to serve local residents with various activities.",
      link: "/projects",
    },
  ];

  return (
    <div>
      <HeroCarousel />
      
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="willis-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold">
                Building a Brighter Tomorrow
                <span className="block w-24 h-1 bg-willis-red mt-4"></span>
              </h2>
              <p className="text-gray-600">
                We are a local company and invest in the industry through trade apprenticeships. We pride ourselves on our commitment to both environmental and social sustainability, employing local people and partnering with a local supply chain thereby retaining maximum investment within the communities where we operate.
              </p>
              <p className="text-gray-600">
                We also work with our clients to review other ways of benefiting the economy and community through targeted training and recruitment.
              </p>
              <div className="pt-4">
                <Link to="/about" className="button-outline inline-flex items-center group">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-right">
              <div className="rounded-xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=800&auto=format&fit=crop"
                  alt="Construction site"
                  className="w-full h-72 object-cover"
                />
                <div className="bg-white p-6">
                  <h3 className="text-xl font-bold mb-2">THE COMPANY</h3>
                  <p className="text-gray-600 mb-4">
                    Since starting the company in 1986, Gareth has led and developed the company to become a highly respected and trusted contractor.
                  </p>
                  <Link to="/about" className="text-willis-red font-medium inline-flex items-center group hover:underline">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl sm:mt-12">
                <img
                  src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=800&auto=format&fit=crop"
                  alt="Construction project"
                  className="w-full h-72 object-cover"
                />
                <div className="bg-white p-6">
                  <h3 className="text-xl font-bold mb-2">SOCIAL VALUE</h3>
                  <p className="text-gray-600 mb-4">
                    We pride ourselves on our commitment to help in achieving sustainable communities and strive to reinforce the aims of client.
                  </p>
                  <Link to="/about" className="text-willis-red font-medium inline-flex items-center group hover:underline">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="willis-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Construction Services</h2>
            <div className="w-24 h-1 bg-willis-red mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              With over 35 years of experience, Willis Construction offers a comprehensive range of construction services tailored to meet your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/about" className="button-primary inline-block">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <InfoSection
        title="Why Choose Willis Construction"
        subtitle="EXCELLENCE GUARANTEED"
        image="https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=1200&auto=format&fit=crop"
        imagePosition="left"
        buttonText="About Our Approach"
        buttonLink="/about"
      >
        <p>
          Willis Construction is a longstanding family run business established by Gareth Williams in 1986, and its values reflect this. Our key strength is our people, and we are unique in the diverse range of construction activities undertaken with 3 key divisions.
        </p>
        <p>
          We have a loyal, trusted, well trained and vastly experienced team who pride themselves on building to programme, producing excellent quality and maintaining budgets for clients.
        </p>
        <ul className="space-y-3 mt-6">
          <li className="flex items-start">
            <span className="bg-willis-red/10 p-1 rounded text-willis-red mr-3 mt-1">✓</span>
            <span>Over 35 years of industry experience</span>
          </li>
          <li className="flex items-start">
            <span className="bg-willis-red/10 p-1 rounded text-willis-red mr-3 mt-1">✓</span>
            <span>Highly skilled and certified team</span>
          </li>
          <li className="flex items-start">
            <span className="bg-willis-red/10 p-1 rounded text-willis-red mr-3 mt-1">✓</span>
            <span>Commitment to sustainability</span>
          </li>
          <li className="flex items-start">
            <span className="bg-willis-red/10 p-1 rounded text-willis-red mr-3 mt-1">✓</span>
            <span>Focus on quality and client satisfaction</span>
          </li>
        </ul>
      </InfoSection>
      
      {/* Stats Counter */}
      <StatsCounter />
      
      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="willis-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Featured Projects
                <span className="block w-24 h-1 bg-willis-red mt-4"></span>
              </h2>
              <p className="text-gray-600 max-w-2xl">
                Take a look at some of our most notable construction projects, showcasing our expertise and commitment to excellence.
              </p>
            </div>
            <Link
              to="/projects"
              className="mt-6 md:mt-0 button-outline inline-flex items-center group"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <TestimonialSlider />
      
      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default HomePage;
