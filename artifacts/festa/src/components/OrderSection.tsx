import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CheckoutModal } from "./CheckoutModal";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function OrderSection() {
  return (
    <section id="order" className="py-16 md:py-28 lg:py-36 relative overflow-hidden bg-background" style={{ isolation: "isolate" }}>
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 40%, rgba(227,178,60,0.25) 0%, rgba(222,186,192,0) 60%)" }}
      />

      <div className="container px-5 mx-auto max-w-3xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs font-sans font-bold tracking-[0.3em] text-secondary uppercase mb-4 md:mb-6">Order Eggless Cakes</h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-black text-foreground mb-6 md:mb-8 leading-[0.95]">
            Ready to order an eggless cake?
          </h3>
          <p className="text-base md:text-xl text-foreground/75 font-sans font-medium mb-10 md:mb-12 max-w-xl mx-auto leading-relaxed">
            Need a custom birthday cake, anniversary cake, or fresh eggless bake? We bake to order with 48 hours notice for cakes and 24 hours for everyday bakes.
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <button className="group relative inline-flex h-14 sm:h-16 w-full sm:w-auto items-center justify-center overflow-hidden bg-primary px-8 sm:px-12 font-bold text-primary-foreground rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-12px_rgba(227,178,60,0.7)]">
                <span className="relative z-10 flex items-center gap-3 font-sans tracking-wide text-base md:text-lg">
                  <MessageCircle className="w-5 h-5" />
                  Order Eggless Cakes on WhatsApp
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </DialogTrigger>
            <CheckoutModal />
          </Dialog>
        </motion.div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--card)))" }}
      />
    </section>
  );
}
