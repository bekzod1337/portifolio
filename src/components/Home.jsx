import React, { useEffect, useState } from "react";
import profileImage from "../assets/rasm.jpg";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState("");
  const fullText = "I'm a FullStack Developer";
  
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);

    let i = 0;
    setText(""); 

    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between h-screen text-white px-6 lg:px-20">
      <div
        className={`relative rounded-full w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] 
           overflow-hidden shadow-[0_0_40px] shadow-blue-400 transition-transform duration-300 hover:scale-110 
          ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"} 
          transition-all duration-1000 ease-out`}
      >
        <img
          src={profileImage}
          alt="Profile"
          className="object-cover rounded-full w-full h-full border-2 border-blue-500 shadow-lg"
        />
      </div>

      {/* Text Content on the Right */}
      <div className="text-center lg:text-left mt-8 lg:mt-0 flex flex-col items-center lg:items-start">
        <h1
          className={`select-none text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold 
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} 
            transition-all duration-1000 ease-out`}
        >
          Hi, It's <span className="text-blue-500">Bekzod</span>
        </h1>

        <p className="select-none text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-400 mt-2">
          {text} <span className="animate-blink">|</span>
        </p>

        {/* Description */}
        <p 
          className={`select-none text-gray-400 max-w-xs sm:max-w-sm md:max-w-md mt-4
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} 
            transition-all duration-1000 ease-out`}
        >
          Student of Najot Ta'lim and Tashkent University of Information Technology
        </p>

        {/* Social Icons (markazda) */}
        <div
          className={` flex gap-4 sm:gap-6 text-2xl sm:text-3xl mt-6 justify-center lg:justify-start w-full
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} 
            transition-all duration-1000 ease-out`}
        >
          <a
            href="https://t.me/bekzod1337"
            className="text-blue-500 hover:text-blue-400 transition duration-300"
          >
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a
            href="https://instagram.com/bekkzod1337"
            className="text-blue-500 hover:text-blue-400 transition duration-300"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://github.com/bekzod1337"
            className="text-blue-500 hover:text-blue-400 transition duration-300"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
