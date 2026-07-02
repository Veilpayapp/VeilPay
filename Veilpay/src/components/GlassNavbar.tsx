import { motion } from 'framer-motion';

export default function GlassNavbar() {
  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        className="fixed top-6 left-0 right-0 mx-auto z-50 flex items-center justify-between px-8"
        style={{
          width: 'max-content',
          minWidth: '550px',
          height: '56px',
          borderRadius: '40px',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.01) 100%)',
          /* Clean frosted glass without distortion or noise */
          backdropFilter: 'saturate(180%) blur(16px)',
          WebkitBackdropFilter: 'saturate(180%) blur(16px)',
          boxShadow: `
            inset 0 1px 1px rgba(255, 255, 255, 0.4),
            inset 0 -1px 2px rgba(0, 0, 0, 0.6),
            inset -1px 0 2px rgba(255, 255, 255, 0.1),
            0 15px 30px rgba(0, 0, 0, 0.4)
          `,
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >

        {/* Left Links */}
        <div className="flex items-center gap-6 relative z-10">
          <a href="#home" className="text-[13px] font-semibold text-white/70 hover:text-white transition-colors tracking-wide uppercase">Home</a>
          <a href="#features" className="text-[13px] font-semibold text-white/70 hover:text-white transition-colors tracking-wide uppercase">Features</a>
        </div>

        {/* Center Logo */}
        <div className="flex items-center justify-center relative z-10 mx-10">
          <div 
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
        </div>

        {/* Right Links */}
        <div className="flex items-center gap-6 relative z-10">
          <a href="#developers" className="text-[13px] font-semibold text-white/70 hover:text-white transition-colors tracking-wide uppercase">Devs</a>
          <a href="#contact" className="text-[13px] font-semibold text-white/70 hover:text-white transition-colors tracking-wide uppercase">Contact</a>
        </div>
      </motion.nav>
    </>
  );
}
