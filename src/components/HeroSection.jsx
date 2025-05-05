import React, { useState } from "react";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";
import Sidebar from "./Sidebar";

const slides = [slider1, slider2, slider3, slider4];

const slideContent = [
  {
    paragraph: (
      <>
        NEXUS GROUP IS A DIVERSIFIED <br />
        ORGANIZATION IN INDIA WITH A <br />
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; MARKET OF OVER THREE<br />
        VERTICALS LIKE EPC, INTERIOR <br />
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; DESIGN AND DRIVETRAIN.
      </>
    ),
    heading1: "NEXUS",
    heading2: "GROUP",
  },
  {
    paragraph: (
      <>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NEXUS EPC, IS AN ENGINEERING <br />CONTRACTING FIRM MANAGED BY A LOYAL <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TEAM OF PROFESSIONALS AT VARIOUS<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LEVELS IN DIFFERENT DISCIPLINES, IS <br />
       &nbsp;&nbsp;&nbsp; ENGAGED IN THE SERVICE OF THE CORE <br />
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SECTOR OF BUSINESS IN INDIA.
      </>
    ),
    heading1: "NEXUS",
    heading2: "EPC",
  },
  {
    paragraph: (
      <>
        THE NAME “AKASA” DEFINES FINE LIVING.<br />
        THE BRAND MANIFESTS GLOBAL FINENESS<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AND INDIGENOUS DESIGN SENSE,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;REFLECTIVE OF A MODERN & TIMELESS<br />
       &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DESIGN.
      </>
    ),
    heading1: "AKASA",
    heading2: "",
  },
  {
    paragraph: (
      <>
        <p>
          &nbsp;&nbsp;&nbsp; &nbsp; NEXUS DRIVETRAIN IS A SPECIALIST IN  <br />  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; MANUFACTURING CLUTCH PLATES AND <br />
           DRY-FRICTION CLUTCH COVER ASSEMBLIES <br />
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; OF THE SINGLE-PLATE, PUSH-TYPE <br />
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; VARIETY.
        </p>
      </>
    ),
    heading1: "NEXUS",
    heading2: "DRIVETRAIN",
  },
];

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
      <div className="absolute inset-0 bg-[#212121] bg-opacity-80" />

      {/* Sidebar - hidden on mobile */}
      <div className="hidden md:block">
        <Sidebar currentSlide={current} totalSlides={slides.length} />
      </div>

      {/* Prev/Next Buttons */}
      <div className="absolute bottom-8 md:top-1/2 md:left-[100px] transform md:-translate-y-1/2 z-30 flex space-x-4 px-6 md:px-0">
        <button
          onClick={prevSlide}
          className="text-white mr-8 text-s mb-12 tracking-widest hover:text-[#C5A47E] flex items-center"
        >
          <span className="font-semibold py-6  ml-12">←</span> PREV
        </button>
        <button
          onClick={nextSlide}
          className="text-white mb-12 text-s tracking-widest hover:text-[#C5A47E] flex items-center"
        >
          NEXT <span className="ml-1 font-semibold">→</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-end z-10 px-6 md:px-12 mt-20 md:mt-0">
        <div className="flex flex-col md:flex-row items-center md:items-center text-white space-y-0 md:space-y-0 md:space-x-4 max-w-7xl">
          {/* Paragraph */}
          <div className="text-left text-[#AAAAAA] text-sm md:text-lg leading-relaxed tracking-wider font-bebas font-medium max-w-md">
            {slideContent[current].paragraph}
          </div>

          {/* Divider */}
          <div className=" md:block w-px h-40 bg-white" />

          {/* Headings */}
          <div className="flex flex-col items-center md:items-end space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas font-medium leading-tight tracking-widest text-right">
              <span className="mr-0 text-white block tracking-[.2em]">
                {slideContent[current].heading1}
              </span>
              {slideContent[current].heading2 && (
                <span className="text-[#C5A47E]   block tracking-[.2em]">
                  {slideContent[current].heading2}
                </span>
              )}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
