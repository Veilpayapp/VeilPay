import { motion } from 'framer-motion';

export default function GlassNavbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, target: string | number) => {
    e.preventDefault();
    const lenis = (window as any).lenis;
    if (lenis) {
      // 4 second duration for a super elegant, slow cinematic scroll
      lenis.scrollTo(target, { 
        duration: 4, 
        easing: (t: number) => 1 - Math.pow(1 - t, 4) // smooth quartic ease-out
      });
    } else {
      window.scrollTo({ top: typeof target === 'number' ? target : 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        className="fixed top-6 left-0 right-0 mx-auto z-50 flex items-center gap-12 px-8 glass-panel"
        style={{
          width: 'max-content',
          minWidth: '550px',
          height: '56px',
          borderRadius: '40px',
          /* Clean frosted glass without distortion or noise */
          backdropFilter: 'saturate(180%) blur(16px)',
          WebkitBackdropFilter: 'saturate(180%) blur(16px)',
          boxShadow: `
            inset 0 1px 1px rgba(255, 255, 255, 0.4),
            inset 0 -1px 2px rgba(0, 0, 0, 0.6),
            inset -1px 0 2px rgba(255, 255, 255, 0.1),
            0 15px 30px rgba(0, 0, 0, 0.4)
          `
        }}
      >

        {/* Left Section (Logo + Links) */}
        <div className="flex items-center gap-8 relative z-10">
          {/* Logo */}
          <div 
            className="preserve-color"
            style={{
              width: '40px',
              height: '40px',
              background: 'url(/image.png)',
              backgroundColor: '#ffffff',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              borderRadius: '50%',
              boxShadow: '0 0 20px rgba(255,255,255,0.1)'
            }}
          />
          
          {/* Nav Links */}
          <div className="flex items-center gap-6 ml-2">
            <a 
              href="#home" 
              onClick={(e) => handleScroll(e, 0)} 
              className="text-[13px] font-semibold text-white/70 hover:text-white transition-colors tracking-wide uppercase"
            >
              Home
            </a>
            <a 
              href="#features" 
              onClick={(e) => handleScroll(e, 11500)} 
              className="text-[13px] font-semibold text-white/70 hover:text-white transition-colors tracking-wide uppercase"
            >
              Features
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, '#contact')}
              className="text-[13px] font-semibold text-white/70 hover:text-white transition-colors tracking-wide uppercase"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Right Section (Action Buttons) */}
        <div className="flex items-center gap-3 relative z-10">
          <button className="text-[12px] font-bold text-white hover:text-amber-400 transition-colors tracking-wide uppercase px-4 py-2 rounded-full border border-white/20 hover:border-amber-400/50 bg-white/5">
            DOCUMENTS
          </button>
          <button 
            onClick={(e) => handleScroll(e, '#download')}
            className="text-[12px] font-bold text-black bg-white hover:bg-gray-200 transition-colors tracking-wide uppercase px-4 py-2 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)] preserve-color"
          >
            DOWNLOAD
          </button>
        </div>
      </motion.nav>
    </>
  );
}
