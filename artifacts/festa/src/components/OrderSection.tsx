import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CheckoutModal } from "./CheckoutModal";
import { ArrowRight, MessageCircle, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function OrderSection() {
  return (
    <section id="order" className="festa-paper section-isolate py-16 md:py-28 lg:py-36 relative overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-2xl aspect-square rounded-full bg-[#C9527E]/10 blur-[100px]" />
      </div>

      <div className="container px-5 mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs font-sans font-bold tracking-[0.3em] text-secondary uppercase mb-4 md:mb-6">Place an Order</p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-black text-foreground mb-6 md:mb-8 leading-[0.95]">
            Order your cake<br className="hidden sm:block" /> on WhatsApp.
          </h2>
          <p className="text-base md:text-xl text-foreground/75 font-sans font-medium mb-10 md:mb-12 max-w-xl mx-auto leading-relaxed">
            Send us the flavour, weight, message on top and pickup date — we'll confirm your quote and get baking.
          </p>
        </motion.div>

        {/* Info chips */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10 md:mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-foreground/12 bg-foreground/[0.04] px-4 py-2 text-xs sm:text-sm font-sans font-semibold text-foreground/70">
            <Clock className="w-3.5 h-3.5 shrink-0 text-secondary" />
            48 hrs notice for celebration cakes
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-foreground/12 bg-foreground/[0.04] px-4 py-2 text-xs sm:text-sm font-sans font-semibold text-foreground/70">
            <Clock className="w-3.5 h-3.5 shrink-0 text-secondary" />
            24 hrs for brownies &amp; tea cakes
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Bhayli%2C+Vadodara"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/12 bg-foreground/[0.04] px-4 py-2 text-xs sm:text-sm font-sans font-semibold text-foreground/70 hover:text-secondary hover:border-secondary/30 transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 shrink-0 text-secondary" />
            Pickup: Bhayli, Vadodara
          </a>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <Dialog>
            <DialogTrigger asChild>
              <button className="group relative inline-flex h-14 sm:h-16 w-full sm:w-auto items-center justify-center overflow-hidden bg-primary px-8 sm:px-12 font-bold text-primary-foreground rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:bg-[hsl(348,65%,47%)] hover:shadow-[0_22px_48px_-12px_rgba(201,82,126,0.65)]">
                <span className="relative z-10 flex items-center gap-3 font-sans tracking-wide text-base md:text-lg">
                  <MessageCircle className="w-5 h-5" />
                  Order on WhatsApp
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </DialogTrigger>
            <CheckoutModal />
          </Dialog>

          <a
            href="tel:+919963163227"
            className="inline-flex h-14 sm:h-16 w-full sm:w-auto items-center justify-center gap-2.5 px-8 rounded-full border-2 border-foreground/15 bg-transparent font-sans font-bold text-base text-foreground/80 transition-all duration-300 hover:border-secondary/50 hover:text-secondary hover:-translate-y-0.5"
          >
            Call Us
          </a>
        </motion.div>
      </div>

      <div className="fade-to-card absolute bottom-0 left-0 right-0 h-20 pointer-events-none" />
    </section>
  );
}
