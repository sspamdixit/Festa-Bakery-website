import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CheckoutModal } from "./CheckoutModal";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function OrderSection() {
  return (
    <section className="py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
      
      <div className="container px-6 mx-auto max-w-3xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif font-light text-foreground mb-8">
            Ready to taste the difference?
          </h2>
          <p className="text-lg text-muted-foreground font-sans font-light mb-12 max-w-xl mx-auto leading-relaxed">
            Every order is prepared fresh. We require 48 hours notice for cakes and 24 hours for breads. 
            Local pickup only.
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <button className="group relative inline-flex h-14 items-center justify-center overflow-hidden bg-primary px-10 font-medium text-primary-foreground transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2 font-sans tracking-wide">
                  Start Your Order
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </DialogTrigger>
            <CheckoutModal />
          </Dialog>
        </motion.div>
      </div>
    </section>
  );
}
