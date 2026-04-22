import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";

export function CheckoutModal() {
  const [details, setDetails] = useState("");

  return (
    <DialogContent className="sm:max-w-xl rounded-3xl border-foreground/10 bg-background p-6 sm:p-8">
      <DialogTitle className="text-2xl sm:text-3xl font-serif font-black text-foreground">Order fresh cakes</DialogTitle>
      <DialogDescription className="mt-2 text-sm sm:text-base text-muted-foreground">
        Tell us the flavour, size, date, and message. We make custom cakes, birthday cakes, and celebration cakes to order.
      </DialogDescription>
      <div className="mt-6 grid gap-5">
        <div className="grid gap-2">
          <Label htmlFor="name" className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
            Your Name
          </Label>
          <Input id="name" placeholder="Your name" className="h-12 rounded-xl border-foreground/15 bg-card/40 px-4" />
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
            className="min-h-[130px] rounded-xl border-foreground/15 bg-card/40 p-4 focus-visible:ring-2 focus-visible:ring-primary text-base font-medium resize-none"
            placeholder="1 kg chocolate truffle cake for Saturday, Happy Birthday Aanya on top..."
          />
        </div>
      </div>

      <Button
        type="submit"
        className="group mt-6 w-full h-14 bg-primary text-primary-foreground font-sans font-bold tracking-wide rounded-full text-base hover:opacity-95 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-10px_rgba(227,178,60,0.7)] transition-all"
      >
        Continue on WhatsApp
        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </DialogContent>
  );
}
