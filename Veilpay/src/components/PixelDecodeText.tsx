import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';

interface PremiumGlitchTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

const PixelDecodeText: React.FC<PremiumGlitchTextProps> = ({ 
  words, 
  interval = 4000, 
  className = '' 
}) => {
  const [index, setIndex] = useState(0);

  // Cycle through words
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  const targetWord = words[index];
  const [displayText, setDisplayText] = useState(targetWord);
  const iterations = useRef(0);
  
  // Scramble effect
  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;
    iterations.current = 0;
    
    intervalId = setInterval(() => {
      setDisplayText(() => {
        return targetWord
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iterations.current) {
              return targetWord[i];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
      });
      
      if (iterations.current >= targetWord.length) {
        clearInterval(intervalId);
      }
      
      iterations.current += 1 / 3; // Speed of decode
    }, 40);
    
    return () => clearInterval(intervalId);
  }, [targetWord]);

  return (
    <span className="inline-grid">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={targetWord}
          initial={{ opacity: 0, filter: 'blur(8px)', y: 10, scale: 0.98 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0, scale: 1 }}
          exit={{ opacity: 0, filter: 'blur(8px)', y: -10, scale: 1.02 }}
          transition={{ 
            duration: 0.5, 
            ease: [0.16, 1, 0.3, 1] // Custom premium easing (easeOutExpo)
          }}
          className={`col-start-1 row-start-1 inline-block ${className}`}
        >
          {displayText}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default React.memo(PixelDecodeText);
