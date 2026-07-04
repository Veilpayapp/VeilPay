import React from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { SparklesCore } from './ui/SparklesCore';

const FOOTER_DATA = [
  {
    title: 'Platform',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Security', href: '#' },
      { label: 'Download APK', href: '#download' },
      { label: 'Waitlist', href: '#waitlist' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { label: 'API Documentation', href: '#' },
      { label: 'GitHub', href: '#' },
      { label: 'Contact Devs', href: '#' },
    ],
  },
];

const BrutalistFooter: React.FC = () => {
  return (
    <footer className="relative w-full h-screen flex flex-col justify-between bg-black text-white overflow-hidden pt-20 border-t border-white/10">
      {/* Background Sparkles */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-auto">
        <SparklesCore
          id="footer-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.5}
          particleDensity={800}
          className="w-full h-full opacity-80 cursor-default"
          particleColor="#F2C572" 
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-[1fr_2fr] md:px-12"
      >
        <div className="flex flex-col h-full items-start justify-between gap-8">
          <h3 className="text-3xl font-bold tracking-tight leading-tight text-white max-w-[250px]">
            Experience the new standard.
          </h3>
          
          <div className="w-full max-w-xs space-y-3">
            <h4 className="text-sm font-semibold text-gray-400">Contact the Devs</h4>
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
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 w-full mt-10 flex justify-center"
      >
        <a
          href="#"
          className="group block w-full text-center leading-none"
          aria-label="VeilPay"
        >
          <span
            className="inline-block font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#F2C572] from-[15%] via-[#5E3B09] via-[50%] to-[#0A0A0A] to-[90%] uppercase"
            style={{
              fontSize: '24vw', // Edge to edge on all screens
              lineHeight: 0.8,
              filter: 'drop-shadow(0px 0px 150px rgba(0,0,0,1)) drop-shadow(0px 50px 80px rgba(0,0,0,1)) drop-shadow(0px 20px 40px rgba(0,0,0,0.9))',
              willChange: 'filter'
            }}
          >
            VEILPAY
          </span>
        </a>
      </motion.div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 px-6 py-8 sm:flex-row md:px-12 relative z-10">
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
