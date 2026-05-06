// components/EnhancedNavbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image"; // add this import at the top
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if a link is active
  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  // Navigation items
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with animation */}
          <motion.div 
            className="flex-shrink-0 flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
         <Link href="/" className="flex items-center">
  <Image
    src="/logo.png"
    alt="eKYC Solutions Logo"
    width={150}   // set width
    height={48}   // set height
    className="h-17 w-auto object-contain"
    priority      // ensures logo loads fast
  />
</Link>
          </motion.div>

          {/* Center - Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item) => {
              const isActive = isActiveLink(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 group ${
                    isActive 
                      ? 'text-[#356090] font-semibold' 
                      : 'text-gray-700 hover:text-[#356090]'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span 
                      className="absolute inset-x-1 -bottom-1 h-0.5 bg-gradient-to-r from-[#356090] to-[#61a1b7]"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  {!isActive && (
                    <span className="absolute inset-x-1 -bottom-1 h-0.5 bg-gradient-to-r from-[#356090] to-[#61a1b7] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right - CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://dashboard.traceefin.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 text-gray-700 font-medium py-2 px-5 rounded-lg shadow hover:shadow-md hover:text-[#356090] transition-all duration-300 border border-gray-200"
            >
              Login
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#356090] to-[#61a1b7] text-white font-medium py-2 px-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 block"
              >
                Contact for sales
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#356090] focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="px-2 pt-2 pb-4 space-y-2 sm:px-3">
              {navItems.map((item, index) => {
                const isActive = isActiveLink(item.href);
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center px-3 py-3 text-base font-medium transition-all duration-300 rounded-lg ${
                        isActive
                          ? 'text-[#356090] bg-blue-50 font-semibold'
                          : 'text-gray-700 hover:text-[#356090] hover:bg-gray-50'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                      {isActive && (
                        <motion.span 
                          className="ml-2 h-2 w-2 rounded-full bg-[#356090]"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              <div className="pt-2 space-y-2 border-t border-gray-200 mt-2">
                {/* Mobile Login */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <a
                    href="https://dashboard.traceefin.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gray-100 text-gray-700 font-medium py-3 px-4 rounded-lg shadow hover:shadow-md hover:text-[#356090] transition-all duration-300 text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </a>
                </motion.div>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    href="/contact"
                    className="block bg-gradient-to-r from-[#356090] to-[#61a1b7] text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact for Sales
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;