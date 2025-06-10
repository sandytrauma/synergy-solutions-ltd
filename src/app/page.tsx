"use client"
// pages/index.tsx
import React from 'react';
import Layout from '@/app/components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Import Link from Next.js

const Home: React.FC = () => {
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
          <Link href="/services" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
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

      {/* Placeholder for "Our Synergistic Verticals" section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="py-12"
      >
        <h2 className="text-4xl font-bold text-center text-blue-300 mb-8">Our Synergistic Verticals</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.03, boxShadow: "0 10px 15px rgba(0,0,0,0.2)" }}
            className="bg-gray-800 p-6 rounded-lg text-center"
          >
            <h3 className="text-2xl font-semibold mb-3 text-blue-200">Automotive Parts Marketing & Aggregator</h3>
            <p className="text-gray-400">Assisting manufacturers in market penetration and providing an online marketplace for transporters.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03, boxShadow: "0 10px 15px rgba(0,0,0,0.2)" }}
            className="bg-gray-800 p-6 rounded-lg text-center"
          >
            <h3 className="text-2xl font-semibold mb-3 text-blue-200">Parts Manufacturer & OEM Parts Trader</h3>
            <p className="text-gray-400">Manufacturing high-demand components and strategic sourcing of genuine OEM parts.</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03, boxShadow: "0 10px 15px rgba(0,0,0,0.2)" }}
            className="bg-gray-800 p-6 rounded-lg text-center"
          >
            <h3 className="text-2xl font-semibold mb-3 text-blue-200">Base & Distilled Oil Trading & Supply</h3>
            <p className="text-gray-400">Procuring and supplying essential base and distilled oils to OMCs, dealers, and transporters.</p>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default Home;