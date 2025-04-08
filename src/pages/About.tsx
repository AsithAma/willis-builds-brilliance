import React from "react";
import InfoSection from "@/components/InfoSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import CallToAction from "@/components/CallToAction";
import StatsCounter from "@/components/StatsCounter";
import { Building, Briefcase, BarChart, Shield, Recycle, Users, Award, Leaf } from "lucide-react";
import TeamMember from "@/components/TeamMember";

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

  const teamMembers = [
    {
      name: "Gareth Williams",
      title: "Managing Director",
      bio: "Since starting the company in 1986, Gareth has led and developed the company to become a highly respected and trusted contractor strategically expanding its services to its present offering of New Build, Major Refurbishment, Planned Maintenance and Insurance Claims Repairs.",
      photoUrl: "https://images.unsplash.com/photo-1560251180-1a0b9a770d8b?q=80&w=50&auto=format&fit=crop"
    },
    {
      name: "Richard Jeremy",
      title: "A.C.I.O.B.\nDirector / Commercial Manager",
      bio: "Richard joined the company as a director shortly after it was incorporated in 1995 and has overall responsibility for commercial aspects. Richard ensures value for money within the business and continually seeks ways of improving cost effectiveness through strong processes and supply chain partnerships.",
      photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=50&auto=format&fit=crop"
    },
    {
      name: "Rhys Ford",
      title: "BSc (Hons) Quantity Surveying & Commercial Management\nDirector / Managing Quantity Surveyor",
      bio: "Rhys joined the company in February 2015 to reinforce the commercial team and help deliver the company's expanding portfolio of traditional and design and build contracts. Apart from his extensive forms of contracts knowledge, Rhys brings a wealth of experience having previously worked for both large and medium sized developers/contractors.",
      photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=50&auto=format&fit=crop"
    },
    {
      name: "Glynn Grey",
      title: "Operations Manager",
      bio: "Glynn joined the company in 1999 and has management responsibility of the company's refurbishment and planned maintenance contracts along with management of the direct site personnel. Glynn ensures that the company delivers on its commitment to provide a customer driven service achieving a quality end product. Qualifications include Temporary Works Coordinator and Temporary Works Supervisor, SMSTS, MAPS Test Accredited and First Aid at Work.",
      photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=50&auto=format&fit=crop"
    },
    {
      name: "Paul Cachia",
      title: "Tech IOSH\nHealth, Safety and Training Manager",
      bio: "Paul joined the company in 1986 and has spent most of his career running development and maintenance sites. This experience and practical knowledge is being utilised by the company to reinforce and further develop its commitment to health and safety. Paul is also responsible for developing skills and capacity within the workforce through apprenticeships and training and is the client point of contact for targeted recruitment and training initiatives within the communities that the company operates.",
      photoUrl: "https://images.unsplash.com/photo-1522075469780-3a6694fb2f61?q=80&w=50&auto=format&fit=crop"
    },
    {
      name: "Matthew Fortt",
      title: "BSc (Hons) Quantity Surveying\nQuantity Surveyor/ Estimator",
      bio: "Matthew joined the company in 2015 to fulfil a specific leading role within the company's expanding commercial department. Matthew is an experienced estimator and quantity surveyor and, having previously worked for a similar sized company who operated within the same industry sectors, has access to a large and competitive supply chain portfolio.",
      photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=50&auto=format&fit=crop"
    },
    {
      name: "Matthew Oliver",
      title: "Quantity Surveyor",
      bio: "Matt joined the company in September 2017 to add his over 20 years of experience to an already well established and experienced Commercial team. He started his career with an International PQS Practice before transferring to the contracting side where he has gained many years of experience as a QS and Estimator with another local social housing contractor.",
      photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=50&auto=format&fit=crop"
    },
    {
      name: "Richard Black",
      title: "BSc (Hons) Quantity Surveying\nQuantity Surveyor",
      bio: "Richard joined the company in 2018 to further bolster the commercial team. Richard has over ten years experience of working with large and medium sized contractors across the region.",
      photoUrl: "https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=50&auto=format&fit=crop"
    },
    {
      name: "Craig Thomas",
      title: "Insurance Division Manager",
      bio: "Craig joined the company in 2003 and was promoted into the role of Insurance Claims Manager when the division was created in 2015. Craig has over twenty years' experience within the industry at trade and site management level and his practical knowledge and evident project management skills demonstrated on a broad portfolio of diverse and challenging contracts, makes him ideal to lead the division.",
      photoUrl: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=50&auto=format&fit=crop"
    },
    {
      name: "Tom George",
      title: "Technical Manager",
      bio: "Tom joined the company in 2018 having previously worked for a Cardiff based Housing Association in the Development and Maintenance departments. In 2020 Tom completed a HNC in surveying from the University of South Wales.",
      photoUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=50&auto=format&fit=crop"
    },
    {
      name: "Julie Sebestyén",
      title: "BA (Hons) Business & Finance\nOffice & Finance Manager",
      bio: "Julie joined the company in 2017 as the Office and Finance Manager and has over 15 years prior experience of general office and finance roles within the construction industry. Her duties are varied and include all aspects of accounts, purchase and sales ledger and payroll.",
      photoUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=50&auto=format&fit=crop"
    },
    {
      name: "Jayne Stephens",
      title: "Community Benefits Coordinator",
      bio: "Jayne has been with the company since 2007 and supports our Health, Safety & Training Manager in all aspects of H&S, Policies & Procedures, training records, and environmental & sustainability initiatives.",
      photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&auto=format&fit=crop"
    },
    {
      name: "Kate Williams",
      title: "Accounts Assistant",
      bio: "Kate joined the company in 2015 and works closely with the Office Manager to fulfil a broad range of management functions whilst focusing on business accounts. Kate previously worked in hospitality as an Events Manager and utilises her developed management and coordination skills within her current role.",
      photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=50&auto=format&fit=crop"
    },
    {
      name: "Nyron Wood",
      title: "Contracts Manager",
      bio: "Nyron has over 35 years' experience within the construction industry and worked from Groundworker to Contracts Manager running multiple sites whilst working for a large building contractor prior to joining Willis as Contracts Manager in November 2022. Nyron leads the construction team to achieve a quality finished product efficiently, safely, and professionally; working within set budgets and agreed timescales ensuring highest levels of client / customer satisfaction is achieved. Nyron is a key member of the pre-contract team providing logistical analysis and buildability guidance and then takes overall control of the project immediately after it is awarded. With a responsibility for overseeing the project from start to finish, he ensures smooth running and completion within the programme and to budget",
      photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=50&auto=format&fit=crop"
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
      
      {/* Our People */}
      <section className="py-20 bg-white">
        <div className="willis-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our People</h2>
            <div className="w-24 h-1 bg-willis-red mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our key strength is our people. Meet the dedicated team behind Willis Construction's success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                title={member.title}
                bio={member.bio}
                photoUrl={member.photoUrl}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
      
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
