import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture, Decal } from '@react-three/drei';
import * as THREE from 'three';
import { getNextCryptoLogo } from './CryptoLogos';

interface Coin3DProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  wobbleSpeed?: number;
  rotationSpeed?: number;
}

const Coin3D: React.FC<Coin3DProps> = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  wobbleSpeed = 0.5,
  rotationSpeed = 0.005, // Slower rotation
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const logoDataUri = useMemo(() => getNextCryptoLogo(), []);
  
  // Load the SVG data URI as a texture
  const texture = useTexture(logoDataUri);
  texture.colorSpace = THREE.SRGBColorSpace;
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Extremely smooth, slow rotation
    meshRef.current.rotation.y += rotationSpeed; 
    meshRef.current.rotation.x += Math.sin(state.clock.elapsedTime * wobbleSpeed) * 0.002;
    meshRef.current.rotation.z += Math.cos(state.clock.elapsedTime * wobbleSpeed) * 0.002;
  });

  // Base material for the entire silver coin (using physical for realism)
  const coinMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: '#e2e8f0', // bright silver
    metalness: 1.0,
    roughness: 0.15,
    clearcoat: 0.4,
    clearcoatRoughness: 0.1,
  }), []);

  // Material for the decal (logo)
  const decalMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#ffffff',
    metalness: 0.5,
    roughness: 0.3,
    map: texture,
    transparent: true,
    alphaTest: 0.05,
    polygonOffset: true,
    polygonOffsetFactor: -1,
  }), [texture]);

  // Profile of a real coin with a raised rim
  const coinProfile = useMemo(() => {
    return [
      new THREE.Vector2(0, 0.06),
      new THREE.Vector2(0.85, 0.06), // inner flat center
      new THREE.Vector2(0.88, 0.09), // bevel up to rim
      new THREE.Vector2(0.96, 0.09), // top flat of rim
      new THREE.Vector2(1.0, 0.05), // outer top rounded edge
      new THREE.Vector2(1.0, -0.05), // outer bottom rounded edge
      new THREE.Vector2(0.96, -0.09), // bottom flat of rim
      new THREE.Vector2(0.88, -0.09), // bevel down
      new THREE.Vector2(0.85, -0.06), // inner flat bottom
      new THREE.Vector2(0, -0.06),
    ];
  }, []);

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={scale}
      material={coinMaterial}
    >
      <latheGeometry args={[coinProfile, 64]} />
      {/* Front Cap Logo */}
      <Decal
        position={[0, 0.061, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.3, 1.3, 1.3]}
        map={texture}
        material={decalMaterial}
      />
      {/* Back Cap Logo */}
      <Decal
        position={[0, -0.061, 0]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[1.3, 1.3, 1.3]}
        map={texture}
        material={decalMaterial}
      />
    </mesh>
  );
};

export default React.memo(Coin3D);
