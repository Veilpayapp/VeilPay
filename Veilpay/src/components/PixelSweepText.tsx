import { useEffect, useState } from "react";

const BLOCKS = ["■", "█", "▓", "▒", "░"];

export function PixelSweepText({
  words,
  className = "",
  interval = 4000,
}: {
  words: string[];
  className?: string;
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState(words[0]);

  // Handle word rotation interval
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  // Handle the left-to-right glitch box sweep effect
  useEffect(() => {
    const targetWord = words[index];
    const prevWord = words[(index - 1 + words.length) % words.length];
    
    const maxLength = Math.max(targetWord.length, prevWord.length);
    let step = 0;
    const totalSteps = maxLength + 5; // extra steps so the tail finishes sweeping
    
    const intervalId = setInterval(() => {
      let result = "";
      for (let i = 0; i < maxLength; i++) {
        // Calculate how far this character is from the sweeping edge
        const dist = step - i;
        
        if (targetWord[i] === " " && prevWord[i] === " ") {
          result += " "; // Preserve natural spaces
        } else if (dist >= 3) {
          // The edge has passed fully, reveal the target letter
          result += targetWord[i] || " ";
        } else if (dist >= 0) {
          // This is the active glitching edge - show random blocks
          result += BLOCKS[Math.floor(Math.random() * BLOCKS.length)];
        } else {
          // The edge hasn't reached here yet, show the old letter
          result += prevWord[i] || " ";
        }
      }
      setDisplayText(result);
      
      step += 0.5; // Controls the speed of the left-to-right sweep
      if (step >= totalSteps) {
        clearInterval(intervalId);
        setDisplayText(targetWord);
      }
    }, 40); // 40ms per frame for a crisp, high-framerate glitch
    
    return () => clearInterval(intervalId);
  }, [index, words]);

  return <span className={className}>{displayText}</span>;
}
