import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa'; // React Icons for Email & Phone

const ContactUs = () => {
  return (
    <div className="max-w-screen-sm mx-auto p-4">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Contact Us</h1>
      
      {/* Contact Info */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-xl text-gray-700" />
          <span className="text-gray-700 text-sm">Email: contact@domain.com</span>
        </div>
        <div className="flex items-center gap-3">
          <FaPhone className="text-xl text-gray-700" />
          <span className="text-gray-700 text-sm">Phone: (123) 456-7890</span>
        </div>
      </div>

      {/* Contact Form */}
      <form className="flex flex-col gap-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2">Message:</label>
          <textarea
            id="message"
            placeholder="Your Message"
            className="p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="5"
          />
        </div>
        
       
      </form>
    </div>
  );
};

export default ContactUs;
