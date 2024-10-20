import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center p-4 border-t border-gray-300 bg-gray-100">
      {/* Left Side Name */}
      <span className="text-2xl font-bold text-purple-600 mb-2 md:mb-0">Saminur</span>

      {/* Right Side Text */}
      <p className="text-gray-700 text-center md:text-right">
        © 2024 <strong>Saminur Rahman</strong>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
