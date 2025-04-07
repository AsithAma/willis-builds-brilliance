
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="willis-container">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold flex items-center">
              <span className="text-willis-red">WILLIS</span>
              <span className="text-willis-dark ml-1">CONSTRUCTION</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-[#f78da7] focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                        isActive("/") || isActive("/home")
                          ? "text-willis-red font-semibold"
                          : "text-gray-700"
                      )}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-[#f78da7] focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                        isActive("/about")
                          ? "text-willis-red font-semibold"
                          : "text-gray-700"
                      )}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      isActive("/projects") || 
                      isActive("/projects/development") || 
                      isActive("/projects/refurbishment") || 
                      isActive("/projects/planned-refurbishment") || 
                      isActive("/projects/educational-local-authority") 
                        ? "text-willis-red font-semibold"
                        : "text-gray-700 hover:text-[#f78da7]"
                    )}
                  >
                    Projects
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                      <li className="col-span-2">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/projects"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-willis-red/10 to-willis-red/5 p-6 no-underline outline-none focus:shadow-md"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-willis-red">
                              View All Projects
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Explore our complete portfolio of construction projects across all categories.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem
                        to="/projects/development"
                        title="Development"
                        className={isActive("/projects/development") ? "bg-accent" : ""}
                      >
                        New construction projects and property developments
                      </ListItem>
                      <ListItem
                        to="/projects/refurbishment"
                        title="Refurbishment"
                        className={isActive("/projects/refurbishment") ? "bg-accent" : ""}
                      >
                        Renovation and modernization of existing structures
                      </ListItem>
                      <ListItem
                        to="/projects/planned-refurbishment"
                        title="Planned Refurbishment"
                        className={isActive("/projects/planned-refurbishment") ? "bg-accent" : ""}
                      >
                        Scheduled renovations and strategic upgrades
                      </ListItem>
                      <ListItem
                        to="/projects/educational-local-authority"
                        title="Educational & Local Authority"
                        className={isActive("/projects/educational-local-authority") ? "bg-accent" : ""}
                      >
                        Schools, universities and public sector buildings
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/contact">
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-[#f78da7] focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                        isActive("/contact")
                          ? "text-willis-red font-semibold"
                          : "text-gray-700"
                      )}
                    >
                      Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact">
                    <NavigationMenuLink
                      className="inline-flex h-10 items-center justify-center rounded-md bg-willis-red px-6 text-sm font-medium text-white transition-colors hover:bg-willis-red/90 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      Get a Quote
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-willis-dark transition-all duration-300" />
            ) : (
              <Menu className="h-6 w-6 text-willis-dark transition-all duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-white bg-opacity-95 z-40 flex flex-col justify-center transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "60px" }}
      >
        <nav className="flex flex-col items-center space-y-6 text-lg">
          <Link
            to="/"
            className={`navbar-link text-xl ${isActive("/") || isActive("/home") ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`navbar-link text-xl ${
              isActive("/about") ? "active" : ""
            }`}
          >
            About Us
          </Link>
          
          <div className="flex flex-col items-center">
            <Link
              to="/projects"
              className={`navbar-link text-xl ${
                isActive("/projects") ? "active" : ""
              }`}
            >
              Projects
            </Link>
            <div className="flex flex-col items-center mt-2 space-y-3 pl-6">
              <Link 
                to="/projects/development" 
                className={`text-base ${isActive("/projects/development") ? "text-willis-red" : "text-gray-600 hover:text-[#f78da7]"}`}
              >
                Development
              </Link>
              <Link 
                to="/projects/refurbishment" 
                className={`text-base ${isActive("/projects/refurbishment") ? "text-willis-red" : "text-gray-600 hover:text-[#f78da7]"}`}
              >
                Refurbishment
              </Link>
              <Link 
                to="/projects/planned-refurbishment" 
                className={`text-base ${isActive("/projects/planned-refurbishment") ? "text-willis-red" : "text-gray-600 hover:text-[#f78da7]"}`}
              >
                Planned Refurbishment
              </Link>
              <Link 
                to="/projects/educational-local-authority" 
                className={`text-base ${isActive("/projects/educational-local-authority") ? "text-willis-red" : "text-gray-600 hover:text-[#f78da7]"}`}
              >
                Educational & Local Authority
              </Link>
            </div>
          </div>
          
          <Link
            to="/contact"
            className={`navbar-link text-xl ${
              isActive("/contact") ? "active" : ""
            }`}
          >
            Contact Us
          </Link>
          <Link to="/contact" className="button-primary mt-4">
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { to: string; title: string }
>(({ className, title, children, to, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
