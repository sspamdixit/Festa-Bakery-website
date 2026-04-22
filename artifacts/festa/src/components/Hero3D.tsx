import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export function Hero3D() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Gentle rotation
    meshRef.current.rotation.y += 0.005;
    meshRef.current.rotation.x += 0.002;
    
    // Parallax effect based on mouse
    const targetX = (state.mouse.x * Math.PI) / 10;
    const targetY = (state.mouse.y * Math.PI) / 10;
    
    meshRef.current.rotation.y += 0.05 * (targetX - meshRef.current.rotation.y);
    meshRef.current.rotation.x += 0.05 * (targetY - meshRef.current.rotation.x);
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={1.5}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <MeshDistortMaterial 
          color="#D4A373" // Warm gold/caramel accent
          roughness={0.2}
          metalness={0.8}
          distort={0.2}
          speed={1}
        />
      </mesh>
    </Float>
  );
}
