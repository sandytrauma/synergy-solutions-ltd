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
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12 text-center"
      >
        <h1 className="text-5xl font-bold text-blue-300 mb-8">Our Comprehensive Solutions</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          XYZ Solutions Ltd. offers a distinct portfolio across three core business units, designed to address critical needs in the transport and automotive sectors.
        </p>
      </motion.section>

      <hr className="border-gray-700 my-12" />

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.3 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-12"
      >
        <Link href="/services/marketing" passHref>
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 15px rgba(0,0,0,0.2)" }}
            className="block bg-gray-800 p-8 rounded-lg shadow-xl text-center cursor-pointer transform transition-transform duration-200"
          >
            <h2 className="text-3xl font-bold text-blue-200 mb-4">Automotive Parts Marketing Agency & Aggregator</h2>
            <p className="text-gray-400 mb-6">
              Assisting new and existing OEM and aftermarket part manufacturers in penetrating the Indian transport market through B2B marketing services and an online aggregation platform.
            </p>
            <span className="text-blue-400 hover:text-blue-300 font-semibold">Learn More &rarr;</span>
          </motion.div>
        </Link>

        <Link href="/services/manufacturing" passHref>
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 15px rgba(0,0,0,0.2)" }}
            className="block bg-gray-800 p-8 rounded-lg shadow-xl text-center cursor-pointer transform transition-transform duration-200"
          >
            <h2 className="text-3xl font-bold text-blue-200 mb-4">Automotive Parts Manufacturer & OEM Parts Trader</h2>
            <p className="text-gray-400 mb-6">
              Manufacturing high-demand, non-complex automotive parts and strategically sourcing genuine OEM parts with robust inventory and nationwide distribution.
            </p>
            <span className="text-blue-400 hover:text-blue-300 font-semibold">Learn More &rarr;</span>
          </motion.div>
        </Link>

        <Link href="/services/oil-trading" passHref>
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 15px rgba(0,0,0,0.2)" }}
            className="block bg-gray-800 p-8 rounded-lg shadow-xl text-center cursor-pointer transform transition-transform duration-200"
          >
            <h2 className="text-3xl font-bold text-blue-200 mb-4">Base & Distilled Oil Trading & Supply</h2>
            <p className="text-gray-400 mb-6">
              Procuring various grades of base and distilled oils and establishing contracts with major OMCs, dealers, and direct supply to transporters.
            </p>
            <span className="text-blue-400 hover:text-blue-300 font-semibold">Learn More &rarr;</span>
          </motion.div>
        </Link>
      </motion.section>
    </Layout>
  );
};

export default Services;