import { Suspense, useEffect, useState, lazy } from "react";

const cakeScenePromise = import("./CakeScene");
const CakeScene = lazy(() => cakeScenePromise);

function detectWebGL(): boolean {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

// ─── WebGL-unavailable / loading fallback — CSS only, on-brand ───────────────
const SPARKS = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  top: `${15 + ((i * 41 + 7) % 70)}%`,
  left: `${10 + ((i * 57 + 3) % 80)}%`,
  size: `${3 + (i % 4)}px`,
  delay: `${(i * 0.3) % 3}s`,
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
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              background: "#B22B47",
              animationDelay: s.delay,
              animationDuration: s.duration,
            }}
          />
        ))}
        <div
          className="w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full flex items-center justify-center"
          style={{
            background:
              "radial-gradient(circle, rgba(178,43,71,0.35) 0%, rgba(178,43,71,0.08) 55%, transparent 80%)",
            boxShadow: "0 0 80px 20px rgba(178,43,71,0.12)",
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
  const [hasWebGL] = useState(() => detectWebGL());
  // Mount on next tick so the very first paint isn't blocked by the 3D chunk,
  // but the chunk download still kicks off immediately on module load above.
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!hasWebGL) return;
    const id = window.requestAnimationFrame(() => setReady(true));
    return () => window.cancelAnimationFrame(id);
  }, [hasWebGL]);

  return (
    <div className="w-full h-full">
      {hasWebGL && ready ? (
        <Suspense fallback={<Fallback />}>
          <CakeScene />
        </Suspense>
      ) : (
        <Fallback />
      )}
    </div>
  );
}
