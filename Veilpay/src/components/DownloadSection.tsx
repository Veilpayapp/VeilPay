import React, { useRef, useLayoutEffect } from 'react';
import { Download } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DownloadSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section id="download" ref={sectionRef} className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center py-24 overflow-hidden border-t border-white/5">
      {/* Background ambient light */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full z-0 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle at center, rgba(251, 191, 36, 0.2) 0%, transparent 70%)',
          filter: 'blur(100px)',
          willChange: 'transform'
        }}
      />

      <div className="z-10 text-center mb-16 px-4">
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
          <button className="preserve-color flex items-center gap-3 px-10 py-4 rounded-full bg-[#111111] border border-[#F2C572]/40 text-[#F2C572] font-bold hover:bg-gradient-to-r hover:from-[#F2C572] hover:to-[#D4A042] hover:text-black hover:border-transparent transition-all duration-300 shadow-[0_0_30px_rgba(242,197,114,0.1)] hover:shadow-[0_0_50px_rgba(242,197,114,0.4)] transform hover:scale-105 group">
            <Download className="w-6 h-6 group-hover:text-black transition-colors duration-300" />
            <div className="flex flex-col items-start">
              <span className="text-[10px] uppercase font-bold leading-none opacity-80 group-hover:text-black transition-colors duration-300">Direct Download</span>
              <span className="text-lg leading-none mt-1 tracking-tight group-hover:text-black transition-colors duration-300">Download APK</span>
            </div>
          </button>
        </div>
      </div>

    </section>
  );
};

export default DownloadSection;
