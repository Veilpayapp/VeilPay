import React, { useRef, useLayoutEffect, useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DownloadSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the Download section when it hits the top of the screen
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=150%', // The scroll distance the pin holds for (stops for a moment)
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
      // Replace this URL with your actual Discord Webhook URL
      const DISCORD_WEBHOOK_URL = 'YOUR_DISCORD_WEBHOOK_URL_HERE';
      
      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: null,
          embeds: [
            {
              title: "🚀 New Waitlist Signup!",
              description: `A new user has joined the VeilPay waitlist.\n\n**Email:** \`${email}\``,
              color: 15909234, // Amber color to match VeilPay
              timestamp: new Date().toISOString()
            }
          ]
        })
      });

      if (response.ok) {
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
    <section id="download" ref={sectionRef} className="relative w-full min-h-screen bg-black flex flex-col items-center py-10 overflow-hidden border-t border-white/5">
      {/* Background ambient light */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full z-0 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle at center, rgba(251, 191, 36, 0.2) 0%, transparent 70%)',
          filter: 'blur(100px)',
          willChange: 'transform'
        }}
      />

      {/* Spacer to push title down to center */}
      <div className="flex-[0.8]" />

      <div className="z-10 text-center px-4 w-full flex-shrink-0">
        <h2 className="text-5xl md:text-[5rem] lg:text-[7rem] font-extrabold tracking-tighter mb-4 leading-[0.9]">
          <span 
            className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-600 drop-shadow-[0_20px_30px_rgba(255,255,255,0.1)] drop-shadow-[0_5px_10px_rgba(0,0,0,1)] block mb-2"
          >
            Take back your
          </span>
          <span 
            className="text-transparent bg-clip-text bg-gradient-to-b from-[#F2C572] via-[#D4A042] to-[#1a1103] drop-shadow-[0_20px_30px_rgba(212,160,66,0.2)] drop-shadow-[0_5px_10px_rgba(0,0,0,1)] uppercase block"
          >
            Financial Privacy.
          </span>
        </h2>
        <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto font-light">
          Join the waitlist or download the beta today to experience the fastest, most secure crypto vault on the planet.
        </p>
        
        <div className="flex items-center justify-center mt-10">
          <button className="preserve-color relative flex items-center justify-center px-10 py-4 rounded-full bg-[#111111] border border-[#F2C572]/40 text-[#F2C572] font-bold hover:bg-gradient-to-r hover:from-[#F2C572] hover:to-[#D4A042] hover:border-transparent transition-all duration-300 shadow-[0_0_30px_rgba(242,197,114,0.1)] hover:shadow-[0_0_50px_rgba(242,197,114,0.4)] transform hover:scale-105 group overflow-hidden min-w-[240px]">
            
            {/* Default State */}
            <div className="flex items-center gap-3 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-16">
              <Download className="w-6 h-6" />
              <div className="flex flex-col items-start">
                <span className="text-[10px] uppercase font-bold leading-none opacity-80">Direct Download</span>
                <span className="text-lg leading-none mt-1 tracking-tight">Download APK</span>
              </div>
            </div>

            {/* Hover State */}
            <div className="absolute inset-0 flex items-center justify-center translate-y-16 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] text-black">
              <span className="text-xl tracking-tight font-extrabold uppercase">Coming Soon</span>
            </div>

          </button>
        </div>
      </div>

      <div className="flex-1" />

      {/* Waitlist Section */}
      <div className="z-10 w-full max-w-3xl mx-auto mb-10 backdrop-blur-2xl bg-white/[0.03] border border-white/[0.08] rounded-[2.5rem] p-10 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col items-center text-center relative overflow-hidden flex-shrink-0 scale-90 sm:scale-100">
          {/* Inner ambient glow for glass effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
          
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 relative z-10">
            Coming soon! <span className="text-amber-500 font-medium">Join our waitlist.</span>
          </h3>

          <form onSubmit={handleSubmit} className="w-full max-w-lg flex flex-col sm:flex-row gap-4 relative z-10 mx-auto">
            <div className="relative flex-1">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email" 
                required
                disabled={status === 'loading' || status === 'success'}
                className="w-full h-14 bg-black/40 border border-white/10 rounded-full px-6 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:bg-black/60 transition-all text-sm"
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
    </section>
  );
};

export default DownloadSection;
