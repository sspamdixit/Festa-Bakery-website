import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CheckoutModal } from "./CheckoutModal";
import { motion } from "framer-motion";

export function NavBar() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center border-b border-foreground/10 backdrop-blur-md"
      style={{ backgroundColor: "hsla(var(--background), 0.85)" }}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
            className="hidden sm:inline text-sm font-sans font-semibold text-foreground/70 hover:text-foreground transition-colors px-3 py-1.5"
          >
            Menu
          </a>
          <a
            href="#order"
            className="hidden sm:inline text-sm font-sans font-semibold text-foreground/70 hover:text-foreground transition-colors px-3 py-1.5"
          >
            Order
          </a>
          <Dialog>
            <DialogTrigger asChild>
              <button className="inline-flex h-9 items-center justify-center bg-primary px-5 rounded-full text-sm font-sans font-bold text-primary-foreground transition-all hover:shadow-[0_8px_24px_-6px_rgba(227,178,60,0.6)] hover:-translate-y-px">
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
