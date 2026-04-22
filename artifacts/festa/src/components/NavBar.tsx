import { useState, useEffect } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CheckoutModal } from "./CheckoutModal";
import { motion, useScroll } from "framer-motion";

export function NavBar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (y) => setScrolled(y > 40));
  }, [scrollY]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-500 ${
        scrolled ? "liquid-glass" : ""
      }`}
      style={{ borderRadius: 0 }}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container px-5 mx-auto max-w-7xl flex items-center justify-between">
        <a
          href="/"
          className="text-2xl font-serif font-black text-foreground tracking-tight leading-none"
        >
          Festa.
        </a>

        <nav className="flex items-center gap-2 sm:gap-4">
          <a
            href="#menu"
            className="festa-underline hidden sm:inline text-sm font-sans font-semibold text-foreground/70 hover:text-foreground transition-colors px-3 py-1.5"
          >
            Menu
          </a>
          <Dialog>
            <DialogTrigger asChild>
              <button className="liquid-glass-primary inline-flex h-10 items-center justify-center px-5 rounded-full text-sm font-sans font-bold">
                Order Now
              </button>
            </DialogTrigger>
            <CheckoutModal />
          </Dialog>
        </nav>
      </div>
    </motion.header>
  );
}
