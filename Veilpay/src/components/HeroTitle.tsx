import React from 'react';
import { motion } from 'framer-motion';

const HeroTitle: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center max-w-4xl px-4 mt-[-10vh]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        className="mb-8 w-full flex flex-col items-center"
      >
        <div 
          className="flex flex-col items-center text-center text-6xl md:text-[6.5rem] leading-normal tracking-tighter mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-[#111111] pb-4">
            Send & receive
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F2C572] via-[#D4A042] to-[#1a1103] -mt-6 md:-mt-10 pb-4 preserve-color">
            crypto
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-400 to-[#111111] italic font-light tracking-normal text-5xl md:text-[5rem] my-1 -mt-4 md:-mt-6 pb-4">
            like a
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F9D423] via-[#D4A042] to-[#1a1103] -mt-6 md:-mt-8 pb-4 preserve-color">
            text message.
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default React.memo(HeroTitle);
