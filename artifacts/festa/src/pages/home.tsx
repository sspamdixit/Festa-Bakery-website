import { useState, useCallback } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { TheCraft } from "@/components/TheCraft";
import { Marquee } from "@/components/Marquee";
import { Specialties } from "@/components/Specialties";
import { OrderSection } from "@/components/OrderSection";
import { Footer } from "@/components/Footer";
import { CakeBaked } from "@/components/CakeBaked";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const handleDone = useCallback(() => setLoaded(true), []);

  return (
    <>
      <LoadingScreen onDone={handleDone} />
      <main
        className="festa-grain relative w-full bg-background min-h-screen"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.4s ease" }}
      >
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center"
          style={{ opacity: 0.18 }}
        >
          <div className="w-[90vw] h-[90vw] max-w-[640px] max-h-[640px]">
            <CakeBaked />
          </div>
        </div>

        <div className="relative z-10">
          <NavBar />
          <Hero />
          <TheCraft />
          <Marquee />
          <Specialties />
          <OrderSection />
          <Footer />
        </div>
      </main>
    </>
  );
}
