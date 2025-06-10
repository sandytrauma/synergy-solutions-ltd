// pages/services/manufacturing.tsx
"use client"

import React from 'react';
import Layout from '@/app/components/Layout';
import { motion } from 'framer-motion';

const ManufacturingServices: React.FC = () => {
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
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-300 mb-3 sm:mb-4 leading-tight">Automotive Parts Manufacturing & OEM Trading</h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
          We combine in-house manufacturing capabilities with strategic OEM parts trading to ensure a reliable supply chain for the transport sector.
        </p>
      </motion.section>

      <hr className="border-gray-700 my-8 sm:my-12" />

      {/* Parts Manufacturing Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-8 px-4 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-300 mb-6 sm:mb-8">Our Manufacturing Capabilities</h2>
        <motion.ul
          className="list-disc list-inside space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-300 ml-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">High-Demand Components:</strong> Focusing on manufacturing non-complex yet essential automotive parts that have high demand in the Indian transport industry.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Quality Control:</strong> Implementing rigorous quality checks at every stage of the manufacturing process to ensure durability and performance.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Cost Efficiency:</strong> Leveraging efficient production processes to offer competitive pricing without compromising on quality.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Scalable Production:</strong> Our facilities are designed to scale production to meet fluctuating market demands.
          </motion.li>
        </motion.ul>
      </motion.section>

      <hr className="border-gray-700 my-8 sm:my-12" />

      {/* OEM Parts Trading Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.3 }}
        className="py-8 px-4 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-300 mb-6 sm:mb-8">OEM Parts Trading & Distribution</h2>
        <motion.ul
          className="list-disc list-inside space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-300 ml-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Strategic Sourcing:</strong> Direct procurement of genuine OEM parts from leading manufacturers to ensure authenticity and reliability.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Robust Inventory Management:</strong> Maintaining optimal stock levels for critical parts to minimize downtime for transporters.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Nationwide Distribution Network:</strong> Efficient logistics and warehousing to ensure timely delivery across India.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Competitive Pricing:</strong> Offering attractive pricing for OEM parts through direct relationships and bulk purchasing power.
          </motion.li>
        </motion.ul>
      </motion.section>
    </Layout>
  );
};

export default ManufacturingServices;