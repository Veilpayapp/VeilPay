import React from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FOOTER_DATA = [
  {
    title: 'Ecosystem',
    links: [
      { label: 'Chains', href: '#' },
      { label: 'Tokens', href: '#' },
      { label: 'Network Status', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Docs', href: '#' },
      { label: 'Whitepaper', href: '#' },
      { label: 'APIs', href: '#' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'X (Twitter)', href: '#' },
      { label: 'Discord', href: '#' },
      { label: 'Support', href: '#' },
    ],
  },
];

const BrutalistFooter: React.FC = () => {
  return (
    <footer className="relative z-40 w-full bg-black text-white overflow-hidden">
      <div className="w-full border-t border-white/10" />

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-[1fr_2fr] md:px-12"
      >
        <div className="flex flex-col h-full items-start justify-between gap-8">
          <h3 className="text-3xl font-bold tracking-tight leading-tight text-white max-w-[250px]">
            Experience the new standard.
          </h3>
          
          <div className="w-full max-w-xs space-y-3">
            <h4 className="text-sm font-semibold text-gray-400">Join the Waitlist</h4>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-amber-500 focus-visible:border-amber-500 rounded-lg"
              />
              <Button size="icon" className="bg-amber-500 hover:bg-amber-600 text-black rounded-lg">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          {FOOTER_DATA.map((col, idx) => (
            <motion.div 
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
              className="flex flex-col gap-5"
            >
              <h4 className="text-xs font-bold uppercase tracking-widest text-amber-500/80">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mx-auto w-full max-w-7xl px-6 md:px-12"
      >
        <a
          href="#"
          className="group block w-full text-center leading-none"
          aria-label="VeilPay"
        >
          <span
            className="inline-block font-black tracking-tighter text-transparent transition-all duration-700 ease-in-out group-hover:bg-gradient-to-r group-hover:from-amber-300 group-hover:via-amber-500 group-hover:to-amber-700 group-hover:bg-clip-text group-hover:text-transparent group-hover:drop-shadow-[0_0_30px_rgba(251,191,36,0.3)]"
            style={{
              fontSize: 'clamp(4rem, 16vw, 14rem)',
              WebkitTextStroke: '1px rgba(255,255,255,0.2)',
            }}
          >
            VEILPAY
          </span>
        </a>
      </motion.div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 px-6 py-8 sm:flex-row md:px-12">
        <span className="text-xs text-neutral-500">
          &copy; 2026 VeilPay. All rights reserved.
        </span>
        <div className="flex items-center gap-6">
          <a href="#" className="text-xs font-medium text-neutral-500 hover:text-amber-400 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-xs font-medium text-neutral-500 hover:text-amber-400 transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(BrutalistFooter);
