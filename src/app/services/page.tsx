"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Car,
  Home,
  LineChart,
  Truck,
  Users,
  BanknoteIcon,
  Scale,
  BadgeCheck,
} from "lucide-react";
import { JSX } from "react";

interface ServiceItem {
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
  industries?: string[];
}

const ServicesSection = () => {
  const services: ServiceItem[] = [
    {
      title: "Financial Services Solutions",
      description:
        "End-to-end verification for banking, lending, and financial institutions with KYC, AML, and financial health analysis.",
      icon: <BanknoteIcon className="w-6 h-6" />,
      color: "from-[#356090] to-[#61a1b7]",
      industries: ["Banking", "Fintech", "Lending", "Wealth Management"]
    },
    {
      title: "HR & Employee Screening",
      description:
        "Comprehensive background verification for employees and vendors with AI-powered risk analysis and compliance checks.",
      icon: <Users className="w-6 h-6" />,
      color: "from-[#38B2AC] to-[#319795]",
      industries: ["Corporate HR", "Staffing Agencies", "Gig Economy Platforms"]
    },
    {
      title: "Real Estate & Home Loan Platforms",
      description:
        "Tailored solutions for property transactions with automated credit checks, income validation, and document verification.",
      icon: <Home className="w-6 h-6" />,
      color: "from-[#805AD5] to-[#6B46C1]",
      industries: ["Real Estate", "Mortgage Lenders", "Property Tech"]
    },
    {
      title: "Supply Chain & Vendor Management",
      description:
        "Streamline supplier onboarding with instant KYC/KYB, credit history checks, and continuous compliance monitoring.",
      icon: <Truck className="w-6 h-6" />,
      color: "from-[#F6AD55] to-[#DD6B20]",
      industries: ["Manufacturing", "Retail", "Logistics", "E-commerce"]
    },
    {
      title: "Automotive & Transportation",
      description:
        "Vehicle verification, driver's license checks, and fleet management solutions to enhance safety and compliance.",
      icon: <Car className="w-6 h-6" />,
      color: "from-[#356090] to-[#61a1b7]",
      industries: ["Auto Dealers", "Ride Sharing", "Fleet Operators", "Insurance"]
    },
    {
      title: "Startup & Investor Due Diligence",
      description:
        "Simplify investor verification and startup due diligence with automated compliance and reporting workflows.",
      icon: <LineChart className="w-6 h-6" />,
      color: "from-[#38B2AC] to-[#319795]",
      industries: ["VC Firms", "Startups", "Angel Networks", "Accelerators"]
    },
    {
      title: "Legal & Compliance Solutions",
      description:
        "Court case verification, legal document analysis, and compliance monitoring for law firms and legal departments.",
      icon: <Scale className="w-6 h-6" />,
      color: "from-[#805AD5] to-[#6B46C1]",
      industries: ["Law Firms", "Legal Tech", "Corporate Compliance"]
    },
 
    {
      title: "Custom Enterprise Solutions",
      description:
        "Tailored verification workflows and integration support for large enterprises with specific compliance needs.",
      icon: <BadgeCheck className="w-6 h-6" />,
      color: "from-[#356090] to-[#61a1b7]",
      industries: ["Enterprise", "Government", "Large Corporations"]
    },
  ];

  return (
    <section
      className="w-full bg-gradient-to-br from-[#f8fbfc] to-[#e6f2f5] py-20 px-6"
      aria-labelledby="services-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            id="services-title"
            className="text-4xl md:text-5xl font-extrabold text-[#2D3748] mb-6"
          >
            Industry-Specific{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#356090] to-[#61a1b7]">
              Solutions
            </span>
          </h2>
          <p className="text-lg text-[#4A5568] max-w-3xl mx-auto mb-8">
            Tailored verification and compliance solutions designed for specific industries and use cases.
          </p>
          <div className="bg-white rounded-xl p-6 shadow-md inline-block">
            <p className="text-lg font-semibold text-[#356090]">
              6+ Ready-to-Use Verification Products • 250+ API Endpoints
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group overflow-hidden flex flex-col h-full"
            >
              {/* Icon Header */}
              <div
                className={`bg-gradient-to-r ${service.color} p-6 text-white text-center`}
              >
                <div className="bg-white/20 p-4 rounded-full inline-flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-[#2D3748] mb-3 group-hover:text-[#356090] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#4A5568] leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Industries */}
                {service.industries && (
                  <div className="mt-4">
                    <p className="text-sm font-medium text-[#356090] mb-2">Ideal for:</p>
                    <div className="flex flex-wrap gap-2">
                      {service.industries.map((industry, i) => (
                        <span 
                          key={i}
                          className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#356090] to-[#61a1b7] rounded-2xl p-10 md:p-14 mt-16 text-center text-white shadow-lg"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Custom Solution for Your Industry?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Our team specializes in developing tailored verification workflows for unique business requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-[#356090] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-sm">
              <Link href="/products">Explore Our Products</Link>
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors duration-300">
              <Link href="/contact">Contact Our Solutions Team</Link>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;