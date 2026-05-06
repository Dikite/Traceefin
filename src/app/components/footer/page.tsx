import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaPhoneAlt,
  FaMobileAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#2D3748] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <div className="flex items-center mb-6">
            <span className="text-xl font-bold">
              Traceefin.com Private Limited
            </span>
          </div>
          <p className="text-gray-400 mb-6">
            Identity verification made simple and secure.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/company/your-company"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.facebook.com/your-company"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaFacebook size={20} />
            </a>
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Products</h4>
          <ul className="space-y-3">
            <li><a className="text-gray-400 hover:text-white">Background Verification</a></li>
            <li><a className="text-gray-400 hover:text-white">Bank Statement Analysis</a></li>
            <li><a className="text-gray-400 hover:text-white">Court Case Check</a></li>
            <li><a className="text-gray-400 hover:text-white">Anti Money Laundering Check</a></li>
            <li><a className="text-gray-400 hover:text-white">Bulk PAN Verification</a></li>
            <li><a className="text-gray-400 hover:text-white">Bulk Vehicle Verification</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Navigations</h4>
          <ul className="space-y-3">
            <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
            <li><a href="/products" className="text-gray-400 hover:text-white">Products</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <FaEnvelope className="text-[#61a1b7] mt-1 mr-3" />
              <a
                href="mailto:contact@traceefin.co.in"
                className="text-gray-400 hover:text-white"
              >
                Mahesh@traceefin.com
              </a>
            </li>
            <li className="flex items-start">
              <FaMobileAlt className="text-[#61a1b7] mt-1 mr-3" />
              <a
                href="tel:+917358058181"
                className="text-gray-400 hover:text-white"
              >
                +91 73580 58181
              </a>
            </li>
            <li className="flex items-start">
              <FaMapMarkerAlt className="text-[#61a1b7] mt-1 mr-3" />
              <span className="text-gray-400">
                Traceefin.com Private Limited<br />
                2A, 2nd Floor,Sun Plaza <br />
                Old No# 19, New No# 39 <br />
                G.N. Chetty Road, <br />
                Chennai – 600006
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* ISO Logos Centered */}
      <div className="flex justify-center space-x-3 mt-2">
        <img src="/iso9001.png" alt="ISO Certification 9001" className="h-30" />
        <img src="/iso27001.png" alt="ISO Certification 27001" className="h-30" />
      </div>

      {/* Bottom Footer */}
      <div className="max-w-6xl mx-auto border-t border-gray-700 mt-3 pt-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Traceefin.com All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
