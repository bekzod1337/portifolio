import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiTypescript, SiMysql, SiPostgresql } from 'react-icons/si';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, hoverClass: "hover:text-orange-500 hover:shadow-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt />, hoverClass: "hover:text-blue-500 hover:shadow-blue-500" },
    { name: "JavaScript", icon: <FaJs />, hoverClass: "hover:text-yellow-400 hover:shadow-yellow-400" },
    { name: "TypeScript", icon: <SiTypescript />, hoverClass: "hover:text-blue-400 hover:shadow-blue-400" },
    { name: "React.js", icon: <FaReact />, hoverClass: "hover:text-cyan-400 hover:shadow-cyan-400" },
    { name: "TailwindCSS", icon: <SiTailwindcss />, hoverClass: "hover:text-teal-400 hover:shadow-teal-400" },
    { name: "Node.js", icon: <FaNodeJs />, hoverClass: "hover:text-green-500 hover:shadow-green-500" },
    { name: "Express.js", icon: <SiExpress />, hoverClass: "hover:text-gray-500 hover:shadow-gray-500" },
    { name: "MongoDB", icon: <SiMongodb />, hoverClass: "hover:text-green-600 hover:shadow-green-600" },
    { name: "NestJS", icon: <FaJs />, hoverClass: "hover:text-red-500 hover:shadow-red-500" },
    { name: "MySQL", icon: <SiMysql />, hoverClass: "hover:text-blue-700 hover:shadow-blue-700" },
    { name: "PostgreSQL", icon: <SiPostgresql />, hoverClass: "hover:text-purple-500 hover:shadow-purple-500" },
  ];

  return (
    <div className="py-10 px-5 bg-gray-900 text-white">
      <h2
        className={`text-3xl font-bold text-center mb-8
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          transition-all duration-1000 ease-out`}
      >
        My Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col items-center
              ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
              transition-all duration-1000 ease-out`}
          >
            <div
              className={`text-6xl p-4 rounded-full bg-gray-800 transition-all duration-300 ease-in-out
                hover:shadow-lg ${skill.hoverClass}`}
            >
              {skill.icon}
            </div>
            <p className="mt-3 text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
