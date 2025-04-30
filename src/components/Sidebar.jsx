import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebookF } from "react-icons/fa";

function Sidebar({ currentSlide = 0, totalSlides = 4 }) {
  return (
    <div className="absolute top-0 left-0 h-full w-24 z-20 bg-[#1b1b1b] text-white flex flex-col items-center justify-between py-6">
      
      {/* Logo and Slide Info */}
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="text-5xl font-extrabold text-[#d6a56d] leading-none">N</div>
        <div className="text-xs tracking-widest text-[#d6a56d] mb-8">NEXUS</div>

        {/* Slide Count */}
        <div className="flex flex-col items-center">
          <p className="text-[#d6a56d] text-4xl font-bold">0{currentSlide + 1}</p>
          <p className="text-gray-400 text-sm">/ 0{totalSlides}</p>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-px h-16 bg-gray-500 my-4" />

      {/* Social Icons */}
      <div className="flex flex-col items-center space-y-6 text-gray-400 text-lg">
        <a href="#" className="hover:text-white"><FaInstagram /></a>
        <a href="#" className="hover:text-white"><FaTwitter /></a>
        <a href="#" className="hover:text-white"><FaLinkedin /></a>
        <a href="#" className="hover:text-white"><FaFacebookF /></a>
      </div>
    </div>
  );
}

export default Sidebar;
