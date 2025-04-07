
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import CallToAction from "@/components/CallToAction";
import Gallery from "@/components/Gallery";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

// Project categories
const projectCategories = [
  {
    id: 1,
    title: "Development",
    description: "New construction projects and property developments across various sectors.",
    image: "https://images.unsplash.com/photo-1503594384566-461fe158e797?q=80&w=800&auto=format&fit=crop",
    link: "/projects/development",
    icon: "🏗️",
  },
  {
    id: 2,
    title: "Refurbishment",
    description: "Complete renovation and modernization of existing residential and commercial structures.",
    image: "https://images.unsplash.com/photo-1583167411259-e2fdb1a8d5bd?q=80&w=800&auto=format&fit=crop",
    link: "/projects/refurbishment",
    icon: "🔨",
  },
  {
    id: 3,
    title: "Planned Refurbishment",
    description: "Strategic scheduled renovations and upgrades to improve building performance and longevity.",
    image: "https://images.unsplash.com/photo-1527847121998-c8e13a4abb71?q=80&w=800&auto=format&fit=crop",
    link: "/projects/planned-refurbishment",
    icon: "📋",
  },
  {
    id: 4,
    title: "Educational & Local Authority",
    description: "Specialized projects for schools, universities, and public sector buildings.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop",
    link: "/projects/educational-local-authority",
    icon: "🏫",
  },
];

// Featured projects
const featuredProjects = [
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
];

const ProjectsPage: React.FC = () => {
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
      
      {/* Project Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="willis-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Categories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in various construction sectors. Explore our work by category below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectCategories.map((category) => (
              <Link to={category.link} key={category.id} className="group">
                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                    <div className="absolute bottom-4 left-4 text-white text-4xl">{category.icon}</div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-willis-red group-hover:text-willis-red/80 transition-colors">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {category.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center text-willis-red font-medium group/link">
                      <span>View Projects</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-16 bg-gray-50">
        <div className="willis-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Highlighting some of our most impressive work across different categories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="project-card group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="project-overlay group-hover:opacity-100">
                  <div className="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-4">
                    <span className="inline-block bg-willis-red text-white text-sm px-3 py-1 rounded mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/80 mb-4 line-clamp-2">{project.description}</p>
                    <Link
                      to={project.link}
                      className="inline-flex items-center text-white font-medium group/link"
                    >
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Project */}
      <section className="py-16 bg-white">
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
