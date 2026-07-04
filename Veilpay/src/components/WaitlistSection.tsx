import React, { useRef, useLayoutEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WaitlistSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=100%',
          pin: true,
          scrub: true,
          anticipatePin: 1,
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    
    try {
      // NOTE: Using Web3Forms for silent email sending + saving to database.
      // The user needs to replace "YOUR_ACCESS_KEY_HERE" with their Web3Forms key.
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '9f8b1963-4043-4610-8084-f89a4a274634',
          subject: 'New Waitlist Sign Up for VeilPay',
          from_name: 'VeilPay Waitlist',
          message: `${email} is interested in your app! They have joined the waitlist.`,
          email: email
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="waitlist" ref={sectionRef} className="relative w-full min-h-screen bg-[#050505] flex flex-col items-center justify-center py-24 overflow-hidden border-t border-white/5">
      {/* Dynamic Background Light */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] z-0 pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(249, 115, 22, 0.15) 0%, rgba(245, 158, 11, 0.1) 30%, transparent 70%)',
          filter: 'blur(80px)',
          transform: 'rotate(-15deg)'
        }}
      />

      <div className="z-10 w-full max-w-4xl mx-auto px-4 flex flex-col items-center">
        
        {/* Title */}
        <h2 className="text-6xl md:text-[7rem] font-extrabold tracking-tighter mb-12 leading-none text-center">
          <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Coming soon!
          </span>
        </h2>
        
        {/* Glassmorphism Card */}
        <div className="w-full max-w-3xl backdrop-blur-2xl bg-white/[0.03] border border-white/[0.08] rounded-[2.5rem] p-10 md:p-16 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col items-center text-center relative overflow-hidden">
          
          {/* Inner ambient glow for glass effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
          
          <h3 className="text-3xl md:text-4xl font-medium text-white mb-4 relative z-10">
            Join our waitlist!
          </h3>
          <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto mb-10 font-light relative z-10">
            Sign up for our newsletter to receive the latest updates and insights straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-lg flex flex-col sm:flex-row gap-4 relative z-10">
            <div className="relative flex-1">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email" 
                required
                disabled={status === 'loading' || status === 'success'}
                className="w-full h-14 bg-black/40 border border-white/10 rounded-full px-6 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-black/60 transition-all text-sm"
              />
            </div>
            <button 
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="h-14 px-8 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center min-w-[140px] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'idle' && 'Join Waitlist'}
              {status === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
              {status === 'success' && 'Joined!'}
              {status === 'error' && 'Error'}
            </button>
          </form>

          {status === 'success' && (
            <p className="text-green-400 text-sm mt-4 animate-fade-in relative z-10">
              Thanks! We'll be in touch soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-sm mt-4 animate-fade-in relative z-10">
              Something went wrong. Please try again.
            </p>
          )}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mt-12">
          {['X', 'f', 'ig'].map((icon, i) => (
            <a key={i} href="#" className="w-12 h-12 rounded-xl backdrop-blur-md bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
              {icon === 'X' ? (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              ) : icon === 'f' ? (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              )}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WaitlistSection;
