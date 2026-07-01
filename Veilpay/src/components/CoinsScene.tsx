import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera, Float } from '@react-three/drei';
import Coin3D from './Coin3D';

interface CoinsSceneProps {
  className?: string;
}

const CoinsScene: React.FC<CoinsSceneProps> = ({ className = '' }) => {
  // Generate a symmetric, scattered layout of coins
  const coins = useMemo(() => {
    const totalCoins = 24;
    const half = totalCoins / 2;
    
    return Array.from({ length: totalCoins }).map((_, i) => {
      const isLeft = i < half;
      
      // Left side: -15 to -3. Right side: 3 to 15.
      const xBase = 3 + Math.random() * 12;
      const x = isLeft ? -xBase : xBase;
      
      // y from -15 to 15
      const y = (Math.random() - 0.5) * 30;
      // z from -10 to 2
      const z = (Math.random() - 0.5) * 12 - 4;
      
      const rx = Math.random() * Math.PI * 2;
      const ry = Math.random() * Math.PI * 2;
      const rz = Math.random() * Math.PI * 2;
      
      const scale = 0.8 + Math.random() * 1.5; // 0.8 to 2.3
      const floatSpeed = 0.5 + Math.random() * 1.5; 
      const floatIntensity = 0.5 + Math.random() * 2;
      const rotationIntensity = 0.1 + Math.random() * 0.5;
      
      const wobbleSpeed = 0.1 + Math.random() * 0.4;
      const rotationSpeed = 0.002 + Math.random() * 0.005; // Even slower rotation

      return {
        key: i,
        position: [x, y, z] as [number, number, number],
        rotation: [rx, ry, rz] as [number, number, number],
        scale,
        floatSpeed,
        floatIntensity,
        rotationIntensity,
        wobbleSpeed,
        rotationSpeed
      };
    });
  }, []);

  return (
    <div className={`absolute inset-0 z-10 pointer-events-none ${className}`}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={45} />
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#4a4a4a" />
        
        <React.Suspense fallback={null}>
          {/* Studio environment gives that high-end "real shine" reflection */}
          <Environment preset="studio" />

          {coins.map((c) => (
            <Float 
              key={c.key} 
              speed={c.floatSpeed} 
              rotationIntensity={c.rotationIntensity} 
              floatIntensity={c.floatIntensity}
            >
              <Coin3D 
                position={c.position} 
                rotation={c.rotation} 
                scale={c.scale} 
                wobbleSpeed={c.wobbleSpeed}
                rotationSpeed={c.rotationSpeed}
              />
            </Float>
          ))}
        </React.Suspense>
      </Canvas>
    </div>
  );
};

export default React.memo(CoinsScene);
