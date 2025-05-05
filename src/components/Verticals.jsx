import React from 'react';
import slider1 from '../assets/slider2.jpg';
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
    <section className="bg-[#212121] text-white py-20 relative overflow-hidden font-poppins">
      {/* Background vertical lines */}
      <div className="absolute inset-0 flex justify-between z-0">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-px h-full bg-white bg-opacity-10" />
        ))}
      </div>

      {/* "verycal" above cards, vertical on right side */}
<div className="absolute text-8xl top-[90px] right-4 text-[#FFFFFF]  font-poppins font-extrabold opacity-20 tracking-[0.2em] z-10 ">
  vertic
</div>
    {/* Bottom Left "TICALS" Label */}
<div className="absolute bottom-1 left-6 z-10">
  <div className="relative">
    <span className="text-[#FFFFFF] text-[64px] top-[40px] font-extrabold opacity-10 tracking-[0.3em] leading-none ">
      ticals
    </span>
  </div>
</div>


      {/* Section Heading */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bebas text-center mb-16 uppercase tracking-[0.3em]">
          <span className="text-white">Our </span>
          <span className="text-[#C5A47E]">Verticals</span>
        </h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1  bg-[#212121] md:grid-cols-3 gap-8 px-4">
          {verticals.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden h-[450px] flex items-center justify-center group z-10"
              style={{
                backgroundImage: ` linear-gradient(to top, rgba(0,0.4,0,0.75), rgba(0,0,0,0.5)), url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Logo */}
             <img
  src={item.logo}
  alt="Logo"
  className="absolute top-6 left-6 w-24 h-24 object-contain z-10"
/>


              {/* Content */}
              <div className="text-left px-6 z-10 max-w-sm">
                <p className="text-white text-sm mb-6 leading-relaxed">{item.description}</p>
                <button className="border border-[#C5A47E] text-[#C5A47E] px-6 py-2 text-sm rounded-full hover:bg-[#C5A47E] hover:text-black transition">
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
