
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import CallToAction from "@/components/CallToAction";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Project data - Planned Refurbishment category
const plannedRefurbishmentProjects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
    title: "University Halls Refurbishment",
    category: "Educational Planned Refurbishment",
    description: "Phased refurbishment of student accommodation across multiple buildings over three years.",
    link: "/projects/planned-refurbishment",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop",
    title: "Office Park Modernization",
    category: "Commercial Planned Refurbishment",
    description: "Three-year program to upgrade four office buildings, improving energy efficiency and modernizing interiors.",
    link: "/projects/planned-refurbishment",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
    title: "Healthcare Facilities Upgrade",
    category: "Healthcare Planned Refurbishment",
    description: "Strategic refurbishment of multiple healthcare facilities while maintaining operational continuity.",
    link: "/projects/planned-refurbishment",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?q=80&w=800&auto=format&fit=crop",
    title: "Residential Estate Renewal",
    category: "Residential Planned Refurbishment",
    description: "Long-term program to update 120 residential properties with modern fixtures and improved insulation.",
    link: "/projects/planned-refurbishment",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1580901368919-7738efb0f87e?q=80&w=800&auto=format&fit=crop",
    title: "Hotel Chain Rebranding",
    category: "Hospitality Planned Refurbishment",
    description: "Coordinated refurbishment of five hotels to align with new brand standards and improve guest experience.",
    link: "/projects/planned-refurbishment",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop",
    title: "Retail Network Upgrade",
    category: "Retail Planned Refurbishment",
    description: "Scheduled modernization of 15 retail stores across Wales, delivering consistent brand experience.",
    link: "/projects/planned-refurbishment",
  },
];

const ProjectPlannedRefurbishment: React.FC = () => {
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
              Planned Refurbishment Projects
              <span className="block w-32 h-1 bg-willis-red mt-6"></span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 animate-fade-in">
              Explore our portfolio of strategic scheduled renovations and upgrades designed to improve building performance and longevity through carefully planned phases.
            </p>
          </div>
        </div>
      </div>
      
      {/* Projects Showcase */}
      <section className="py-16 md:py-24 bg-white">
        <div className="willis-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plannedRefurbishmentProjects.map((project) => (
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
              <p className="text-willis-red uppercase tracking-wide font-medium">FEATURED PLANNED REFURBISHMENT</p>
              <h2 className="text-3xl md:text-4xl font-bold">
                University Halls Refurbishment
                <span className="block w-24 h-1 bg-willis-red mt-4"></span>
              </h2>
              <p className="text-gray-600">
                This comprehensive project involved the phased refurbishment of five student accommodation blocks, totaling 500 rooms. The work was scheduled during vacation periods to minimize disruption and completed over three years.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="font-bold text-lg mb-2">Project Details</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <span className="font-medium">Client:</span> Cardiff University
                    </li>
                    <li>
                      <span className="font-medium">Location:</span> Cardiff Campus
                    </li>
                    <li>
                      <span className="font-medium">Size:</span> 500 Rooms
                    </li>
                    <li>
                      <span className="font-medium">Duration:</span> 3 Years
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Highlights</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>Energy efficiency upgrade</li>
                    <li>Enhanced fire safety</li>
                    <li>Modern communal spaces</li>
                    <li>Digital access systems</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-2xl animate-fade-in-right">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop"
                alt="University Halls Refurbishment"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction 
        title="Planning a Phased Refurbishment?"
        subtitle="Contact us today to discuss how we can help you develop and implement a strategic refurbishment program that minimizes disruption and maximizes value."
      />
    </div>
  );
};

export default ProjectPlannedRefurbishment;
