import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919963163227";

const menuItems = [
  {
    category: "Standard Cakes",
    items: [
      "Vanilla",
      "Coffee",
      "Chocolate",
      "Butterscotch",
      "White Forest",
      "Black Forest",
      "Choc Walnut / Almond",
      "Chocolate All Over",
      "Chocolate Truffle",
      "Truffle",
      "Dutch",
      "Hazelnut",
      "Chocolate Ferrero Rocher",
      "Belgian Chocolate Ganache",
      "Lotus Biscoff",
      "Chocolate Chunks",
      "KitKat",
      "Oreo",
      "Rasmalai",
      "Thandai",
      "Paan",
    ],
  },
  {
    category: "Fruit Cakes",
    items: [
      "Pineapple",
      "Strawberry",
      "Black Currant",
      "Raspberry",
      "Raspberry Apple",
      "Kiwi-Strawberry",
      "Blueberry",
      "Mango",
      "Pistachio",
    ],
  },
  {
    category: "Tea Cakes",
    items: [
      "Walnut",
      "Choc Walnut Brownie",
      "Whole Wheat Walnut Brownie",
      "Brownie",
      "Fudgy Brownie",
      "Oreo Brownie",
      "Biscoff Brownie",
      "KitKat Brownie",
      "Nutella Brownie",
      "Brownie Tower",
      "Whole Wheat Almond",
      "Oats & Wheat Mixed Dry Fruits",
      "Whole Wheat Honey n Raisin",
      "Whole Wheat Honey n Walnut",
      "Jaggery Oats Whole Wheat",
      "Chocolate Oats Whole Wheat",
      "Oats Jowar",
      "Oats Jowar Dry Fruits",
      "Chocolate Oats Jowar",
      "Sugar / Gluten Free",
    ],
  },
  {
    category: "Add-ons",
    items: ["Extra Nuts"],
  },
];

function getWhatsAppUrl(itemName: string) {
  const message = `Namaste Festa! I'd like to get a quote for: ${itemName}.\n\nPlease let me know the pricing and availability.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

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
          <p className="text-xs font-sans font-bold tracking-[0.3em] text-secondary uppercase mb-4 md:mb-6">Our Menu</p>
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
                {section.items.map((name) => (
                  <a
                    key={name}
                    href={getWhatsAppUrl(name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="liquid-glass-soft group relative cursor-pointer rounded-2xl px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.28)] no-underline flex items-center justify-between"
                  >
                    <h4 className="text-base md:text-lg font-sans font-bold text-foreground tracking-tight transition-all duration-300 group-hover:text-secondary group-hover:translate-x-1">
                      {name}
                    </h4>
                    <span className="shrink-0 ml-4 flex items-center gap-1.5 text-xs font-sans font-bold tracking-[0.15em] uppercase text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <MessageCircle className="w-3.5 h-3.5" />
                      Get Quote
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 md:mt-14 text-center text-base sm:text-lg md:text-xl font-sans font-semibold text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          All prices are on request — tap any item to get a quote on WhatsApp.
        </p>
      </div>
    </section>
  );
}
