
import React from "react";
import ContactForm from "@/components/ContactForm";
import GoogleMap from "@/components/GoogleMap";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            
            <div className="bg-white rounded-xl shadow-lg p-8 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-willis-red/10 text-willis-red rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-600 mb-4">Our office has moved to</p>
              <p className="text-lg font-medium">
                Unit 1 River Bridge Business Centre,<br />Rhymney River Bridge Road,<br />Penylan, Cardiff, CF23 9FP
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <ContactForm />
      
      {/* Office Update Note */}
      <section className="py-16 bg-gray-50">
        <div className="willis-container">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Clock className="h-6 w-6 text-willis-red mr-3" />
                Important Notice
              </h3>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="font-medium">Our Office Has Moved</p>
                <p className="text-gray-600">
                  Your navigation system may not recognize the new address as not all providers have updated their systems. Should you require assistance in finding us, please contact the general enquiries contact number above.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3">Old Address:</h4>
                  <p className="text-gray-600">
                    Willis Construction Ltd<br />
                    Unit 6 Melyn Mair Business Centre<br />
                    Wentloog Avenue, Rumney<br />
                    Cardiff, CF3 2EX
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3">New Address:</h4>
                  <p className="text-gray-600">
                    Willis Construction Ltd<br />
                    Unit 1 River Bridge Business Centre<br />
                    Rhymney River Bridge Road, Penylan<br />
                    Cardiff, CF23 9FP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
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
