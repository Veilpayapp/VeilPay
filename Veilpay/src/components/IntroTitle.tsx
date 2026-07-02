import React from 'react';

const IntroTitle: React.FC = () => {
  return (
    <div className="grid grid-cols-2 w-full items-center">
      <div className="flex justify-end pr-[10vw] md:pr-[250px]">
        <span 
          className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-400 to-[#111111] italic font-light tracking-normal text-6xl md:text-[8rem] drop-shadow-[0_20px_30px_rgba(255,255,255,0.05)] drop-shadow-[0_5px_10px_rgba(0,0,0,1)]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Introducing
        </span>
      </div>
      <div className="flex justify-start pl-[10vw] md:pl-[250px]">
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F2C572] via-[#D4A042] to-[#1a1103] drop-shadow-[0_20px_30px_rgba(212,160,66,0.1)] drop-shadow-[0_5px_10px_rgba(0,0,0,1)] text-7xl md:text-[10rem] font-extrabold tracking-tighter uppercase">
          VEILPAY
        </span>
      </div>
    </div>
  );
};

export default IntroTitle;
