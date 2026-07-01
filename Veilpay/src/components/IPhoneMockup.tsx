import { motion } from 'framer-motion';

export default function IPhoneMockup() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
      className="pointer-events-none w-[320px] md:w-[400px] lg:w-[420px]"
    >
      <div className="relative mx-auto flex h-[650px] md:h-[800px] w-full flex-col overflow-hidden rounded-[3rem] md:rounded-[3.5rem] border-[6px] md:border-[8px] border-gray-400 bg-gray-900 shadow-2xl">
        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 z-20 h-[28px] w-[100px] -translate-x-1/2 rounded-full bg-black" />
        {/* Screen area */}
        <div className="flex-1 bg-black">
          {/* Placeholder app UI suggestion */}
          <div className="mt-16 flex flex-col items-center gap-4 px-4">
            <div className="h-12 w-12 rounded-full bg-white/10" />
            <div className="h-4 w-32 rounded bg-white/10" />
            <div className="mt-4 w-full space-y-3">
              <div className="h-16 w-full rounded-xl bg-white/5" />
              <div className="h-16 w-full rounded-xl bg-white/5" />
              <div className="h-16 w-full rounded-xl bg-white/5" />
            </div>
          </div>
        </div>
        {/* Bottom Home Bar */}
        <div className="absolute bottom-2 left-1/2 h-1 w-1/3 -translate-x-1/2 rounded-full bg-gray-400/50" />
      </div>
    </motion.div>
  );
}
