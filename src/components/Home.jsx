import React, { useEffect, useState } from "react";
import profileImage from "../assets/rasm.jpg";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex items-center justify-center flex-col mt-10 text-white">
      <div
        className={`relative w-64 h-64 rounded-full overflow-hidden shadow-[0_0_40px] shadow-blue-400 
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} 
          transition-all duration-1000 ease-out`}
      >
        <img
          src={profileImage}
          alt="Profile"
          className="object-cover w-full h-full border-1 rounded border-blue-500 shadow-lg shadow-blue-500"
        />
      </div>

      <h1
        className={`mt-8 text-4xl font-bold 
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"} 
          transition-all duration-1000 ease-out`}
      >
        Hi, It's <span className="text-blue-500">Bekzod</span>
      </h1>

      <p
        className={`text-xl mt-2 
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"} 
          transition-all duration-1000 ease-out`}
      >
        I'm a <span className="text-blue-400 font-semibold">FullStack Developer</span>
      </p>

      <p
        className={`text-gray-400 mt-4 text-center max-w-md 
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"} 
          transition-all duration-1000 ease-out`}
      >
        Student of Najot Ta'lim and Tashkent University of Information Technology
      </p>

      <div className="flex gap-4 mt-6">
        <a
          href="https://t.me/bekzod1337"
          className={`p-2 bg-gray-800 rounded-full w-full h-full text-blue-500 
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} 
            hover:bg-blue-500 hover:text-white transition duration-500 ease-out`}
        >
          <i className="fa-brands fa-telegram text-5xl"></i>
        </a>
        <a
          href="https://instagram.com/bekkzod1337"
          className={`px-2.5 py-2 bg-gray-800 rounded-full w-full h-full text-blue-500 
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} 
            hover:bg-blue-500 hover:text-white transition duration-500 ease-out`}
        >
          <i className="fa-brands fa-instagram text-5xl"></i>
        </a>
        <a
          href="https://github.com/bekzod1337"
          className={`p-2 bg-gray-800 w-full h-full rounded-full text-blue-500 
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} 
            hover:bg-blue-500 hover:text-white transition duration-500 ease-out`}
        >
          <i className="fa-brands fa-github text-5xl"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
