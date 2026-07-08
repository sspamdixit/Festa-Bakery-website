import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CheckoutModal } from "@/components/CheckoutModal";

const WHATSAPP_NUMBER = "919963163227";

const ease = [0.16, 1, 0.3, 1] as const;

export default function NotFound() {
  return (
    <main className="festa-grain relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background px-5 py-24">

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="notfound-orb-1 absolute rounded-full" />
        <div className="notfound-orb-2 absolute rounded-full" />
      </div>

      {/* Floating cake image */}
      <motion.div
        className="absolute right-[-4%] top-[10%] w-[38vw] max-w-[380px] min-w-[180px] pointer-events-none select-none"
        initial={{ opacity: 0, x: 60, rotate: 8 }}
        animate={{ opacity: 1, x: 0, rotate: 6 }}
        transition={{ duration: 1.1, delay: 0.3, ease }}
      >
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <img
            src="/images/chocolate-truffle.webp"
            alt=""
            aria-hidden
            className="w-full h-auto object-cover rounded-2xl shadow-2xl opacity-70 dark:opacity-40"
            style={{ filter: "saturate(0.85)" }}
          />
          {/* Crack / fallen-over effect overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tl from-background/60 via-transparent to-transparent" />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-lg w-full">

        <motion.p
          className="text-[10px] sm:text-xs font-sans font-bold tracking-[0.3em] text-primary uppercase mb-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
        >
          Error 404
        </motion.p>

        <div className="overflow-hidden mb-1">
          <motion.h1
            className="font-serif font-black leading-none text-foreground"
            style={{ fontSize: "clamp(5rem, 18vw, 10rem)" }}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease }}
          >
            4<span className="text-primary italic">0</span>4
          </motion.h1>
        </div>

        <motion.h2
          className="text-2xl sm:text-3xl font-serif font-extrabold text-foreground mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
        >
          This slice doesn't exist.
        </motion.h2>

        <motion.p
          className="text-base text-foreground/60 font-sans font-medium max-w-sm leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
        >
          The page you're after has been eaten, moved, or never baked.
          Head back — there's plenty more to choose from.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
        >
          <Link href="/" className="liquid-glass-primary group relative inline-flex h-12 sm:h-14 items-center justify-center overflow-hidden whitespace-nowrap px-6 sm:px-8 rounded-full font-sans font-bold text-sm sm:text-base">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Festa
            <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Link>

          <Dialog>
            <DialogTrigger asChild>
              <button className="liquid-glass inline-flex h-12 sm:h-14 items-center justify-center px-6 sm:px-8 rounded-full font-sans font-bold text-sm sm:text-base text-foreground transition-all duration-300 hover:text-primary hover:-translate-y-0.5">
                <MessageCircle className="w-4 h-4 mr-2" />
                Order a Cake
              </button>
            </DialogTrigger>
            <CheckoutModal />
          </Dialog>
        </motion.div>

      </div>
    </main>
  );
}
