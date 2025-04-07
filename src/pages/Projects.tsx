
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import CallToAction from "@/components/CallToAction";
import Gallery from "@/components/Gallery";

// Project data
const projects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format&fit=crop",
    title: "Cardiff Office Complex",
    category: "Commercial",
    description: "A modern office building with state-of-the-art facilities and sustainable design elements.",
    link: "/projects",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=800&auto=format&fit=crop",
    title: "Luxury Apartments",
    category: "Residential",
    description: "Premium residential complex featuring high-end finishes and community amenities.",
    link: "/projects",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&w=800&auto=format&fit=crop",
    title: "Community Center",
    category: "Public",
    description: "Multi-purpose community facility designed to serve local residents with various activities.",
    link: "/projects",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=800&auto=format&fit=crop",
    title: "University Science Building",
    category: "Educational",
    description: "State-of-the-art research facility with laboratories and learning spaces for students.",
    link: "/projects",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=800&auto=format&fit=crop",
    title: "Corporate Headquarters",
    category: "Commercial",
    description: "Flagship office building with innovative design and cutting-edge technology infrastructure.",
    link: "/projects",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=800&auto=format&fit=crop",
    title: "Public Library Renovation",
    category: "Public",
    description: "Complete renovation of a historic library building, preserving heritage while adding modern amenities.",
    link: "/projects",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1495314736024-fa5e4b37b979?q=80&w=800&auto=format&fit=crop",
    title: "Townhouse Development",
    category: "Residential",
    description: "Urban infill project featuring contemporary townhouses with sustainable materials.",
    link: "/projects",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1429041966141-44d228a42775?q=80&w=800&auto=format&fit=crop",
    title: "Primary School Extension",
    category: "Educational",
    description: "Modern extension to existing school providing additional classrooms and multipurpose spaces.",
    link: "/projects",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=800&auto=format&fit=crop",
    title: "Shopping Center Refurbishment",
    category: "Retail",
    description: "Complete modernization of existing retail space with improved accessibility and customer experience.",
    link: "/projects",
  },
];

const ProjectsPage: React.FC = () => {
  const categories = ["All", ...Array.from(new Set(projects.map(project => project.category)))];
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-willis-red/5 to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-willis-red/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-willis-red/5 rounded-full blur-3xl"></div>
        
        <div className="willis-container relative">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Our Projects
              <span className="block w-32 h-1 bg-willis-red mt-6"></span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 animate-fade-in">
              Explore our portfolio of exceptional projects showcasing our diverse capabilities in the construction industry.
            </p>
          </div>
        </div>
      </div>
      
      {/* Project Showcase */}
      <section className="py-16 md:py-24 bg-white">
        <div className="willis-container">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full text-base md:text-lg transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-willis-red text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
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
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-700 mb-4">No projects found</h3>
              <p className="text-gray-600">No projects match the selected filter. Please try another category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Featured Project */}
      <section className="py-16 bg-gray-50">
        <div className="willis-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left order-2 lg:order-1">
              <p className="text-willis-red uppercase tracking-wide font-medium">FEATURED PROJECT</p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Cardiff Office Tower
                <span className="block w-24 h-1 bg-willis-red mt-4"></span>
              </h2>
              <p className="text-gray-600">
                One of our most significant commercial developments, this 20-story office tower in central Cardiff combines cutting-edge design with sustainable building practices, achieving BREEAM Excellent certification.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="font-bold text-lg mb-2">Project Details</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <span className="font-medium">Client:</span> Cardiff Business Group
                    </li>
                    <li>
                      <span className="font-medium">Location:</span> Central Cardiff
                    </li>
                    <li>
                      <span className="font-medium">Size:</span> 250,000 sq ft
                    </li>
                    <li>
                      <span className="font-medium">Completion:</span> 2023
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Highlights</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>BREEAM Excellent certification</li>
                    <li>Rooftop solar array</li>
                    <li>Smart building technology</li>
                    <li>Green roof gardens</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-2xl animate-fade-in-right order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop"
                alt="Featured project"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Gallery */}
      <Gallery 
        title="Project Photo Gallery"
        subtitle="Browse through our collection of completed projects showcasing our craftsmanship and attention to detail."
      />
      
      {/* Call to Action */}
      <CallToAction 
        title="Have a Construction Project in Mind?"
        subtitle="Contact us today to discuss how we can bring your vision to life with our expertise and dedication to quality."
      />
    </div>
  );
};

export default ProjectsPage;
