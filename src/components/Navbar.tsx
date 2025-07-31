import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Logo from "../assets/WILLIS-CONSTRUCTION.png";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setProjectsOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  const isActive = (path: string) => location.pathname === path;
  
  const isProjectPage = 
    isActive("/projects") || 
    isActive("/projects/development") || 
    isActive("/projects/refurbishment") || 
    isActive("/projects/planned-refurbishment") || 
    isActive("/projects/educational-local-authority");

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "py-4",
        isOpen ? "bg-white shadow-md" : ""
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="relative z-50 flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <img
              src={Logo}
              alt="Willis Construction Logo"
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/" isActive={isActive("/") || isActive("/home")}>
              Home
            </NavLink>
            
            <NavLink to="/about" isActive={isActive("/about")}>
              About Us
            </NavLink>
            
            {/* Projects Dropdown */}
            <div className="relative group">
              <button 
                className={cn(
                  "flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  isProjectPage 
                    ? "text-willis-red" 
                    : "text-gray-700 hover:text-willis-red"
                )}
                onClick={() => setProjectsOpen(!projectsOpen)}
              >
                Projects
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              
              <div className="absolute left-0 mt-1 w-60 origin-top-left rounded-md bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2 space-y-1">
                  <Link 
                    to="/projects"
                    className="block w-full text-left px-4 py-2 text-sm rounded-md hover:bg-gray-100"
                  >
                    View All Projects
                  </Link>
                  
                  <Link 
                    to="/projects/development"
                    className={cn(
                      "block w-full text-left px-4 py-2 text-sm rounded-md hover:bg-gray-100",
                      isActive("/projects/development") && "bg-gray-100 font-medium"
                    )}
                  >
                    Development
                  </Link>
                  
                  <Link 
                    to="/projects/refurbishment"
                    className={cn(
                      "block w-full text-left px-4 py-2 text-sm rounded-md hover:bg-gray-100",
                      isActive("/projects/refurbishment") && "bg-gray-100 font-medium"
                    )}
                  >
                    Refurbishment
                  </Link>
                  
                  <Link 
                    to="/projects/planned-refurbishment"
                    className={cn(
                      "block w-full text-left px-4 py-2 text-sm rounded-md hover:bg-gray-100",
                      isActive("/projects/planned-refurbishment") && "bg-gray-100 font-medium"
                    )}
                  >
                    Planned Refurbishment
                  </Link>
                  
                  <Link 
                    to="/projects/educational-local-authority"
                    className={cn(
                      "block w-full text-left px-4 py-2 text-sm rounded-md hover:bg-gray-100",
                      isActive("/projects/educational-local-authority") && "bg-gray-100 font-medium"
                    )}
                  >
                    Educational & Local Authority
                  </Link>
                </div>
              </div>
            </div>
            
            <NavLink to="/contact" isActive={isActive("/contact")}>
              Contact Us
            </NavLink>
            
            <Link 
              to="/contact"
              className="ml-2 inline-flex items-center justify-center rounded-md bg-willis-red px-4 py-2 text-sm font-medium text-white hover:bg-willis-red/90 transition-colors"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-2"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-900" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-40 w-[80%] max-w-sm bg-white shadow-xl md:hidden transition-transform duration-300 ease-in-out transform",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="h-full flex flex-col overflow-y-auto pt-20 pb-6 px-6">
          <nav className="flex-1 flex flex-col">
            <div className="space-y-3 py-4">
              <MobileNavLink 
                to="/" 
                isActive={isActive("/") || isActive("/home")}
                onClick={() => setIsOpen(false)}
              >
                Home
              </MobileNavLink>
              
              <MobileNavLink 
                to="/about" 
                isActive={isActive("/about")}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </MobileNavLink>
              
              {/* Mobile Projects Dropdown */}
              <div className="py-1">
                <button
                  className={cn(
                    "flex items-center justify-between w-full text-left px-2 py-2 rounded-md",
                    isProjectPage ? "text-willis-red font-medium" : "text-gray-800"
                  )}
                  onClick={() => setProjectsOpen(!projectsOpen)}
                >
                  <span>Projects</span>
                  <ChevronDown 
                    className={cn(
                      "h-5 w-5 transition-transform",
                      projectsOpen && "rotate-180"
                    )} 
                  />
                </button>
                
                {projectsOpen && (
                  <div className="mt-1 ml-4 pl-2 border-l-2 border-gray-200 space-y-2">
                    <Link
                      to="/projects"
                      className={cn(
                        "block py-2 text-gray-600 hover:text-willis-red",
                        isActive("/projects") && "text-willis-red font-medium"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      View All Projects
                    </Link>
                    
                    <Link
                      to="/projects/development"
                      className={cn(
                        "block py-2 text-gray-600 hover:text-willis-red",
                        isActive("/projects/development") && "text-willis-red font-medium"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      Development
                    </Link>
                    
                    <Link
                      to="/projects/refurbishment"
                      className={cn(
                        "block py-2 text-gray-600 hover:text-willis-red",
                        isActive("/projects/refurbishment") && "text-willis-red font-medium"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      Refurbishment
                    </Link>
                    
                    <Link
                      to="/projects/planned-refurbishment"
                      className={cn(
                        "block py-2 text-gray-600 hover:text-willis-red",
                        isActive("/projects/planned-refurbishment") && "text-willis-red font-medium"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      Planned Refurbishment
                    </Link>
                    
                    <Link
                      to="/projects/educational-local-authority"
                      className={cn(
                        "block py-2 text-gray-600 hover:text-willis-red",
                        isActive("/projects/educational-local-authority") && "text-willis-red font-medium"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      Educational & Local Authority
                    </Link>
                  </div>
                )}
              </div>
              
              <MobileNavLink 
                to="/contact" 
                isActive={isActive("/contact")}
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </MobileNavLink>
            </div>
            
            <div className="mt-auto pt-6">
              <Link
                to="/contact"
                className="block w-full text-center py-3 px-4 rounded-md bg-willis-red text-white font-medium hover:bg-willis-red/90 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Desktop Navigation Link
const NavLink: React.FC<{
  to: string;
  isActive: boolean;
  children: React.ReactNode;
}> = ({ to, isActive, children }) => (
  <Link
    to={to}
    className={cn(
      "px-4 py-2 text-sm font-medium rounded-md transition-colors relative",
      isActive 
        ? "text-willis-red" 
        : "text-gray-700 hover:text-willis-red"
    )}
  >
    {children}
    {isActive && (
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-willis-red rounded-full" />
    )}
  </Link>
);

// Mobile Navigation Link
const MobileNavLink: React.FC<{
  to: string;
  isActive: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}> = ({ to, isActive, onClick, children }) => (
  <Link
    to={to}
    className={cn(
      "flex items-center px-2 py-2 rounded-md",
      isActive ? "text-willis-red font-medium" : "text-gray-800 hover:text-willis-red"
    )}
    onClick={onClick}
  >
    {children}
    {isActive && <ChevronRight className="ml-auto h-5 w-5" />}
  </Link>
);

export default Navbar;