import { useEffect } from "react";
import { Link } from "wouter";

export default function Terms() {
  useEffect(() => {
    document.title = "Terms & Conditions | Festa Eggless Home Bakery";
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground px-5 py-16 md:py-24 max-w-2xl mx-auto">
      <Link href="/" className="inline-block mb-8 text-sm font-sans font-semibold text-foreground/50 hover:text-secondary transition-colors">
        ← Back to Festa
      </Link>

      <h1 className="text-3xl sm:text-4xl font-serif font-black mb-2 leading-tight">Terms &amp; Conditions</h1>
      <p className="text-sm font-sans text-foreground/50 mb-10">Last updated: July 2026</p>

      <div className="space-y-8 font-sans text-foreground/80 leading-relaxed">

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">About Festa</h2>
          <p>
            Festa is a home bakery run by Smriti Dixit, based in Bhayli, Vadodara, Gujarat, India. By placing an order with us, you agree to the terms below.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Orders and advance notice</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>All orders must be placed over WhatsApp at <a href="https://wa.me/919963163227" className="text-secondary hover:underline">+91 99631 63227</a>.</li>
            <li>Celebration cakes require a minimum of <strong>48 hours</strong> advance notice.</li>
            <li>Brownies and tea cakes require a minimum of <strong>24 hours</strong> advance notice.</li>
            <li>Custom or themed cakes (fondant, toppers, character designs) require <strong>3–5 days</strong> advance notice, more around weekends and festivals.</li>
            <li>An order is confirmed only after we respond on WhatsApp with a confirmation message. Sending a message does not guarantee a slot.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Pricing and payment</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>All pricing is on request and confirmed over WhatsApp before the order is accepted.</li>
            <li>We may require an advance payment to confirm your slot, particularly for custom orders.</li>
            <li>Final price is as quoted over WhatsApp. No additional charges apply unless the scope of the order changes.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Cancellations and refunds</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Cancellations made more than 24 hours before the pickup time are eligible for a full refund of any advance paid.</li>
            <li>Cancellations within 24 hours of the pickup time may forfeit the advance, as ingredients will already have been sourced.</li>
            <li>If we are unable to fulfill your order for any reason, you will receive a full refund.</li>
            <li>No refund is issued for a cake that has been collected and is in good condition as described at the time of pickup.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Pickup and delivery</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>Pickup from our Bhayli kitchen is the default and preferred method.</li>
            <li>Delivery within Vadodara is available via a third-party delivery partner at the customer's expense. Festa is not responsible for any damage that occurs during third-party delivery.</li>
            <li>We do not ship outside Vadodara.</li>
            <li>Please collect your order at the agreed time. We cannot guarantee cold storage beyond a reasonable window.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Custom and themed cakes</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>For custom designs, please share a reference image over WhatsApp. We will do our best to match the design, but handmade cakes will naturally vary from photos.</li>
            <li>Any change to a confirmed custom order (size, flavour, design) must be requested at least 48 hours before the pickup date and may affect the price.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Allergens and dietary requirements</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>All our products are 100% eggless.</li>
            <li>Our kitchen handles nuts, dairy, gluten and other common allergens. If you have a severe allergy, please inform us clearly when ordering so we can advise whether we can accommodate it safely.</li>
            <li>Sugar-free and vegan options are available on request — please confirm when placing your order.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Storage and quality</h2>
          <p className="text-sm">
            All cakes are baked fresh on the day of your order. Refrigerate the cake as soon as you bring it home and consume it within 48 hours of pickup for best taste. We are not responsible for quality issues resulting from improper storage after pickup.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Governing law</h2>
          <p className="text-sm">
            These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of the courts in Vadodara, Gujarat.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Contact</h2>
          <p className="text-sm">
            Questions? Message us on{" "}
            <a href="https://wa.me/919963163227" className="text-secondary hover:underline">WhatsApp +91 99631 63227</a> or email{" "}
            <a href="mailto:Smriti@festabakes.xyz" className="text-secondary hover:underline">Smriti@festabakes.xyz</a>.
          </p>
        </section>

      </div>
    </main>
  );
}
