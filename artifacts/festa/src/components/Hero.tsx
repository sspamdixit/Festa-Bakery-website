import { Canvas } from "@react-three/fiber";
import { Hero3D } from "./Hero3D";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CheckoutModal } from "./CheckoutModal";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 pb-10 overflow-hidden bg-background">
      <div className="container relative z-10 px-5 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-xs font-sans font-bold tracking-[0.3em] text-secondary uppercase mb-4 md:mb-6">
                Home Bakery · India
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-black leading-[0.95] text-foreground mb-5 md:mb-8">
                Festa: <span className="text-secondary">Artisanal</span><br />
                Baking, <span className="italic font-extrabold" style={{ color: "#E3B23C" }}>Redefined.</span>
              </h1>
              <p className="text-base md:text-xl text-muted-foreground font-sans font-medium max-w-xl mb-8 md:mb-12 leading-relaxed">
                Celebration cakes and everyday bakes, made fresh from our home kitchen. Obsessive consistency, real ingredients, signed before they leave.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <button className="group relative inline-flex h-14 items-center justify-center overflow-hidden bg-primary px-8 font-bold text-primary-foreground rounded-full transition-all duration-300 hover:shadow-[0_18px_40px_-10px_rgba(227,178,60,0.7)] hover:-translate-y-0.5 w-full sm:w-auto">
                    <span className="relative z-10 flex items-center gap-2 font-sans tracking-wide text-base">
                      Order Now
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </button>
                </DialogTrigger>
                <CheckoutModal />
              </Dialog>

              <a
                href="https://www.google.com/search?q=Festa+home+bakery"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center sm:justify-start gap-3 text-sm font-sans font-semibold text-foreground transition-colors hover:text-secondary"
              >
                <span className="w-10 h-10 rounded-full border-2 border-foreground/20 flex items-center justify-center group-hover:border-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all shrink-0">
                  <MapPin className="w-4 h-4" />
                </span>
                Google Business Profile
              </a>
            </motion.div>
          </div>

          {/* 3D Cake on the right */}
          <motion.div
            className="lg:col-span-5 relative h-[260px] sm:h-[360px] md:h-[480px] lg:h-[640px] w-full"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(circle at 50% 55%, rgba(227,178,60,0.45) 0%, rgba(222,186,192,0.0) 60%)",
              }}
            />
            <Canvas
              camera={{ position: [3.2, 1.4, 4.2], fov: 40 }}
              dpr={[1, 2]}
              gl={{ antialias: true, alpha: true }}
              onCreated={({ gl }) => {
                gl.domElement.addEventListener("webglcontextlost", (e) => e.preventDefault());
              }}
              fallback={null}
            >
              <ambientLight intensity={0.7} />
              <directionalLight position={[5, 8, 5]} intensity={1.2} color="#FFF3E0" castShadow />
              <directionalLight position={[-5, 3, -3]} intensity={0.6} color="#457B9D" />
              <pointLight position={[0, 4, 4]} intensity={0.8} color="#E3B23C" />
              <Hero3D />
            </Canvas>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
