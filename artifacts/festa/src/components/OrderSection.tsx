import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CheckoutModal } from "./CheckoutModal";
import { ArrowRight, MessageCircle, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function OrderSection() {
  return (
    <section id="order" className="festa-paper section-isolate py-16 md:py-28 lg:py-36 relative overflow-hidden bg-background">
      <div className="glow-pink-spot absolute inset-0 opacity-60 pointer-events-none" />

      <div className="container px-5 mx-auto max-w-3xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-sans font-bold tracking-[0.3em] text-secondary uppercase mb-4 md:mb-6">Place an Order</p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-black text-foreground mb-6 md:mb-8 leading-[0.95]">
            Order your cake on WhatsApp.
          </h2>
          <p className="text-base md:text-xl text-foreground/75 font-sans font-medium mb-10 md:mb-12 max-w-xl mx-auto leading-relaxed">
            Send us the flavour, weight, message on top and pickup date. We need 48 hours for celebration cakes and 24 hours for tea cakes and brownies. Pickup from our Bhayli kitchen, with delivery available across Vadodara.
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <button className="group relative inline-flex h-14 sm:h-16 w-full sm:w-auto items-center justify-center overflow-hidden bg-primary px-8 sm:px-12 font-bold text-primary-foreground rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-12px_rgba(201, 82, 126,0.7)]">
                <span className="relative z-10 flex items-center gap-3 font-sans tracking-wide text-base md:text-lg">
                  <MessageCircle className="w-5 h-5" />
                  Order on WhatsApp
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </DialogTrigger>
            <CheckoutModal />
          </Dialog>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Bhayli%2C+Vadodara"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 md:mt-10 inline-flex items-center gap-2 text-sm md:text-base font-sans font-semibold text-foreground/75 hover:text-secondary transition-colors"
          >
            <MapPin className="w-4 h-4 shrink-0" />
            <span>Pickup address: Bhayli, Vadodara, Gujarat 391410</span>
          </a>
        </motion.div>
      </div>
      <div className="fade-to-card absolute bottom-0 left-0 right-0 h-20 pointer-events-none" />
    </section>
  );
}
