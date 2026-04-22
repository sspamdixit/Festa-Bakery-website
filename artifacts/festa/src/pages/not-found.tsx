import { ArrowLeft, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919963163227";

export default function NotFound() {
  return (
    <main className="festa-paper relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background px-5 py-20">
      <div
        className="absolute inset-0 pointer-events-none -z-10 overflow-hidden"
        aria-hidden
      >
        <div
          className="absolute rounded-full"
          style={{
            width: "60vw",
            height: "60vw",
            top: "-15%",
            left: "-15%",
            background:
              "radial-gradient(circle, rgba(201, 82, 126,0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "50vw",
            height: "50vw",
            bottom: "-10%",
            right: "-10%",
            background:
              "radial-gradient(circle, rgba(222,186,192,0.22) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-xl w-full text-center">
        <p className="text-[10px] sm:text-xs font-sans font-bold tracking-[0.3em] text-secondary uppercase mb-5">
          Error 404
        </p>

        <h1 className="text-[5rem] sm:text-[7rem] md:text-[9rem] font-serif font-black leading-none text-foreground mb-2">
          4<span className="text-secondary italic">0</span>4
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold text-foreground mb-4">
          This slice is missing.
        </h2>

        <p className="text-base md:text-lg text-muted-foreground font-sans font-medium max-w-md mx-auto mb-10 leading-relaxed">
          The page you're looking for has been eaten, moved, or never baked. Head back to the menu — there's plenty more to taste.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/"
            className="liquid-glass-primary group relative inline-flex h-12 sm:h-14 items-center justify-center overflow-hidden whitespace-nowrap px-6 sm:px-8 font-bold rounded-full"
          >
            <span className="relative z-10 flex items-center gap-2 font-sans tracking-wide text-sm sm:text-base">
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Festa
            </span>
            <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </a>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass inline-flex h-12 sm:h-14 items-center justify-center px-6 sm:px-8 rounded-full font-sans font-bold text-sm sm:text-base text-foreground transition-all duration-300 hover:text-secondary hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
