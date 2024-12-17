import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaLaptopCode, FaLanguage } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiReact } from 'react-icons/si';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-gray-900 text-white py-10 px-5">
      <h2
        className={`text-3xl font-bold text-center mb-8 
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} 
          transition-all duration-1000 ease-out`}
      >
        About Me
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Personal Information Card */}
        <div
          className={`flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg 
            ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"} 
            transition-all duration-1000 ease-out`}
        >
          <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
          <p className="flex items-center mb-3">
            <FaMapMarkerAlt className="text-cyan-400 mr-2" />
            <span>17 Jiydakapa, Uychi, Namangan</span>
          </p>
          <p className="flex items-center mb-3">
            <FaLaptopCode className="text-cyan-400 mr-2" />
            <span>Full Stack Developer</span>
          </p>
          <p className="flex items-center">
            <FaLanguage className="text-cyan-400 mr-2" />
            <span>English, Uzbek, Russian</span>
          </p>
        </div>

        <div
          className={`flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg 
            ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"} 
            transition-all duration-1000 ease-out`}
        >
          <h3 className="text-xl font-semibold mb-4">Programming Languages & Frameworks</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <SiJavascript className="text-4xl text-yellow-400" />
              <span className="mt-2">JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTypescript className="text-4xl text-blue-400" />
              <span className="mt-2">TypeScript</span>
            </div>
            <div className="flex flex-col items-center">
              <SiReact className="text-4xl text-cyan-400" />
              <span className="mt-2">React.js</span>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg 
            ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"} 
            transition-all duration-1000 ease-out`}
        >
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <p className="mb-3">
            <strong>Email:</strong> <a href="mailto:example@email.com" className="text-cyan-400">example@email.com</a>
          </p>
          <p className="mb-3">
            <strong>Phone:</strong> +94 152 75 86
          </p>
          <p>
            <strong>Location:</strong> 17 Jiydakapa, Uychi, Namangan
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
