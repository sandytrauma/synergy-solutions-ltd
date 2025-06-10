"use client"
// pages/index.tsx
import React from 'react';
import Layout from '@/app/components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Home: React.FC = () => {
  // Variants for image/visual animation within cards
  const cardImageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    hover: { scale: 1.05 } // Subtle zoom on hover
  };

  return (
    <Layout>
      <section className="text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-blue-300 mb-4"
        >
          Revolutionizing India's Transport & Automotive Sectors
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 mb-8"
        >
          Integrated Solutions for a Dynamic Industry
        </motion.p>
        <motion.div // Wrap Link in motion.div for animation
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Corrected href for Next.js App Router structure */}
          <Link href="/pages/services" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Learn More About Our Services
          </Link>
        </motion.div>
      </section>

      <hr className="border-gray-700 my-12" />

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="py-12"
      >
        <h2 className="text-4xl font-bold text-center text-blue-300 mb-8">Executive Summary</h2>
        <p className="text-lg text-gray-300 leading-relaxed text-justify max-w-3xl mx-auto">
          XYZ Solutions Ltd. is a newly formed, integrated enterprise poised to revolutionize the transport and automotive sectors in India. Leveraging the combined strengths of its founding partners, the company will operate across three synergistic verticals: a specialized Marketing Agency & Aggregator for OEM and aftermarket automotive parts, a Part Manufacturer & OEM Parts Trader for transporters, and a Base & Distilled Oil Trading entity, supplying to OMCs, dealers, and transporters. This comprehensive approach addresses critical supply chain gaps, enhances market reach for manufacturers, and ensures reliable access to essential commodities for the transport industry. With a robust financial foundation and clear strategic direction, XYZ Solutions Ltd. aims to become a dominant player in its chosen markets.
        </p>
      </motion.section>

      {/* --- Our Synergistic Verticals with Animated Diagrams/Moving Images --- */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="py-12"
      >
        <h2 className="text-4xl font-bold text-center text-blue-300 mb-12">Our Synergistic Verticals</h2>
        <div className="grid md:grid-cols-3 gap-8">
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
              className="w-32 h-32 mb-6 flex items-center justify-center rounded-full bg-blue-800/20 overflow-hidden"
            >
              {/* Placeholder for Animated Diagram/Icon for Marketing */}
              <img
                src="https://placehold.co/100x100/0f172a/60a5fa?text=Marketing" // Replace with actual animated SVG, GIF, or a small video
                alt="Marketing & Aggregation Diagram"
                className="w-full h-full object-contain p-2"
              />
              {/*
                For a direct SVG animation, you could embed SVG like this (ensure it's designed to animate):
                <svg className="w-20 h-20 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <motion.circle cx="12" cy="12" r="10" strokeDasharray="0 62.8" animate={{ strokeDasharray: "62.8 0" }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
                  <motion.path d="M12 2v10l-4 4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} />
                </svg>
              */}
            </motion.div>
            <h3 className="text-2xl font-semibold mb-3 text-blue-200">Automotive Parts Marketing & Aggregator</h3>
            <p className="text-gray-400">Assisting manufacturers in market penetration and providing an online marketplace for transporters.</p>
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
              className="w-32 h-32 mb-6 flex items-center justify-center rounded-full bg-blue-800/20 overflow-hidden"
            >
              {/* Placeholder for Moving Image/Icon for Manufacturing */}
              <img
                src="https://placehold.co/100x100/0f172a/60a5fa?text=Mfg" // Replace with actual animated GIF, a relevant image, or small video
                alt="Manufacturing & Trading Visual"
                className="w-full h-full object-contain p-2"
              />
            </motion.div>
            <h3 className="text-2xl font-semibold mb-3 text-blue-200">Parts Manufacturer & OEM Parts Trader</h3>
            <p className="text-gray-400">Manufacturing high-demand components and strategic sourcing of genuine OEM parts.</p>
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
              className="w-32 h-32 mb-6 flex items-center justify-center rounded-full bg-blue-800/20 overflow-hidden"
            >
              {/* Placeholder for Moving Image/Icon for Oil Trading */}
              <img
                src="https://placehold.co/100x100/0f172a/60a5fa?text=Oil" // Replace with actual animated GIF, a relevant image, or small video
                alt="Oil Trading Visual"
                className="w-full h-full object-contain p-2"
              />
            </motion.div>
            <h3 className="text-2xl font-semibold mb-3 text-blue-200">Base & Distilled Oil Trading & Supply</h3>
            <p className="text-gray-400">Procuring and supplying essential base and distilled oils to OMCs, dealers, and transporters.</p>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default Home;