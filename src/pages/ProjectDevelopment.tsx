
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import CallToAction from "@/components/CallToAction";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Project data - Development category
const developmentProjects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506374322094-6021fc3926f1?q=80&w=800&auto=format&fit=crop",
    title: "Riverside Apartments",
    category: "Residential Development",
    description: "Luxury riverside apartment complex with 120 units across three buildings, featuring premium amenities and sustainable design.",
    link: "/projects/development",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1567408242223-777777778777?q=80&w=800&auto=format&fit=crop",
    title: "St. David's Shopping Centre Extension",
    category: "Commercial Development",
    description: "A major extension to the existing shopping centre, adding 30 new retail units and improving public spaces.",
    link: "/projects/development",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    title: "Innovation Hub",
    category: "Commercial Development",
    description: "A cutting-edge office and co-working space designed for technology startups and innovative businesses.",
    link: "/projects/development",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop",
    title: "Meadow View Estate",
    category: "Residential Development",
    description: "A new housing development featuring 45 energy-efficient family homes with modern amenities and green spaces.",
    link: "/projects/development",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=800&auto=format&fit=crop",
    title: "Cardiff Central Hotel",
    category: "Hospitality Development",
    description: "A new 200-room luxury hotel in the heart of Cardiff, featuring conference facilities and a rooftop restaurant.",
    link: "/projects/development",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1498075702571-ecb018f3752d?q=80&w=800&auto=format&fit=crop",
    title: "Bay Business Park",
    category: "Commercial Development",
    description: "A modern business park with six office buildings designed to BREEAM Excellent standards.",
    link: "/projects/development",
  },
];

const ProjectDevelopment: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-willis-red/5 to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-willis-red/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-willis-red/5 rounded-full blur-3xl"></div>
        
        <div className="willis-container relative">
          <Link to="/projects" className="inline-flex items-center text-gray-600 hover:text-willis-red mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Categories
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Development Projects
              <span className="block w-32 h-1 bg-willis-red mt-6"></span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 animate-fade-in">
              Explore our portfolio of new construction projects and property developments across various sectors, showcasing our expertise in creating exceptional spaces from the ground up.
            </p>
          </div>
        </div>
      </div>
      
      {/* Projects Showcase */}
      <section className="py-16 md:py-24 bg-white">
        <div className="willis-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProjects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                category={project.category}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Case Study */}
      <section className="py-16 bg-gray-50">
        <div className="willis-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <p className="text-willis-red uppercase tracking-wide font-medium">FEATURED DEVELOPMENT</p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Riverside Apartments
                <span className="block w-24 h-1 bg-willis-red mt-4"></span>
              </h2>
              <p className="text-gray-600">
                This flagship development comprises 120 luxury apartments across three buildings on a prime riverside location. The project incorporated cutting-edge sustainable building practices and premium amenities for residents.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="font-bold text-lg mb-2">Project Details</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <span className="font-medium">Client:</span> Riverside Developments Ltd
                    </li>
                    <li>
                      <span className="font-medium">Location:</span> Cardiff Bay
                    </li>
                    <li>
                      <span className="font-medium">Size:</span> 120 Units
                    </li>
                    <li>
                      <span className="font-medium">Completion:</span> 2023
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Highlights</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>Waterfront location</li>
                    <li>Solar energy systems</li>
                    <li>Residents' gym and spa</li>
                    <li>Underground parking</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-2xl animate-fade-in-right">
              <img
                src="https://images.unsplash.com/photo-1506374322094-6021fc3926f1?q=80&w=1200&auto=format&fit=crop"
                alt="Riverside Apartments"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction 
        title="Looking to Build a New Development?"
        subtitle="Contact us today to discuss how we can bring your development project to life with our expertise and dedication to quality."
      />
    </div>
  );
};

export default ProjectDevelopment;
