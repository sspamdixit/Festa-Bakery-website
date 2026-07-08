import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "Are all your cakes eggless?",
    a: "Yes — 100%. Every cake, brownie and tea cake we bake is completely eggless. No exceptions.",
  },
  {
    q: "How do I place an order?",
    a: "Just send us a WhatsApp message at +91 99631 63227. Share the flavour, weight (½ kg or 1 kg), message on top, and your pickup date. We'll confirm availability and send you a quote.",
  },
  {
    q: "How much notice do you need?",
    a: "At least 48 hours for celebration cakes. Custom or themed cakes (fondant, toppers, special designs) need 3–5 days, especially around weekends and festivals.",
  },
  {
    q: "What are your prices?",
    a: "All pricing is on request — it depends on the flavour, weight and design. Tap any item on the menu to send us a WhatsApp with that specific cake, and we'll quote you right away.",
  },
  {
    q: "Do you deliver to my area in Vadodara?",
    a: "Pickup from our Bhayli kitchen is preferred and free. For delivery across Vadodara, we can arrange a third-party delivery partner at the customer's cost — just ask us when you order.",
  },
  {
    q: "Can I order a custom themed cake?",
    a: "Absolutely. Birthday themes, character cakes, anniversary designs, baby shower cakes — we love a challenge. Send us a reference photo on WhatsApp and we'll work out the design and quote together.",
  },
  {
    q: "Do you offer sugar-free or vegan options?",
    a: "Sugar-free cakes are available on request. Fully vegan options (no butter, no dairy) are available for select flavours with a little extra notice.",
  },
  {
    q: "Where exactly are you located?",
    a: "We're a home bakery in Bhayli, Vadodara, Gujarat — 391410. Once you place your order, we'll share the exact pickup address on WhatsApp.",
  },
  {
    q: "How should I store the cake after pickup?",
    a: "Refrigerate it as soon as you're home. Take it out 15–20 minutes before serving so the cream and frosting come back to the perfect texture.",
  },
];

function FaqItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-foreground/10 last:border-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 md:py-6 text-left group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-lg font-sans font-bold text-foreground group-hover:text-secondary transition-colors duration-200 leading-snug">
          {q}
        </span>
        <span className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full border border-foreground/15 bg-foreground/[0.04] text-foreground/60 group-hover:border-secondary/40 group-hover:text-secondary transition-all duration-200">
          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 md:pb-6 text-sm md:text-base font-sans font-medium text-foreground/70 leading-relaxed max-w-2xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="festa-paper bg-card-solid py-16 md:py-28 lg:py-36">
      <div className="container px-5 mx-auto max-w-5xl">
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-sans font-bold tracking-[0.3em] text-secondary uppercase mb-4 md:mb-6">Got Questions?</p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black text-foreground">
            Frequently asked.
          </h2>
        </motion.div>

        <motion.div
          className="liquid-glass-soft rounded-2xl md:rounded-3xl px-5 md:px-10 divide-y-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          {FAQS.map((faq, idx) => (
            <FaqItem
              key={faq.q}
              q={faq.q}
              a={faq.a}
              isOpen={openIdx === idx}
              onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
            />
          ))}
        </motion.div>

        <motion.p
          className="mt-8 md:mt-10 text-center text-sm md:text-base font-sans font-medium text-foreground/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Still have a question?{" "}
          <a
            href="https://wa.me/919963163227?text=Hi%20Festa!%20I%20have%20a%20question."
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-secondary hover:underline underline-offset-2"
          >
            Ask us on WhatsApp →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
