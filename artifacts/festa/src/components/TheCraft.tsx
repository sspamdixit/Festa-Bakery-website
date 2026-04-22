import { motion } from "framer-motion";

export function TheCraft() {
  return (
    <section className="py-32 bg-card overflow-hidden">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4 md:gap-8 relative z-10">
              <motion.div 
                className="space-y-4 md:space-y-8 mt-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-background">
                  <img 
                    src="/images/cake-texture.png" 
                    alt="Macro cake texture" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden bg-background">
                  <img 
                    src="/images/tart.png" 
                    alt="Elegant fruit tart" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                className="space-y-4 md:space-y-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative aspect-square overflow-hidden bg-background">
                  <img 
                    src="/images/crumb-structure.png" 
                    alt="Artisanal bread crumb structure" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden bg-background">
                  <img 
                    src="/images/hands-dough.png" 
                    alt="Hands working dough" 
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              </motion.div>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[100px] rounded-full z-0 pointer-events-none" />
          </div>

          <motion.div 
            className="order-1 lg:order-2 max-w-xl"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-sans tracking-[0.2em] text-primary uppercase mb-6">The Craft</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-light leading-tight text-foreground mb-8">
              There are no shortcuts to perfection.
            </h3>
            <div className="space-y-6 text-muted-foreground font-sans font-light text-lg leading-relaxed">
              <p>
                We believe that baking is an exact science executed with soul. From the hydration percentage of our sourdough to the precise tempering of chocolate, every detail is measured, recorded, and refined.
              </p>
              <p>
                Operating as a small atelier means we are limited by our own hands, not by mass production lines. We bake in small, deliberate batches. When something isn't right, it doesn't leave the kitchen.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
