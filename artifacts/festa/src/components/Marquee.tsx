import { motion } from "framer-motion";

const ITEMS = [
  "Fresh",
  "·",
  "Handcrafted",
  "·",
  "Baked to Order",
  "·",
  "Real Ingredients",
  "·",
  "Small Batches",
  "·",
  "Vadodara, India",
  "·",
  "No Premixes",
  "·",
  "Made With Care",
  "·",
];

export function Marquee() {
  const repeated = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div
      className="overflow-hidden border-y border-foreground/10 py-4"
      style={{ backgroundColor: "hsl(var(--card))" }}
    >
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        animate={{ x: [0, "-33.333%"] }}
        transition={{
          duration: 22,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className={
              item === "·"
                ? "text-primary text-lg font-bold shrink-0"
                : "text-xs font-sans font-bold tracking-[0.25em] uppercase text-foreground/60 shrink-0"
            }
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
