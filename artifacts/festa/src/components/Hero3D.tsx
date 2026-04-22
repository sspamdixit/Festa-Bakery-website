import { useRef, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";

const MODEL_URL = `${import.meta.env.BASE_URL}models/scene.gltf`;

useGLTF.preload(MODEL_URL);

function Model() {
  const { scene } = useGLTF(MODEL_URL);
  return (
    <Center>
      <primitive object={scene} />
    </Center>
  );
}

export function Hero3D() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.004;
    const targetX = state.mouse.y * 0.25;
    const targetZ = state.mouse.x * 0.25;
    groupRef.current.rotation.x += 0.05 * (targetX - groupRef.current.rotation.x);
    groupRef.current.rotation.z += 0.05 * (targetZ - groupRef.current.rotation.z);
  });

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.5}>
      <group ref={groupRef} scale={0.55}>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </group>
    </Float>
  );
}
