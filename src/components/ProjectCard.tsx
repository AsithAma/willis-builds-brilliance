
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  category,
  description,
  link,
}) => {
  return (
    <div className="project-card group">
      <img
        src={image}
        alt={title}
        className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="project-overlay group-hover:opacity-100">
        <div className="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-4">
          <span className="inline-block bg-willis-red text-white text-sm px-3 py-1 rounded mb-2">
            {category}
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/80 mb-4 line-clamp-2">{description}</p>
          <Link
            to={link}
            className="inline-flex items-center text-white font-medium group/link"
          >
            View Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
