import React from 'react';
import SaminImg from "../components/samin.jpeg"; // Ensure the correct path to your image

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-screen-2xl w-full mx-auto p-8 border-2 border-gray-300 rounded-lg bg-blue-100" id="about">
      {/* Content Section */}
      <div className="about-content max-w-lg text-left mb-4 md:mb-0 md:mr-4">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">WHO AM I</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          I am Saminur Rahman, a passionate JavaScript developer with knowledge in some front-end technologies. I know JavaScript, React.js, and Frontend is my core expertise. I am also an expert in Tailwind CSS, DaisyUI, Bootstrap, and more CSS frameworks.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mb-4 md:mb-0">
        <img
          src={SaminImg} // Corrected way to use the imported image
          alt="Saminur Rahman"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-2 border-gray-300"
        />
      </div>
    </section>
  );
};

export default About;
