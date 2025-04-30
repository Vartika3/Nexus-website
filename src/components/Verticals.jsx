import React from 'react';
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider3.jpg';
import slider3 from '../assets/slider4.jpg';
import logo1 from '../assets/nexus.png';
import logo2 from '../assets/akasa.png';
import logo3 from '../assets/nexus.png';

const verticals = [
  {
    description:
      'Nexus EPC, is an Engineering Contracting firm managed by a loyal team of professionals at various levels in different disciplines, is engaged in the service of the core sector of business in India.',
    image: slider1,
    logo: logo1,
  },
  {
    description:
      'The name “Akasa” defines fine living. The brand manifests global fineness and an indigenous design sense, reflective of a modern & timeless design.',
    image: slider2,
    logo: logo2,
  },
  {
    description:
      'Nexus Drivetrain is a specialist in manufacturing clutch plates and dry-friction clutch cover assemblies of the single-plate, push-type variety.',
    image: slider3,
    logo: logo3,
  },
];

const Verticals = () => {
  return (
    <section className="bg-black text-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-16 uppercase tracking-wide">
          <span className="text-white">Our </span>
          <span className="text-amber-400">Verticals</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {verticals.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden group h-[450px] flex items-center justify-center"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Top-left Logo Image */}
              <img
                src={item.logo}
                alt="Logo"
                className={`absolute top-4 left-4 object-contain z-10 ${
                  item.title === 'AKASA' ? 'w-20 h-20' : 'w-16 h-16'
                }`}
              />

              {/* Centered Content */}
              <div className="text-center px-6 z-10">
                <div className="text-white text-sm tracking-widest mb-4 uppercase">{item.title}</div>
                <p className="text-sm mb-6">{item.description}</p>
                <button className="border border-amber-400 text-amber-400 px-4 py-2 text-sm rounded-sm hover:bg-amber-400 hover:text-black transition">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Verticals;
