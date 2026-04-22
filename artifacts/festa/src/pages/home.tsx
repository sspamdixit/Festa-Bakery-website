import { Hero } from "@/components/Hero";
import { TheCraft } from "@/components/TheCraft";
import { Specialties } from "@/components/Specialties";
import { OrderSection } from "@/components/OrderSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-background min-h-screen">
      <Hero />
      <TheCraft />
      <Specialties />
      <OrderSection />
      <Footer />
    </main>
  );
}
