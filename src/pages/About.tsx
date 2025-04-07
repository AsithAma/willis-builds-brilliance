
import React from "react";
import InfoSection from "@/components/InfoSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import CallToAction from "@/components/CallToAction";
import StatsCounter from "@/components/StatsCounter";
import { Building, Briefcase, BarChart, Shield, Recycle, Users, Award, Leaf } from "lucide-react";

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "We strive for excellence in every project, maintaining the highest standards of quality and craftsmanship.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "We believe in shared learning and collaboration to maximize results and continually improve our processes.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Integrity",
      description: "We operate with honesty and transparency, building trust with our clients, partners, and communities.",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainability",
      description: "We are committed to environmentally responsible practices and sustainable construction methods.",
    },
  ];

  const services = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "New Build Development",
      description: "Complete construction of residential, commercial, and community buildings from the ground up with meticulous attention to detail.",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Major Refurbishment",
      description: "Comprehensive renovation services to transform existing buildings, enhancing functionality, aesthetics, and value.",
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Planned Refurbishment",
      description: "Strategic maintenance and improvement programs designed to extend building life and enhance performance.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Insurance Repairs",
      description: "Specialized reconstruction and repair services for properties damaged by fire, flood, or other insured events.",
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Educational Projects",
      description: "Custom construction and renovation solutions for schools, universities, and educational facilities.",
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Local Authority Work",
      description: "Dedicated services for public sector buildings and infrastructure projects across Wales.",
    },
  ];

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
              About Willis Construction
              <span className="block w-32 h-1 bg-willis-red mt-6"></span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6 animate-fade-in">
              A longstanding family-run business with a strong commitment to quality, sustainability, and community values.
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Company Info */}
      <InfoSection
        title="Our History & Mission"
        subtitle="ESTABLISHED 1986"
        image="https://images.unsplash.com/photo-1429041966141-44d228a42775?q=80&w=1200&auto=format&fit=crop"
        imagePosition="right"
        imagePriority={true}
      >
        <p>
          Willis Construction is a longstanding family run business established by Gareth Williams in 1986, and its values reflect this. Our key strength is our people, and we are unique in the diverse range of construction activities undertaken with 3 key divisions: New Build Development, Major Refurbishment & Maintenance, and Insurance Repairs.
        </p>
        <p>
          Willis has a loyal, trusted, well trained and vastly experienced team who pride themselves on building to programme, producing excellent quality and maintaining budgets for clients. We believe in collaboration and shared learning to maximise results, continually learning from our business divisions, past projects, and input from subcontract trades, consultants, client and specialist suppliers, ensuring customer satisfaction is at the heart of all we do.
        </p>
        <p>
          We encourage and engage regularly with the industry supply chain to learn from their experiences and innovate solutions into new schemes to benefit delivery and improve client satisfaction. These may be permanent features into the design or indeed methods of construction which improve projects.
        </p>
      </InfoSection>
      
      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="willis-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-willis-red mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our approach to construction and client relationships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ServiceCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Social Value */}
      <InfoSection
        title="Social Value"
        subtitle="COMMUNITY COMMITMENT"
        image="https://images.unsplash.com/photo-1560251180-1a0b9a770d8b?q=80&w=1200&auto=format&fit=crop"
        imagePosition="left"
      >
        <p>
          We pride ourselves on our commitment to help in achieving sustainable communities and strive to reinforce the aims of client organisations and those outlined within our Social Value strategy.
        </p>
        <p>
          We are not a management contracting company and are therefore equipped to directly support Targeted Recruitment & Training (TR&T) initiatives at first hand without having to place the participants with our sub-contract supply chain. We already play a proactive role with our clients and participate in creating employment and training opportunities and also have experience of delivering requirements under the CIH "Can Do Toolkit" clauses.
        </p>
        <p>
          Our contribution to the communities in which we work with is fundamental to the business, and our social value activities positively contribute to the Welsh Economy, whether that's through the use of local supply chain, our TR&T activities, or our community benefits engagement.
        </p>
      </InfoSection>
      
      {/* Environmental Sustainability */}
      <section className="py-20 bg-gray-50">
        <div className="willis-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold">
                Environmental Sustainability
                <span className="block w-24 h-1 bg-willis-red mt-4"></span>
              </h2>
              <p className="text-gray-600">
                The company acknowledges that delivering on the commitment to implement good practice in reducing and recycling waste has a number of seriously beneficial outcomes relating to the environment, compliance with regulations, increased profits, minimisation of waste and disposal costs and resource efficiency.
              </p>
              <p className="text-gray-600">
                Accordingly, we have signed up to the "Halving Waste to Landfill" initiative to direct and improve our performance. In addition, we have also reviewed our approach to pollution risk assessments, use of natural resources and raw materials, energy consumption and efficiency, water consumption, use and discharge, emissions to atmosphere, resource management, and transport and logistics to create an environmental management system and become accredited to Level Two of the Green Dragon Environmental Standard.
              </p>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-xl animate-fade-in-right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=1200&auto=format&fit=crop"
                  alt="Environmental sustainability"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-white text-2xl font-bold mb-2">Our Environmental Champion</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-1 bg-willis-red"></div>
                    <p className="text-white text-sm">Coordinating our environmental initiatives</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6">
                <h4 className="font-bold text-xl mb-4">Our Waste Hierarchy</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Recycle className="h-5 w-5 text-willis-red mr-3" />
                    <span>Eliminate – avoid producing waste in the first place</span>
                  </li>
                  <li className="flex items-center">
                    <Recycle className="h-5 w-5 text-willis-red mr-3" />
                    <span>Reduce – minimise the amount of waste that is produced</span>
                  </li>
                  <li className="flex items-center">
                    <Recycle className="h-5 w-5 text-willis-red mr-3" />
                    <span>Re-use – use items as many times as possible</span>
                  </li>
                  <li className="flex items-center">
                    <Recycle className="h-5 w-5 text-willis-red mr-3" />
                    <span>Recycle – recycle what you can only after you have re-used it</span>
                  </li>
                  <li className="flex items-center">
                    <Recycle className="h-5 w-5 text-willis-red mr-3" />
                    <span>Dispose – dispose of what's left in a responsible way</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Counter */}
      <StatsCounter />
      
      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="willis-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Comprehensive Services</h2>
            <div className="w-24 h-1 bg-willis-red mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Willis Construction offers a wide range of construction services tailored to meet the specific needs of our diverse client base.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <TestimonialSlider />
      
      {/* Call to Action */}
      <CallToAction 
        title="Ready to Work With Us?"
        subtitle="Contact our team today to discuss your construction project needs and discover how Willis Construction can deliver exceptional results."
      />
    </div>
  );
};

export default AboutPage;
