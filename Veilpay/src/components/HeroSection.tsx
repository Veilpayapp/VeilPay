import { motion } from 'framer-motion';
import AmbientGlow from './AmbientGlow';
import FloatingCoin from './FloatingCoin';
import IPhoneMockup from './IPhoneMockup';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-4">
      <AmbientGlow />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-400 md:text-sm"
        >
          Powered by AI and user-intent blockchain technology
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="max-w-4xl bg-gradient-to-r from-yellow-400 via-yellow-200 to-amber-300 bg-clip-text text-5xl leading-tight font-bold text-transparent md:text-7xl lg:text-8xl"
        >
          Send and receive crypto like a text message.
        </motion.h1>
      </div>

      {/* Floating Coins */}
      <FloatingCoin side="left" size={64} delay={0} />
      <FloatingCoin side="right" size={80} delay={1} />

      {/* iPhone Mockup */}
      <IPhoneMockup />
    </section>
  );
}
