import { useEffect } from "react";

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
    a: "Our regular line-up includes chocolate truffle, fresh fruit, red velvet, pineapple, butterscotch, coffee, vanilla, plus seasonal fruit cakes, brownies and tea cakes.",
  },
  {
    q: "Do you take custom or themed cake orders?",
    a: "Yes. Birthday cakes, anniversary cakes, kids' theme cakes and small celebration cakes can all be customised. Share a reference image on WhatsApp for a quote.",
  },
  {
    q: "What are your prices?",
    a: "Pricing depends on weight, flavour and design. Standard cakes start around ₹650 for 500g. Send your requirements on WhatsApp for an exact quote.",
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

export default function Faq() {
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
    <main className="min-h-screen bg-background text-foreground px-6 py-16 max-w-3xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="text-4xl font-bold mb-2">Festa Eggless Bakery: Frequently Asked Questions</h1>
      <p className="text-sm opacity-70 mb-10">
        Eggless home bakery in Bhayli, Vadodara. WhatsApp +91 99631 63227 to order.
      </p>
      <div className="space-y-8">
        {FAQS.map((f) => (
          <section key={f.q}>
            <h2 className="text-lg font-semibold mb-2">{f.q}</h2>
            <p className="opacity-80 leading-relaxed">{f.a}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
