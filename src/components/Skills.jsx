import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiTypescript, SiMysql, SiPostgresql } from "react-icons/si";
import { Audiophile, Background, Boldo, Card, Herculas, Youtube } from "../images";

const projects = [
  {
    name: "Herculas",
    category: "Real Project, Teamwork",
    image: Herculas,
    demoLink: "https://hercules-iota.vercel.app/",
    githubLink: "https://github.com/mustafo-coder/hercules.git",
  },
  {
    name: "Boldo",
    category: "Teamwork",
    image: Boldo,
    demoLink: "https://boldo-figma.vercel.app/",
    githubLink: "https://github.com/mrphoenixUz/Boldo---Figma.git",
  },
  {
    name: "Youtube clone",
    category: "Demo Project",
    image: Youtube,
    demoLink: "https://bekzod-bektube.vercel.app/",
    githubLink: "https://github.com/bekzod1337/youtube-clone.git",
  },
  {
    name: "Beautiful Background",
    category: "Demo Project",
    image: Background,
    demoLink: "https://bekzod-background.vercel.app/",
    githubLink: "https://github.com/bekzod1337/Background.git",
  },
  {
    name: "Card Generator",
    category: "Demo Project",
    image: Card,
    demoLink: "https://bekzod-card-generator.vercel.app/",
    githubLink: "https://github.com/bekzod1337/Card-generator.git",
  },
  {
    name: "Audiophile",
    category: "Demo Project",
    image: Audiophile,
    demoLink: "https://bekzod-audiophile.vercel.app/",
    githubLink: "https://github.com/bekzod1337/audiophile.git",
  },
];

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
  { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
  { name: "TailwindCSS", icon: <SiTailwindcss />, color: "text-teal-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Express.js", icon: <SiExpress />, color: "text-gray-500" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
  { name: "MySQL", icon: <SiMysql />, color: "text-blue-700" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-purple-500" },
];

const Skills = () => {
  return (
    <div className="py-10 px-5 mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-extrabold text-center mb-10 text-gray-300"
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
          >
            <img src={project.image} alt={project.name} className="w-full h-56 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-white">{project.name}</h3>
              <p className="text-sm text-gray-400">{project.category}</p>
              <div className="mt-4 flex gap-4">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-blue-500 rounded-lg bg-blue-900 text-blue-400 hover:bg-blue-800 hover:text-white transition">
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-gray-500 rounded-lg bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-white transition">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-extrabold text-center mt-16 mb-10 text-gray-300"
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center gap-2"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`text-5xl p-6 rounded-xl bg-gray-800 ${skill.color}`}
            >
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