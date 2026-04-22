import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { Hero3D } from "./Hero3D";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CheckoutModal } from "./CheckoutModal";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 pb-12 overflow-hidden bg-background">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none md:pointer-events-auto">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} onCreated={({ gl }) => { gl.domElement.addEventListener("webglcontextlost", (e) => e.preventDefault()); }} fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#FFF3E0" />
          <Hero3D />
          <Environment preset="city">
            <Lightformer form="rect" intensity={2} color="#D4A373" position={[2, 0, 2]} scale={[10, 1, 1]} />
          </Environment>
        </Canvas>
      </div>

      <div className="container relative z-10 px-6 mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-sm font-sans tracking-[0.2em] text-primary uppercase mb-6">L'Atelier</h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[1.1] text-foreground mb-8">
              Festa: Artisanal<br/> Baking, Redefined.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-sans font-light max-w-xl mb-12 leading-relaxed">
              Obsessive consistency. Exceptional ingredients. Every loaf and pastry crafted like a masterpiece, signed before it leaves our home bakery.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <button className="group relative inline-flex h-14 items-center justify-center overflow-hidden bg-primary px-8 font-medium text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(212,163,115,0.5)]">
                  <span className="relative z-10 flex items-center gap-2 font-sans tracking-wide">
                    Order Now
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </button>
              </DialogTrigger>
              <CheckoutModal />
            </Dialog>
            
            <a 
              href="https://www.google.com/search?q=Festa+bakery" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm font-sans text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-foreground transition-colors">
                <MapPin className="w-3.5 h-3.5" />
              </span>
              Google Business Profile
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
