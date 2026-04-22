import { motion } from "framer-motion";

const menuItems = [
  {
    category: "Signature Cakes",
    items: [
      { name: "Espresso Opera", desc: "Almond sponge, dark roasted espresso syrup, French buttercream.", price: "$65" },
      { name: "Burnt Honey Mille-Feuille", desc: "Caramelized puff pastry, burnt honey mousseline, sea salt.", price: "$75" }
    ]
  },
  {
    category: "Artisanal Loaves",
    items: [
      { name: "The Festa Sourdough", desc: "72-hour cold ferment, high hydration, robust dark crust.", price: "$14" },
      { name: "Toasted Rye & Fig", desc: "Earthy rye flour, dried mission figs, toasted walnuts.", price: "$16" }
    ]
  },
  {
    category: "Viennoiserie",
    items: [
      { name: "Classic Croissant", desc: "Isigny butter, distinct shatter, honeycomb crumb.", price: "$6" },
      { name: "Cardamot Knot", desc: "Laminated dough, ground green cardamom, brown sugar glaze.", price: "$7" }
    ]
  }
];

export function Specialties() {
  return (
    <section className="py-32 bg-background">
      <div className="container px-6 mx-auto max-w-5xl">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-sans tracking-[0.2em] text-primary uppercase mb-6">Our Menu</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-light text-foreground">The Repertoire</h3>
        </motion.div>

        <div className="space-y-24">
          {menuItems.map((section, idx) => (
            <motion.div 
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
            >
              <h4 className="text-2xl font-serif text-foreground border-b border-border pb-4 mb-8">{section.category}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {section.items.map(item => (
                  <div key={item.name} className="group cursor-default">
                    <div className="flex justify-between items-baseline mb-2">
                      <h5 className="text-lg font-sans font-medium text-foreground tracking-wide group-hover:text-primary transition-colors">{item.name}</h5>
                      <span className="text-sm font-sans text-muted-foreground">{item.price}</span>
                    </div>
                    <p className="text-sm font-sans font-light text-muted-foreground leading-relaxed">{item.desc}</p>
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
