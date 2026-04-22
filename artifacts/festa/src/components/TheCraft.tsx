import { motion } from "framer-motion";

export function TheCraft() {
  return (
    <section className="festa-paper py-16 md:py-28 lg:py-36 overflow-hidden relative" style={{ backgroundColor: "hsl(var(--card))" }}>
      <div className="container px-5 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-3 md:gap-6 relative z-10">
              <motion.div
                className="space-y-3 md:space-y-6 mt-10 md:mt-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl md:rounded-2xl bg-background shadow-xl">
                  <img
                    src="/images/celebration-cake.webp"
                    alt="Celebration cake with gold leaf"
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="800"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-xl md:rounded-2xl bg-background shadow-xl">
                  <img
                    src="/images/everyday-bake.webp"
                    alt="Everyday bakes like tea cake, milk buns, and cookies"
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="600"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              </motion.div>

              <motion.div
                className="space-y-3 md:space-y-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative aspect-square overflow-hidden rounded-xl md:rounded-2xl bg-background shadow-xl">
                  <img
                    src="/images/chocolate-truffle.webp"
                    alt="Chocolate truffle cake slice"
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="600"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl md:rounded-2xl bg-background shadow-xl">
                  <img
                    src="/images/baker-hands.webp"
                    alt="Baker piping buttercream rosettes"
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="800"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              </motion.div>
            </div>

            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full z-0 pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(201, 82, 126,0.25) 0%, rgba(201, 82, 126,0) 60%)", filter: "blur(80px)" }}
            />
          </div>

          <motion.div
            className="order-1 lg:order-2 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xs font-sans font-bold tracking-[0.3em] text-secondary uppercase mb-4 md:mb-6">The Craft</h2>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black leading-[0.95] text-foreground mb-6 md:mb-8">
              Baking, done with precision.
            </h3>
            <div className="space-y-4 md:space-y-5 text-foreground/80 font-sans font-medium text-base md:text-lg leading-relaxed">
              <p>
                What began as a passion for small-batch excellence in Hyderabad has now officially found its home in Vadodara. Festa is a home bakery dedicated to fresh bakes with consistent texture, clean flavor, and careful finishing.
              </p>
              <p>
                We use real butter, real cream, and real chocolate. No shortcuts. Every order is baked fresh, packed with care, and finished to feel premium.
              </p>
              <p>
                From birthday celebrations and anniversaries to tea-time bakes and gifting boxes, each recipe is built for flavor, softness, and dependable results.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--background)))" }}
      />
    </section>
  );
}
