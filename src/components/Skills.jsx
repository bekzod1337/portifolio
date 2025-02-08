import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (event) => {
      setMouseX(event.clientX / window.innerWidth - 0.5);
      setMouseY(event.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500", glow: "shadow-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500", glow: "shadow-blue-500" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400", glow: "shadow-yellow-400" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400", glow: "shadow-blue-400" },
    { name: "React.js", icon: <FaReact />, color: "text-cyan-400", glow: "shadow-cyan-400" },
    { name: "TailwindCSS", icon: <SiTailwindcss />, color: "text-teal-400", glow: "shadow-teal-400" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500", glow: "shadow-green-500" },
    { name: "Express.js", icon: <SiExpress />, color: "text-gray-500", glow: "shadow-gray-500" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600", glow: "shadow-green-600" },
    { name: "NestJS", icon: <FaJs />, color: "text-red-500", glow: "shadow-red-500" },
    { name: "MySQL", icon: <SiMysql />, color: "text-blue-700", glow: "shadow-blue-700" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-purple-500", glow: "shadow-purple-500" },
  ];

  return (
    <div className="py-10 px-5">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
        transition={{ duration: 1 }}
        className="text-4xl font-extrabold text-center mb-10 text-gray-300"
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: index * 0.1, // Har biri biroz kechikib paydo bo‘ladi
            }}
            className="flex flex-col items-center gap-2"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              animate={{
                y: [0, -5, 0, 5, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: Math.random() * 2,
                },
              }}
              style={{
                transform: `translate(${mouseX * 5}px, ${mouseY * 5}px)`,
              }}
              className={`relative text-5xl md:text-6xl p-6 rounded-xl bg-gray-800 hover:bg-opacity-70
                transition-all duration-300 ease-in-out hover:scale-110 ${skill.color}`}
            >
              <div
                className={`absolute -z-10 w-full h-full blur-xl opacity-30 ${skill.glow}`}
              ></div>
              {skill.icon}
            </motion.div>
            <p className="mt-2 text-lg font-medium text-gray-200">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
