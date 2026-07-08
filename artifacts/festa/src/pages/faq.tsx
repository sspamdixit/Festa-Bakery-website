import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const FAQS = [
  {
    q: "Where is Festa located?",
    a: "Festa is a home bakery based in Bhayli, Vadodara, Gujarat (391410). Orders are baked to order from our home kitchen.",
  },
  {
    q: "Are all Festa cakes eggless?",
    a: "Yes. Every cake, brownie and tea cake we bake is 100% eggless. We do not use eggs in any of our recipes.",
  },
  {
    q: "How do I place an order?",
    a: "Orders are placed over WhatsApp at +91 99631 63227. Share the cake style, flavour, weight, message on top, and pickup date and time.",
  },
  {
    q: "How much advance notice do you need for an order?",
    a: "We recommend placing orders at least 48 hours in advance. Custom or theme cakes may need 3 to 5 days, especially on weekends.",
  },
  {
    q: "Do you deliver in Vadodara?",
    a: "Pickup from Bhayli is preferred. For delivery within Vadodara, we can arrange a third-party delivery partner at the customer's cost.",
  },
  {
    q: "What flavours do you offer?",
    a: "Our line-up includes chocolate truffle, butterscotch, pineapple, black currant, hazelnut, rasmalai, thandai, paan, kitkat, oreo, lotus biscoff, plus fruit cakes, brownies and tea cakes.",
  },
  {
    q: "Do you take custom or themed cake orders?",
    a: "Yes. Birthday cakes, anniversary cakes, kids' theme cakes and small celebration cakes can all be customised. Share a reference image on WhatsApp for a quote.",
  },
  {
    q: "What are your prices?",
    a: "All pricing is on request — it depends on the flavour, weight and design. WhatsApp us at +91 99631 63227 and we'll send you a quote.",
  },
  {
    q: "Do you offer sugar-free or vegan cakes?",
    a: "We can prepare sugar-free cakes on request. Fully vegan cakes are available for select flavours with prior notice.",
  },
  {
    q: "How do I store the cake after pickup?",
    a: "Refrigerate the cake as soon as you bring it home. Take it out 15 to 20 minutes before serving for the best taste and texture.",
  },
];

function FaqItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-foreground/10 last:border-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-lg font-sans font-semibold text-foreground group-hover:text-secondary transition-colors duration-200 leading-snug">
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
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm md:text-base font-sans font-medium text-foreground/70 leading-relaxed max-w-2xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  useEffect(() => {
    document.title = "FAQ | Festa Eggless Home Bakery, Bhayli, Vadodara";
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="min-h-screen bg-background text-foreground px-5 py-16 md:py-24 max-w-3xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/" className="inline-block mb-8 text-sm font-sans font-semibold text-foreground/50 hover:text-secondary transition-colors">
        ← Back to Festa
      </Link>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black mb-2 leading-tight">Frequently Asked Questions</h1>
      <p className="text-sm font-sans text-foreground/60 mb-10">
        Eggless home bakery in Bhayli, Vadodara.{" "}
        <a href="https://wa.me/919963163227" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
          WhatsApp +91 99631 63227
        </a>{" "}
        to order.
      </p>
      <div className="divide-y-0">
        {FAQS.map((f, idx) => (
          <FaqItem
            key={f.q}
            q={f.q}
            a={f.a}
            isOpen={openIdx === idx}
            onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
          />
        ))}
      </div>
      <div className="mt-10 pt-8 border-t border-foreground/10">
        <p className="text-sm font-sans text-foreground/60">
          Still have a question?{" "}
          <a
            href="https://wa.me/919963163227?text=Hi%20Festa!%20I%20have%20a%20question."
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-secondary hover:underline"
          >
            Ask us on WhatsApp →
          </a>
        </p>
      </div>
    </main>
  );
}
