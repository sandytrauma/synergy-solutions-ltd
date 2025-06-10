"use client"

// pages/contact.tsx
import React, { useState } from 'react';
import Layout from '@/app/components/Layout';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  // Define state types for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Define event type for input change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Define event type for form submission handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send this data to an API
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
  };

  const inputVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.01 },
    // Using Tailwind's ring classes for focus states directly on input for better browser compatibility
    // and maintaining the animation via Framer Motion for `scale`.
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
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-300 mb-3 sm:mb-4 leading-tight">Get in Touch with XYZ Solutions</h1> {/* Responsive font size */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"> {/* Responsive font size */}
          We're here to help you revolutionize your transport and automotive operations.
        </p>
      </motion.section>

      <hr className="border-gray-700 my-8 sm:my-12" /> {/* Responsive margin */}

      {/* Contact Form & Info Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="py-8 px-4" // Responsive padding
      >
        <div className="max-w-3xl mx-auto bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl"> {/* Responsive padding */}
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-300 mb-6 sm:mb-8 text-center">Contact Us</h2> {/* Responsive font size */}
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6"> {/* Responsive spacing */}
            <motion.div variants={inputVariants} initial="rest" whileHover="hover">
              <label htmlFor="name" className="block text-gray-300 text-base sm:text-lg font-semibold mb-2">Name</label> {/* Responsive font size */}
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 sm:p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-base" // Responsive padding and font size
              />
            </motion.div>

            <motion.div variants={inputVariants} initial="rest" whileHover="hover">
              <label htmlFor="email" className="block text-gray-300 text-base sm:text-lg font-semibold mb-2">Email</label> {/* Responsive font size */}
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 sm:p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-base" // Responsive padding and font size
              />
            </motion.div>

            <motion.div variants={inputVariants} initial="rest" whileHover="hover">
              <label htmlFor="subject" className="block text-gray-300 text-base sm:text-lg font-semibold mb-2">Subject</label> {/* Responsive font size */}
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-2 sm:p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-base" // Responsive padding and font size
              />
            </motion.div>

            <motion.div variants={inputVariants} initial="rest" whileHover="hover">
              <label htmlFor="message" className="block text-gray-300 text-base sm:text-lg font-semibold mb-2">Message</label> {/* Responsive font size */}
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full p-2 sm:p-3 rounded-lg bg-gray-700 text-gray-100 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-base" // Responsive padding and font size
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 text-white font-semibold text-base sm:text-lg py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200" // Responsive font size
            >
              Send Message
            </motion.button>
          </form>

          <div className="text-center mt-8 sm:mt-12 text-gray-300 text-sm sm:text-base"> {/* Responsive margin and font size */}
            <p className="mb-2"><strong>Email:</strong> info@xyzsolutions.com</p>
            <p className="mb-2"><strong>Phone:</strong> +91 11 1234 5678 (example)</p>
            <p><strong>Address:</strong> [Office Address], New Delhi, Delhi NCR, India</p>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default Contact;