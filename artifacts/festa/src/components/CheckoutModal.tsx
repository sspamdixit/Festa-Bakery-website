import { useState } from "react";
import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function CheckoutModal() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !details) return;

    const message = `Hi Festa! I'd like to place an order.\n\nName: ${name}\nPhone: ${phone}\nOrder: ${details}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/15551234567?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <DialogContent className="sm:max-w-[500px] border-border bg-card p-0 overflow-hidden">
      <div className="p-8">
        <DialogHeader className="mb-8">
          <DialogTitle className="text-3xl font-serif font-light text-foreground">Place an Order</DialogTitle>
          <DialogDescription className="text-muted-foreground font-sans font-light">
            Tell us what you'd like. We'll connect on WhatsApp to confirm details, availability, and pickup time.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground">Your Name</Label>
              <Input 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
                className="rounded-none border-t-0 border-x-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary text-base transition-colors"
                placeholder="Jane Doe"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-xs uppercase tracking-wider text-muted-foreground">Phone Number</Label>
              <Input 
                id="phone" 
                type="tel"
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                required 
                className="rounded-none border-t-0 border-x-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary text-base transition-colors"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div className="space-y-2 pt-2">
              <Label htmlFor="details" className="text-xs uppercase tracking-wider text-muted-foreground">Order Details</Label>
              <Textarea 
                id="details" 
                value={details} 
                onChange={(e) => setDetails(e.target.value)} 
                required 
                className="min-h-[120px] rounded border border-border bg-transparent p-3 focus-visible:ring-1 focus-visible:ring-primary text-base transition-colors resize-none"
                placeholder="E.g., 1x Espresso Opera cake for Friday..."
              />
            </div>
          </div>

          <Button type="submit" className="w-full h-14 bg-primary text-primary-foreground font-sans tracking-wide hover:opacity-90 rounded-none text-base transition-all duration-300">
            Continue to WhatsApp
          </Button>
        </form>
      </div>
    </DialogContent>
  );
}
