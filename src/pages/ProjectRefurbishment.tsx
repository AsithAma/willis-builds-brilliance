
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import CallToAction from "@/components/CallToAction";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Project data - Refurbishment category
const refurbishmentProjects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=800&auto=format&fit=crop",
    title: "Historic Bank Conversion",
    category: "Commercial Refurbishment",
    description: "Conversion of a Grade II listed former bank building into modern office spaces while preserving its historic features.",
    link: "/projects/refurbishment",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
    title: "Bay View Apartment Block",
    category: "Residential Refurbishment",
    description: "Complete refurbishment of a 1970s apartment block, modernizing 30 units and improving energy efficiency.",
    link: "/projects/refurbishment",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    title: "Victorian Townhouse Restoration",
    category: "Heritage Refurbishment",
    description: "Sympathetic restoration of a row of Victorian townhouses, converting them into luxury apartments.",
    link: "/projects/refurbishment",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop",
    title: "The Old Mill Restaurant",
    category: "Commercial Refurbishment",
    description: "Conversion of a disused mill building into a high-end restaurant with riverside dining.",
    link: "/projects/refurbishment",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&w=800&auto=format&fit=crop",
    title: "Dockside Warehouse Conversion",
    category: "Mixed-Use Refurbishment",
    description: "Transformation of an industrial warehouse into a mixed-use development with apartments and retail units.",
    link: "/projects/refurbishment",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
    title: "City Centre Hotel Upgrade",
    category: "Hospitality Refurbishment",
    description: "Complete refurbishment of a 120-room hotel, upgrading all facilities to modern standards.",
    link: "/projects/refurbishment",
  },
];

const ProjectRefurbishment: React.FC = () => {
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
              Refurbishment Projects
              <span className="block w-32 h-1 bg-willis-red mt-6"></span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 animate-fade-in">
              Explore our portfolio of renovation and modernization projects, where we transform existing structures into revitalized, functional spaces.
            </p>
          </div>
        </div>
      </div>
      
      {/* Projects Showcase */}
      <section className="py-16 md:py-24 bg-white">
        <div className="willis-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {refurbishmentProjects.map((project) => (
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
              <p className="text-willis-red uppercase tracking-wide font-medium">FEATURED REFURBISHMENT</p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Historic Bank Conversion
                <span className="block w-24 h-1 bg-willis-red mt-4"></span>
              </h2>
              <p className="text-gray-600">
                This challenging project involved the sensitive conversion of a Grade II listed former bank building into modern office spaces. Our team worked closely with heritage specialists to preserve historic features while creating a contemporary working environment.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="font-bold text-lg mb-2">Project Details</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <span className="font-medium">Client:</span> Cardiff Heritage Properties
                    </li>
                    <li>
                      <span className="font-medium">Location:</span> Central Cardiff
                    </li>
                    <li>
                      <span className="font-medium">Size:</span> 25,000 sq ft
                    </li>
                    <li>
                      <span className="font-medium">Completion:</span> 2022
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Highlights</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>Heritage preservation</li>
                    <li>Modern MEP systems</li>
                    <li>Original vault feature</li>
                    <li>BREEAM Very Good</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-2xl animate-fade-in-right">
              <img
                src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=1200&auto=format&fit=crop"
                alt="Historic Bank Conversion"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction 
        title="Have a Refurbishment Project in Mind?"
        subtitle="Contact us today to discuss how we can transform your existing property with our expertise and attention to detail."
      />
    </div>
  );
};

export default ProjectRefurbishment;
