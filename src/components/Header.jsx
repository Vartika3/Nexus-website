import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AlignRight, X } from 'lucide-react';

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'SERVICES', path: '/services' },
    { name: 'CONTACTS', path: '/contacts' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-30 flex justify-between items-center px-6 lg:px-12 py-5 font-bebas text-sm tracking-wider bg-transparent">
      {/* Phone Number (visible only on large screens) */}
      <div className="text-white px-30 ml-60 tracking-widest text-xs  font-bebas font-light hidden lg:block">+91 12345 67890</div>

      {/* Desktop Navigation */}
      <ul className="hidden   md:text-1.5xl   leading-thicker tracking-[0.3em] lg:flex space-x-9 text-sm uppercase">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`transition-all duration-300 ${
                location.pathname === item.path
                  ? 'text-[#C5A47E]'
                  : 'text-white hover:text-[#C5A47E]'
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu Icon - Mobile only */}
      <div className="lg:hidden z-40 ml-auto">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-white font-bebas focus:outline-none"
        >
          <AlignRight size={28} />
        </button>
      </div>

      {/* Sidebar Menu - Mobile only */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black bg-opacity-95 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white focus:outline-none"
          >
            <X size={26} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex flex-col space-y-5 px-6 pt-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm  font-bebas  uppercase tracking-wide font-medium transition-all duration-300 ${
                location.pathname === item.path
                  ? 'text-[#C5A47E]'
                  : 'text-white hover:text-[#C5A47E]'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Header;
