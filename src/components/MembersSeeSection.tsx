import React from "react";
import { Clock, MessageCircle, Repeat2, Heart, Bookmark, Share, Calendar } from "lucide-react";

// Asset Imports
import heroArrow from "../assets/herocard.png";
import seeArrow from "../assets/SeeArrow.png";
import firstCardImg from "../assets/FirstCard.jpg";
import secondCardImg from "../assets/SecondCard.png";
import thirdCardImg from "../assets/ThirdCard.png";

const MembersSeeSection: React.FC = () => {
  const brandTeal = "#B4FF2C";

  const samples = [
    {
      hashtags: "#auction #beta",
      timestamp: "17 : 17 GST",
      countdown: "24 : 00 : 00",
      author: "TRAIL by PartBuy",
      handle: "@trailbypartbuy",
      message: "AUCTION PREVIEW Asset Alpha opens 02:14 UTC (Mar. 2026) Type: Dutch Auction Starting price: 50,000 PBT Duration: 15 minutes",
      messageHashtags: "#Trailbypartbuy #TrailAuction #Auctions",
      postTime: "12:00 PM",
      postDate: "Oct 14, 2023",
      views: "200.1K Views",
      interpretation: "Act fast — Dutch auctions start high and drop. Recommended move: recon asset value, set bid timer for 02:14 UTC.",
      media: firstCardImg 
    },
    {
      hashtags: "#Puzzle #Xp",
      timestamp: "17 : 17 GST",
      countdown: "24 : 00 : 00",
      author: "TRAIL by PartBuy",
      handle: "@trailbypartbuy",
      message: "FRAGMENT DROP Puzzle Fragment #1 — Burj Khalifa Available to: Waitlist subscribers Advantage: Early recon for landmark completion",
      messageHashtags: "#Trailbypartbuy #TrailPuzzles #Burj",
      postTime: "12:00 PM",
      postDate: "Oct 14, 2023",
      views: "200.1K Views",
      interpretation: "Fragment drops to waitlist subscribers first. Complete puzzles before public launch = positioning advantage.",
      media: secondCardImg
    },
    {
      hashtags: "#GENESIS #Founders",
      timestamp: "17 : 17 GST",
      countdown: "24 : 00 : 00",
      author: "TRAIL by PartBuy",
      handle: "@trailbypartbuy",
      message: "FOUNDER TRANSMISSION @FortuneStack: Genesis Club requirements released Entry criteria: Platinum tier + 100K XP + 5M PBT + invitation Channel subscribers get first notice on qualification paths",
      messageHashtags: "#Trailbypartbuy #TrailPuzzles #Puzzles",
      postTime: "12:00 PM",
      postDate: "Oct 14, 2023",
      views: "200.1K Views",
      interpretation: "Founder drops contain qualification intel before official announcements. Position early or compete with the herd.",
      media: thirdCardImg
    }
  ];

  return (
    <section 
      className="relative w-full flex flex-col items-center bg-[#0b0b0b] mx-auto overflow-hidden pb-10 lg:pb-20"
      style={{ minHeight: "auto" }}
    >
      <div className="relative w-full flex flex-col items-center max-w-[1455px]">
        
        {/* SEE ARROW - Hidden on mobile (hidden), Visible on Desktop (lg:block) */}
        <img 
          src={seeArrow} 
          alt="See Arrow"
          className="hidden lg:block absolute top-0 right-0 select-none pointer-events-none"
          style={{ 
            width: "140.1px", 
            height: "139.23px", 
            zIndex: 30 
          }}
        />

        {/* HEADER SECTION */}
        <div className="flex flex-col items-center justify-center mt-12 mb-8 lg:mt-20 lg:mb-10 shrink-0 relative z-20 w-[90%] lg:w-[929px]">
          <h2 
            className="text-white uppercase text-center flex flex-col items-center font-thin" 
            style={{ 
              fontFamily: "'Bauer Neue', sans-serif", 
              fontSize: "clamp(24px, 5vw, 42px)", 
              lineHeight: "1.2", 
              letterSpacing: "0.05em"
            }}
          >
            <span className="block whitespace-nowrap">THIS IS WHAT <span className="italic" style={{ color: brandTeal }}>MEMBERS SEE</span></span>
            <span className="block whitespace-nowrap">BEFORE PUBLIC CHATTER</span>
          </h2>
        </div>

        {/* HERO CARD IMAGE (Left) - Hidden on mobile (hidden), Visible on Desktop (lg:block) */}
        <img 
          src={heroArrow} 
          alt="" 
          className="hidden lg:block absolute left-0 select-none pointer-events-none"
          style={{ 
            width: "257.1px", 
            height: "511px", 
            top: "100px",
            zIndex: 5,
            imageRendering: "crisp-edges",
            filter: "brightness(1.2) contrast(1.1)" 
          }}
        />

        {/* CARDS GRID */}
        <div 
          className="flex flex-col lg:flex-row justify-center items-center gap-6 relative z-10 w-full px-4 lg:px-0 lg:w-[969px]"
        >
          {samples.map((sample, index) => (
            <div
              key={index}
              className="transition-all border rounded-lg flex flex-col items-center shadow-2xl overflow-hidden w-full max-w-[298.437px]"
              style={{
                height: '560.95px',
                borderColor: `${brandTeal}66`,
                backgroundColor: "#0b0b0b"
              }}
            >
              <div className="w-full flex items-center justify-between px-3 py-2.5 border-b" style={{ borderColor: `${brandTeal}33` }}>
                <div className="px-2 py-0.5 border rounded" style={{ borderColor: brandTeal }}>
                  <span className="text-[9px] font-mono" style={{ color: brandTeal }}>{sample.hashtags}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#999]">
                  <Clock className="w-3 h-3" />
                  <span className="text-[10px] font-mono">{sample.timestamp}</span>
                </div>
              </div>

              <div className="w-full px-3 py-1.5">
                <span className="text-[10px] font-mono font-semibold" style={{ color: brandTeal }}>T - minus {sample.countdown}</span>
              </div>

              <div className="w-[calc(100%-20px)] mx-2.5 mb-2 p-3 rounded-md flex-1 flex flex-col items-center" style={{ backgroundColor: brandTeal }}>
                <div className="w-full flex gap-2 items-start mb-2">
                  <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center shrink-0">
                    <span className="text-[8px] font-bold" style={{ color: brandTeal }}>T</span>
                  </div>
                  <div className="flex-1 min-w-0 text-black">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-bold leading-tight">{sample.author}</p>
                        <p className="text-[9px] opacity-70">{sample.handle}</p>
                      </div>
                      <button className="bg-black text-white text-[9px] px-3 py-1 rounded-full font-bold">Follow</button>
                    </div>
                  </div>
                </div>
                
                <div className="w-full text-black">
                  <p className="text-[10px] leading-snug mb-1">
                    <span className="text-blue-600 mr-1">●</span>{sample.message}
                  </p>
                  <p className="text-[9px] text-blue-700 font-medium mb-2">{sample.messageHashtags}</p>
                </div>
                
                <div className="bg-black rounded mb-2 overflow-hidden flex-shrink-0" style={{ width: "223.1px", height: "144.54px" }}>
                  <img src={sample.media} alt="Asset" className="w-full h-full object-cover" />
                </div>

                <div className="w-full text-black">
                  <p className="text-[8px] opacity-60 mb-2">{sample.postTime} • {sample.postDate} • {sample.views}</p>
                  <div className="flex items-center justify-between opacity-80">
                     <MessageCircle className="w-3 h-3" /><Repeat2 className="w-3 h-3" /><Heart className="w-3 h-3" /><Bookmark className="w-3 h-3" /><Share className="w-3 h-3" />
                  </div>
                </div>
              </div>

              <div className="w-full px-3 py-3 border-t" style={{ borderColor: `${brandTeal}33` }}>
                <p className="text-[8px] font-mono text-[#666] uppercase mb-1">TACTICAL_INTERPRETATION:</p>
                <p style={{ color: brandTeal, fontFamily: "'Bauer Neue', sans-serif", fontSize: "13.62px", lineHeight: "1.2" }}>
                  {sample.interpretation}
                </p>
              </div>

              <div className="w-full p-3 mt-auto">
                <button className="w-full py-2 border text-[10px] font-bold rounded flex items-center justify-center gap-2" style={{ borderColor: brandTeal, color: brandTeal }}>
                  <Calendar className="w-3 h-3" /> Add to Calendar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersSeeSection;