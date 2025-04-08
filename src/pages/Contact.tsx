
import React from "react";
import ContactForm from "@/components/ContactForm";
import GoogleMap from "@/components/GoogleMap";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactPage: React.FC = () => {
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
              Contact Us
              <span className="block w-32 h-1 bg-willis-red mt-6"></span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 animate-fade-in">
              We're here to answer any questions you have about our services. Reach out to discuss your construction needs.
            </p>
          </div>
        </div>
      </div>
      
      {/* Quick Contact Cards */}
      <section className="py-12 bg-white relative z-10">
        <div className="willis-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-willis-red/10 text-willis-red rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600 mb-4">Our team is available to assist you</p>
              <a href="tel:02920797073" className="text-lg font-medium text-willis-red hover:underline">
                02920 797073
              </a>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-willis-red/10 text-willis-red rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Send us your inquiries anytime</p>
              <a href="mailto:mail@willisconstruction.co.uk" className="text-lg font-medium text-willis-red hover:underline">
                mail@willisconstruction.co.uk
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <ContactForm />
      
      {/* Google Map Section */}
      <section className="relative">
        <div className="h-[600px] w-full overflow-hidden">
          <GoogleMap />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
