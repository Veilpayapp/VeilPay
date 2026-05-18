import React, { forwardRef } from 'react';

const VolumetricGlow = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="pointer-events-none absolute z-[15]"
      style={{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height: '600px',
        opacity: 0,
      }}
      aria-hidden="true"
    >
      {/* Outer diffuse glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0, 240, 255, 0.15) 0%, rgba(0, 200, 255, 0.08) 40%, transparent 70%)',
          filter: 'blur(60px)',
          width: '100%',
          height: '100%',
        }}
      />
      {/* Inner intense glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.2) 0%, rgba(0, 240, 255, 0.12) 30%, transparent 60%)',
          filter: 'blur(40px)',
          width: '70%',
          height: '80%',
          top: '10%',
          left: '15%',
        }}
      />
      {/* Core bright spot */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: '200px',
          height: '300px',
          background:
            'radial-gradient(ellipse at center, rgba(255,255,255,0.35) 0%, rgba(0, 240, 255, 0.15) 40%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />
      {/* Slight top-down ray */}
      <div
        className="absolute left-1/2 top-0 h-full w-24 -translate-x-1/2"
        style={{
          background:
            'linear-gradient(180deg, rgba(0, 240, 255, 0.08) 0%, transparent 60%)',
          filter: 'blur(20px)',
        }}
      />
    </div>
  );
});

VolumetricGlow.displayName = 'VolumetricGlow';

export default React.memo(VolumetricGlow);
