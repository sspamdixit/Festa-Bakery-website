import { motion } from "framer-motion";
import { CakeBaked } from "./CakeBaked";
import { ArrowRight, MapPin } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CheckoutModal } from "./CheckoutModal";

const DELAY_BASE = 0.15;

export function Hero() {
  return (
    <section className="festa-paper relative pt-20 pb-10 md:pt-20 md:pb-12 overflow-hidden bg-background lg:min-h-[100dvh] lg:flex lg:items-center">
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div
          className="festa-orb-1 absolute rounded-full will-change-transform"
          style={{
            width: "60vw",
            height: "60vw",
            top: "-10%",
            left: "-15%",
            background: "radial-gradient(circle, rgba(201, 82, 126,0.18) 0%, transparent 70%)",
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
            className="order-2 col-span-4 sm:col-span-5 lg:col-span-5 relative h-[180px] sm:h-[280px] md:h-[340px] lg:h-[640px] w-full"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: DELAY_BASE + 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(circle at 50% 55%, rgba(201, 82, 126,0.45) 0%, rgba(222,186,192,0.0) 60%)",
              }}
            />
            <CakeBaked />
          </motion.div>

          <div className="order-1 col-span-8 sm:col-span-7 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: DELAY_BASE, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="hidden sm:block text-[10px] sm:text-xs font-sans font-bold tracking-[0.3em] text-secondary uppercase mb-3 md:mb-6">
                Boutique Bakery · Vadodara
              </h2>
              <h1 className="text-[2.1rem] sm:text-5xl md:text-6xl lg:text-8xl font-serif font-black leading-[0.95] text-foreground mb-4 md:mb-8">
                <span className="block whitespace-nowrap">
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
                <span className="block whitespace-nowrap">
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
                </span>
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
              <div className="hidden sm:flex flex-row gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="liquid-glass-primary group relative inline-flex h-12 sm:h-14 flex-1 sm:flex-none sm:w-auto items-center justify-center overflow-hidden whitespace-nowrap px-4 sm:px-8 font-bold rounded-full">
                      <span className="relative z-10 flex items-center gap-1.5 sm:gap-2 font-sans tracking-wide text-sm sm:text-base whitespace-nowrap">
                        Order Now
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                      <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </button>
                  </DialogTrigger>
                  <CheckoutModal />
                </Dialog>

                <a
                  href="#menu"
                  className="liquid-glass inline-flex h-12 sm:h-14 flex-1 sm:flex-none sm:w-auto items-center justify-center px-4 sm:px-8 rounded-full font-sans font-bold text-sm sm:text-base text-foreground transition-all duration-300 hover:text-primary hover:-translate-y-0.5"
                >
                  View Menu
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-5 sm:mt-8 flex justify-stretch sm:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: DELAY_BASE + 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex h-11 w-full sm:w-auto items-stretch rounded-full border border-foreground/15 bg-card/70 backdrop-blur-sm overflow-hidden">
            <div
              role="img"
              aria-label="100% pure vegetarian"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 bg-[#0a8a3a]/[0.07]"
            >
              <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-[3px] border-2 border-[#0a8a3a] bg-white shrink-0">
                <span className="block w-1 h-1 rounded-full bg-[#0a8a3a]" />
              </span>
              <span className="text-[11px] font-sans font-bold tracking-[0.14em] uppercase text-[#0a8a3a] whitespace-nowrap">
                Pure Veg
              </span>
            </div>

            <div className="w-px bg-foreground/15 shrink-0" aria-hidden="true" />

            <a
              href="https://www.google.com/search?q=Festa+home+bakery"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 text-[11px] font-sans font-bold tracking-[0.14em] uppercase text-foreground/70 transition-colors hover:text-secondary"
            >
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">Bhayli, Vadodara</span>
            </a>
          </div>
        </motion.div>
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
