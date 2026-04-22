import { useState, useCallback } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { TheCraft } from "@/components/TheCraft";
import { Marquee } from "@/components/Marquee";
import { Specialties } from "@/components/Specialties";
import { OrderSection } from "@/components/OrderSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const handleDone = useCallback(() => setLoaded(true), []);

  return (
    <>
      <LoadingScreen onDone={handleDone} />
      <main
        className="w-full bg-background min-h-screen"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.4s ease" }}
      >
        <NavBar />
        <Hero />
        <TheCraft />
        <Marquee />
        <Specialties />
        <OrderSection />
        <Footer />
      </main>
    </>
  );
}
