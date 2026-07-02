import React from 'react';

const IPhoneMockup: React.FC = () => {
  return (
    <div className="relative z-20 flex justify-center drop-shadow-[0_30px_50px_rgba(0,0,0,0.8)]">
      <div className="relative w-[1200px] md:w-[1800px] flex justify-center items-center">
        <img 
          src="/mockup.png" 
          alt="iPhone Mockup" 
          className="w-full h-auto object-contain relative z-10"
        />
        {/* Screen Content - logo appears via GSAP */}
        <div className="screen-logo absolute inset-0 flex items-center justify-center z-20 pointer-events-none mb-[2%] opacity-0">
          <div 
            style={{
              width: '180px',
              height: '180px',
              background: 'url(/image.png)',
              backgroundColor: '#ffffff',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              borderRadius: '50%',
              boxShadow: '0 0 30px rgba(255,255,255,0.4)'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(IPhoneMockup);
