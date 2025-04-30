import React from 'react';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';

const About = () => {
  return (
    <section id="about" className="bg-[#121212] h-screen w-full relative overflow-hidden">
      {/* Large faded background text */}
      <div className="absolute top-0 left-4 text-[#2a2a2a] text-[150px] font-extrabold opacity-10 leading-none select-none z-0">
        about
      </div>

      {/* Heading */}
      <h2 className="text-center pt-12 text-3xl md:text-4xl tracking-[0.5em] z-10 relative">
        <span className="text-white font-semibold">ABOUT </span>
        <span className="text-[#d6a56d] font-semibold">NEXUS</span>
      </h2>

      {/* 3 Column Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-8 relative z-10">
        {/* What We Do */}
        <div className="space-y-4">
          <h3 className="text-white text-xl font-bold">what we do.</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Specialization */}
        <div>
          <h3 className="text-white text-xl font-bold mb-6">our specialization:</h3>
          <div className="grid grid-cols-2 gap-y-6">
            {/* Pipeline */}
            <div className="flex flex-col items-center">
              <img
                src={logo2}
                alt="Pipeline Logo"
                className="w-12 h-12 object-contain"
                style={{
                  filter:
                    'brightness(0) saturate(100%) invert(44%) sepia(88%) saturate(632%) hue-rotate(2deg) brightness(105%) contrast(101%)',
                }}
              />
              <span className="text-white text-sm font-semibold uppercase mt-2">Pipeline</span>
            </div>

            {/* Interior */}
            <div className="flex flex-col items-center">
              <img
                src={logo3}
                alt="Interior Logo"
                className="w-12 h-12 object-contain"
                style={{
                  filter:
                    'brightness(0) saturate(100%) invert(44%) sepia(88%) saturate(632%) hue-rotate(2deg) brightness(105%) contrast(101%)',
                }}
              />
              <span className="text-white text-sm font-semibold uppercase mt-2">Interior</span>
            </div>

            {/* Drivetrain */}
            <div className="flex flex-col items-center col-span-2 mt-2">
              <img
                src={logo1}
                alt="Drivetrain Logo"
                className="w-12 h-12 object-contain"
                style={{
                  filter:
                    'brightness(0) saturate(100%) invert(44%) sepia(88%) saturate(632%) hue-rotate(2deg) brightness(105%) contrast(101%)',
                }}
              />
              <span className="text-white text-sm font-semibold uppercase mt-2">Drivetrain</span>
            </div>
          </div>
        </div>

        {/* Gray Box Placeholder */}
        <div className="flex items-center justify-center">
          <div className="bg-[#cccccc] w-[200px] h-[200px]"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
