import React, { useMemo } from 'react';
import * as THREE from 'three';
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
        <directionalLight position={[10, 10, 10]} intensity={3} color="#ffffff" />
        <directionalLight position={[-10, -10, -10]} intensity={1.5} color="#fbbf24" />
        <ambientLight intensity={1.2} />
        
        <React.Suspense fallback={null}>
          {/* High-contrast Studio Environment for realistic silver reflections */}
          <Environment resolution={512}>
            {/* The Environment scene is basically a photo studio */}
            <group>
              {/* Massive Overhead Softbox (Bright White) */}
              <mesh position={[0, 20, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <planeGeometry args={[100, 100]} />
                <meshBasicMaterial color="#ffffff" side={THREE.DoubleSide} />
              </mesh>
              {/* Left Rim Light / Bounce (Slightly cooler white) */}
              <mesh position={[-20, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                <planeGeometry args={[40, 100]} />
                <meshBasicMaterial color="#e2e8f0" side={THREE.DoubleSide} />
              </mesh>
              {/* Right Rim Light / Bounce (Warm Amber touch) */}
              <mesh position={[20, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
                <planeGeometry args={[40, 100]} />
                <meshBasicMaterial color="#fef3c7" side={THREE.DoubleSide} />
              </mesh>
              {/* Front Fill (Darker to create contrast against the bright rims) */}
              <mesh position={[0, 0, 20]} rotation={[0, Math.PI, 0]}>
                <planeGeometry args={[100, 100]} />
                <meshBasicMaterial color="#333333" side={THREE.DoubleSide} />
              </mesh>
              {/* Dark Floor to ground the reflections */}
              <mesh position={[0, -20, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[100, 100]} />
                <meshBasicMaterial color="#000000" side={THREE.DoubleSide} />
              </mesh>
            </group>
          </Environment>

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
