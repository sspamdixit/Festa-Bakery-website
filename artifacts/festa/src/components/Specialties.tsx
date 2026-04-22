import { motion } from "framer-motion";

const menuItems = [
  {
    category: "Eggless Celebration Cakes",
    items: [
      { name: "Chocolate Truffle", desc: "Eggless Belgian chocolate sponge, dark ganache, and crisp chocolate shards for birthdays and celebrations.", price: "₹1,200 / kg" },
      { name: "Rasmalai Pista Cake", desc: "Eggless saffron sponge with cardamom cream, rasmalai flavour, and slivered pistachios.", price: "₹1,650 / kg" },
      { name: "Red Velvet Rosette", desc: "Eggless red velvet layers, cream cheese frosting, and hand-piped buttercream rosettes.", price: "₹1,400 / kg" },
      { name: "Tiramisu Celebration", desc: "Eggless espresso sponge, mascarpone cream, and a cocoa finish inspired by classic tiramisu.", price: "₹1,550 / kg" },
    ],
  },
  {
    category: "Eggless Everyday Bakes",
    items: [
      { name: "Banana Walnut Loaf", desc: "Moist eggless banana loaf with toasted walnuts and a light brown sugar crust.", price: "₹450" },
      { name: "Brookies (Box of 6)", desc: "Eggless brownie-cookie bars that are fudgy, gooey, and perfect for gifting.", price: "₹380" },
      { name: "Cinnamon Rolls (4)", desc: "Soft eggless rolls with cinnamon sugar swirl and cream cheese glaze.", price: "₹420" },
      { name: "Whole Wheat Sourdough", desc: "48-hour cold ferment, crackling crust, and a naturally airy crumb.", price: "₹320" },
    ],
  },
  {
    category: "Custom Eggless Orders",
    items: [
      { name: "Designer Theme Cakes", desc: "Custom eggless cakes for birthdays, anniversaries, baby showers, and corporate gifting.", price: "From ₹2,200 / kg" },
      { name: "Eggless Customisation", desc: "Most cakes can be customised eggless without compromising texture or flavour.", price: "Always Available" },
    ],
  },
];

export function Specialties() {
  return (
    <section id="menu" className="py-16 md:py-28 lg:py-36 bg-background">
      <div className="container px-5 mx-auto max-w-5xl">
        <motion.div
          className="text-center mb-10 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs font-sans font-bold tracking-[0.3em] text-secondary uppercase mb-4 md:mb-6">Our Menu</h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black text-foreground">Eggless bakes made fresh.</h3>
        </motion.div>

        <div className="space-y-12 md:space-y-20">
          {menuItems.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
            >
              <div className="flex items-baseline justify-between border-b-2 border-foreground/15 pb-4 mb-7 md:mb-10">
                <h4 className="text-xl sm:text-2xl md:text-3xl font-serif font-extrabold text-foreground">{section.category}</h4>
                <span className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-secondary">{String(idx + 1).padStart(2, "0")}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 md:gap-y-10">
                {section.items.map((item) => (
                  <div key={item.name} className="group">
                    <div className="flex flex-wrap justify-between items-baseline gap-x-4 gap-y-1 mb-2">
                      <h5 className="text-base md:text-xl font-sans font-bold text-foreground tracking-tight group-hover:text-secondary transition-colors">
                        {item.name}
                      </h5>
                      <span className="shrink-0 text-sm md:text-base font-sans font-bold" style={{ color: "#E3B23C" }}>
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
