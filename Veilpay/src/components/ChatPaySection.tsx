import React from 'react';
import { motion } from 'framer-motion';
import { Battery, Wifi, Signal } from 'lucide-react';

const ChatPaySection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center py-24 overflow-hidden border-t border-white/5">
      {/* Background ambient light */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full z-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at center, rgba(251, 191, 36, 0.3) 0%, transparent 70%)',
          filter: 'blur(80px)',
          willChange: 'transform'
        }}
      />

      <div className="z-10 text-center mb-16">
        <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter">
          <span className="text-white">Chat.</span>{' '}
          <span className="text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.6)] animate-pulse">Pay.</span>
        </h2>
        <p className="mt-6 text-lg text-gray-400 max-w-lg mx-auto font-light">
          Send crypto as easily as sending a text message. No complex addresses, no waiting.
        </p>
      </div>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-[320px] md:w-[380px]"
      >
        {/* Ambient Glow Spill */}
        <div 
          className="absolute inset-0 z-0 scale-[1.1] opacity-70"
          style={{
            background: 'radial-gradient(circle at center, rgba(251, 191, 36, 0.5) 0%, transparent 70%)',
            filter: 'blur(60px)',
            willChange: 'transform, opacity'
          }}
        />

        {/* Phone Frame */}
        <div className="relative z-10 mx-auto flex h-[650px] w-full flex-col overflow-hidden rounded-[3rem] border-[4px] border-white/5 bg-[#0a0a0a] shadow-[inset_0_0_10px_rgba(255,255,255,0.05),0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-3xl">
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 z-20 h-[30px] w-[110px] -translate-x-1/2 rounded-full bg-black flex items-center justify-between px-3 border border-white/5 shadow-inner">
              <div className="w-2 h-2 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          </div>

          {/* Status Bar */}
          <div className="flex items-center justify-between px-6 pt-4 text-[10px] text-white/80 z-10 font-medium tracking-wide">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <Signal className="w-3 h-3" />
              <Wifi className="w-3 h-3" />
              <Battery className="w-4 h-4" />
            </div>
          </div>

          {/* Screen Content */}
          <div className="flex-1 bg-[#0a0a0a] flex flex-col p-4 pt-10 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-30 pointer-events-none" />

            {/* Chat Message */}
            <div className="relative self-start max-w-[80%] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl rounded-tl-sm p-4 mt-8 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              <p className="text-[13px] font-medium leading-relaxed text-gray-200">Hey, can you send over the 250 USDC for the dinner last night?</p>
              <span className="text-[10px] text-gray-500 mt-2 block font-semibold tracking-wide">Read 9:40 AM</span>
            </div>

            {/* Payment Card */}
            <div className="relative mt-8 w-full rounded-3xl border border-amber-500/20 bg-black/60 p-5 backdrop-blur-[40px] shadow-[0_0_40px_rgba(251,191,36,0.1)]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/40">
                    <span className="font-bold text-amber-400">USDC</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-300">Sending to</span>
                    <span className="text-xs font-semibold text-white">Alex 0x4F...a1B2</span>
                  </div>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white tracking-tighter mb-1">250.00 <span className="text-xl text-gray-500 font-medium">USDC</span></h3>
              <p className="text-xs text-gray-500">Network Fee: ~0.001 SOL</p>
            </div>
          </div>

          {/* Bottom Send Button */}
          <div className="absolute bottom-0 left-0 w-full p-6 pb-8 bg-gradient-to-t from-black via-black/90 to-transparent z-20">
            <button className="w-full py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold text-lg shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_40px_rgba(251,191,36,0.5)] transition-all transform hover:scale-[1.02]">
              Slide to Send
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ChatPaySection;
