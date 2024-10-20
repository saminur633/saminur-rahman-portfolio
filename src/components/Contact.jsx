import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-start p-12 bg-gray-100" id="contact">
      {/* Main Container with Border and Inner Padding */}
      <div className="flex flex-col md:flex-row w-full border border-blue-600 rounded-lg shadow-md p-6">
        {/* Left Side Information */}
        <div className="flex flex-col items-start mb-8 md:mb-0 md:mr-8 bg-white w-full md:w-1/2 p-4"> {/* Added inner padding */}
          <h2 className="text-3xl font-bold mb-4">Chat with me</h2>
          <p className="mb-2">I am here to help with your project</p>
          <p className="mb-4">Email: rahmansaminur51@gmail.com</p>
          <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
          <p className="mb-4">Nikunjo-2, Dhaka, Bangladesh</p>
          <h3 className="text-xl font-semibold mb-2">Call Us</h3>
          <p className="mb-4">Always available: +880 1748524935</p>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-600 text-2xl hover:text-blue-800" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-600 text-2xl hover:text-blue-800" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-gray-800 text-2xl hover:text-black" />
            </a>
          </div>
        </div>

        {/* Right Side Contact Form */}
        <div className="w-full md:w-1/2 p-4 bg-sky-900"> {/* Added inner padding */}
          <h2 className="text-3xl font-bold mb-4 text-white">Have an idea? As a web developer, I can help bring it to life!</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="p-2 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Your Message"
              required
              className="p-2 border border-gray-300 rounded h-32 resize-none"
            ></textarea>
            <button
              type="submit"
              className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
