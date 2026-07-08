import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { TheCraft } from "@/components/TheCraft";
import { Marquee } from "@/components/Marquee";
import { FunCake } from "@/components/FunCake";
import { Specialties } from "@/components/Specialties";
import { FaqSection } from "@/components/FaqSection";
import { OrderSection } from "@/components/OrderSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <main className="festa-grain relative w-full bg-background min-h-screen">
        <NavBar />
        <Hero />
        <TheCraft />
        <Marquee />
        <FunCake />
        <Specialties />
        <FaqSection />
        <OrderSection />
        <Footer />
      </main>
      <WhatsAppFab />
    </>
  );
}
