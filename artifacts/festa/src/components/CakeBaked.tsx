import { useRef, useState, Suspense, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, useGLTF, Center, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

const MODEL_URL = `${import.meta.env.BASE_URL}models/scene.gltf`;
useGLTF.preload(MODEL_URL);

// ─── Bake trigger ────────────────────────────────────────────────────────────
function BakeTrigger({ onBaked }: { onBaked: (url: string) => void }) {
  const { gl } = useThree();
  const frame = useRef(0);
  const done = useRef(false);

  useFrame(() => {
    if (done.current) return;
    frame.current++;
    // Wait ~90 frames (≈1.5 s at 60 fps) for lights + model to settle
    if (frame.current < 90) return;
    done.current = true;

    // Preserve drawing buffer for one extra frame so toDataURL works
    requestAnimationFrame(() => {
      const url = gl.domElement.toDataURL("image/png");
      // Sanity-check: an empty canvas produces a tiny data URL (~100 bytes)
      if (url.length > 5000) onBaked(url);
    });
  });

  return null;
}

// ─── Live 3-D model (used only during the bake window) ───────────────────────
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

function LiveScene({ onBaked }: { onBaked: (url: string) => void }) {
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
      <Environment preset="city" />
      <ContactShadows position={[0, -1.55, 0]} opacity={0.3} scale={5} blur={3} far={4} color="#3d2b1f" />
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.5}>
        <group ref={groupRef} scale={0.85}>
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </group>
      </Float>
      <BakeTrigger onBaked={onBaked} />
    </>
  );
}

// ─── Baked poster — zero WebGL, pure CSS ─────────────────────────────────────
const SPARKS = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  top:  `${12 + ((i * 37 + 11) % 76)}%`,
  left: `${8  + ((i * 53 + 7)  % 84)}%`,
  size: `${3  + (i % 4)}px`,
  delay:    `${(i * 0.35) % 3}s`,
  duration: `${2.2 + (i % 3) * 0.6}s`,
}));

function BakedPoster({ src }: { src: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let raf = 0;
    let tx = 0, ty = 0;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      tx = ((e.clientX - rect.left - rect.width  / 2) / (rect.width  / 2)) * 10;
      ty = ((e.clientY - rect.top  - rect.height / 2) / (rect.height / 2)) * 7;
    };

    const tick = () => {
      if (el) {
        el.style.transform =
          `perspective(900px) rotateY(${tx}deg) rotateX(${-ty}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const onLeave = () => { tx = 0; ty = 0; };

    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* golden sparkle particles — CSS only */}
      {SPARKS.map((s) => (
        <div
          key={s.id}
          className="festa-spark absolute rounded-full pointer-events-none"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            background: "#E3B23C",
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}

      {/* ambient glow behind the cake */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 55%, rgba(227,178,60,0.35) 0%, transparent 65%)",
        }}
      />

      {/* the baked image with float + tilt */}
      <div
        ref={containerRef}
        className="relative will-change-transform"
        style={{ transition: "transform 0.08s linear" }}
      >
        <img
          src={src}
          alt="Handcrafted celebration cake"
          className="festa-cake-float w-full max-w-xs md:max-w-sm lg:max-w-md object-contain select-none"
          draggable={false}
          style={{
            filter:
              "drop-shadow(0 0 48px rgba(227,178,60,0.45)) drop-shadow(0 24px 48px rgba(40,20,5,0.3))",
          }}
        />
      </div>
    </div>
  );
}

// ─── Orchestrator ─────────────────────────────────────────────────────────────
export function CakeBaked() {
  const [baked, setBaked] = useState<string | null>(null);

  // If baked, no Canvas in DOM at all
  if (baked) return <BakedPoster src={baked} />;

  return (
    <Canvas
      camera={{ position: [3.2, 1.4, 4.2], fov: 38 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
      onCreated={({ gl }) => {
        gl.toneMapping = 4; // ACESFilmicToneMapping
        gl.toneMappingExposure = 1.25;
        gl.domElement.addEventListener("webglcontextlost", (e) => {
          e.preventDefault();
          // WebGL unavailable — fall back to product photo
          setBaked(`${import.meta.env.BASE_URL}images/celebration-cake.png`);
        });
      }}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[6, 9, 5]}  intensity={2.8} color="#FFF0DC" />
      <directionalLight position={[-6, 2, -4]} intensity={0.9} color="#C4DFFF" />
      <pointLight      position={[-2, 3, -5]}  intensity={2.2} color="#E3B23C" />
      <LiveScene onBaked={setBaked} />
    </Canvas>
  );
}
