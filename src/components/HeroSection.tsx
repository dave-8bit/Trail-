import React from "react";
import trailLogo from "../assets/trail-logo.jpg";
import heroArrow from "../assets/herocard.png";
import heroCardSmall from "../assets/herocardsmall.png";

const HeroSection: React.FC = () => {
  const accent = "#B4FF2C";

  return (
    /* Changed items-center to items-start on mobile to pull content up near navbar */
    <section className="relative min-h-screen flex items-start sm:items-center justify-center overflow-hidden bg-[#0b0b0b] px-2 pt-20 sm:pt-0">
      <style>{`
        @keyframes cardEntrance {
          0% { 
            transform: rotate(0deg) translateY(0px) translateX(0px); 
            opacity: 0; 
            filter: blur(10px);
          }
          100% { 
            opacity: 1; 
            filter: blur(0px);
          }
        }
        .hero-card {
          animation: cardEntrance 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        /* 320px - 640px Mobile Optimizations */
        @media (max-width: 640px) {
          .mobile-h1 { 
            font-size: 36px !important; 
            line-height: 0.9 !important;
            margin-top: 2rem; 
          }
          .hero-arrow { display: none !important; }
          .hero-cards-container {
            width: 260px !important; /* Slightly wider for 320px screens */
            height: 180px !important;
            margin-top: 1rem !important;
            margin-bottom: 2rem !important;
          }
          .hero-card { 
            height: 160px !important; 
            border-radius: 16px !important; 
          }
          .hero-button { display: none !important; }
        }
      `}</style>

      <div className="container mx-auto max-w-[1400px] relative">
        {/* Desktop Arrow Decoration */}
        <img
          src={heroArrow}
          alt=""
          className="absolute hero-arrow left-0 hidden md:block"
          style={{
            width: "257px",
            height: "511px",
            top: "45%",
            transform: "translateY(-50%)",
            zIndex: 5
          }}
        />

        <div className="flex flex-col items-center justify-center relative z-10">
          {/* Main Headline */}
          <h1
            className="mobile-h1 text-[50px] xs:text-[60px] sm:text-[100px] md:text-[120px] lg:text-[160px] leading-[0.9] font-black text-center mb-0 relative text-white font-mono"
            style={{ letterSpacing: "-0.03em" }}
          >
            <div>NEW ERA OF</div>
            <div style={{ color: accent }}>OWNERSHIP.</div>

            {/* Desktop CTA Button */}
            <button
              className="hidden lg:inline-flex hero-button items-center justify-center absolute font-mono uppercase tracking-wider text-[10px] px-5 py-2.5 transition-all duration-300 hover:scale-105 active:scale-95 bg-[#B4FF2C] text-[#05070b]"
              style={{
                borderRadius: "2px",
                boxShadow: `0 0 20px ${accent}40`,
                zIndex: 50,
                top: "105%",
                right: "-26%"
              }}
            >
              Begin your run →
            </button>
          </h1>

          {/* Stacked Cards Container */}
          <div className="relative hero-cards-container w-[240px] sm:w-[350px] md:w-[450px] h-[260px] sm:h-[350px] -mt-8 sm:-mt-20 mb-12">
            
            {/* FRONT CARD */}
            <div
              className="hero-card absolute w-full h-[160px] sm:h-[280px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-zinc-900 to-black overflow-hidden z-30 shadow-2xl"
              style={{
                transform: "rotate(-3deg) translateY(20px)",
                animationDelay: "0.1s"
              }}
            >
              <div className="absolute top-4 left-4 sm:top-8 sm:left-8 flex gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accent }} />
                <div className="w-2 h-2 rounded-full opacity-60" style={{ backgroundColor: accent }} />
                <div className="w-2 h-2 rounded-full opacity-30" style={{ backgroundColor: accent }} />
              </div>
              <div className="absolute top-4 right-4 sm:top-8 sm:right-8 font-mono text-[10px] sm:text-xs uppercase font-bold" style={{ color: accent }}>
                Auctions
              </div>
              <div className="absolute top-10 left-4 sm:top-20 sm:left-8 w-12 h-8 rounded-lg" style={{ backgroundColor: accent }} />
              <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8">
                <img src={trailLogo} alt="TRAIL" className="h-3 sm:h-5 opacity-40" />
              </div>
            </div>

            {/* MIDDLE CARD */}
            <div
              className="hero-card absolute w-full h-[160px] sm:h-[280px] rounded-2xl sm:rounded-3xl bg-zinc-900 z-20 shadow-xl border border-white/5"
              style={{
                transform: "rotate(6deg) translateY(60px) translateX(-8px)",
                animationDelay: "0.3s"
              }}
            >
              <div className="absolute top-4 right-4 sm:top-8 sm:right-8 font-mono text-[10px] sm:text-xs uppercase font-bold" style={{ color: accent }}>
                Puzzles
              </div>
              <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8">
                <img src={trailLogo} alt="TRAIL" className="h-3 sm:h-5 opacity-30" />
              </div>
            </div>

            {/* BACK CARD */}
            <div
              className="hero-card absolute w-full h-[160px] sm:h-[280px] rounded-2xl sm:rounded-3xl z-10 shadow-lg"
              style={{
                backgroundColor: accent,
                transform: "rotate(12deg) translateY(100px) translateX(-15px)",
                animationDelay: "0.5s"
              }}
            >
              <div className="absolute top-4 left-4 sm:top-8 sm:left-8 font-mono text-[10px] sm:text-xs uppercase text-black/60 font-bold">
                Club Wars
              </div>
              <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8">
                <img src={trailLogo} alt="TRAIL" className="h-3 sm:h-5 opacity-80" />
              </div>
            </div>

          </div>
        </div>

        {/* Small Bottom Right Card (Hidden on Mobile) */}
        <img
          src={heroCardSmall}
          alt=""
          className="absolute hero-small right-0 bottom-0 hidden sm:block"
          style={{ width: "140px", height: "139px", zIndex: 5 }}
        />
      </div>
    </section>
  );
};

export default HeroSection;