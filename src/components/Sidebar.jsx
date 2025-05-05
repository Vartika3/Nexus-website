import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebookF,
  FaBars,
} from "react-icons/fa";
import logo from "../assets/nexus.png";
import sidebarBg from "../assets/Side panel.png";

function Sidebar({ currentSlide = 0, totalSlides = 4 }) {
  const location = useLocation();

  if (location.pathname !== "/") return null;

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Hamburger Icon (Mobile only) */}
      <div className="fixed top-5 left-5 z-30 md:hidden text-transparent text-2xl">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className="hidden md:flex absolute top-0 left-0 h-full w-[250px] z-20 flex-col justify-between text-white font-sans"
        style={{
          backgroundImage: `url(${sidebarBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Top Section: Logo + Slide Count */}
        <div className="flex flex-col items-center mt-10 px-4">
          <img src={logo} alt="Nexus Logo" className="w-12 h-auto mb-4" />
          <div className="text-center">
            <p className="text-gray-400 text-m  pl-8 font-semibold">
              / {String(totalSlides).padStart(2, "0")}
            </p>
            <p className="text-[#d6a56d] pr-14 text-5xl font-bold leading-none">
              {String(currentSlide + 1).padStart(2, "0")}
            </p>
          </div>
        </div>

        {/* Bottom Section: Left-aligned Line + Social Icons */}
        <div className="flex flex-col items-start mb-5 pl-12">
          {/* Vertical Line */}
          <div className="w-[2px] h-10 bg-[#AAAAAA] mb-6"></div>

          {/* Social Icons */}
          <div className="flex flex-col space-y-6 text-gray-400 text-lg">
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
