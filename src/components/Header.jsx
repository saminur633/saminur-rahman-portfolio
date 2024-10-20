import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollTo = (id) => {
    // Prevent scrolling if already loading
    if (loading) return;

    setLoading(true);
    // Close the menu after selection on mobile
    if (isOpen) {
      setIsOpen(false);
    }

    // Scroll to the selected section
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Simulate loading delay (adjust time as needed)
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <header className="flex items-center justify-between py-2 px-4 bg-blue-100 text-black fixed w-full z-50 shadow top-0">
      {/* Left Side - Logo */}
      <div className="text-2xl font-bold">Saminur Rahman</div>

      {/* Menu Toggle Button - Only visible on smaller screens */}
      <div className="md:hidden flex items-center cursor-pointer text-xl" onClick={toggleMenu}>
        <span>{isOpen ? '✕' : '☰'}</span>
      </div>

      {/* Navigation Links - Visible when toggled open on smaller screens or always visible on larger screens */}
      <nav
        className={`flex-col md:flex-row md:flex items-center absolute md:static w-full md:w-auto transition-all duration-300 ease-in-out ${
          isOpen ? 'top-16' : 'top-[-200px]'
        } bg-blue-100 md:bg-transparent`}
      >
        <ul className="list-none md:flex md:gap-4">
          {['home', 'projects', 'portfolio', 'about', 'contact'].map((section) => (
            <li key={section} className="mb-2 ml-4 md:ml-0">
              <a
                href={`#${section}`}
                onClick={() => handleScrollTo(section)}
                className={`text-black hover:text-gray-300 ${loading ? 'pointer-events-none opacity-50' : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
          {/* Schedule Call button inside the responsive menu */}
          <li className="mb-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded" disabled={loading}>
              Schedule Call
            </button>
          </li>
        </ul>

        {/* Loading Indicator */}
        {loading && (
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-60">
            <span className="text-white text-xl">Loading...</span>
          </div>
        )}

        {/* Icons visible on all screen sizes */}
        <div className={`md:flex items-center gap-4 ml-4 ${isOpen ? 'flex' : 'hidden md:flex'}`}>
          <a
            href="https://www.linkedin.com/in/saminurrahman/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/saminur633"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 text-xl"
          >
            <FaGithub />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
