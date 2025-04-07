
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-16">
      <div className="willis-container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-8xl md:text-9xl font-bold text-willis-red mb-6">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-10">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/" className="button-primary inline-flex items-center">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
