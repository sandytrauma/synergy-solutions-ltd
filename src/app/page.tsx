"use client"

import React from 'react';
import Layout from '@/app/components/Layout';
import { motion } from 'framer-motion'; // Removed 'easeIn' as it's not directly used here
import Link from 'next/link';

const Home: React.FC = () => {
  // Variants for image/visual animation within cards
  const cardImageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    hover: { scale: 1.05 } // Subtle zoom on hover
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative text-center py-16 sm:py-20 rounded-md overflow-hidden min-h-[calc(100vh-theme(spacing.16))] sm:min-h-[calc(100vh-theme(spacing.20))]" // Added 'relative', 'rounded-md', 'overflow-hidden'
        style={{
          backgroundImage: `url(/base-distilled-oil/b-2.jpg)`, // <--- **YOUR LANDING PAGE IMAGE HERE**
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay div for background image opacity */}
        <div
          className="absolute inset-0 bg-zinc-600"
          style={{ opacity: 0.7 }} // Adjust this value for desired background transparency
        ></div>

        {/* Hero Section Content - Ensured to be above the overlay */}
        <div className="relative z-10 px-4 max-w-4xl mx-auto"> {/* Added 'relative z-10' */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-blue-300 mb-4 leading-tight"
          >
            Revolutionizing India's Transport & Automotive Sectors
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Integrated Solutions for a Dynamic Industry
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/pages/services" className="inline-block bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 transition-colors">
              Learn More About Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      <hr className="border-gray-700 my-8 sm:my-12" />

      {/* Executive Summary Section (Already has background image) */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="relative py-8 sm:py-12 px-4 rounded-md overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-lime-600"
          style={{ opacity: 0.2 }}
        ></div>
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-300 mb-6 sm:mb-8">
            Executive Summary
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-justify max-w-3xl mx-auto">
            XYZ Solutions Ltd. is a newly formed, integrated enterprise poised to
            revolutionize the transport and automotive sectors in India. Leveraging the
            combined strengths of its founding partners, the company will operate across
            three synergistic verticals: a specialized Marketing Agency & Aggregator for
            OEM and aftermarket automotive parts, a Part Manufacturer & OEM Parts Trader
            for transporters, and a Base & Distilled Oil Trading entity, supplying to
            OMCs, dealers, and transporters. This comprehensive approach addresses
            critical supply chain gaps, enhances market reach for manufacturers, and
            ensures reliable access to essential commodities for the transport industry.
            With a robust financial foundation and clear strategic direction, XYZ
            Solutions Ltd. aims to become a dominant player in its chosen markets.
          </p>
        </div>
      </motion.section>

      {/* Our Synergistic Verticals Section with Animated Diagrams/Moving Images */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="py-8 sm:py-12 px-4"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-300 mb-8 sm:mb-12">Our Synergistic Verticals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Vertical 1: Automotive Parts Marketing & Aggregator */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg text-center flex flex-col items-center justify-between shadow-lg"
            whileHover={{ scale: 1.03, boxShadow: "0 15px 25px rgba(0,0,0,0.3)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              variants={cardImageVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.7 }}
              className="w-28 h-28 sm:w-32 sm:h-32 mb-4 sm:mb-6 flex items-center justify-center rounded-full bg-blue-800/20 overflow-hidden"
            >
              <img
                src="/oem-parts/oe-3M.jpg"
                alt="Marketing & Aggregation Diagram"
                className="w-full h-full object-cover rounded-full p-2"
              />
            </motion.div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-blue-200">Automotive Parts Marketing & Aggregator</h3>
            <p className="text-sm sm:text-base text-gray-400">Assisting manufacturers in market penetration and providing an online marketplace for transporters.</p>
          </motion.div>

          {/* Vertical 2: Parts Manufacturer & OEM Parts Trader */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg text-center flex flex-col items-center justify-between shadow-lg"
            whileHover={{ scale: 1.03, boxShadow: "0 15px 25px rgba(0,0,0,0.3)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              variants={cardImageVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.7 }}
              className="w-28 h-28 sm:w-32 sm:h-32 mb-4 sm:mb-6 flex items-center justify-center rounded-full bg-blue-800/20 overflow-hidden"
            >
              <img
                src="/oem-parts/oe-2.jpg"
                alt="Manufacturing & Trading Visual"
                className="w-full h-full object-cover rounded-full p-2"
              />
            </motion.div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-blue-200">Parts Manufacturer & OEM Parts Trader</h3>
            <p className="text-sm sm:text-base text-gray-400">Manufacturing high-demand components and strategic sourcing of genuine OEM parts.</p>
          </motion.div>

          {/* Vertical 3: Base & Distilled Oil Trading & Supply */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg text-center flex flex-col items-center justify-between shadow-lg"
            whileHover={{ scale: 1.03, boxShadow: "0 15px 25px rgba(0,0,0,0.3)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              variants={cardImageVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.7 }}
              className="w-28 h-28 sm:w-32 sm:h-32 mb-4 sm:mb-6 flex items-center justify-center rounded-full bg-blue-800/20 overflow-hidden"
            >
              <img
                src="/base-distilled-oil/b-3.jpg"
                alt="Oil Trading Visual"
                className="w-full h-full object-cover rounded-full p-2"
              />
            </motion.div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-blue-200">Base & Distilled Oil Trading & Supply</h3>
            <p className="text-sm sm:text-base text-gray-400">Procuring and supplying essential base and distilled oils to OMCs, dealers, and transporters.</p>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default Home;