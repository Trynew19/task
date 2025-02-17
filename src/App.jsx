import React from 'react';
import { Route, Routes } from 'react-router'; // Make sure you're using react-router-dom v6
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <div>
      <Navbar /> {/* Navbar is displayed on all pages */}
      
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/contact" element={<ContactUs />} /> {/* Contact Us route */}
      </Routes>
      
      <Footer /> {/* Footer is displayed on all pages */}
    </div>
  );
};

export default App;
