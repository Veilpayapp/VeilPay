import React from 'react';

const IPhoneMockup: React.FC = () => {
  return (
    <div className="relative z-20 flex justify-center">
      <div className="relative w-[1200px] md:w-[1800px] flex justify-center items-center">
        <img 
          src="/MOCKUP2.png" 
          alt="iPhone Mockup" 
          className="w-full h-auto object-contain relative z-10"
        />
        {/* Screen Content - logo appears via GSAP */}
        <div className="screen-logo absolute inset-0 flex items-center justify-center z-20 pointer-events-none -mt-[10%] opacity-0">
          <div 
            style={{
              width: '180px',
              height: '180px',
              backgroundImage: 'url(/image.png)',
              backgroundColor: 'transparent',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              borderRadius: '50%',
              boxShadow: 'none'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(IPhoneMockup);
