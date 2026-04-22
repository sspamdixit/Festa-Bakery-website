import { useRef, Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, useGLTF, Center, ContactShadows, Sparkles } from "@react-three/drei";
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
        mats.forEach((m) => {
          if (m instanceof THREE.MeshStandardMaterial) {
            m.envMapIntensity = 1.4;
            m.roughness = Math.max(0.1, m.roughness * 0.7);
            m.needsUpdate = true;
          }
        });
      }
    });
  }, [scene]);

  return <Center><primitive object={scene} /></Center>;
}

// ─── Scene contents ───────────────────────────────────────────────────────────
function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.004;
    const tx = state.mouse.y * 0.25;
    const tz = state.mouse.x * 0.25;
    groupRef.current.rotation.x += 0.05 * (tx - groupRef.current.rotation.x);
    groupRef.current.rotation.z += 0.05 * (tz - groupRef.current.rotation.z);
  });

  return (
    <>
      {/* Cheap sky + ground hemisphere — no HDR download */}
      <hemisphereLight args={["#FFF0DC", "#3d2b1f", 1.2]} />
      {/* Warm key from upper-right */}
      <directionalLight position={[6, 9, 5]}  intensity={2.4} color="#FFF0DC" />
      {/* Cool fill from left */}
      <directionalLight position={[-6, 2, -4]} intensity={0.8} color="#C4DFFF" />
      {/* Golden rim from behind */}
      <pointLight       position={[-2, 3, -5]} intensity={1.8} color="#E3B23C" />

      <ContactShadows position={[0, -1.55, 0]} opacity={0.25} scale={5} blur={2.5} far={4} color="#3d2b1f" />
      <Sparkles count={30} scale={3.5} size={0.6} speed={0.2} opacity={0.5} color="#E3B23C" />

      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.5}>
        <group ref={groupRef} scale={0.55}>
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </group>
      </Float>
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
