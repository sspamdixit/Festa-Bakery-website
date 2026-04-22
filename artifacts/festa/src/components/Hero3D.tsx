import { useRef, Suspense, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, useGLTF, Center, Environment, ContactShadows, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const MODEL_URL = `${import.meta.env.BASE_URL}models/scene.gltf`;

useGLTF.preload(MODEL_URL);

function Model() {
  const { scene } = useGLTF(MODEL_URL);

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material) {
        const mats = Array.isArray(child.material) ? child.material : [child.material];
        mats.forEach((mat) => {
          if (mat instanceof THREE.MeshStandardMaterial) {
            mat.envMapIntensity = 2.2;
            mat.roughness = Math.max(0.08, mat.roughness * 0.65);
            mat.needsUpdate = true;
          }
        });
      }
    });
  }, [scene]);

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
    <>
      {/* HDRI-style environment for realistic surface reflections */}
      <Environment preset="city" />

      {/* Soft grounding shadow beneath the model */}
      <ContactShadows
        position={[0, -1.55, 0]}
        opacity={0.3}
        scale={5}
        blur={3}
        far={4}
        color="#3d2b1f"
      />

      {/* Floating golden sparkles for a magical feel */}
      <Sparkles
        count={55}
        scale={3.8}
        size={0.7}
        speed={0.25}
        opacity={0.55}
        color="#E3B23C"
      />

      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.5}>
        <group ref={groupRef} scale={0.85}>
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </group>
      </Float>
    </>
  );
}
