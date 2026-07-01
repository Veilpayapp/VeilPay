import { motion } from 'framer-motion';

export default function GlassNavbar() {
  return (
    <>
      <svg className="pointer-events-none absolute hidden">
        <filter id="refraction" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.005" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        className="fixed top-6 left-1/2 z-50 flex h-14 -translate-x-1/2 items-center gap-6 rounded-full border border-white/5 bg-white/5 px-6 shadow-[inset_0_2px_3px_rgba(255,255,255,0.6),inset_0_-2px_3px_rgba(0,0,0,0.3),inset_0_8px_20px_rgba(255,255,255,0.25),inset_0_-8px_20px_rgba(0,0,0,0.15),0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:bg-white/10 hover:shadow-[inset_0_2px_3px_rgba(255,255,255,0.7),inset_0_-2px_3px_rgba(0,0,0,0.4),inset_0_8px_20px_rgba(255,255,255,0.3),inset_0_-8px_20px_rgba(0,0,0,0.2),0_24px_48px_rgba(0,0,0,0.5)] md:h-14 md:px-8"
        style={{ backdropFilter: 'blur(8px) url(#refraction)' }}
      >
      <a href="#" className="text-sm font-semibold tracking-tight text-white">
        Veilpay
      </a>
      <div className="hidden items-center gap-4 md:flex">
        <a
          href="#features"
          className="text-sm text-gray-300 transition-colors hover:text-white"
        >
          Features
        </a>
        <a
          href="#about"
          className="text-sm text-gray-300 transition-colors hover:text-white"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-sm text-gray-300 transition-colors hover:text-white"
        >
          Contact
        </a>
      </div>
    </motion.nav>
    </>
  );
}
