import { Instagram, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background py-16 border-t border-border">
      <div className="container px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif font-light text-foreground mb-4">Festa</h2>
            <p className="text-muted-foreground font-sans font-light text-sm max-w-sm">
              An atelier approach to artisanal baking. Everything made with intention, precision, and soul.
            </p>
          </div>
          
          <div>
            <h3 className="text-xs font-sans tracking-[0.2em] text-foreground uppercase mb-6">Contact</h3>
            <ul className="space-y-4 text-sm font-sans font-light text-muted-foreground">
              <li><a href="mailto:hello@festa.bakery" className="hover:text-primary transition-colors">hello@festa.bakery</a></li>
              <li><a href="tel:+15551234567" className="hover:text-primary transition-colors">+1 (555) 123-4567</a></li>
              <li className="flex items-start gap-2 pt-2 text-foreground">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>123 Artisan Way<br/>San Francisco, CA 94103</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xs font-sans tracking-[0.2em] text-foreground uppercase mb-6">Social</h3>
            <ul className="space-y-4 text-sm font-sans font-light text-muted-foreground">
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </li>
              <li>
                <a href="https://wa.me/15551234567" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </li>
              <li>
                <a href="https://www.google.com/search?q=Festa+bakery" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <MapPin className="w-4 h-4" /> Google Business
                </a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-sans font-light text-muted-foreground">
            &copy; {new Date().getFullYear()} Festa Bakery. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs font-sans font-light text-muted-foreground hover:text-foreground cursor-pointer">Privacy Policy</span>
            <span className="text-xs font-sans font-light text-muted-foreground hover:text-foreground cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
