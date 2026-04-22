import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

export function Hero3D() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.004;
    const targetX = state.mouse.y * 0.3;
    const targetZ = state.mouse.x * 0.3;
    groupRef.current.rotation.x += 0.05 * (targetX - groupRef.current.rotation.x);
    groupRef.current.rotation.z += 0.05 * (targetZ - groupRef.current.rotation.z);
  });

  return (
    <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.6}>
      <group ref={groupRef} position={[0, -0.4, 0]}>
        {/* Cake plate */}
        <mesh position={[0, -1.55, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[1.85, 1.85, 0.08, 64]} />
          <meshStandardMaterial color="#457B9D" roughness={0.35} metalness={0.25} />
        </mesh>

        {/* Bottom tier */}
        <mesh position={[0, -0.95, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[1.55, 1.55, 1.05, 64]} />
          <meshStandardMaterial color="#F5E6E2" roughness={0.55} metalness={0.05} />
        </mesh>
        {/* Bottom tier drip ring */}
        <mesh position={[0, -0.45, 0]} castShadow>
          <torusGeometry args={[1.55, 0.08, 24, 96]} />
          <meshStandardMaterial color="#E3B23C" roughness={0.25} metalness={0.7} />
        </mesh>

        {/* Middle tier */}
        <mesh position={[0, 0.05, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[1.15, 1.15, 0.95, 64]} />
          <meshStandardMaterial color="#DEBAC0" roughness={0.5} metalness={0.05} />
        </mesh>
        {/* Middle tier drip ring */}
        <mesh position={[0, 0.5, 0]} castShadow>
          <torusGeometry args={[1.15, 0.07, 24, 96]} />
          <meshStandardMaterial color="#E3B23C" roughness={0.25} metalness={0.7} />
        </mesh>

        {/* Top tier */}
        <mesh position={[0, 0.95, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.8, 0.8, 0.85, 64]} />
          <meshStandardMaterial color="#F5E6E2" roughness={0.55} metalness={0.05} />
        </mesh>

        {/* Top decoration sphere */}
        <mesh position={[0, 1.55, 0]} castShadow>
          <sphereGeometry args={[0.18, 32, 32]} />
          <meshStandardMaterial color="#E3B23C" roughness={0.2} metalness={0.8} />
        </mesh>

        {/* Floating orbiting accent spheres */}
        {[0, 1, 2, 3, 4].map((i) => {
          const angle = (i / 5) * Math.PI * 2;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * 2.4, Math.sin(i * 1.3) * 0.6 + 0.2, Math.sin(angle) * 2.4]}
            >
              <sphereGeometry args={[0.09, 16, 16]} />
              <meshStandardMaterial color={i % 2 === 0 ? "#E3B23C" : "#457B9D"} roughness={0.25} metalness={0.6} />
            </mesh>
          );
        })}
      </group>
    </Float>
  );
}
