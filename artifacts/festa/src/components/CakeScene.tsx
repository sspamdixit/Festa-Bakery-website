import { useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Center, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

const MODEL_URL = `${import.meta.env.BASE_URL}models/scene.gltf`;
useGLTF.preload(MODEL_URL);

function Model() {
  const { scene } = useGLTF(MODEL_URL);

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material) {
        const mats = Array.isArray(child.material) ? child.material : [child.material];
        const upgraded = mats.map((m) => {
          const mAny = m as THREE.MeshStandardMaterial & { map?: THREE.Texture; color?: THREE.Color };
          if (m instanceof THREE.MeshStandardMaterial) {
            m.roughness = 0.7;
            m.metalness = 0.0;
            m.envMapIntensity = 1.0;
            m.needsUpdate = true;
            return m;
          }
          const lit = new THREE.MeshStandardMaterial({
            map: mAny.map ?? null,
            color: mAny.color ? mAny.color.clone() : new THREE.Color("#ffffff"),
            roughness: 0.75,
            metalness: 0.0,
          });
          lit.side = THREE.DoubleSide;
          return lit;
        });
        child.material = upgraded.length === 1 ? upgraded[0] : upgraded;
        child.castShadow = false;
        child.receiveShadow = false;
      }
    });
  }, [scene]);

  return <Center><primitive object={scene} /></Center>;
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const baseYRef = useRef(0);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Slow auto-spin baseline.
    baseYRef.current += 0.003;
    // Mouse-driven tilt — small amplitude so neither cake nor shadow ever clip
    // out of the canvas. state.mouse is normalized to [-1, 1] within the canvas.
    const targetX = state.mouse.y * 0.12;
    const targetYOffset = state.mouse.x * 0.18;
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.06;
    groupRef.current.rotation.y +=
      (baseYRef.current + targetYOffset - groupRef.current.rotation.y) * 0.08;
  });

  return (
    <>
      <hemisphereLight args={["#FFF0DC", "#3d2b1f", 1.0]} />
      <directionalLight position={[5, 7, 4]} intensity={1.6} color="#FFF0DC" />
      <directionalLight position={[-5, 2, -3]} intensity={0.6} color="#C4DFFF" />
      <pointLight position={[-2, 3, -5]} intensity={1.2} color="#C9527E" />

      <ContactShadows position={[0, -1.4, 0]} opacity={0.22} scale={4} blur={2.4} far={3} color="#3d2b1f" />

      <group ref={groupRef} scale={0.42}>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </group>
    </>
  );
}

export default function CakeScene() {
  return (
    <Canvas
      camera={{ position: [3.2, 1.4, 4.2], fov: 38 }}
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      onCreated={({ gl }) => {
        gl.toneMapping = 4; // ACESFilmicToneMapping
        gl.toneMappingExposure = 1.2;
      }}
    >
      <Scene />
    </Canvas>
  );
}
