import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "919963163227";

export function CheckoutModal() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");

  const phoneDigits = phone.replace(/\D/g, "");
  const isPhoneValid = phoneDigits.length >= 10 && phoneDigits.length <= 15;
  const showPhoneError = phone.trim().length > 0 && !isPhoneValid;
  const canSubmit = Boolean(name.trim() && isPhoneValid && details.trim());

  const handleContinue = () => {
    if (!canSubmit) return;
    const message = `Namaste Festa! I'd like to place an order.\n\nName: ${name.trim()}\nPhone: ${phone.trim()}\nOrder: ${details.trim()}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <DialogContent className="sm:max-w-xl rounded-3xl p-6 sm:p-8 border border-white/60 bg-card/85 backdrop-blur-xl backdrop-saturate-150 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)]">
      <DialogTitle className="text-2xl sm:text-3xl font-serif font-black text-foreground">Place your order</DialogTitle>
      <DialogDescription className="mt-2 text-sm sm:text-base text-muted-foreground">
        Share the flavour, size, date and message on the cake. We'll confirm on WhatsApp.
      </DialogDescription>
      <p className="mt-3 rounded-xl border border-secondary/25 bg-secondary/10 px-4 py-3 text-sm sm:text-base font-sans font-semibold text-foreground/85 leading-relaxed">
        Customised cakes (themes, toppers, fondant work) are charged extra. Final pricing is confirmed on WhatsApp.
      </p>
      <div className="mt-6 grid gap-5">
        <div className="grid gap-2">
          <Label htmlFor="name" className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
            Your Name
          </Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="liquid-glass-soft h-12 rounded-xl px-4"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            inputMode="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98765 43210"
            aria-invalid={showPhoneError}
            className={`liquid-glass-soft h-12 rounded-xl px-4 ${
              showPhoneError ? "border-destructive focus-visible:ring-destructive" : ""
            }`}
          />
          {showPhoneError && (
            <p className="text-xs font-medium text-destructive">
              Please enter a valid phone number (10 to 15 digits).
            </p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="details" className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
            Order Details
          </Label>
          <Textarea
            id="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
            className="liquid-glass-soft min-h-[130px] rounded-xl p-4 focus-visible:ring-2 focus-visible:ring-primary text-base font-medium resize-none"
            placeholder="1 kg chocolate truffle cake for Saturday, Happy Birthday Aanya on top..."
          />
        </div>
      </div>

      <Button
        type="button"
        onClick={handleContinue}
        disabled={!canSubmit}
        className="liquid-glass-primary group mt-6 w-full h-14 font-sans font-bold tracking-wide rounded-full text-base disabled:opacity-50"
      >
        Continue on WhatsApp
        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </DialogContent>
  );
}
