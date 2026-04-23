import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CheckoutModal } from "./CheckoutModal";
import { CakeBaked } from "./CakeBaked";

const DELAY_BASE = 0.15;

export function Hero() {
  return (
    <section className="festa-paper relative pt-20 pb-10 md:pt-20 md:pb-12 overflow-hidden bg-transparent min-h-[92dvh] flex items-center lg:min-h-[100dvh]">
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="festa-orb-1 absolute rounded-full will-change-transform" />
        <div className="festa-orb-2 absolute rounded-full will-change-transform" />
        <div className="festa-orb-3 absolute rounded-full will-change-transform" />
      </div>

      <div
        aria-hidden
        className="hero-cake-layer pointer-events-none absolute inset-0 z-0 overflow-visible"
      >
        <div className="absolute top-1/2 left-1/2 w-[170vmin] h-[170vmin] [transform:translate(-65%,-50%)] lg:[transform:translate(-95%,-50%)]">
          <CakeBaked />
        </div>
      </div>

      <div className="container relative z-10 px-5 mx-auto max-w-7xl w-full text-center">
        <div className="w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: DELAY_BASE, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[10px] sm:text-xs font-sans font-bold tracking-[0.3em] text-secondary uppercase mb-3 md:mb-6">
              Eggless Home Bakery · Bhayli, Vadodara
            </p>
            <h1 className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black leading-[0.95] text-foreground mb-4 md:mb-8">
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
              className="text-sm sm:text-base md:text-xl text-muted-foreground font-sans font-medium max-w-xl mx-auto mb-6 md:mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: DELAY_BASE + 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              Birthday cakes, fruit cakes, brownies and tea cakes — baked to order with real butter, real cream and real chocolate.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-3 sm:gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: DELAY_BASE + 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hidden sm:flex flex-col sm:flex-row gap-3 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="liquid-glass-primary group relative inline-flex h-12 sm:h-14 w-full sm:w-auto items-center justify-center overflow-hidden whitespace-nowrap px-4 sm:px-8 font-bold rounded-full">
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
                className="liquid-glass inline-flex h-12 sm:h-14 w-full sm:w-auto items-center justify-center px-4 sm:px-8 rounded-full font-sans font-bold text-sm sm:text-base text-foreground transition-all duration-300 hover:text-primary hover:-translate-y-0.5"
              >
                View Menu
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-5 sm:mt-8 flex justify-stretch sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: DELAY_BASE + 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-row items-stretch gap-3 w-full sm:w-auto">
            <div
              role="img"
              aria-label="100% pure vegetarian"
              className="flex-1 sm:flex-none inline-flex h-10 items-center justify-center gap-2 rounded-full border border-[#0a8a3a]/30 bg-[#0a8a3a]/[0.06] px-4"
            >
              <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-[3px] border-2 border-[#0a8a3a] bg-white shrink-0">
                <span className="block w-1 h-1 rounded-full bg-[#0a8a3a]" />
              </span>
              <span className="text-[11px] font-sans font-bold tracking-[0.14em] uppercase text-[#0a8a3a] whitespace-nowrap">
                100% Pure Veg
              </span>
            </div>

            <a
              href="https://www.google.com/search?q=Festa+home+bakery"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-1 sm:flex-none inline-flex h-10 items-center justify-center gap-2 rounded-full border border-foreground/15 bg-foreground/[0.04] px-4 text-[11px] font-sans font-bold tracking-[0.14em] uppercase text-foreground/70 transition-colors hover:border-secondary/50 hover:text-secondary"
            >
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">Bhayli, Vadodara</span>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="fade-to-card absolute bottom-0 left-0 right-0 h-24 pointer-events-none" />
    </section>
  );
}
