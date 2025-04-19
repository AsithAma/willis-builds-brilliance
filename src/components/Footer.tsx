import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import Logo from "../assets/WILLIS-CONSTRUCTION-LOGO.svg"

const Footer: React.FC = () => {
  return (
    <footer className="bg-willis-red text-white pt-16 pb-8">
      <div className="willis-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold ">
              <img
                src={Logo}
                alt="Willis Construction Logo"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6">
              A longstanding family run business established in 1986. Building a
              Brighter Tomorrow through quality construction services.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/profile.php?id=100092708977721&_rdc=1&_rdr#"
                className="bg-white/10 hover:bg-[#1877F2] p-2 rounded-full transition-all duration-300"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/willis_construction86/"
                className="bg-white/10 hover:bg-[#E1306C] p-2 rounded-full transition-all duration-300"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/willis-construction-wales/"
                className="bg-white/10 hover:bg-[#0077B5] p-2 rounded-full transition-all duration-300"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 h-1 w-12 bg-white rounded"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white hover:pl-1 transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white hover:pl-1 transition-all duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-300 hover:text-white hover:pl-1 transition-all duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white hover:pl-1 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white hover:pl-1 transition-all duration-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white hover:pl-1 transition-all duration-300"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 h-1 w-12 bg-white rounded"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white hover:pl-1 transition-all duration-300"
                >
                  New Build Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white hover:pl-1 transition-all duration-300"
                >
                  Major Refurbishment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white hover:pl-1 transition-all duration-300"
                >
                  Planned Refurbishment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white hover:pl-1 transition-all duration-300"
                >
                  Insurance Repairs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white hover:pl-1 transition-all duration-300"
                >
                  Educational Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white hover:pl-1 transition-all duration-300"
                >
                  Local Authority Work
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 h-1 w-12 bg-white rounded"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-white mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  Unit 1 River Bridge Business Centre, Rhymney River Bridge
                  Road, Penylan, Cardiff, CF23 9FP
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                <a
                  href="tel:02920797073"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  02920 797073
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                <a
                  href="mailto:mail@willisconstruction.co.uk"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  mail@willisconstruction.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm">
            &copy; {new Date().getFullYear()} Willis Construction Ltd. All
            rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-white text-sm">
              Designed & Developed by Willis Digital
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
