import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { getNextCryptoLogo } from './CryptoLogos';

interface FloatingCoinProps {
  delay?: number;
  side?: 'left' | 'right';
  size?: number;
}

export default function FloatingCoin({
  delay = 0,
  side = 'left',
  size = 64,
}: FloatingCoinProps) {
  const logo = useMemo(() => getNextCryptoLogo(), []);

  return (
    <motion.div
      animate={{ y: [-10, 10, -10] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      className={`absolute top-1/2 ${side === 'left' ? 'left-4 md:left-16 lg:left-24' : 'right-4 md:right-16 lg:right-24'} -translate-y-1/2`}
    >
      <div
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 45% 35%, #ffffff 0%, #d8d8d8 20%, #b0b0b0 50%, #787878 80%, #4a4a4a 100%)',
          boxShadow:
            '0 0 0 3px #aaa, 0 0 0 5px #666, 0 6px 20px rgba(0,0,0,0.7)',
        }}
        className="relative flex items-center justify-center before:content-[''] before:absolute before:inset-[6px] before:rounded-full before:border-[1.5px] before:border-white/40"
      >
        {logo}
      </div>
    </motion.div>
  );
}
