import React from 'react';
import heroImg from "../components/reactimg.png"; // Ensure the correct path to your image

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center max-w-screen-2xl w-full mx-auto py-12 px-6 bg-emerald-200 text-black mt-12 md:flex-row md:justify-between">
      {/* Text Section */}
      <div className="max-w-xl text-left mb-4 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Are you looking for a Frontend Developer?</h1>
        <p className="text-lg md:text-xl mb-6">
          Creating stunning, functional websites with React. Explore my projects and see my passion for seamless user experiences.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-white text-black hover:text-white hover:bg-blue-800 px-6 py-3 rounded transition duration-300 ease-in-out">
            Download Resume
          </button>
          <button className="bg-transparent border-2 border-white text-black hover:bg-white hover:text-blue-600 px-6 py-3 rounded transition duration-300 ease-in-out">
            Preview Resume
          </button>
        </div>
      </div>

      {/* Image Section */}
      <img
        src={heroImg} // Replace with the actual path to your image
        alt="Developer Profile"
        className="w-full max-w-lg h-auto rounded-lg mt-6 md:mt-0 md:w-3/4"
      />
    </section>
  );
};

export default Hero;
