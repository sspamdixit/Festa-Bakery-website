const ITEMS = [
  "Freshly Baked",
  "·",
  "Custom Cakes",
  "·",
  "Birthday Cakes",
  "·",
  "Anniversary Cakes",
  "·",
  "Vadodara, India",
  "·",
  "Made to Order",
  "·",
  "Real Ingredients",
  "·",
];

const repeated = [...ITEMS, ...ITEMS, ...ITEMS];

export function Marquee() {
  return (
    <div className="bg-card-solid overflow-hidden border-y border-foreground/10 py-4">
      <div className="festa-marquee-track flex items-center gap-8 whitespace-nowrap will-change-transform">
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
      </div>
    </div>
  );
}
