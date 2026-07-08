import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919963163227";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Namaste Festa! I'd like to place an order.")}`;

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-5 right-5 z-50 sm:hidden flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_4px_20px_-4px_rgba(37,211,102,0.7)] active:scale-95 transition-transform duration-150"
    >
      <MessageCircle className="w-6 h-6 text-white fill-white" />
    </a>
  );
}
