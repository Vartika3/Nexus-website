import React, { useState } from "react";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";
import Sidebar from "./Sidebar";

const slides = [slider1, slider2, slider3, slider4];

function HeroSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div id="hero-section" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={slides[current]}
        alt="slider"
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Sidebar */}
      <Sidebar
        currentSlide={current}
        totalSlides={slides.length}
        onNext={nextSlide}
        onPrev={prevSlide}
      />

      {/* Center Content */}
      <div className="absolute inset-0 flex items-center justify-end z-10 px-12">
        <div className="flex flex-row items-center text-white space-x-10 max-w-7xl">
          {/* Left: Paragraph */}
          <div className="text-left text-gray-400 text-lg font-semibold leading-6 tracking-wider max-w-sm">
            NEXUS GROUP IS A DIVERSIFIED<br />
            ORGANISATION IN INDIA WITH A
             MARKET OF OVER THREE<br />
             VERTICALS LIKE EPC,INTERIOR<br />
            DESIGN AND DRIVETRAIN.
          </div>
      <div className="w-px h-5 bg-gray-500 my-4" />

          {/* Right: Heading + Nav Buttons */}
          <div className="flex flex-col items-end space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-widest text-right">
              <span className="text-white block">NEXUS</span>
              <span className="text-[#d6a56d] block">GROUP</span>
            </h1>

            {/* Navigation Buttons beside heading */}
            <div className="flex space-x-6 mt-2">
              <button
                onClick={prevSlide}
                className="text-white text-xs tracking-widest hover:text-[#d6a56d] flex items-center"
              >
                <span className="mr-1">←</span> PREV
              </button>
              <button
                onClick={nextSlide}
                className="text-white text-xs tracking-widest hover:text-[#d6a56d] flex items-center"
              >
                NEXT <span className="ml-1">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
