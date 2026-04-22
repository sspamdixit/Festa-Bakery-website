import { Instagram, MapPin, MessageCircle, Phone, Mail } from "lucide-react";

const WHATSAPP_NUMBER = "919963163227";

export function Footer() {
  return (
    <footer className="festa-paper bg-card-solid py-12 md:py-20 border-t-2 border-foreground/10">
      <div className="container px-5 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-serif font-black text-foreground mb-3 md:mb-4">Festa.</h2>
            <p className="text-foreground/70 font-sans font-medium text-sm md:text-base max-w-sm leading-relaxed">
              Eggless home bakery in Bhayli, Vadodara. Birthday cakes, fruit cakes, brownies and tea cakes — baked fresh on order day.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-sans font-bold tracking-[0.25em] text-secondary uppercase mb-5 md:mb-6">Reach Us</h3>
            <ul className="space-y-3 md:space-y-4 text-sm font-sans font-medium text-foreground/80">
              <li>
                <a href="mailto:placeholder@mail.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                  <Mail className="w-4 h-4 shrink-0" /> placeholder@mail.com
                </a>
              </li>
              <li>
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
                  <Phone className="w-4 h-4 shrink-0" /> +91 99631 63227
                </a>
              </li>
              <li className="pt-1">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Bhayli%2C+Vadodara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-secondary transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    Festa Home Bakery<br />
                    Bhayli, Vadodara<br />
                    Gujarat 391410, India<br />
                    <span className="text-foreground/60">Serving all of Vadodara</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-sans font-bold tracking-[0.25em] text-secondary uppercase mb-5 md:mb-6">Follow</h3>
            <ul className="space-y-3 md:space-y-4 text-sm font-sans font-medium text-foreground/80">
              <li>
                <a href="https://instagram.com/festa.bakes" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-secondary transition-colors">
                  <Instagram className="w-4 h-4 shrink-0" /> @festa.bakes
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-secondary transition-colors">
                  <MessageCircle className="w-4 h-4 shrink-0" /> WhatsApp
                </a>
              </li>
              <li>
                <a href="https://www.google.com/search?q=Festa+home+bakery" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-secondary transition-colors">
                  <MapPin className="w-4 h-4 shrink-0" /> Google Business
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 md:mt-20 pt-6 md:pt-8 border-t border-foreground/15 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs font-sans font-semibold text-foreground/60">
            &copy; {new Date().getFullYear()} Festa Bakes, Vadodara.
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
