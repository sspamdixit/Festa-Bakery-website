import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LETTERS = "Festa.".split("");
const TAGLINE = "Baked Fresh, Every Time.";

const BASE = import.meta.env.BASE_URL;

// Assets to warm in the browser cache while the loader is on screen.
const PRELOAD_IMAGES = [
  `${BASE}images/celebration-cake.png`,
  `${BASE}images/everyday-bake.png`,
  `${BASE}images/chocolate-truffle.png`,
  `${BASE}images/baker-hands.png`,
  `${BASE}models/textures/cake_baseColor.png`,
];
const PRELOAD_FETCHES = [
  `${BASE}models/scene.gltf`,
  `${BASE}models/scene.bin`,
];

function preloadAssets() {
  // Image cache warm-up.
  PRELOAD_IMAGES.forEach((src) => {
    const img = new Image();
    img.decoding = "async";
    img.src = src;
  });
  // 3D model files — fetch into HTTP cache so useGLTF resolves instantly.
  PRELOAD_FETCHES.forEach((url) => {
    fetch(url, { cache: "force-cache" }).catch(() => {});
  });
  // Kick off the 3D scene JS chunk so it's parsed before the user sees the hero.
  import("./CakeScene").catch(() => {});
}

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");

  useEffect(() => {
    preloadAssets();
    const holdTimer = setTimeout(() => setPhase("hold"), 1200);
    const outTimer = setTimeout(() => setPhase("out"), 3200);
    const doneTimer = setTimeout(() => onDone(), 4000);
    return () => {
      clearTimeout(holdTimer);
      clearTimeout(outTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <AnimatePresence>
      {phase !== "out" ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none overflow-hidden"
          style={{ backgroundColor: "hsl(12, 44%, 92%)" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(227,178,60,0.28) 0%, transparent 70%)",
            }}
          />

          <div className="flex items-end gap-[0.02em] overflow-hidden mb-6 relative z-10">
            {LETTERS.map((char, i) => (
              <motion.span
                key={i}
                className="font-serif font-black text-foreground leading-none"
                style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)" }}
                initial={{ opacity: 0, y: 60, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          <div className="relative z-10 w-32 h-[2px] bg-foreground/10 rounded-full overflow-hidden mb-6">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{ backgroundColor: "#E3B23C" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "linear" }}
            />
          </div>

          <motion.p
            className="relative z-10 text-xs font-sans font-semibold tracking-[0.3em] text-foreground/50 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "hold" ? 1 : 0 }}
            transition={{ duration: 0.6 }}
          >
            {TAGLINE}
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
