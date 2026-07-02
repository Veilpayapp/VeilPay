import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownLeft, RefreshCcw } from 'lucide-react';

export default function IPhoneMockup() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
      className="relative pointer-events-none w-[320px] md:w-[380px] lg:w-[400px]"
    >
      {/* Ambient Glow Spill */}
      <div 
        className="absolute inset-0 z-0 scale-[1.2] opacity-80"
        style={{
          background: 'radial-gradient(circle at center, rgba(251, 191, 36, 0.4) 0%, transparent 70%)',
          filter: 'blur(80px)',
          willChange: 'transform, opacity'
        }}
      />

      <div className="relative z-10 mx-auto flex h-[650px] md:h-[780px] w-full flex-col overflow-hidden rounded-[3rem] md:rounded-[3.5rem] border-[6px] md:border-[8px] border-[#1a1a1a] bg-[#0a0a0a] shadow-2xl">
        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 z-20 h-[30px] w-[110px] -translate-x-1/2 rounded-full bg-black flex items-center justify-between px-3">
            <div className="w-2 h-2 rounded-full bg-green-500/80" />
            <div className="w-2 h-2 rounded-full bg-amber-500/20" />
        </div>

        {/* Screen area */}
        <div className="flex-1 bg-[#0a0a0a] flex flex-col p-5 relative overflow-hidden">
          
          {/* Subtle bg texture/gradient in app */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent opacity-50" />

          {/* Frosted Balance Card */}
          <div className="mt-16 w-full rounded-3xl border border-amber-500/20 bg-white/5 p-6 backdrop-blur-[20px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-30">
               <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
            </div>
            <p className="text-sm font-medium text-gray-400 mb-1">Total Balance</p>
            <h2 className="text-4xl font-semibold tracking-tighter text-white mb-2">$278,832<span className="text-gray-500">.88</span></h2>
            <div className="flex items-center gap-2 text-sm text-green-400">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/20">↑</span>
              +$12,450.00 (4.2%)
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-3 gap-3 mt-6">
            {[
              { label: 'Send', icon: <ArrowUpRight className="w-5 h-5" /> },
              { label: 'Receive', icon: <ArrowDownLeft className="w-5 h-5" /> },
              { label: 'Swap', icon: <RefreshCcw className="w-5 h-5" /> }
            ].map(btn => (
              <div key={btn.label} className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 text-amber-400 backdrop-blur-md">
                  {btn.icon}
                </div>
                <span className="text-xs font-medium text-gray-400">{btn.label}</span>
              </div>
            ))}
          </div>

          {/* Transactions List */}
          <div className="mt-8 flex flex-col gap-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-white">Recent Activity</h3>
              <span className="text-xs text-amber-500">See All</span>
            </div>

            {[
              { title: 'Received USDC', time: 'Today, 2:45 PM', amount: '+ 1,500.00', positive: true, icon: 'U' },
              { title: 'Sent ETH', time: 'Yesterday, 9:20 AM', amount: '- 0.45', positive: false, icon: 'E' },
              { title: 'Swapped SOL', time: 'Jul 24, 4:10 PM', amount: '+ 24.00', positive: true, icon: 'S' }
            ].map((tx, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-white/10 text-gray-300 font-bold">
                  {tx.icon}
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-sm font-medium text-white">{tx.title}</span>
                  <span className="text-xs text-gray-500">{tx.time}</span>
                </div>
                <span className={`text-sm font-semibold ${tx.positive ? 'text-white' : 'text-gray-400'}`}>
                  {tx.amount}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Home Bar */}
        <div className="absolute bottom-2 left-1/2 h-1 w-1/3 -translate-x-1/2 rounded-full bg-gray-500/80 z-20" />
      </div>
    </motion.div>
  );
}
