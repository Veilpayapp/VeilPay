import { motion } from 'framer-motion';

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
            'radial-gradient(circle at 30% 30%, #e5e7eb, #9ca3af, #4b5563)',
          boxShadow:
            'inset -4px -4px 8px rgba(0,0,0,0.3), 0 8px 24px rgba(0,0,0,0.4)',
        }}
        className="flex items-center justify-center"
      >
        <div
          style={{
            width: size * 0.7,
            height: size * 0.7,
            borderRadius: '50%',
            background:
              'radial-gradient(circle at 30% 30%, #f3f4f6, #d1d5db, #6b7280)',
          }}
        />
      </div>
    </motion.div>
  );
}
