
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import CallToAction from "@/components/CallToAction";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Project data - Educational & Local Authority category
const educationalProjects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop",
    title: "Primary School Extension",
    category: "Educational",
    description: "New classroom block and sports facilities for a growing primary school, creating space for 120 additional pupils.",
    link: "/projects/educational-local-authority",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
    title: "University Science Building",
    category: "Educational",
    description: "State-of-the-art science and research facility for a leading university, featuring specialized laboratories and teaching spaces.",
    link: "/projects/educational-local-authority",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=800&auto=format&fit=crop",
    title: "Community Library Renovation",
    category: "Local Authority",
    description: "Modernization of a public library, creating flexible community spaces and improving accessibility.",
    link: "/projects/educational-local-authority",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?q=80&w=800&auto=format&fit=crop",
    title: "Municipal Offices Upgrade",
    category: "Local Authority",
    description: "Refurbishment of council offices to improve energy efficiency and create a modern working environment.",
    link: "/projects/educational-local-authority",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=800&auto=format&fit=crop",
    title: "Campus Sports Centre",
    category: "Educational",
    description: "Multi-purpose sports facility for a college, featuring indoor courts, fitness suite, and changing facilities.",
    link: "/projects/educational-local-authority",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    title: "Public Swimming Pool Refurbishment",
    category: "Local Authority",
    description: "Complete renovation of a community swimming pool, including new changing facilities and improved energy systems.",
    link: "/projects/educational-local-authority",
  },
];

const ProjectEducationalLocalAuthority: React.FC = () => {
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
              Educational & Local Authority Projects
              <span className="block w-32 h-1 bg-willis-red mt-6"></span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 animate-fade-in">
              Explore our portfolio of specialized projects for schools, universities, and public sector buildings, where we create spaces that inspire learning and serve communities.
            </p>
          </div>
        </div>
      </div>
      
      {/* Projects Showcase */}
      <section className="py-16 md:py-24 bg-white">
        <div className="willis-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationalProjects.map((project) => (
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
              <p className="text-willis-red uppercase tracking-wide font-medium">FEATURED PROJECT</p>
              <h2 className="text-3xl md:text-4xl font-bold">
                University Science Building
                <span className="block w-24 h-1 bg-willis-red mt-4"></span>
              </h2>
              <p className="text-gray-600">
                This state-of-the-art facility provides specialized laboratories, research spaces, and teaching areas for STEM subjects. The building was designed to inspire collaboration and innovation while meeting strict sustainability criteria.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="font-bold text-lg mb-2">Project Details</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <span className="font-medium">Client:</span> Cardiff Metropolitan University
                    </li>
                    <li>
                      <span className="font-medium">Location:</span> Cardiff Campus
                    </li>
                    <li>
                      <span className="font-medium">Size:</span> 45,000 sq ft
                    </li>
                    <li>
                      <span className="font-medium">Completion:</span> 2022
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Highlights</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>BREEAM Excellent rating</li>
                    <li>Specialized research labs</li>
                    <li>Flexible learning spaces</li>
                    <li>Renewable energy systems</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-2xl animate-fade-in-right">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop"
                alt="University Science Building"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction 
        title="Planning an Educational or Public Sector Project?"
        subtitle="Contact us today to discuss how we can help you create inspiring and functional spaces for learning and community services."
      />
    </div>
  );
};

export default ProjectEducationalLocalAuthority;
