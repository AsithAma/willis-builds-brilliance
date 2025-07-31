import React, { useState } from "react";
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: "success" | "error" | null;
  }>({
    message: "",
    type: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: "Please fill in all required fields.",
        type: "error",
      });
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormStatus({
        message: "Thank you for your message. We'll get back to you soon!",
        type: "success",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="willis-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <div className="w-24 h-1 bg-willis-red mb-8"></div>
            
            <p className="text-gray-600 mb-10">
              Have a project in mind or want to discuss a potential collaboration? 
              We'd love to hear from you. Fill out the form, and our team will get 
              back to you as soon as possible.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-willis-red/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-willis-red" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Our Location</h4>
                  <p className="text-gray-600">
                    Unit 1 River Bridge Business Centre, Rhymney River Bridge Road, Penylan, Cardiff, CF23 9FP
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-willis-red/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-willis-red" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Call Us</h4>
                  <p className="text-gray-600">
                    <a href="tel:02920797073" className="hover:text-willis-red transition-colors">
                      02920 797073
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-willis-red/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-willis-red" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email Us</h4>
                  <p className="text-gray-600">
                    <a href="mailto:info@willisconstruction.co.uk" className="hover:text-willis-red transition-colors">
                      info@willisconstruction.co.uk
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span>8:00 AM - 5:30 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span>9:00 AM - 1:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl p-8 animate-fade-in-right">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            {formStatus.type && (
              <div
                className={`p-4 mb-6 rounded-md ${
                  formStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {formStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-willis-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-willis-red focus:border-willis-red transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-willis-red">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-willis-red focus:border-willis-red transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-willis-red focus:border-willis-red transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-willis-red focus:border-willis-red transition-colors appearance-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Project Quote">Project Quote</option>
                      <option value="Career Information">Career Information</option>
                      <option value="Service Details">Service Details</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <ChevronDown className="h-5 w-5 text-willis-red" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-willis-red">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-willis-red focus:border-willis-red transition-colors"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="button-primary w-full py-4"
              >
                Send Message
              </button>
              
              <p className="text-xs text-gray-500 mt-4">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
