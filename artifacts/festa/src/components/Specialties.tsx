import { motion } from "framer-motion";

const menuItems = [
  {
    category: "Celebration Cakes",
    items: [
      { name: "Chocolate Truffle", desc: "Rich Belgian chocolate sponge, dark ganache, crackling chocolate shards.", price: "₹1,200 / kg" },
      { name: "Rasmalai Pista Cake", desc: "Saffron-soaked malai sponge, cardamom cream, slivered pistachios.", price: "₹1,650 / kg" },
      { name: "Red Velvet Rosette", desc: "Cocoa red velvet, cream cheese frosting, hand-piped buttercream rosettes.", price: "₹1,400 / kg" },
      { name: "Tiramisu Celebration", desc: "Espresso-soaked sponge, mascarpone cream, dusted dark cocoa.", price: "₹1,550 / kg" },
    ],
  },
  {
    category: "Everyday Bakes",
    items: [
      { name: "Banana Walnut Loaf", desc: "Slow-ripened bananas, toasted walnuts, brown sugar crust.", price: "₹450" },
      { name: "Brookies (Box of 6)", desc: "Half brownie, half cookie. Fudgy, gooey, gone in minutes.", price: "₹380" },
      { name: "Cinnamon Rolls (4)", desc: "Soft enriched dough, cinnamon sugar swirl, cream cheese glaze.", price: "₹420" },
      { name: "Whole Wheat Sourdough", desc: "48-hour cold ferment, crackling crust, open honeycomb crumb.", price: "₹320" },
    ],
  },
  {
    category: "Custom Orders",
    items: [
      { name: "Designer Theme Cakes", desc: "Birthdays, anniversaries, baby showers. Tell us the story, we'll bake it.", price: "From ₹2,200 / kg" },
      { name: "Eggless Available", desc: "Most cakes available eggless on request, with no compromise on texture.", price: "Same pricing" },
    ],
  },
];

export function Specialties() {
  return (
    <section id="menu" className="py-28 md:py-36 bg-background">
      <div className="container px-6 mx-auto max-w-5xl">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs font-sans font-bold tracking-[0.3em] text-secondary uppercase mb-6">The Menu</h2>
          <h3 className="text-4xl md:text-6xl font-serif font-black text-foreground">What we bake.</h3>
        </motion.div>

        <div className="space-y-20">
          {menuItems.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
            >
              <div className="flex items-baseline justify-between border-b-2 border-foreground/15 pb-4 mb-10">
                <h4 className="text-2xl md:text-3xl font-serif font-extrabold text-foreground">{section.category}</h4>
                <span className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-secondary">{String(idx + 1).padStart(2, "0")}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {section.items.map((item) => (
                  <div key={item.name} className="group">
                    <div className="flex justify-between items-baseline gap-4 mb-2">
                      <h5 className="text-lg md:text-xl font-sans font-bold text-foreground tracking-tight group-hover:text-secondary transition-colors">
                        {item.name}
                      </h5>
                      <span className="shrink-0 text-sm md:text-base font-sans font-bold text-foreground" style={{ color: "#E3B23C" }}>
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm md:text-base font-sans font-medium text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
