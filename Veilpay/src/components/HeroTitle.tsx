import React from 'react';
import { motion } from 'framer-motion';
import PixelDecodeText from './PixelDecodeText';

const HeroTitle: React.FC = () => {
  return (
    <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        className="mb-8"
      >
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-400 md:text-sm">
          Next Generation Crypto Network
        </p>
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white drop-shadow-2xl leading-tight"
          style={{ textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}
        >
          Send <br className="hidden md:block" />
          <PixelDecodeText 
            words={["MILLION DOLLAR", "BORDERLESS", "INSTANT", "SECURE", "ANONYMOUS"]} 
            className="bg-gradient-to-r from-yellow-400 via-amber-300 to-amber-600 bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]"
          /> <br className="hidden md:block" />
          Payments.
        </h1>
      </motion.div>
    </div>
  );
};

export default HeroTitle;
