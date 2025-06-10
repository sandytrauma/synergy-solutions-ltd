// components/Footer.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="bg-gray-950 text-gray-400 py-12 border-t border-gray-800"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-blue-400 mb-4">XYZ Solutions Ltd.</h3>
          <p className="text-sm leading-relaxed">
            Revolutionizing India's transport and automotive sectors with integrated solutions, from parts marketing and manufacturing to essential oil trading.
          </p>
          <p className="mt-4 text-sm">
            <strong className="text-gray-300">Location:</strong> New Delhi, Delhi NCR, India
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-gray-200 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-400 transition-colors text-sm">Home</Link>
            </li>
            <li>
              <Link href="/pages/company" className="hover:text-blue-400 transition-colors text-sm">Company</Link>
            </li>
            <li>
              <Link href="/pages/services" className="hover:text-blue-400 transition-colors text-sm">Services</Link>
            </li>
            <li>
              <Link href="/pages/contact" className="hover:text-blue-400 transition-colors text-sm">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Our Verticals */}
        <div>
          <h3 className="text-xl font-bold text-gray-200 mb-4">Our Verticals</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/pages/services/marketing" className="hover:text-blue-400 transition-colors text-sm">Automotive Parts Marketing</Link>
            </li>
            <li>
              <Link href="/pages/services/manufacturing" className="hover:text-blue-400 transition-colors text-sm">Parts Manufacturing & Trading</Link>
            </li>
            <li>
              <Link href="/pages/services/oil-trading" className="hover:text-blue-400 transition-colors text-sm">Base & Distilled Oil Trading</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info (Placeholder) */}
        <div>
          <h3 className="text-xl font-bold text-gray-200 mb-4">Connect With Us</h3>
          <p className="text-sm">
            <strong className="text-gray-300">Email:</strong>{' '}
            <a href="mailto:info@xyzsolutions.com" className="hover:text-blue-400 transition-colors">info@xyzsolutions.com</a>
          </p>
          <p className="mt-2 text-sm">
            <strong className="text-gray-300">Phone:</strong>{' '}
            <a href="tel:+911112345678" className="hover:text-blue-400 transition-colors">+91 11 1234 5678</a>
          </p>
          {/* Social Media Icons (Optional, add later) */}
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            {/* Example: LinkedIn icon */}
            {/* <a href="https://linkedin.com/company/xyzsolutions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">...</svg>
            </a> */}
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-8">
        &copy; {currentYear} XYZ Solutions Ltd. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;