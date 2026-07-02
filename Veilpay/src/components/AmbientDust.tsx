import React, { useMemo } from 'react';

const AmbientDust: React.FC = () => {
  // Generate 40 random dust particles
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * -20, // Negative delay starts them mid-animation
      opacity: Math.random() * 0.5 + 0.1,
    }));
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-amber-400 mix-blend-screen animate-dust"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            boxShadow: `0 0 ${p.size * 2}px rgba(251, 191, 36, 0.8)`,
          }}
        />
      ))}
    </div>
  );
};

export default React.memo(AmbientDust);
