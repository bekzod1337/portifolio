import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="flex justify-center gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold border-b-2 border-blue-500 pb-1"
              : "hover:text-blue-500"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold border-b-2 border-blue-500 pb-1"
              : "hover:text-blue-500"
          }
        >
          Skills
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold border-b-2 border-blue-500 pb-1"
              : "hover:text-blue-500"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold border-b-2 border-blue-500 pb-1"
              : "hover:text-blue-500"
          }
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
