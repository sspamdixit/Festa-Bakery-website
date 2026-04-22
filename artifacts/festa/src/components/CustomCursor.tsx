import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, { stiffness: 500, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40 });

  const ringX = useSpring(cursorX, { stiffness: 150, damping: 22 });
  const ringY = useSpring(cursorY, { stiffness: 150, damping: 22 });

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as Element;
      const isInteractive =
        target.closest("a, button, [role='button'], input, textarea, select, label");
      if (dotRef.current && ringRef.current) {
        if (isInteractive) {
          dotRef.current.style.transform = "translate(-50%,-50%) scale(2.5)";
          dotRef.current.style.backgroundColor = "#B22B47";
          ringRef.current.style.transform = "translate(-50%,-50%) scale(1.8)";
          ringRef.current.style.borderColor = "rgba(178,43,71,0.5)";
        } else {
          dotRef.current.style.transform = "translate(-50%,-50%) scale(1)";
          dotRef.current.style.backgroundColor = "#B22B47";
          ringRef.current.style.transform = "translate(-50%,-50%) scale(1)";
          ringRef.current.style.borderColor = "rgba(178,43,71,0.35)";
        }
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* dot */}
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[10000] w-2 h-2 rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "#B22B47",
          transition: "transform 0.2s, background-color 0.2s",
        }}
      />
      {/* ring */}
      <motion.div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-9 h-9 rounded-full border-2"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: "rgba(178,43,71,0.35)",
          transition: "transform 0.3s, border-color 0.3s",
        }}
      />
    </>
  );
}
