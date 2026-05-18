import { motion } from 'framer-motion';

export default function AmbientGlow() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: 'easeOut' }}
      className="pointer-events-none absolute top-[90px] left-1/2 z-10 h-[300px] w-[600px] -translate-x-1/2"
      aria-hidden="true"
    >
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15)_0%,_transparent_70%)]"
      />
    </motion.div>
  );
}
