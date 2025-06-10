"use client"
// pages/company.tsx
import React from 'react';
import Layout from '@/app/components/Layout';
import { motion } from 'framer-motion';

const Company: React.FC = () => {
  const valueItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12 text-center"
      >
        <h1 className="text-5xl font-bold text-blue-300 mb-8">About XYZ Solutions Ltd.</h1>
      </motion.section>

      <hr className="border-gray-700 my-12" />

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="py-8"
      >
        <h2 className="text-4xl font-bold text-center text-blue-300 mb-8">Company Description</h2>
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300">
          <p><strong className="text-blue-200">Legal Name:</strong> XYZ Solutions Ltd. (Proposed)</p>
          <p><strong className="text-blue-200">Type of Business:</strong> Private Limited Company (initially formed by Partner A and Partner B, with Partner C's firm venturing in)</p>
          <p><strong className="text-blue-200">Location:</strong> New Delhi, Delhi NCR for central access to markets and logistics hubs</p>
        </div>
      </motion.section>

      <hr className="border-gray-700 my-12" />

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="py-8"
      >
        <h2 className="text-4xl font-bold text-center text-blue-300 mb-8">Our Vision</h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto text-center">
          To be the most trusted and integrated solutions provider for the transport and automotive industry in India, driving efficiency, innovation, and sustainable growth for our partners and clients.
        </p>
      </motion.section>

      <hr className="border-gray-700 my-12" />

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="py-8"
      >
        <h2 className="text-4xl font-bold text-center text-blue-300 mb-8">Our Mission</h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto text-center">
          To empower the transport ecosystem by delivering superior marketing and aggregation services for automotive parts, manufacturing high-quality components, ensuring reliable trade of OEM parts, and providing consistent supply of base and distilled oils, all while upholding the highest standards of quality and service.
        </p>
      </motion.section>

      <hr className="border-gray-700 my-12" />

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
        className="py-8"
      >
        <h2 className="text-4xl font-bold text-center text-blue-300 mb-8">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { name: "Integrity & Trust", desc: "Building lasting relationships through transparency and ethical conduct." },
            { name: "Customer Centricity", desc: "Prioritizing client needs and delivering exceptional value." },
            { name: "Innovation", desc: "Continuously seeking advanced solutions and market-leading practices. Fostering collaboration internally and with external partners for mutual success." },
            { name: "Excellence", desc: "Committing to the highest quality in products and services." },
          ].map((value, index) => (
            <motion.div
              key={index}
              variants={valueItemVariants}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-2xl font-semibold text-blue-200 mb-3">{value.name}</h3>
              <p className="text-gray-400">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </Layout>
  );
};

export default Company;