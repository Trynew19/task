import React from 'react';
import { FaHome, FaClipboardCheck, FaCheckCircle, FaBook, FaBell } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-500 p-4 flex justify-around text-white shadow-lg">
      <div className="flex flex-col items-center">
        <FaHome className="text-2xl mb-1" />
        <span className="text-sm">Home</span>
      </div>
      <div className="flex flex-col items-center">
        <FaClipboardCheck className="text-2xl mb-1" />
        <span className="text-sm">Compliance</span>
      </div>
      <div className="flex flex-col items-center">
        <FaCheckCircle className="text-2xl mb-1" />
        <span className="text-sm">Eligibility</span>
      </div>
      <div className="flex flex-col items-center">
        <FaBook className="text-2xl mb-1" />
        <span className="text-sm">Resources</span>
      </div>
      <div className="flex flex-col items-center">
        <FaBell className="text-2xl mb-1" />
        <span className="text-sm">Reminder</span>
      </div>
      
    </div>
  );
};

export default Footer;
