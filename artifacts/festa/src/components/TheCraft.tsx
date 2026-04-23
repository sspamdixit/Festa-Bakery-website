import { motion } from "framer-motion";
import smritiPortrait from "@assets/image_1776929982960.png";
import pinkButterflyCake from "@assets/WhatsApp_Image_2026-04-23_at_1.00.42_PM_1776930969804.jpeg";
import pinkRosetteButterflyCake from "@assets/WhatsApp_Image_2026-04-23_at_1.00.18_PM_1776931347734.jpeg";

export function TheCraft() {
  return (
    <section className="festa-paper bg-card-solid py-16 md:py-28 lg:py-36 overflow-hidden relative">
      <div className="container px-5 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-5 gap-3 md:gap-6 relative z-10 items-stretch">
              <motion.div
                className="col-span-3"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-[#f9d7e3] via-[#fbe6d1] to-[#f4c1d4]">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <div className="absolute inset-0 glow-pink-radial-soft opacity-70 pointer-events-none" />
                    <div className="absolute -bottom-2 -right-2 w-40 h-40 md:w-60 md:h-60 rounded-full bg-white/30 blur-3xl pointer-events-none" />
                    <img
                      src={smritiPortrait}
                      alt="Smriti, founder of Festa, holding a hand-decorated celebration cake"
                      loading="lazy"
                      decoding="async"
                      className="relative z-10 object-contain object-bottom w-full h-full drop-shadow-2xl hover:scale-[1.03] transition-transform duration-1000"
                    />
                  </div>
                  <div className="bg-white/90 backdrop-blur px-4 py-3 md:px-5 md:py-4 border-t border-foreground/5">
                    <p className="font-serif text-lg md:text-2xl font-black leading-tight text-foreground">
                      Smriti Dixit
                    </p>
                    <p className="font-sans text-[10px] md:text-xs tracking-[0.18em] uppercase text-foreground/60 font-bold">
                      Founder &amp; Head Baker
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="col-span-2 flex flex-col gap-3 md:gap-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative flex-[2] min-h-[200px] overflow-hidden rounded-xl md:rounded-2xl bg-background shadow-xl">
                  <img
                    src={pinkButterflyCake}
                    alt="Pink buttercream birthday cake with butterfly and gold accents"
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="800"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="relative flex-[1] min-h-[120px] overflow-hidden rounded-xl md:rounded-2xl bg-background shadow-xl">
                  <img
                    src={pinkRosetteButterflyCake}
                    alt="Pink rosette cake decorated with butterflies"
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="600"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              </motion.div>
            </div>

            <div className="glow-pink-radial-soft absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full z-0 pointer-events-none" />
          </div>

          <motion.div
            className="order-1 lg:order-2 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-sans font-bold tracking-[0.3em] text-secondary uppercase mb-4 md:mb-6">The Craft</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black leading-[0.95] text-foreground mb-6 md:mb-8">
              From Hyderabad to Vadodara.
            </h2>
            <div className="space-y-4 md:space-y-5 text-foreground/80 font-sans font-medium text-base md:text-lg leading-relaxed">
              <p>
                Festa started in Hyderabad as a small-batch project by <span className="font-bold text-foreground">Smriti</span> and now bakes out of Bhayli, Vadodara. Eggless cakes and bakes with consistent texture, clean flavour and careful finishing.
              </p>
              <p>
                Real butter, real cream, real chocolate. No compromises. Every cake is baked fresh on order day by Smriti and packed to travel.
              </p>
              <p>
                Birthdays, anniversaries, baby showers, tea-time bakes and gifting boxes — built for flavour, softness and dependable results.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="fade-to-background absolute bottom-0 left-0 right-0 h-20 pointer-events-none" />
    </section>
  );
}
