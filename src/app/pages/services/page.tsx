"use client"
// pages/services.tsx
import React from 'react';
import Layout from '@/app/components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Services: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-300 mb-3 sm:mb-4 leading-tight">Our Comprehensive Solutions</h1> {/* Responsive font size */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"> {/* Responsive font size */}
          XYZ Solutions Ltd. offers a distinct portfolio across three core business units, designed to address critical needs in the transport and automotive sectors.
        </p>
      </motion.section>

      <hr className="border-gray-700 my-8 sm:my-12" /> {/* Responsive margin */}

      {/* Services Cards Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 py-8 px-4" // Responsive grid and padding
      >
        <Link href="/pages/services/marketing" passHref> {/* Corrected href for App Router */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 15px rgba(0,0,0,0.2)" }}
            className="block bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl text-center cursor-pointer transform transition-transform duration-200" // Responsive padding
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-200 mb-3 sm:mb-4">Automotive Parts Marketing Agency & Aggregator</h2> {/* Responsive font size */}
            <p className="text-base sm:text-lg text-gray-400 mb-4 sm:mb-6"> {/* Responsive font size */}
              Assisting new and existing OEM and aftermarket part manufacturers in penetrating the Indian transport market through B2B marketing services and an online aggregation platform.
            </p>
            <span className="text-blue-400 hover:text-blue-300 font-semibold text-base sm:text-lg">Learn More &rarr;</span> {/* Responsive font size */}
          </motion.div>
        </Link>

        <Link href="/pages/services/manufacturing" passHref> {/* Corrected href for App Router */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 15px rgba(0,0,0,0.2)" }}
            className="block bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl text-center cursor-pointer transform transition-transform duration-200"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-200 mb-3 sm:mb-4">Automotive Parts Manufacturer & OEM Parts Trader</h2>
            <p className="text-base sm:text-lg text-gray-400 mb-4 sm:mb-6">
              Manufacturing high-demand, non-complex automotive parts and strategically sourcing genuine OEM parts with robust inventory and nationwide distribution.
            </p>
            <span className="text-blue-400 hover:text-blue-300 font-semibold text-base sm:text-lg">Learn More &rarr;</span>
          </motion.div>
        </Link>

        <Link href="/pages/services/oil-trading" passHref> {/* Corrected href for App Router */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 15px rgba(0,0,0,0.2)" }}
            className="block bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl text-center cursor-pointer transform transition-transform duration-200"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-200 mb-3 sm:mb-4">Base & Distilled Oil Trading & Supply</h2>
            <p className="text-base sm:text-lg text-gray-400 mb-4 sm:mb-6">
              Procuring various grades of base and distilled oils and establishing contracts with major OMCs, dealers, and direct supply to transporters.
            </p>
            <span className="text-blue-400 hover:text-blue-300 font-semibold text-base sm:text-lg">Learn More &rarr;</span>
          </motion.div>
        </Link>
      </motion.section>
    </Layout>
  );
};

export default Services;