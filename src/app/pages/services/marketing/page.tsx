"use client"
// pages/services/marketing.tsx
import React from 'react';
import Layout from '@/app/components/Layout'; // Using the alias for consistency
import { motion } from 'framer-motion';

const MarketingServices: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-10 sm:py-12 text-center px-4" // Responsive padding
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-300 mb-3 sm:mb-4 leading-tight">Automotive Parts Marketing Agency & Aggregator</h1> {/* Responsive font size */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"> {/* Responsive font size */}
          We bridge the gap between manufacturers and the Indian transport market through strategic marketing and a streamlined aggregation platform.
        </p>
      </motion.section>

      <hr className="border-gray-700 my-8 sm:my-12" /> {/* Responsive margin */}

      {/* B2B Marketing Services Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-8 px-4 max-w-4xl mx-auto" // Responsive padding and max-width for content
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-300 mb-6 sm:mb-8">B2B Marketing Services</h2> {/* Responsive font size */}
        <motion.ul
          className="list-disc list-inside space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-300 ml-4" // Responsive font size and spacing
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Market Entry Strategy:</strong> Assisting new and existing OEM and aftermarket part manufacturers in penetrating the Indian transport market.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Digital Marketing Campaigns:</strong> SEO, SEM, content marketing (e.g., whitepapers, case studies, technical blogs for parts), social media management (especially LinkedIn for B2B), and email marketing to reach fleet owners, transport managers, and part dealers.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Brand Building & Awareness:</strong> Developing strong brand narratives and increasing visibility for part manufacturers.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Lead Generation & Nurturing:</strong> Implementing strategies to identify and qualify leads for part sales.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Exhibition & Event Marketing:</strong> Representing part manufacturers at industry trade shows and events.
          </motion.li>
        </motion.ul>
      </motion.section>

      <hr className="border-gray-700 my-8 sm:my-12" /> {/* Responsive margin */}

      {/* Parts Aggregation Platform Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.3 }} // Slightly delayed for a nicer flow
        className="py-8 px-4 max-w-4xl mx-auto" // Responsive padding and max-width for content
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-300 mb-6 sm:mb-8">Parts Aggregation Platform</h2> {/* Responsive font size */}
        <motion.ul
          className="list-disc list-inside space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-300 ml-4" // Responsive font size and spacing
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Online Marketplace:</strong> Developing a user-friendly digital platform where transport companies can browse, compare, and purchase a wide range of genuine OEM and quality aftermarket parts from various manufacturers.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Price Transparency:</strong> Offering competitive pricing and facilitating bulk purchasing options.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Logistics Integration:</strong> Partnering with logistics providers for efficient, trackable, and timely delivery of parts across India.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Quality Assurance:</strong> Implementing a vetting process for listed suppliers to ensure authenticity and quality of parts.
          </motion.li>
        </motion.ul>
      </motion.section>
    </Layout>
  );
};

export default MarketingServices;