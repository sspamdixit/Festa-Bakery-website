import { useState } from "react";
import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "919963163227";

export function CheckoutModal() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !details) return;

    const message = `Namaste Festa! I'd like to place an order.\n\nName: ${name}\nPhone: ${phone}\nOrder: ${details}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <DialogContent className="sm:max-w-[520px] border-foreground/10 bg-background p-0 overflow-hidden rounded-3xl">
      <div className="p-8 md:p-10">
        <DialogHeader className="mb-8">
          <DialogTitle className="text-3xl md:text-4xl font-serif font-extrabold text-foreground">
            Place Your Order
          </DialogTitle>
          <DialogDescription className="text-muted-foreground font-sans font-medium pt-2">
            Tell us what you'd like. We'll continue on WhatsApp to confirm flavours, pickup time and pricing in INR.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
                Your Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-12 rounded-xl border-foreground/15 bg-card/40 px-4 focus-visible:ring-2 focus-visible:ring-primary text-base font-medium"
                placeholder="Priya Sharma"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
                Phone (WhatsApp)
              </Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="h-12 rounded-xl border-foreground/15 bg-card/40 px-4 focus-visible:ring-2 focus-visible:ring-primary text-base font-medium"
                placeholder="+91 98765 43210"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="details" className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
                Order Details
              </Label>
              <Textarea
                id="details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                required
                className="min-h-[130px] rounded-xl border-foreground/15 bg-card/40 p-4 focus-visible:ring-2 focus-visible:ring-primary text-base font-medium resize-none"
                placeholder="1 kg chocolate truffle cake for Saturday, eggless, 'Happy Birthday Aanya' on top..."
              />
            </div>
          </div>

          <Button
            type="submit"
            className="group w-full h-14 bg-primary text-primary-foreground font-sans font-bold tracking-wide rounded-full text-base hover:opacity-95 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-10px_rgba(227,178,60,0.7)] transition-all"
          >
            Continue on WhatsApp
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>
      </div>
    </DialogContent>
  );
}
