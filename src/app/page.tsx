'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from "next/link";
import { FaCheckCircle, FaTrophy, FaBrain, FaPuzzlePiece, FaGlobe, FaShieldAlt, FaDatabase, FaRocket, FaCode, FaCube, FaStar, FaBox } from "react-icons/fa";
import { Globe, PlugZap, ShieldCheck } from 'lucide-react';


interface StatItem {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  bg: string;
}


// Define TypeScript interfaces
interface SolutionItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  gradient: string;
}

interface VerificationItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}


interface FAQItem {
  question: string;
  answer: string;
}

export default function Home() {
  // Stats data for eKYC section
const stats: StatItem[] = [
  {
    value: "99.9%",
    label: "Accuracy Rate",
    icon: <FaShieldAlt className="text-[#356090] text-xl" />
  },
  {
    value: "250+",
    label: "APIs Available",
    icon: <FaDatabase className="text-[#356090] text-xl" />
  },
  {
    value: "6+",
    label: "Products",
    icon: <FaBox className="text-[#356090] text-xl" />
  }
];


// Features data
const features: FeatureItem[] = [
  {
    title: "Identity Verification",
    description: "Verify identities with our extensive database and advanced algorithms.",
    icon: <FaGlobe className="text-white text-2xl" />,
    bg: "bg-gradient-to-r from-[#356090] to-[#61a1b7]"
  },
  {
    title: "Fraud Detection",
    description: "Advanced AI-powered fraud detection systems to protect your business from malicious actors.",
    icon: <FaShieldAlt className="text-white text-2xl" />,
    bg: "bg-gradient-to-r from-[#356090] to-[#61a1b7]"
  },
  {
    title: "Compliance Ready",
    description: "Stay compliant with international regulations including KYC, AML, and GDPR requirements.",
    icon: <FaDatabase className="text-white text-2xl" />,
    bg: "bg-gradient-to-r from-[#356090] to-[#61a1b7]"
  }
];


const solutions: SolutionItem[] = [
  {
    title: "100% No Code Onboarding Solution",
    description: "AI-Infused Risk Profile Engine for Enhanced Client Onboarding Verification - Fully White labelled",
    icon: <FaRocket className="text-2xl" />,
    features: [
      "No-code implementation",
      "10-minute setup",
      "AI-powered risk profiling",
      "Fully whitelabelled solution",
      "Enhanced verification"
    ],
    gradient: "bg-gradient-to-r from-[#356090] to-[#61a1b7]"
  },
  {
    title: "Onboarding API",
    description: "PAN, Vehicle RC Verification APIs, Chassis to RC details, Passport Verification API, Visa and National ID OCR, Video KYC Solution",
    icon: <FaCode className="text-2xl" />,
    features: [
      "PAN Verification API",
      "Vehicle RC Verification",
      "Chassis to RC details",
      "Passport Verification API",
      "Visa and National ID OCR",
      "Video KYC Solution"
    ],
    gradient: "bg-gradient-to-r from-[#FF7A64] to-[#FF9A8B]"
  },
  {
    title: "Ready to Use Products",
    description: "B2B ready-to-use products for verification, digital e-sign, AML, fraud detection, and monitoring, etc.",
    icon: <FaCube className="text-2xl" />,
    features: [
      "Verification solutions",
      "Digital e-sign",
      "AML compliance",
      "Fraud detection",
      "Monitoring systems",
      "B2B focused"
    ],
    gradient: "bg-gradient-to-r from-[#4FD1C5] to-[#81E6D9]"
  }
];


const verificationFeatures: VerificationItem[] = [
  {
    title: "Market Leader",
    description: "Leading player with specialized niche offerings",
    icon: <FaTrophy className="text-2xl" />
  },
  {
    title: "AI Enabled",
    description: "Advanced AI/ML-powered engine for seamless digital onboarding solutions",
    icon: <FaBrain className="text-2xl" />
  },
  {
    title: "No-Code",
    description: "Intuitive, plug-and-play application builder for rapid deployment",
    icon: <FaPuzzlePiece className="text-2xl" />
  }
];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "What does Traceefin do?",
      answer: "traceefin provides comprehensive identity verification and eKYC solutions through 250+ APIs, serving businesses with fraud detection, secure onboarding, and compliance tools."
    },
    {
      question: "How do I get the sandbox for testing the APIs?",
      answer: "You can access our sandbox environment by signing up for a developer account on our platform. Once registered, you'll receive API keys and documentation to start testing our APIs immediately."
    },
    {
      question: "Do you provide only APIs or can you customize products for us?",
      answer: "We offer both ready-to-use APIs and customized solutions. Our team can tailor our products to your specific business needs, ensuring seamless integration with your existing systems."
    },
 
    {
      question: "What is the no-code onboarding solution?",
      answer: "Our no-code onboarding solution enables businesses to implement client verification processes without writing any code. It features a drag-and-drop interface, pre-built templates, and seamless integration capabilities that can be set up in under 10 minutes."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  

  return (
    <main>
 

    <section className="w-full bg-gradient-to-br from-[#f7fafc] to-[#e6f2f5] py-10 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-[#2D3748] mb-6"
        >
          Identity Verification{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#356090] to-[#61a1b7]">
            Made Simple
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-[#4A5568] max-w-3xl mx-auto mb-7"
        >
          Power your business with <span className="font-semibold">250+ APIs</span> to detect
          fraud, verify users, and ensure compliance. Transform identity challenges into
          opportunities with our award-winning trust solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-7"
        >
        {/* Get Started Button */}
  <Link href="https://dashboard.traceefin.com/login" passHref>
    <button className="px-12 py-3 rounded-xl bg-gradient-to-r from-[#356090] to-[#61a1b7] text-white font-semibold shadow-md hover:shadow-xl transition-all">
      Get Started
    </button>
  </Link>

  {/* Book a Demo Button */}
  <Link href="/contact" passHref>
    <button className="px-8 py-3 rounded-xl border border-[#61a1b7] text-[#356090] font-semibold hover:bg-[#f0f9fb] transition-all">
      Book a Demo
    </button>
  </Link>

        </motion.div>

        {/* Features / Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left"
        >
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <ShieldCheck className="w-10 h-10 text-[#356090] mb-4" />
            <h3 className="text-xl font-semibold text-[#2D3748] mb-2">Fast & Accurate</h3>
            <p className="text-[#4A5568]">
              Get verification results in <strong>minutes</strong> with
              industry-leading accuracy—minimizing fraud and boosting trust.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <Globe className="w-10 h-10 text-[#356090] mb-4" />
            <h3 className="text-xl font-semibold text-[#2D3748] mb-2">Global Coverage</h3>
            <p className="text-[#4A5568]">
              Verify users across <strong>multiple industries and regions</strong>,
              ensuring compliance no matter where you operate.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
            <PlugZap className="w-10 h-10 text-[#356090] mb-4" />
            <h3 className="text-xl font-semibold text-[#2D3748] mb-2">Seamless Integration</h3>
            <p className="text-[#4A5568]">
              Plug our APIs into your systems with <strong>clear docs</strong> and
              hands-on developer support for rapid deployment.
            </p>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-lg text-[#4A5568] max-w-3xl mx-auto mt-12"
        >
          Trusted by <strong>leading banks</strong>, top insurance providers, and
          fast-growing e-commerce platforms, <span className="font-semibold">Traceefin</span>{" "}
          delivers secure, compliant, and reliable identity verification you can count on.
        </motion.p>
      </div>
    </section>


 <section className="w-full bg-white py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
     <h2 className="text-4xl md:text-5xl font-bold text-[#2D3748] leading-tight">
  eKYC Solutions for{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#356090] to-[#61a1b7]">
    KYC cards and seamless verification
  </span>
</h2>

          <p className="text-[#4A5568] text-lg md:text-xl leading-relaxed">
            250+ APIs to detect and identify fraudsters. Transform your identity challenges into opportunities with award-winning trust solutions tailored to your needs.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#F7FAFC] p-4 md:p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="bg-[#e9f4f8] p-2 md:p-3 rounded-full mr-3 md:mr-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#356090]">{stat.value}</h3>
                </div>
                <p className="text-[#4A5568] text-sm md:text-base font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-6"
          >
           
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-xl rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start">
                <div className={`${feature.bg} p-3 rounded-lg mr-4 flex-shrink-0`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-[#2D3748] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#4A5568] text-sm md:text-base">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
      <section className="w-full bg-[#F7FAFC] py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D3748] leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#356090] to-[#61a1b7]">Solutions</span>
          </h2>
          <p className="text-[#4A5568] text-lg md:text-xl max-w-3xl mx-auto mt-4">
            Comprehensive identity verification and onboarding solutions tailored for modern businesses
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
            >
              {/* Icon Header */}
              <div className={`p-6 text-white ${solution.gradient}`}>
                <div className="flex items-center">
                  <div className="bg-green bg-opacity-20 p-3 rounded-lg mr-4">
                    {solution.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold">{solution.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-grow">
                <p className="text-[#4A5568] mb-6">{solution.description}</p>
                
                <div className="border-t border-gray-100 pt-6">
                  <h4 className="text-sm font-semibold text-[#356090] uppercase tracking-wider mb-4 flex items-center">
                    <FaStar className="mr-2 text-[#FF7A64]" /> Key Features
                  </h4>
                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <FaCheckCircle className="text-[#4FD1C5] mt-1 mr-3 flex-shrink-0" />
                        <span className="text-[#4A5568] text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Button */}
          
            </motion.div>
          ))}
        </div>
      </div>
    </section>

          <section className="w-full bg-gradient-to-br from-[#2c3e50] to-[#4ca1af] py-16 px-4 md:px-6 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDQwIDMyMCI+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1IiBkPSJNMCwxMjhMNDgsMTE3LjNDOTYsMTA3LDE5Miw4NSwyODgsMTEyQzM4NCwxMzksNDgwLDIxMyw1NzYsMjE4LjdDNjcyLDIyNCw3NjgsMTYwLDg2NCwxMzguN0M5NjAsMTE3LDEwNTYsMTM5LDExNTIsMTQ5LjNDMTI0OCwxNjAsMTM0NCwxNjAsMTM5MiwxNjBMMTQ0MCwxNjBMMTQ0MCwzMjBMMTM5MiwzMjBDMTM0NCwzMjAsMTI0OCwzMjAsMTE1MiwzMjBDMTA1NiwzMjAsOTYwLDMyMCw4NjQsMzIwQzc2OCwzMjAsNjcyLDMyMCw1NzYsMzIwQzQ4MCwzMjAsMzg0LDMyMCwyODgsMzIwQzE5MiwzMjAsOTYsMzIwLDQ4LDMyMEwwLDMyMFoiPjwvcGF0aD48L3N2Zz4=')] bg-cover bg-center"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Enhancing Client Verification
            </h2>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#a8e6cf]">
              AI Powered APIs & Onboarding Solutions
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-gray-100">
              With Traceefin.com, experience seamless client verification, robust fraud detection, and secure onboarding with minimized risk
            </p>
            
            {/* Dashboard Login Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-4"
            >
           
            </motion.div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          >
            {verificationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=" bg-opacity-10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className=" bg-opacity-20 p-3 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-100 text-sm md:text-base">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

        <section className="w-full bg-gradient-to-br from-[#f7fafc] to-[#e6f2f5] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] mb-4">
            FAQ
          </h2>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
            Frequently Asked Questions
          </p>
          <p className="text-[#4A5568] mt-2">
            Discover how modern technologies are changing finance, offering effective, secure solutions for everyone.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-[#2D3748]">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className={`fas ${activeIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'} text-[#61a1b7]`}></i>
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-[#4A5568]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#356090] to-[#61a1b7] rounded-2xl p-8 mt-12 text-center text-white"
        >
          <div className="mb-4">
            <i className="fas fa-headset text-4xl"></i>
          </div>
          <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
        <p className="mb-6 text-white text-opacity-90">
  Can&apos;t find the answer you&apos;re looking for? Please chat with our friendly team.
</p>

         <button className="bg-white text-[#356090] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
  <Link href="/contact">Get in touch</Link>
</button>
        </motion.div>
      </div>
    </section>


     
    </main>
  );
}