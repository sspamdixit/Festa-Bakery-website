import { useState, useEffect } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CheckoutModal } from "./CheckoutModal";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";

export function NavBar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (y) => setScrolled(y > 40));
  }, [scrollY]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-500 ${
        scrolled
          ? "bg-card/70 backdrop-blur-xl backdrop-saturate-150 border-b border-foreground/10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.12)]"
          : "bg-transparent"
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
              <button className="liquid-glass-primary hidden sm:inline-flex h-10 items-center justify-center px-5 rounded-full text-sm font-sans font-bold">
                Order Now
              </button>
            </DialogTrigger>
            <CheckoutModal />
          </Dialog>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-foreground/15 bg-card/60 backdrop-blur text-foreground hover:text-primary transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="mobile-menu-overlay"
              className="fixed inset-0 top-16 z-40 bg-foreground/30 sm:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="mobile-menu-panel"
              className="absolute top-16 left-0 right-0 z-50 sm:hidden bg-card/95 backdrop-blur-xl backdrop-saturate-150 border-b border-foreground/10 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.2)]"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="container px-5 mx-auto max-w-7xl py-5 flex flex-col gap-1">
                <a
                  href="#menu"
                  onClick={() => setOpen(false)}
                  className="py-3 px-2 text-base font-sans font-semibold text-foreground hover:text-primary transition-colors border-b border-foreground/10"
                >
                  Menu
                </a>
                <a
                  href="#order"
                  onClick={() => setOpen(false)}
                  className="py-3 px-2 text-base font-sans font-semibold text-foreground hover:text-primary transition-colors border-b border-foreground/10"
                >
                  Order
                </a>
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      onClick={() => setOpen(false)}
                      className="liquid-glass-primary mt-3 inline-flex h-12 w-full items-center justify-center px-5 rounded-full text-sm font-sans font-bold"
                    >
                      Order Now
                    </button>
                  </DialogTrigger>
                  <CheckoutModal />
                </Dialog>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
