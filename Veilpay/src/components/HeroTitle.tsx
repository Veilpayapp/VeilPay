import React from 'react';
import { motion } from 'framer-motion';
import { PixelSweepText } from './PixelSweepText';

const HeroTitle: React.FC = () => {
  return (
    <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        className="mb-8"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-300 md:text-xs">
            Next Generation Crypto Network
          </p>
        </div>
        <h1 
          className="text-6xl md:text-8xl lg:text-[7rem] font-extrabold tracking-tighter leading-[1.05]"
        >
          <span 
            className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 inline-block"
            style={{ filter: 'drop-shadow(0 -30px 60px rgba(255,255,255,0.8))' }}
          >
            One App.
          </span> <br className="hidden md:block" />
          <PixelSweepText 
            words={["NO BORDERS", "NO BANKS"]} 
            className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(251,191,36,0.3)] inline-block"
          />
        </h1>
      </motion.div>
    </div>
  );
};

export default HeroTitle;
