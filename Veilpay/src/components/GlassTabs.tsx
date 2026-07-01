import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// SVG Icons for the tabs
const Icons = {
  Dashboard: () => (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  Wallet: () => (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
  Transactions: () => (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Settings: () => (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
};

const tabs = [
  { id: 'dashboard', label: 'Dashboard', Icon: Icons.Dashboard },
  { id: 'wallet', label: 'Wallet', Icon: Icons.Wallet },
  { id: 'transactions', label: 'Transactions', Icon: Icons.Transactions },
  { id: 'settings', label: 'Settings', Icon: Icons.Settings },
];

export default function GlassTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 p-4">
      {/* Tab Navigation Container */}
      <div className="flex items-center rounded-2xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const { Icon } = tab;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-300 ${
                isActive
                  ? 'text-white'
                  : 'text-white/50 hover:bg-white/5 hover:text-white/80'
              }`}
            >
              {/* Z-10 ensures the text/icon is above the animated background */}
              <div className="relative z-10 flex items-center gap-2">
                <Icon />
                <span>{tab.label}</span>
              </div>

              {/* Active State Background & Glow */}
              {isActive && (
                <motion.div
                  layoutId="activeTabBackground"
                  className="absolute inset-0 rounded-xl border-b-[2px] border-b-white/50 bg-white/15 backdrop-blur-sm shadow-[0_4px_16px_rgba(255,255,255,0.15)]"
                  initial={false}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Content Area */}
      <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="flex h-full flex-col text-white"
          >
            <h2 className="mb-6 text-3xl font-semibold tracking-tight drop-shadow-md">
              {tabs.find((t) => t.id === activeTab)?.label}
            </h2>
            
            <div className="flex-1 rounded-xl border border-white/5 bg-white/5 p-6 shadow-inner">
              <p className="text-lg leading-relaxed text-white/70">
                This is the content area for the{' '}
                <span className="font-semibold text-white">
                  {tabs.find((t) => t.id === activeTab)?.label}
                </span>{' '}
                tab. The background inherits the beautiful glass styling with soft blurs, 
                subtle borders, and deep shadows, ensuring a premium aesthetic.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
