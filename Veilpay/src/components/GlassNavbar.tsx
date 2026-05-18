import { motion } from 'framer-motion';

export default function GlassNavbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
      className="fixed top-6 left-1/2 z-50 flex h-14 -translate-x-1/2 items-center gap-6 rounded-full border border-white/10 bg-white/5 px-6 backdrop-blur-xl md:h-14 md:px-8"
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
  );
}
