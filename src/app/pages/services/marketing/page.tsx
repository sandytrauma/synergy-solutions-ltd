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
            <strong className="text-blue-200">Market Entry Strategy:</strong> Assisting new and existing OEM and aftermarket part manufacturers in penetrating the Indian transport market. This includes market research, competitive analysis, and strategic positioning.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Digital Marketing Campaigns:</strong> Comprehensive strategies covering SEO, SEM, content marketing (e.g., in-depth whitepapers, success-driven case studies, technical blogs focused on automotive parts), robust social media management (with a strong emphasis on LinkedIn for B2B engagement), and targeted email marketing to effectively reach fleet owners, transport managers, and part dealers.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Brand Building & Awareness:</strong> Crafting compelling brand narratives, developing strong visual identities, and increasing visibility for part manufacturers across relevant channels to establish trust and recognition.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Lead Generation & Nurturing:</strong> Implementing advanced strategies to identify, qualify, and nurture high-potential leads for consistent part sales, including CRM integration and automated follow-up sequences.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Exhibition & Event Marketing:</strong> Professional representation of part manufacturers at key industry trade shows, conferences, and exclusive B2B events to foster direct connections and showcase products.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Channel Partner Development:</strong> Strategies for identifying, recruiting, and supporting a network of distributors, dealers, and service centers across India.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Analytics & Reporting:</strong> Providing detailed performance analytics and regular reports on marketing campaign effectiveness, ROI, and market insights to drive continuous improvement.
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
            <strong className="text-blue-200">Online Marketplace:</strong> Developing a user-friendly digital platform where transport companies can browse, compare, and purchase a wide range of genuine OEM and quality aftermarket parts from various manufacturers, complete with detailed product specifications and images.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Price Transparency & Bulk Purchasing:</strong> Offering competitive and transparent pricing, along with flexible options for bulk purchasing and corporate accounts to streamline procurement.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Logistics Integration:</strong> Seamlessly partnering with a robust network of logistics providers for efficient, real-time trackable, and timely delivery of parts across every corner of India, ensuring minimal downtime for vehicles.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Quality Assurance:</strong> Implementing a rigorous multi-stage vetting process for all listed suppliers and their products to guarantee the authenticity, quality, and performance of every part sold on the platform.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Customer Support & After-Sales:</strong> Dedicated support for inquiries, order tracking, and post-purchase assistance to ensure complete customer satisfaction.
          </motion.li>
        </motion.ul>
      </motion.section>

      <hr className="border-gray-700 my-8 sm:my-12" />

      {/* Our Expertise in Action (Image Gallery) Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.5 }} // Slightly delayed for a nicer flow
        className="py-8 px-4 max-w-6xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-300 mb-6 sm:mb-8 text-center">Our Expertise in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* B2B Marketing Image */}
          <motion.div variants={listItemVariants} className="overflow-hidden rounded-lg shadow-md">
            <img
              src="/brand-building/bb-1.jpg" // Replace with your actual image
              alt="B2B Marketing Strategy Session"
              className="w-full h-full rounded-md object-cover"
            />
          </motion.div>

          {/* Digital Marketing Campaign Image */}
          <motion.div variants={listItemVariants} transition={{ delay: 0.1 }} className="overflow-hidden rounded-lg shadow-md">
            <img
              src="/brand-building/bb-2.jpg" // Replace with your actual image
              alt="Digital Marketing Campaign Analytics"
              className="w-full h-full rounded-md object-cover"
            />
          </motion.div>

          {/* Brand Building Image */}
          <motion.div variants={listItemVariants} transition={{ delay: 0.2 }} className="overflow-hidden rounded-lg shadow-md">
            <img
              src="/brand-building/bb-4.jpg" // Replace with your actual image
              alt="Brand Identity Development"
              className="w-full h-full rounded-md object-cover"
            />
          </motion.div>

          {/* Parts Aggregation Platform - Marketplace */}
          <motion.div variants={listItemVariants} transition={{ delay: 0.3 }} className="overflow-hidden rounded-lg shadow-md">
            <img
              src="/brand-building/bb-3.jpg" // Replace with your actual image
              alt="Online Marketplace Interface"
              className="w-full h-full rounded-md object-cover"
            />
          </motion.div>

          {/* Parts Aggregation Platform - Logistics */}
          <motion.div variants={listItemVariants} transition={{ delay: 0.4 }} className="overflow-hidden rounded-lg shadow-md">
            <img
              src="/brand-building/bb-5.jpg" // Replace with your actual image
              alt="Parts Delivery and Logistics Network"
              className="w-full h-full rounded-md object-cover"
            />
          </motion.div>

          {/* Why Choose Us - Expertise */}
          <motion.div variants={listItemVariants} transition={{ delay: 0.5 }} className="overflow-hidden rounded-lg shadow-md">
            <img
              src="/brand-building/bb-6.jpg" // Replace with your actual image
              alt="Team Meeting and Industry Insights"
              className="w-full h-full rounded-md object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      <hr className="border-gray-700 my-8 sm:my-12" />

      {/* Why Choose Us Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.5 }} // Slightly delayed for a nicer flow
        className="py-8 px-4 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-300 mb-6 sm:mb-8">Why Choose Us?</h2>
        <motion.ul
          className="list-disc list-inside space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-300 ml-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Deep Industry Expertise:</strong> Our team possesses extensive knowledge of the Indian automotive and transport sectors, ensuring tailored and effective strategies.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Integrated Approach:</strong> We offer a unique blend of marketing services and an aggregation platform, providing a holistic solution for manufacturers and buyers.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Data-Driven Strategies:</strong> All our marketing efforts are backed by data analysis and market insights to ensure optimal performance and ROI.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Pan-India Reach:</strong> Leveraging our network and logistics partnerships, we help manufacturers achieve unparalleled reach across the diverse Indian market.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong className="text-blue-200">Commitment to Quality:</strong> From marketing execution to aggregated parts, we prioritize quality and authenticity in every aspect of our service.
          </motion.li>
        </motion.ul>
      </motion.section>

      <hr className="border-gray-700 my-8 sm:my-12" />

      {/* Call to Action Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="py-10 sm:py-12 text-center px-4"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-300 mb-4">Ready to Grow Your Automotive Parts Business in India?</h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
          Contact us today to learn how our specialized marketing services and aggregation platform can drive your success.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out"
        >
          Get in Touch
        </motion.button>
      </motion.section>
    </Layout>
  );
};

export default MarketingServices;