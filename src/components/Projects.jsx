import React, { useEffect, useRef, useState } from 'react';
import HTMLIMG from "../components/html.png";
import CSS3IMG from "../components/css3.png";
import JAVASCRIPTIMG from "../components/javascript.png";
import TAILWINDIMG from "../components/tailwind.png";
import REACTIMG from "../components/reactimg.png";
import BOOTSTRAPIMG from "../components/bootstrap.jpg";
import DAISYUIIMG from "../components/daisyui.png";
import MYSQLIMG from "../components/mysql.png";
import GITHUBIMG from "../components/github.png";
// Import Firebase images
 // Make sure to add the Firebase image in your components folder

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top, bottom } = projectsRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight && bottom > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const technologies = [
    { src: "https://i.ibb.co/zVrvz5F/html.png", label: "HTML5" },
    { src: "https://i.ibb.co/Wybqmtm/css-3.png", label: "CSS3" },
    { src: "https://i.ibb.co/jG4bx92/js.png", label: "JavaScript" },
    { src: "https://i.ibb.co/7WRW6dt/atom.png", label: "React.js" },
    { src: "https://i.ibb.co/9pJ5L19/tailwind-css-icon.png", label: "Tailwind" },
    { src: "https://i.ibb.co/T0qmV7d/bootstrap-4-icon.png", label: "Bootstrap" },
    { src: DAISYUIIMG, label: "DaisyUI" },
    { src: "https://i.ibb.co/CMqZgF9/mysql.png", label: "MYSQL" },
    { src: "https://i.ibb.co/yW77K9T/github-sign.png", label: "Github" },
    { src: "https://i.ibb.co/4Tfq1p9/1175544-firebase-google-icon.png", label: "Firebase" }, // Add Firebase technology here
  ];

  return (
    <section ref={projectsRef} className="flex flex-col items-center py-12 bg-gray-100" id="projects">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-8 text-gray-800">My Technology Stack</h2>

      {/* Image grid representing your expertise */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {technologies.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center border-4 border-gray-300 rounded-lg p-4 
              ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'} transition-all duration-700 
              hover:bg-gray-200 hover:scale-105 hover:shadow-lg`} // Add hover effects
            style={{ transitionDelay: `${index * 200}ms` }} // Stagger delay for each item
          >
            <img src={item.src} alt={item.label} className="w-12 h-12 object-cover" /> {/* Adjust image size */}
            <span className="mt-2 text-lg font-semibold">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
