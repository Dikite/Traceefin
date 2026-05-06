// app/products/page.tsx
"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileBarChart,
  Gavel,
  SearchCheck,
  FileText,
  Truck,
} from "lucide-react";
import Link from 'next/link';

const products = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Background Verification",
    color: "from-[#356090] to-[#61a1b7]",
    description:
      "Assisting in verifying the identities of both individuals and entities. Select the necessary verifications and receive a detailed report summarizing the process and outcomes.",
   
  },
  {
    icon: <FileBarChart className="w-6 h-6" />,
    title: "Bank Statement Analysis",
    color: "from-[#10b981] to-[#34d399]",
    description:
      "Analyse bank statements by uploading them. Get detailed insights with charts on loans, UPI transactions, average balances, and more.",
  
  },
  {
    icon: <Gavel className="w-6 h-6" />,
    title: "Court Case Check",
    color: "from-[#8b5cf6] to-[#a78bfa]",
    description:
      "Conduct police verification and court case checks within seconds. Obtain a signed report from a lawyer after verification.",
   
  },
  {
    icon: <SearchCheck className="w-6 h-6" />,
    title: "Anti Money Laundering Check",
    color: "from-[#ef4444] to-[#f87171]",
    description:
      "Instantly conduct Anti-Money Laundering (AML) checks by accessing a databases and scanning Google News for relevant information",
   
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Bulk PAN Verification",
    color: "from-[#f59e0b] to-[#fbbf24]",
    description:
      "Perform bulk PAN verification effortlessly by uploading a CSV file and receive the results in CSV format.",
   
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Bulk Vehicle Verification",
    color: "from-[#ec4899] to-[#f472b6]",
    description:
      "Effortlessly conduct bulk vehicle verification by uploading a CSV file. Support RTO, Chassis ,and RC details verification.",
  
  },
];

const ProductsPage = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#f9fafb] to-[#f1f5f9] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e293b] mb-6 tracking-tight">
            Welcome to Our Products
          </h1>
          <p className="text-lg text-[#475569] max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of verification and analysis tools
            designed to streamline your business processes.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-md border border-[#e2e8f0] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center bg-gradient-to-r ${product.color} text-white p-3 rounded-xl mb-5 self-start`}
              >
                {product.icon}
              </div>

              {/* Title + Description */}
              <h3 className="text-xl font-semibold text-[#1e293b] mb-3">
                {product.title}
              </h3>
              <p className="text-[#475569] mb-6 flex-grow leading-relaxed">
                {product.description}
              </p>

              {/* Footer */}
              <div className="mt-auto">
               
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md">
                  <Link href="https://dashboard.traceefin.com/login">Proceed</Link>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-10 mt-20 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e293b] mb-4">
            Streamline Your Verification Processes
          </h2>
          <p className="text-[#475569] max-w-3xl mx-auto leading-relaxed">
            Our products are designed to help businesses of all sizes verify
            identities, analyze financial data, and ensure compliance with
            minimal effort. From individual checks to bulk processing, we
            provide accurate results quickly and efficiently.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsPage;
