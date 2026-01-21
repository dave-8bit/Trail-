import React, { useState, useEffect } from "react";
import auctionCards from "../assets/AuctionCards.png";
import simulationArrows from "../assets/SimulationArrows.png";

const SimulationSection: React.FC = () => {
  const brandTeal = "#B4FF2C";
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { id: 1, content: "Simulation Data Feed 01" },
    { id: 2, content: "Neural Network Mapping 02" },
    { id: 3, content: "Market Liquidity Analysis 03" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    /* Reduced padding-top for mobile (pt-8) 
       Maintained fixed height only for desktop (md:h-[1625px]) 
    */
    <section className="relative w-full max-w-[1455px] md:h-[1625px] bg-[#0b0b0b] mx-auto overflow-hidden flex flex-col items-center px-4 md:px-0 pt-8 md:pt-0">
      
      {/* 1. HEADER SECTION 
          Desktop: mt-24 (Large gap)
          Mobile: mt-4 (Small gap to Hero)
      */}
      <div 
        className="flex items-center justify-center mt-4 md:mt-24 shrink-0 w-full md:w-[908px] h-auto md:h-[138px]"
        style={{ opacity: "100%" }}
      >
        <h2 
          className="text-white uppercase font-black text-center"
          style={{ 
            fontFamily: "'Bauer Neue', sans-serif",
            fontSize: "clamp(28px, 8vw, 64px)", 
            lineHeight: "1.1", 
            letterSpacing: "0%", 
            margin: "0"
          }}
        >
          <div>ENTER THE <span className="italic" style={{ color: brandTeal }}>SIMULATION</span></div>
          <div>BEFORE THE REST</div>
        </h2>
      </div>

      {/* 2. MEDIA FRAME (CAROUSEL) 
          Desktop: h-455px
          Mobile: h-240px (Better aspect ratio for 320px)
      */}
      <div 
        className="mt-6 md:mt-12 relative overflow-hidden bg-zinc-950 flex items-center justify-center shrink-0 z-20 w-full md:w-[1237px] h-[240px] md:h-[455px]"
        style={{ 
          borderRadius: "12px",
          border: `2px solid ${brandTeal}`
        }}
      >
        <div 
          className="flex transition-transform duration-1000 ease-in-out h-full w-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div 
              key={slide.id} 
              className="w-full h-full flex-shrink-0 flex items-center justify-center bg-zinc-900/50 text-white font-mono text-xs md:text-xl"
            >
              {slide.content}
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 right-4 flex gap-2">
          {slides.map((_, i) => (
            <div key={i} className="h-1" style={{ width: i === currentSlide ? "16px" : "6px", backgroundColor: i === currentSlide ? brandTeal : "rgba(255,255,255,0.2)" }} />
          ))}
        </div>
      </div>

      {/* 3. UNDERLAPPING ARROWS & AUCTION CARDS */}
      <div className="relative w-full flex flex-col items-center mt-6 md:mt-8 shrink-0">
        <img 
          src={simulationArrows} 
          alt=""
          className="absolute right-0 pointer-events-none z-10 hidden md:block"
          style={{ 
            width: "257.1px", 
            height: "511px",
            top: "-60px", 
          }}
        />

        <div className="relative z-20 flex items-center justify-center w-full md:w-[1235px] h-auto md:h-[702px]">
          <img 
            src={auctionCards} 
            alt="Auction Cards Simulation" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default SimulationSection;