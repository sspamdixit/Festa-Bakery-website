import { useRef, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Center, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function detectWebGL(): boolean {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

const MODEL_URL = `${import.meta.env.BASE_URL}models/scene.gltf`;
useGLTF.preload(MODEL_URL);

// ─── Model ────────────────────────────────────────────────────────────────────
function Model() {
  const { scene } = useGLTF(MODEL_URL);

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh && child.material) {
        const mats = Array.isArray(child.material) ? child.material : [child.material];
        const upgraded = mats.map((m) => {
          // Convert flat unlit materials to lit standard materials so the cake
          // catches highlights and shadows instead of looking like a sticker.
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

// ─── Scene contents ───────────────────────────────────────────────────────────
function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    // Gentle, predictable spin only — no mouse-driven tilt that pushes the
    // cake out of the canvas frame.
    groupRef.current.rotation.y += 0.003;
  });

  return (
    <>
      {/* Cheap sky + ground hemisphere — no HDR download */}
      <hemisphereLight args={["#FFF0DC", "#3d2b1f", 1.0]} />
      {/* Warm key from upper-right */}
      <directionalLight position={[5, 7, 4]}  intensity={1.6} color="#FFF0DC" />
      {/* Cool fill from left */}
      <directionalLight position={[-5, 2, -3]} intensity={0.6} color="#C4DFFF" />
      {/* Golden rim from behind */}
      <pointLight       position={[-2, 3, -5]} intensity={1.2} color="#E3B23C" />

      <ContactShadows position={[0, -1.4, 0]} opacity={0.22} scale={4} blur={2.4} far={3} color="#3d2b1f" />

      <group ref={groupRef} scale={0.42}>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </group>
    </>
  );
}

// ─── WebGL-unavailable fallback — CSS only, on-brand ─────────────────────────
const SPARKS = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  top:      `${15 + ((i * 41 + 7) % 70)}%`,
  left:     `${10 + ((i * 57 + 3) % 80)}%`,
  size:     `${3  +  (i % 4)}px`,
  delay:    `${(i * 0.3) % 3}s`,
  duration: `${2.2 + (i % 3) * 0.7}s`,
}));

function Fallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative festa-cake-float">
        {SPARKS.map((s) => (
          <div
            key={s.id}
            className="festa-spark absolute rounded-full pointer-events-none"
            style={{
              top: s.top, left: s.left,
              width: s.size, height: s.size,
              background: "#E3B23C",
              animationDelay: s.delay,
              animationDuration: s.duration,
            }}
          />
        ))}
        <div
          className="w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full flex items-center justify-center"
          style={{
            background:
              "radial-gradient(circle, rgba(227,178,60,0.35) 0%, rgba(227,178,60,0.08) 55%, transparent 80%)",
            boxShadow: "0 0 80px 20px rgba(227,178,60,0.12)",
          }}
        >
          <span
            className="font-serif font-black text-foreground/25 select-none"
            style={{ fontSize: "clamp(4rem, 12vw, 7rem)" }}
          >
            F
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Export ───────────────────────────────────────────────────────────────────
export function CakeBaked() {
  // Check upfront so we never try to create a WebGL context on unsupported devices.
  // useState initializer runs once on first render — no effect needed.
  const [hasWebGL] = useState(() => detectWebGL());

  if (!hasWebGL) return <Fallback />;

  return (
    <Canvas
      camera={{ position: [3.2, 1.4, 4.2], fov: 38 }}
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ gl }) => {
        gl.toneMapping = 4; // ACESFilmicToneMapping
        gl.toneMappingExposure = 1.2;
      }}
    >
      <Scene />
    </Canvas>
  );
}
