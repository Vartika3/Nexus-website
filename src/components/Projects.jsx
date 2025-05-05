import React from "react";

const Projects = () => {
  return (
    <section className="bg-[#212121] h-screen w-full relative overflow-hidden">
      {/* Faded "abou" text */}
      <div className="absolute top-0 right-4 text-[#2a2a2a] text-[150px] font-extrabold opacity-20 leading-none select-none z-0">
        abou
      </div>
 {/* Background Vertical Lines */}
      <div className="absolute inset-0 flex justify-between z-0 ">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-px h-full bg-white bg-opacity-10" />
        ))}
      </div>
      {/* Title */}
      <h2 className="text-center pt-3 text-3xl md:text-4xl tracking-[0.2em] z-10 relative">
        <span className="text-white font-semibold">OUR </span>
        <span className="text-[#C5A47E] font-semibold">PROJECTS</span>
      </h2>

      {/* 4 column layout */}
      <div className="flex h-[80%] mt-10">
        <div className="flex-1 bg-[#5e5e5e] relative flex items-center justify-start px-4">
          <button className="text-white text-sm tracking-widest flex items-center hover:text-[#d6a56d] transition">
            ← PREV
          </button>
        </div>
        <div className="flex-1 bg-[#444444]"></div>
        <div className="flex-1 bg-[#5e5e5e]"></div>
        <div className="flex-1 bg-[#3a3a3a] relative flex items-center justify-end px-4">
          <button className="text-white text-sm tracking-widest flex items-center hover:text-[#d6a56d] transition">
            NEXT →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
