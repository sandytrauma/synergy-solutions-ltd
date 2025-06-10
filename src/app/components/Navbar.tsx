// components/Navbar.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: "0%", transition: { type: "spring", stiffness: 120, damping: 14 } },
    exit: { x: "100%", transition: { duration: 0.3 } }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
      className="bg-gray-800 text-white p-4 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          XYZ Solutions Ltd.
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link href="/pages/company" className="hover:text-blue-400 transition-colors">Company</Link>
          <Link href="/pages/services" className="hover:text-blue-400 transition-colors">Services</Link>
          <Link href="/pages/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                // This will be handled by the close button inside the overlay
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-y-0 right-0 w-64 bg-gray-900 z-50 p-4 shadow-xl flex flex-col items-start pt-6 space-y-6" // Adjusted padding and background
          >
            {/* Close Button for Mobile Menu */}
            <div className="w-full flex justify-end mb-4"> {/* Added margin-bottom */}
              <button onClick={() => setIsOpen(false)} className="text-white focus:outline-none p-2 rounded-full hover:bg-gray-700 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <Link href="/" className="text-xl hover:text-blue-400 transition-colors w-full p-2 rounded-lg hover:bg-gray-800" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/pages/company" className="text-xl hover:text-blue-400 transition-colors w-full p-2 rounded-lg hover:bg-gray-800" onClick={() => setIsOpen(false)}>Company</Link>
            <Link href="/pages/services" className="text-xl hover:text-blue-400 transition-colors w-full p-2 rounded-lg hover:bg-gray-800" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/pages/contact" className="text-xl hover:text-blue-400 transition-colors w-full p-2 rounded-lg hover:bg-gray-800" onClick={() => setIsOpen(false)}>Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;