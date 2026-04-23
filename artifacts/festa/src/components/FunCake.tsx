import { motion } from "framer-motion";
import maggiCake from "@assets/WhatsApp_Image_2026-04-23_at_1.02.22_PM_1776931909190.png";

export function FunCake() {
  return (
    <section className="festa-paper relative overflow-hidden bg-background py-16 md:py-24 lg:py-28">
      <div className="container px-5 mx-auto max-w-6xl">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl bg-gradient-to-br from-[#fff4d6] via-[#ffe2a6] to-[#ffcf75] [transform:translateZ(0)] isolate">
          <div className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-white/40 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[#ff6b6b]/20 blur-3xl pointer-events-none" />

          <motion.div
            className="relative z-10 px-6 pt-8 md:px-12 md:py-14 lg:py-16 order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-3 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-sans font-bold tracking-[0.22em] uppercase shadow-md mb-5">
              <span className="text-base leading-none">🍜</span>
              Yes, We Did That
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black leading-[0.95] text-foreground mb-5 md:mb-6">
              A 2-minute <span className="italic text-[#d4341f]">Maggi</span> cake. <br className="hidden md:block" />Why not.
            </h2>
            <p className="text-base md:text-lg text-foreground/80 font-sans font-medium leading-relaxed mb-3 md:mb-4 max-w-md">
              Birthday for a Maggi superfan. Buttercream noodles, edible Maggi label, all eggless underneath. The kind of cake that gets the whole room laughing before the candles are out.
            </p>
            <p className="text-sm md:text-base text-foreground/70 font-sans font-semibold leading-relaxed max-w-md">
              Got a wild theme in mind? Send a reference on WhatsApp, we love a challenge.
            </p>
          </motion.div>

          <motion.div
            className="relative z-10 order-1 md:order-2 flex items-end justify-center md:justify-end pt-8 md:pt-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <img
              src={maggiCake}
              alt="Smriti smiling and holding a custom Maggi 2-minute noodles themed birthday cake with buttercream noodles on top"
              loading="lazy"
              decoding="async"
              className="relative z-10 w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
