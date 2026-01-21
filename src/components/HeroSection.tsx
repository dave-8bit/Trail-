import React from "react";
import trailLogo from "../assets/trail-logo.jpg";
import heroArrow from "../assets/herocard.png"; // Restored import
import heroCardSmall from "../assets/herocardsmall.png";

const HeroSection: React.FC = () => {
  const accent = "#B4FF2C";

  return (
    <section className="relative min-h-[750px] md:min-h-screen flex items-start sm:items-center justify-center overflow-hidden bg-[#0b0b0b] px-2 pt-20 sm:pt-0">
      <style>{`
        @keyframes cardEntrance {
          0% { transform: rotate(0deg) translateY(0px); opacity: 0; filter: blur(10px); }
          100% { opacity: 1; filter: blur(0px); }
        }
        .hero-card {
          animation: cardEntrance 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        @media (max-width: 640px) {
          .mobile-h1 { 
            font-size: 38px !important; 
            margin-top: 1rem; 
          }
          .hero-cards-container {
            width: 260px !important;
            height: 280px !important; 
            margin-top: 1.5rem !important;
          }
          .mobile-logo {
            opacity: 0.8 !important;
            height: 14px !important;
          }
          .hero-button-mobile {
            display: inline-flex !important;
            margin-top: 2rem; 
          }
        }
      `}</style>

      <div className="container mx-auto max-w-[1400px] relative">
        {/* Restored Desktop Arrow */}
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
          <h1 className="mobile-h1 text-[50px] sm:text-[100px] md:text-[120px] lg:text-[160px] leading-[0.9] font-black text-center mb-0 text-white font-mono">
            <div>NEW ERA OF</div>
            <div style={{ color: accent }}>OWNERSHIP.</div>
          </h1>

          <div className="relative hero-cards-container w-[240px] sm:w-[350px] md:w-[450px] h-[260px] sm:h-[350px] -mt-4 sm:-mt-20">
            {/* FRONT CARD */}
            <div className="hero-card absolute w-full h-[160px] sm:h-[280px] rounded-2xl bg-gradient-to-br from-zinc-900 to-black z-30 shadow-2xl"
              style={{ transform: "rotate(-3deg) translateY(20px)", animationDelay: "0.1s" }}>
              <div className="absolute top-4 right-4 font-mono text-[10px] uppercase font-bold" style={{ color: accent }}>Auctions</div>
              <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8">
                <img src={trailLogo} alt="TRAIL" className="mobile-logo h-3 sm:h-5 opacity-40" />
              </div>
            </div>

            {/* MIDDLE CARD */}
            <div className="hero-card absolute w-full h-[160px] sm:h-[280px] rounded-2xl bg-zinc-900 z-20 shadow-xl border border-white/5"
              style={{ transform: "rotate(6deg) translateY(60px) translateX(-8px)", animationDelay: "0.3s" }}>
              <div className="absolute top-4 right-4 font-mono text-[10px] uppercase font-bold" style={{ color: accent }}>Puzzles</div>
              <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8">
                <img src={trailLogo} alt="TRAIL" className="mobile-logo h-3 sm:h-5 opacity-30" />
              </div>
            </div>

            {/* BACK CARD */}
            <div className="hero-card absolute w-full h-[160px] sm:h-[280px] rounded-2xl z-10 shadow-lg"
              style={{ backgroundColor: accent, transform: "rotate(12deg) translateY(100px) translateX(-15px)", animationDelay: "0.5s" }}>
              <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8">
                <img src={trailLogo} alt="TRAIL" className="mobile-logo h-3 sm:h-5 opacity-80" />
              </div>
            </div>
          </div>

          <button className="hidden hero-button-mobile items-center justify-center font-mono uppercase tracking-wider text-[12px] font-bold px-8 py-4 bg-[#B4FF2C] text-[#05070b] rounded-[2px]">
            Begin your run →
          </button>
        </div>

        {/* Small Desktop Decorative Card */}
        <img
          src={heroCardSmall}
          alt=""
          className="absolute right-0 bottom-0 hidden sm:block"
          style={{ width: "140px", height: "139px", zIndex: 5 }}
        />
      </div>
    </section>
  );
};

export default HeroSection;