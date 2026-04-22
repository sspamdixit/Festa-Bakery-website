import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LETTERS = "Festa.".split("");
const TAGLINE = "Artisanal Baking, Redefined.";

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");

  useEffect(() => {
    const holdTimer = setTimeout(() => setPhase("hold"), 500);
    const outTimer = setTimeout(() => setPhase("out"), 1300);
    const doneTimer = setTimeout(() => onDone(), 2000);
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
          {/* ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(227,178,60,0.28) 0%, transparent 70%)",
            }}
          />

          {/* brand name */}
          <div className="flex items-end gap-[0.02em] overflow-hidden mb-6 relative z-10">
            {LETTERS.map((char, i) => (
              <motion.span
                key={i}
                className="font-serif font-black text-foreground leading-none"
                style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)" }}
                initial={{ opacity: 0, y: 60, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* progress bar */}
          <div className="relative z-10 w-32 h-[2px] bg-foreground/10 rounded-full overflow-hidden mb-6">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{ backgroundColor: "#E3B23C" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "linear" }}
            />
          </div>

          {/* tagline */}
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
