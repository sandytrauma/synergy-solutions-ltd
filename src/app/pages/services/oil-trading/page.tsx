// pages/services/oil-trading.tsx
"use client"

import React from 'react';
import Layout from '@/app/components/Layout';
import { motion } from 'framer-motion';

const OilTradingServices: React.FC = () => {
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
        className="py-10 sm:py-12 text-center px-4"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-300 mb-3 sm:mb-4 leading-tight">Base & Distilled Oil Trading & Supply</h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
          We ensure a consistent and reliable supply of essential base and distilled oils for Oil Marketing Companies (OMCs), dealers, and transporters across India.
        </p>
      </motion.section>

      <hr className="border-gray-700 my-8 sm:my-12" />

      {/* Oil Procurement Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-8 px-4 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-300 mb-6 sm:mb-8">Oil Procurement & Quality Assurance</h2>
        <motion.ul
          className="list-disc list-inside space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-300 ml-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Diverse Grades:</strong> Sourcing and trading various grades of base oils (e.g., Group I, II, III) and distilled oils to meet diverse industry requirements.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Global Network:</strong> Leveraging a strong network of international and domestic suppliers to ensure competitive pricing and consistent availability.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Rigorous Quality Checks:</strong> All procured oils undergo strict quality testing to comply with international standards and client specifications.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Sustainable Practices:</strong> Committed to responsible sourcing and environmentally conscious trading practices.
          </motion.li>
        </motion.ul>
      </motion.section>

      <hr className="border-gray-700 my-8 sm:my-12" />

      {/* Supply & Logistics Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.3 }}
        className="py-8 px-4 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-300 mb-6 sm:mb-8">Supply Chain & Logistics</h2>
        <motion.ul
          className="list-disc list-inside space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-300 ml-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Direct Supply to OMCs & Dealers:</strong> Establishing robust contracts and delivery mechanisms with major Oil Marketing Companies and an extensive dealer network.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Direct-to-Transporter Solutions:</strong> Providing tailored supply solutions directly to large transport fleets, ensuring uninterrupted operations.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Efficient Logistics:</strong> Utilizing a strong logistics network for timely, secure, and cost-effective delivery across urban and remote areas.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Inventory Management for Clients:</strong> Offering advisory on inventory optimization to our clients to reduce their carrying costs and ensure availability.
          </motion.li>
        </motion.ul>
      </motion.section>
    </Layout>
  );
};

export default OilTradingServices;