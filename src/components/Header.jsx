import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="fixed top-0 right-0 left-40 z-10 flex justify-between items-center px-12 py-6 text-white transition-all duration-300">
      <div className="text-white opacity-80 text-sm">+91 12345 67890</div>
      <ul className="flex space-x-8 uppercase tracking-wider text-xs font-medium">
        <li><Link to="/" className="hover:text-[#d6a56d]">HOME</Link></li>
        <li><Link to="/about" className="hover:text-[#d6a56d]">ABOUT</Link></li>
        <li><Link to="/projects" className="hover:text-[#d6a56d]">PROJECTS</Link></li>
        <li><Link to="/services" className="hover:text-[#d6a56d]">SERVICES</Link></li>
        <li><Link to="/contacts" className="hover:text-[#d6a56d]">CONTACTS</Link></li>
      </ul>
    </div>
  );
}

export default Header;
