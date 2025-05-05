import React, { useState } from 'react';
import hexMap from '../assets/map.png';

const markers = [
  { id: 1, top: '32%', left: '24%' },
  { id: 2, top: '60%', left: '32%' },
  { id: 3, top: '30%', left: '63%' },
];

const EnvelopePopup = ({ label }) => (
  <div className="absolute -top-12 left-[-30px] bg-[#212121] backdrop-blur-sm rounded-xl px-4 py-2 text-[10px] text-[#cba97c] font-semibold tracking-wider uppercase shadow-lg w-max">
    {label}
  </div>
);

const Worldwide = () => {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleToggle = (id) => {
    setActiveMarker(activeMarker === id ? null : id);
  };

  return (
    <section id="worldwide" className="py-20 bg-[#212121] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-medium tracking-[.2rem] mb-12">
          WE ARE <span className="text-[#cba97c]">WORLDWIDE</span>
        </h2>

        <div
          className="relative h-[550px] w-full bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${hexMap})` }}
        >
          {markers.map(({ id, top, left }) => (
            <div
              key={id}
              className="absolute flex flex-col items-center"
              style={{ top, left }}
            >
              <div
                onClick={() => handleToggle(id)}
                className="h-4 w-4 bg-[#cba97c] rounded-full shadow-md cursor-pointer"
              ></div>

              {activeMarker === id && <EnvelopePopup label="NEW YORK" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Worldwide;
