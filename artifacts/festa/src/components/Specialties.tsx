import { motion } from "framer-motion";

const menuItems = [
  {
    category: "Standard Cakes",
    items: [
      { name: "Vanilla", half: "₹1,060", kg: "₹2,120" },
      { name: "Coffee", half: "₹1,060", kg: "₹2,120" },
      { name: "Chocolate", half: "₹1,060", kg: "₹2,110" },
      { name: "White Forest", half: "₹1,070", kg: "₹2,140" },
      { name: "Black Forest", half: "₹1,090", kg: "₹2,180" },
      { name: "Choc Walnut / Almond", half: "₹1,140", kg: "₹2,190" },
      { name: "Chocolate All Over", half: "₹1,095", kg: "₹2,180" },
      { name: "Chocolate Truffle", half: "₹1,095", kg: "₹2,190" },
      { name: "Chocolate Ferrero Rocher", half: "₹1,100", kg: "₹2,190" },
      { name: "Belgian Chocolate Ganache", half: "₹1,095", kg: "₹2,180" },
      { name: "Lotus Biscoff", half: "₹1,095", kg: "₹2,190" },
      { name: "Chocolate Chunks", half: "₹1,280", kg: "₹2,560" },
    ],
  },
  {
    category: "Fresh Fruit Cakes",
    items: [
      { name: "Pineapple", half: "₹1,000", kg: "₹2,000" },
      { name: "Strawberry", half: "₹1,050", kg: "₹2,100" },
      { name: "Raspberry", half: "₹1,230", kg: "₹2,460" },
      { name: "Raspberry Apple", half: "₹1,150", kg: "₹2,300" },
      { name: "Kiwi-Strawberry", half: "₹1,050", kg: "₹2,100" },
      { name: "Blueberry", half: "₹1,050", kg: "₹2,100" },
      { name: "Mango", half: "₹1,100", kg: "₹2,200" },
      { name: "Pistachio", half: "₹1,140", kg: "₹2,280" },
    ],
  },
  {
    category: "Coffee Cakes",
    items: [
      { name: "Mocha", half: "₹1,060", kg: "₹2,120" },
      { name: "Irish Coffee", half: "₹1,060", kg: "₹2,120" },
    ],
  },
  {
    category: "Tea Cakes",
    items: [
      { name: "Nuts n Caramel", half: "₹850", kg: "₹1,700" },
      { name: "Walnut", half: "₹870", kg: "₹1,740" },
      { name: "Choc Walnut Brownie", half: "₹900", kg: "₹1,800" },
      { name: "Whole Wheat Walnut Brownie", half: "₹1,000", kg: "₹2,000" },
      { name: "Brownie", half: "₹1,070", kg: "₹2,140" },
      { name: "Whole Wheat Almond", half: "₹900", kg: "₹1,800" },
      { name: "Oats & Wheat Mixed Dry Fruits", half: "₹1,040", kg: "₹2,080" },
      { name: "Whole Wheat Honey n Raisin", half: "₹870", kg: "₹1,740" },
      { name: "Whole Wheat Honey n Walnut", half: "₹1,000", kg: "₹2,000" },
      { name: "Jaggery Oats Whole Wheat", half: "₹950", kg: "₹1,900" },
      { name: "Chocolate Oats Whole Wheat", half: "₹1,000", kg: "₹2,000" },
      { name: "Oats Jowar", half: "₹950", kg: "₹1,900" },
      { name: "Oats Jowar Dry Fruits", half: "₹1,090", kg: "₹2,180" },
      { name: "Chocolate Oats Jowar", half: "₹1,090", kg: "₹2,180" },
      { name: "Sugar / Gluten / Dairy Free", half: "₹1,090", kg: "₹2,180" },
    ],
  },
  {
    category: "Add-ons",
    items: [
      { name: "Cream Cheese Frosting", half: "₹250", kg: "₹500" },
      { name: "Extra Nuts", half: "₹60", kg: "₹120" },
    ],
  },
];

export function Specialties() {
  return (
    <section id="menu" className="festa-paper py-16 md:py-28 lg:py-36 bg-background">
      <div className="container px-5 mx-auto max-w-5xl">
        <motion.div
          className="text-center mb-10 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-sans font-bold tracking-[0.3em] text-secondary uppercase mb-4 md:mb-6">Menu & Pricing</p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black text-foreground">Eggless cakes, baked to order.</h2>
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
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-extrabold text-foreground">{section.category}</h3>
                <span className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-secondary">{String(idx + 1).padStart(2, "0")}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 md:gap-y-4">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="liquid-glass-soft group relative cursor-default rounded-2xl px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.28)]"
                  >
                    <div className="grid grid-cols-[1fr_auto_auto] items-end gap-x-6">
                      <h4 className="text-base md:text-lg font-sans font-bold text-foreground tracking-tight transition-all duration-300 group-hover:text-secondary group-hover:translate-x-1 self-center">
                        {item.name}
                      </h4>
                      <div className="shrink-0 w-20 text-right">
                        <div className="text-[10px] font-sans font-bold tracking-[0.18em] uppercase text-muted-foreground/70 mb-0.5">
                          ½ Kg
                        </div>
                        <span className="text-festa-pink block text-sm md:text-base font-sans font-bold transition-transform duration-300 group-hover:scale-110">
                          {item.half}
                        </span>
                      </div>
                      <div className="shrink-0 w-20 text-right">
                        <div className="text-[10px] font-sans font-bold tracking-[0.18em] uppercase text-muted-foreground/70 mb-0.5">
                          1 Kg
                        </div>
                        <span className="text-festa-pink block text-sm md:text-base font-sans font-bold transition-transform duration-300 group-hover:scale-110">
                          {item.kg}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 md:mt-14 text-center text-base sm:text-lg md:text-xl font-sans font-semibold text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Customised cakes (themes, toppers, fondant work) are charged extra. Final pricing is confirmed on WhatsApp.
        </p>
      </div>
    </section>
  );
}
