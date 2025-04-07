
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="willis-container">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold flex items-center">
              <span className="text-willis-red">WILLIS</span>
              <span className="text-willis-dark ml-1">CONSTRUCTION</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`navbar-link ${isActive("/") ? "active" : ""}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`navbar-link ${isActive("/about") ? "active" : ""}`}
            >
              About Us
            </Link>
            <Link
              to="/projects"
              className={`navbar-link ${isActive("/projects") ? "active" : ""}`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`navbar-link ${isActive("/contact") ? "active" : ""}`}
            >
              Contact Us
            </Link>
            <a href="/contact" className="button-primary">
              Get a Quote
            </a>
          </nav>

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
            className={`navbar-link text-xl ${isActive("/") ? "active" : ""}`}
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
          <Link
            to="/projects"
            className={`navbar-link text-xl ${
              isActive("/projects") ? "active" : ""
            }`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`navbar-link text-xl ${
              isActive("/contact") ? "active" : ""
            }`}
          >
            Contact Us
          </Link>
          <a href="/contact" className="button-primary mt-4">
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
