import React from 'react';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';

const About = () => {
  return (
    <section id="about" className="bg-[#212121] w-full relative overflow-hidden font-poppins py-16">
      {/* Background Vertical Lines */}
      <div className="absolute inset-0 flex justify-between z-0 ">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-px h-full bg-white bg-opacity-10" />
        ))}
      </div>

      {/* Top-left faded 'about' label */}
      <div className="absolute top-4 left-4 text-[#3d3d3d] text-6xl font-bold opacity-10 z-0 select-none">
        about
      </div>

      {/* Bottom-right faded 'about' label */}
      <div className="absolute bottom-2 right-4 text-[#3d3d3d] text-6xl font-bold opacity-10 z-0 select-none">
        about
      </div>

      {/* Main Heading */}
      <div className="w-full flex justify-center z-10 relative">
        <h2 className="font-bebas text-5xl font-light text-center mb-14 tracking-[.2em]">
          <span className="text-white">ABOUT </span>
          <span className="text-[#C5A47E]">NEXUS</span>
        </h2>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 relative z-10">
        {/* Left: What We Do */}
        <div className="space-y-4">
          <h3 className="text-white text-xl font-bebas font-bold">what we do<span className="text-[#C5A47E]">.</span></h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Center: Specialization */}
        <div className="flex flex-col items-center">
          <h3 className="text-white text-xl font-bebas font-bold mb-6">
            our specialization<span className="text-[#C5A47E]">:</span>
          </h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-8">
            
<div className="flex flex-col items-center">
  <img
    src={logo2}
    alt="Pipeline Logo"
    className="w-10 h-10 mb-2 object-contain"
    style={{
      filter:
        'brightness(0) saturate(100%) invert(82%) sepia(16%) saturate(405%) hue-rotate(350deg) brightness(92%) contrast(92%)',
    }}
  />
  <span className="text-white text-sm font-bebas uppercase">PIPELINE</span>
</div>

           <div className="flex flex-col items-center">
  <img
    src={logo3}
    alt="Interior Logo"
    className="w-10 h-10 mb-2 object-contain"
    style={{
      filter:
        'brightness(0) saturate(100%) invert(82%) sepia(16%) saturate(405%) hue-rotate(350deg) brightness(92%) contrast(92%)',
    }}
  />
  <span className="text-white text-sm font-bebas uppercase">INTERIOR</span>
</div>
          <div className="flex flex-col items-center col-span-2 mt-2">
  <img
    src={logo1}
    alt="Drivetrain Logo"
    className="w-10 h-10 mb-2 object-contain"
    style={{
      filter:
        'brightness(0) saturate(100%) invert(82%) sepia(16%) saturate(405%) hue-rotate(350deg) brightness(92%) contrast(92%)',
    }}
  />
  <span className="text-white text-sm font-bebas uppercase">DRIVETRAIN</span>
</div>
          </div>
        </div>

        {/* Right: Grey Square */}
        <div className="flex items-center justify-center">
          <div className="bg-[#D9D9D9] w-[180px] h-[180px] rounded-sm"></div>
        </div>
      </div>

      
    </section>
  );
};

export default About;
