import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LETTERS = "Festa.".split("");
const TAGLINE = "Baked Fresh, Every Time.";

const BASE = import.meta.env.BASE_URL;

function preloadAssets() {
  const idle =
    (window as Window & { requestIdleCallback?: (cb: () => void) => void })
      .requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 1));
  idle(() => {
    [
      `${BASE}images/celebration-cake.webp`,
      `${BASE}images/everyday-bake.webp`,
      `${BASE}images/chocolate-truffle.webp`,
      `${BASE}images/baker-hands.webp`,
    ].forEach((src) => {
      const img = new Image();
      img.decoding = "async";
      img.src = src;
    });
    [`${BASE}models/scene.gltf`, `${BASE}models/scene.bin`].forEach((url) => {
      fetch(url, { cache: "force-cache" }).catch(() => {});
    });
    import("./CakeScene").catch(() => {});
  });
}

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    preloadAssets();
    const outTimer = setTimeout(() => setPhase("out"), 600);
    const doneTimer = setTimeout(() => onDone(), 1000);
    return () => {
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
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
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
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          <motion.p
            className="relative z-10 text-xs font-sans font-semibold tracking-[0.3em] text-foreground/50 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            {TAGLINE}
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
