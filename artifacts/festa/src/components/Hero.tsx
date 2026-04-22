import { motion } from "framer-motion";
import { CakeBaked } from "./CakeBaked";
import { ArrowRight, MapPin } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CheckoutModal } from "./CheckoutModal";

const DELAY_BASE = 0.15;

export function Hero() {
  return (
    <section className="festa-paper relative pt-16 pb-10 md:pt-20 md:pb-12 overflow-hidden bg-background lg:min-h-[100dvh] lg:flex lg:items-center">
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div
          className="festa-orb-1 absolute rounded-full will-change-transform"
          style={{
            width: "60vw",
            height: "60vw",
            top: "-10%",
            left: "-15%",
            background: "radial-gradient(circle, rgba(178,43,71,0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="festa-orb-2 absolute rounded-full will-change-transform"
          style={{
            width: "50vw",
            height: "50vw",
            bottom: "-5%",
            right: "-10%",
            background: "radial-gradient(circle, rgba(222,186,192,0.22) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="festa-orb-3 absolute rounded-full will-change-transform"
          style={{
            width: "40vw",
            height: "40vw",
            top: "40%",
            left: "35%",
            background: "radial-gradient(circle, rgba(69,123,157,0.12) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
      </div>

      <div className="container relative z-10 px-5 mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-12 gap-3 lg:gap-10 items-center">
          <motion.div
            className="order-2 col-span-3 lg:col-span-5 relative h-[160px] sm:h-[240px] md:h-[340px] lg:h-[640px] w-full"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: DELAY_BASE + 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(circle at 50% 55%, rgba(178,43,71,0.45) 0%, rgba(222,186,192,0.0) 60%)",
              }}
            />
            <CakeBaked />
          </motion.div>

          <div className="order-1 col-span-9 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: DELAY_BASE, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="hidden sm:block text-xs font-sans font-bold tracking-[0.3em] text-secondary uppercase mb-3 md:mb-6">
                Boutique Bakery · Vadodara
              </h2>
              <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-black leading-[0.95] text-foreground mb-4 md:mb-8">
                <span className="whitespace-nowrap">
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: DELAY_BASE + 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    Eggless
                  </motion.span>{" "}
                  <motion.span
                    className="inline-block text-secondary"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: DELAY_BASE + 0.12, ease: [0.16, 1, 0.3, 1] }}
                  >
                    Cakes
                  </motion.span>
                </span>
                <br />
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: DELAY_BASE + 0.19, ease: [0.16, 1, 0.3, 1] }}
                >
                  Baked
                </motion.span>{" "}
                <motion.span
                  className="festa-shine inline-block italic font-extrabold"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: DELAY_BASE + 0.26, ease: [0.16, 1, 0.3, 1] }}
                >
                  Fresh.
                </motion.span>
              </h1>
              <motion.p
                className="hidden sm:block text-sm sm:text-base md:text-xl text-muted-foreground font-sans font-medium max-w-xl mb-6 md:mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: DELAY_BASE + 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                Festa makes custom celebration cakes, everyday bakes, and premium desserts with real ingredients and careful finishing.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col gap-3 sm:gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: DELAY_BASE + 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-row gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="liquid-glass-primary group relative inline-flex h-14 sm:h-14 flex-1 sm:flex-none sm:w-auto items-center justify-center overflow-hidden whitespace-nowrap px-7 sm:px-8 font-bold rounded-full">
                      <span className="relative z-10 flex items-center gap-2 font-sans tracking-wide text-base sm:text-base whitespace-nowrap">
                        Order Now
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                      <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </button>
                  </DialogTrigger>
                  <CheckoutModal />
                </Dialog>

                <a
                  href="#menu"
                  className="liquid-glass inline-flex h-14 sm:h-14 flex-1 sm:flex-none sm:w-auto items-center justify-center px-7 sm:px-8 rounded-full font-sans font-bold text-base sm:text-base text-foreground transition-all duration-300 hover:text-primary hover:-translate-y-0.5"
                >
                  View Menu
                </a>
              </div>

              <div
                role="img"
                aria-label="100% pure vegetarian"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#0a8a3a]/30 bg-[#0a8a3a]/5 px-3 py-1.5 self-start"
              >
                <span className="inline-flex items-center justify-center w-4 h-4 rounded-[3px] border-2 border-[#0a8a3a] bg-white shrink-0">
                  <span className="block w-1.5 h-1.5 rounded-full bg-[#0a8a3a]" />
                </span>
                <span className="text-[11px] font-sans font-bold tracking-[0.18em] uppercase text-[#0a8a3a]">
                  100% Pure Veg
                </span>
              </div>

              <a
                href="https://www.google.com/search?q=Festa+home+bakery"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex group items-center gap-2 text-xs sm:text-sm font-sans font-semibold text-foreground/60 transition-colors hover:text-secondary self-start"
              >
                <span className="w-7 h-7 sm:w-10 sm:h-10 rounded-full border border-foreground/20 flex items-center justify-center group-hover:border-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all shrink-0">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                </span>
                Bhayli, Vadodara
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, hsl(var(--card)))",
        }}
      />
    </section>
  );
}
