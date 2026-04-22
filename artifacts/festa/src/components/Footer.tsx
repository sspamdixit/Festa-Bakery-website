import { Instagram, MapPin, MessageCircle, Phone, Mail } from "lucide-react";

const WHATSAPP_NUMBER = "919999999999"; // TODO: replace with real Festa WhatsApp number

export function Footer() {
  return (
    <footer className="py-20 border-t-2 border-foreground/10" style={{ backgroundColor: "hsl(var(--card))" }}>
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-5xl font-serif font-black text-foreground mb-4">Festa.</h2>
            <p className="text-foreground/70 font-sans font-medium text-base max-w-sm leading-relaxed">
              A home bakery in India crafting celebration cakes and everyday bakes — made with care, baked to order.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-sans font-bold tracking-[0.25em] text-secondary uppercase mb-6">Reach Us</h3>
            <ul className="space-y-4 text-sm font-sans font-medium text-foreground/80">
              <li>
                <a href="mailto:hello@festa.bakery" className="flex items-center gap-2 hover:text-secondary transition-colors">
                  <Mail className="w-4 h-4" /> hello@festa.bakery
                </a>
              </li>
              <li>
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
                  <Phone className="w-4 h-4" /> +91 99999 99999
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Home Bakery<br />India</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-sans font-bold tracking-[0.25em] text-secondary uppercase mb-6">Follow</h3>
            <ul className="space-y-4 text-sm font-sans font-medium text-foreground/80">
              <li>
                <a href="https://instagram.com/festa.bakery" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-secondary transition-colors">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-secondary transition-colors">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </li>
              <li>
                <a href="https://www.google.com/search?q=Festa+home+bakery" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-secondary transition-colors">
                  <MapPin className="w-4 h-4" /> Google Business
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-foreground/15 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-sans font-semibold text-foreground/60">
            &copy; {new Date().getFullYear()} Festa. Baked with care in India.
          </p>
          <div className="flex items-center gap-6 text-xs font-sans font-semibold text-foreground/60">
            <span className="hover:text-foreground cursor-pointer">Privacy</span>
            <span className="hover:text-foreground cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
