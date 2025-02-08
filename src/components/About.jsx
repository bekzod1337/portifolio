import React from "react";
import { FaMapMarkerAlt, FaLaptopCode, FaLanguage, FaTelegram, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-12 px-5">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-300">
        About Me
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Personal Information */}
        <div className="flex flex-col items-center p-6 rounded-xl shadow-lg bg-gray-800 hover:bg-opacity-80 transition-all duration-300 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-gray-200">Personal Information</h3>
          
          {/* Google Maps Link */}
          <p className="flex items-center mb-3">
            <FaMapMarkerAlt className="text-cyan-400 mr-2 text-lg" />
            <a
              href="https://maps.app.goo.gl/uGBo1vtHZ96mKPABA" // Kordinatalarni o'zgartiring
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline hover:text-cyan-300 transition-all"
            >
              17 Jiydakapa, Uychi, Namangan
            </a>
          </p>

          {/* Full Stack Developer */}
          <p className="flex items-center mb-3">
            <FaLaptopCode className="text-cyan-400 mr-2 text-lg" />
            <span className="text-gray-300">Full Stack Developer</span>
          </p>

          {/* Languages */}
          <p className="flex items-center">
            <FaLanguage className="text-cyan-400 mr-2 text-lg" />
            <span className="text-gray-300">English, Uzbek, Russian</span>
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center p-6 rounded-xl shadow-lg bg-gray-800 hover:bg-opacity-80 transition-all duration-300 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-gray-200">Contact Information</h3>

          {/* Email Link */}
          <p className="mb-3 text-gray-300">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:yahikooo7586@email.com"
              className="text-cyan-400 hover:underline hover:text-cyan-300 transition-all"
            >
              yahikooo7586@email.com
            </a>
          </p>

          {/* Phone Link */}
          <p className="mb-3 text-gray-300">
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+941527586"
              className="text-cyan-400 hover:underline hover:text-cyan-300 transition-all"
            >
              +94 152 75 86
            </a>
          </p>

          {/* Location Link */}
          <p className="text-gray-300">
            <strong>Location:</strong>{" "}
            <a
              href="https://maps.app.goo.gl/uGBo1vtHZ96mKPABA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline hover:text-cyan-300 transition-all"
            >
              17 Jiydakapa, Uychi, Namangan
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center p-6 rounded-xl shadow-lg bg-gray-800 hover:bg-opacity-80 transition-all duration-300 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4 text-gray-200">Social Media</h3>
          <div className="flex gap-6">
            <a
              href="https://instagram.com/bekkzod1337"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-blue-500 hover:scale-110 transition-all hover:text-blue-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/bekzod1337"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-gray-400 hover:scale-110 transition-all hover:text-gray-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://t.me/iam_brand"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-blue-400 hover:scale-110 transition-all hover:text-blue-300"
            >
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
