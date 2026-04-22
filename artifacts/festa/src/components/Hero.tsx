import { motion } from "framer-motion";
import { CakeBaked } from "./CakeBaked";
import { ArrowRight, MapPin } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CheckoutModal } from "./CheckoutModal";

const DELAY_BASE = 0.15;

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 pb-10 overflow-hidden bg-background">
      {/* ambient gradient orbs — CSS animated for GPU performance */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div
          className="festa-orb-1 absolute rounded-full will-change-transform"
          style={{
            width: "60vw",
            height: "60vw",
            top: "-10%",
            left: "-15%",
            background: "radial-gradient(circle, rgba(227,178,60,0.18) 0%, transparent 70%)",
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

      <div className="container relative z-10 px-5 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: DELAY_BASE, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-xs font-sans font-bold tracking-[0.3em] text-secondary uppercase mb-4 md:mb-6">
                Home Bakery · India
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-black leading-[0.95] text-foreground mb-5 md:mb-8">
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: DELAY_BASE + 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  Festa:
                </motion.span>{" "}
                <motion.span
                  className="inline-block text-secondary"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: DELAY_BASE + 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  Artisanal
                </motion.span>
                <br />
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: DELAY_BASE + 0.19, ease: [0.16, 1, 0.3, 1] }}
                >
                  Baking,
                </motion.span>{" "}
                <motion.span
                  className="inline-block italic font-extrabold"
                  style={{ color: "#E3B23C" }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: DELAY_BASE + 0.26, ease: [0.16, 1, 0.3, 1] }}
                >
                  Redefined.
                </motion.span>
              </h1>
              <motion.p
                className="text-base md:text-xl text-muted-foreground font-sans font-medium max-w-xl mb-8 md:mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: DELAY_BASE + 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                Celebration cakes and everyday bakes, made fresh from our home kitchen. Obsessive consistency, real ingredients, signed before they leave.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: DELAY_BASE + 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <button className="group relative inline-flex h-14 items-center justify-center overflow-hidden bg-primary px-8 font-bold text-primary-foreground rounded-full transition-all duration-300 hover:shadow-[0_18px_40px_-10px_rgba(227,178,60,0.7)] hover:-translate-y-0.5 w-full sm:w-auto">
                    <span className="relative z-10 flex items-center gap-2 font-sans tracking-wide text-base">
                      Order Now
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </button>
                </DialogTrigger>
                <CheckoutModal />
              </Dialog>

              <a
                href="https://www.google.com/search?q=Festa+home+bakery"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center sm:justify-start gap-3 text-sm font-sans font-semibold text-foreground transition-colors hover:text-secondary"
              >
                <span className="w-10 h-10 rounded-full border-2 border-foreground/20 flex items-center justify-center group-hover:border-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all shrink-0">
                  <MapPin className="w-4 h-4" />
                </span>
                Google Business Profile
              </a>
            </motion.div>
          </div>

          {/* 3D Cake */}
          <motion.div
            className="lg:col-span-5 relative h-[260px] sm:h-[360px] md:h-[480px] lg:h-[640px] w-full"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: DELAY_BASE + 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(circle at 50% 55%, rgba(227,178,60,0.45) 0%, rgba(222,186,192,0.0) 60%)",
              }}
            />
            <CakeBaked />
          </motion.div>
        </div>
      </div>

      {/* bottom gradient bleed into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, hsl(var(--card)))",
        }}
      />
    </section>
  );
}
