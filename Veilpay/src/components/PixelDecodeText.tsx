import React, { useState, useEffect } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';

interface PixelDecodeTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

const PixelDecodeText: React.FC<PixelDecodeTextProps> = ({ words, interval = 3000, className = '' }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState(words[0]);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      const nextWordIndex = (currentWordIndex + 1) % words.length;
      const nextWord = words[nextWordIndex];
      
      let iteration = 0;
      const decodeInterval = setInterval(() => {
        setDisplayText((_) => {
          return nextWord.split('').map((_, index) => {
            if (index < iteration) {
              return nextWord[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          }).join('');
        });
        
        if (iteration >= nextWord.length) {
          clearInterval(decodeInterval);
          setDisplayText(nextWord);
          setCurrentWordIndex(nextWordIndex);
        }
        
        iteration += 1 / 3;
      }, 30);
      
    }, interval);

    return () => clearInterval(wordInterval);
  }, [currentWordIndex, words, interval]);

  return (
    <span className={className}>
      {displayText}
    </span>
  );
}

export default PixelDecodeText;
