import { useEffect } from "react";
import { Link } from "wouter";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy | Festa Eggless Home Bakery";
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground px-5 py-16 md:py-24 max-w-2xl mx-auto">
      <Link href="/" className="inline-block mb-8 text-sm font-sans font-semibold text-foreground/50 hover:text-secondary transition-colors">
        ← Back to Festa
      </Link>

      <h1 className="text-3xl sm:text-4xl font-serif font-black mb-2 leading-tight">Privacy Policy</h1>
      <p className="text-sm font-sans text-foreground/50 mb-10">Last updated: July 2026</p>

      <div className="space-y-8 font-sans text-foreground/80 leading-relaxed">

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Who we are</h2>
          <p>
            Festa is a home bakery run by Smriti Dixit, based in Bhayli, Vadodara, Gujarat, India. You can reach us at{" "}
            <a href="mailto:Smriti@festabakes.xyz" className="text-secondary hover:underline">Smriti@festabakes.xyz</a> or on WhatsApp at{" "}
            <a href="https://wa.me/919963163227" className="text-secondary hover:underline">+91 99631 63227</a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">What information we collect</h2>
          <p className="mb-3">
            We collect only what you share with us directly when placing an order:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Your name</li>
            <li>Your phone number (via WhatsApp)</li>
            <li>Order details (flavour, weight, message, pickup date)</li>
            <li>Any reference images you send for custom cakes</li>
          </ul>
          <p className="mt-3 text-sm">
            This website itself does not use cookies, analytics trackers, or any form of session tracking.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">How we use your information</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>To confirm and fulfill your order</li>
            <li>To contact you about your order (delivery time, design confirmation, etc.)</li>
            <li>To send you a quote when requested</li>
          </ul>
          <p className="mt-3 text-sm">
            We do not use your information for marketing without your consent. We will not send you unsolicited messages.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Who we share it with</h2>
          <p>
            We do not sell, rent or share your personal information with any third party, except where strictly necessary — for example, sharing your pickup address with a delivery partner if you request home delivery.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">WhatsApp</h2>
          <p>
            Orders are placed over WhatsApp. WhatsApp is operated by Meta Platforms, Inc. and has its own privacy policy. By messaging us on WhatsApp, you are also subject to{" "}
            <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">WhatsApp's privacy policy</a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">How long we keep your data</h2>
          <p>
            We retain your order details only for as long as needed to complete the order and handle any follow-up. We do not maintain a long-term customer database.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Your rights</h2>
          <p>
            You can ask us at any time to delete the information you've shared with us. Just send us a message on WhatsApp or email and we'll remove it promptly.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Changes to this policy</h2>
          <p>
            If we make any changes, we'll update the date at the top of this page. For a home bakery of our size, this policy is unlikely to change significantly.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-foreground mb-2">Contact</h2>
          <p>
            Questions about this policy? Reach us at{" "}
            <a href="mailto:Smriti@festabakes.xyz" className="text-secondary hover:underline">Smriti@festabakes.xyz</a> or{" "}
            <a href="https://wa.me/919963163227" className="text-secondary hover:underline">WhatsApp +91 99631 63227</a>.
          </p>
        </section>

      </div>
    </main>
  );
}
