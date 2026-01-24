import React from "react";
import badgeImg from "../assets/Badge.png";

// Reusable Arrow Icon to match the UI
const CornerArrow = ({ color = "#B4FF2C" }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="absolute top-2 right-2">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke={color} strokeWidth="2.5" strokeLinecap="square"/>
  </svg>
);

const ArenaSection: React.FC = () => {
  const accent = "#B4FF2C";

  return (
    <section className="arena-container">
      {/* 1. HEADER WITH LARGE DECORATIVE ARROW */}
      <div className="arena-header-wrapper relative z-10">
        <div className="absolute top-[-40px] right-[-60px] opacity-20 hidden md:block">
           <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              <path d="M20 100L100 20M100 20H40M100 20V80" stroke={accent} strokeWidth="12"/>
           </svg>
        </div>
        <h2 className="arena-main-title">
          Live from the arena: <span style={{ color: accent }}>Early</span>
          <br />
          positioning wins
        </h2>
      </div>

      <div className="dashboard-content relative z-10">
        
        {/* 2. TOP CARDS - Fixed: 1296 x 368 (Matched to Image) */}
        <div className="top-cards-fixed-row mb-12">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="terminal-card testimonial-card flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                {/* Arrow Icon from Image */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke={accent} strokeWidth="3.5" strokeLinecap="square"/>
                </svg>
                
                {/* User Avatar Placeholder */}
                <div className="w-10 h-10 rounded-full bg-gray-800 border border-white/20 overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-70" />
                </div>

                <span className="user-handle text-lg tracking-wider">@TECHFLEXSG</span>
              </div>

              <p className="body-text-accent leading-relaxed text-[17px]">
                "Joined TRAIL waitlist for content angles. Day one: claimed first
                puzzle fragment, documented the unlock sequence. Result: 23K
                views on TikTok, 400+ waitlist signups through my referral code.
                Early positioning = content gold."
              </p>
            </div>
          ))}
        </div>

        {/* 3. MID SECTION (Staggered/Right Aligned Group) */}
        <div className="flex flex-col items-end gap-10 mb-20">
          {/* Badge Claim - Fixed: 752.01 x 314 */}
          <div className="terminal-card badge-claim-fixed border-accent relative flex flex-col justify-center">
            <CornerArrow />
            <div className="flex gap-4">
                <div className="w-16 h-16 bg-black flex-shrink-0 border border-white/20 overflow-hidden">
                    <img src={badgeImg} alt="Badge" className="w-full h-full object-cover grayscale" />
                </div>
                <div>
                    <h3 className="card-title">BADGE CLAIM TRANSMISSION</h3>
                    <p className="body-text-gray">Genesis pathway unlocked — visual proof shareable across all platforms. Status you can flex.</p>
                </div>
            </div>
            <div className="mt-4 p-2 border border-white/10 bg-black/40">
                <p className="text-[10px] font-mono text-red-500">DURATION: 0:30</p>
            </div>
            <p className="flex-link">WANT YOUR CLIP SPOTLIGHTED?</p>
          </div>

          {/* Auction Logs - Fixed: 607 x 454.44 */}
          <div className="terminal-card auction-logs-fixed border-accent relative flex flex-col justify-center">
            <CornerArrow />
            <h3 className="card-title flex items-center gap-2">
              <span className="text-xl">👑</span> AUCTION WIN LOGS
            </h3>
            <ul className="log-list-mono">
              <li><span className="label">USER:</span> <span className="value-highlight">@RASHED_AE</span></li>
              <li><span className="label">ACTION:</span> DUTCH AUCTION #7 — ASSET GAMMA</li>
              <li><span className="label">RESULT:</span> WINNING BID 38,500,000 PBT</li>
              <li><span className="label">TIME TO WIN:</span> 14:03:47 GST</li>
              <li><span className="label">ADVANTAGE:</span> CHANNEL ALERT RECEIVED 06:00 UTC (8H EARLY)</li>
              <li><span className="label">BADGE EARNED:</span> AUCTION DOMINATOR (PLATINUM)</li>
              <li><span className="label">RANK JUMP:</span> #412 → #127</li>
            </ul>
          </div>
        </div>

        {/* 4. GLOBAL STANDINGS - Fixed: 1308 x 940.37 */}
        <div className="terminal-card global-standings-fixed relative flex flex-col">
          <CornerArrow />
          <h2 className="card-title-white mb-2">GLOBAL STANDINGS</h2>
          <p className="body-text-accent-small mb-8">
            Rank +18 after Auction #3 — transmission timing made the difference. 2-hour advantage = positioning secured.
          </p>

          <div className="overflow-x-auto flex-1">
            <table className="terminal-table">
              <thead>
                <tr>
                  <th><div className="flex items-center gap-1"><CornerArrow color="#B4FF2C" /> RANK</div></th>
                  <th>USER</th>
                  <th>XP</th>
                  <th>PBT</th>
                  <th>BADGES</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["01", "@TECHFLEXSG", "200,000", "10M", "7"],
                  ["02", "@DESIGNHAVEN", "150,000", "15M", "5"],
                  ["03", "@CREATIVENEST", "300,000", "20M", "12"],
                  ["04", "@INNOVATEHUB", "250,000", "8M", "8"],
                  ["05", "@FUTURETECH", "180,000", "5M", "6"],
                  ["06", "@NEXTGENDESIGN", "320,000", "12M", "10"],
                  ["07", "@SMARTSOLUTIONS", "290,000", "18M", "15"],
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="font-mono text-accent">
                        <div className="flex items-center gap-2">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H7M17 7V17" stroke={accent} strokeWidth="3"/></svg>
                            {row[0]}
                        </div>
                    </td>
                    <td className="font-mono uppercase">{row[1]}</td>
                    <td className="font-mono">{row[2]}</td>
                    <td className="font-mono">{row[3]}</td>
                    <td className="font-mono text-center">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="footer-note-mono mt-6">STATS SHOWN: XP GAINS, AUCTION WINS, PUZZLE COMPLETIONS</p>
          
          <div className="absolute bottom-4 right-4 opacity-40">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H7M17 7V17" stroke={accent} strokeWidth="2"/></svg>
          </div>
        </div>
      </div>

      <style>
        {`
          .arena-container {
            width: 1455px; min-width: 1455px;
            background-color: #0b0b0b; position: relative; overflow: hidden;
            display: flex; flex-direction: column; align-items: center;
            margin: 0 auto; box-sizing: border-box; padding: 120px 80px;
          }

          .dashboard-content { width: 100%; max-width: 1308px; }
          .arena-header-wrapper { text-align: center; margin-bottom: 100px; width: 100%; position: relative; }

          /* DIMENSIONS */
          .top-cards-fixed-row { width: 1296px; height: 368px; display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
          .badge-claim-fixed { width: 752.01px; height: 314px; }
          .auction-logs-fixed { width: 607px; height: 454.44px; }
          .global-standings-fixed { width: 1308px; height: 940.37px; }

          .testimonial-card {
            border: 2px solid ${accent} !important; /* Matched to reference image */
            border-radius: 4px;
            padding: 40px !important;
          }

          .arena-main-title {
            font-family: 'Blauer Neue', sans-serif; font-size: 64px; font-weight: 600;
            color: #FFFFFF; line-height: 1.1;
          }

          .terminal-card {
            background: #000; border: 1.5px solid ${accent}44;
            padding: 35px; position: relative; box-shadow: inset 0 0 20px ${accent}05;
            box-sizing: border-box;
          }

          .user-handle { font-family: 'Blauer Neue', sans-serif; font-weight: 800; color: #fff; }
          .body-text-accent { color: ${accent}; font-family: 'Blauer Neue', sans-serif; font-weight: 400; }
          .body-text-accent-small { color: ${accent}; font-family: 'Blauer Neue', sans-serif; font-size: 14px; font-weight: 300; }
          .body-text-gray { color: #888; font-family: 'Blauer Neue', sans-serif; font-size: 13px; margin-top: 8px; }
          .card-title { color: ${accent}; font-family: 'Blauer Neue', sans-serif; font-weight: 700; font-size: 22px; }
          .card-title-white { color: #fff; font-family: 'Blauer Neue', sans-serif; font-weight: 700; font-size: 24px; text-transform: uppercase; }

          .log-list-mono { list-style: none; padding: 0; margin-top: 25px; font-family: ui-monospace, monospace; font-size: 13px; color: ${accent}; }
          .log-list-mono li { margin-bottom: 10px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 4px; }
          .log-list-mono .label { color: #666; margin-right: 10px; }
          .log-list-mono .value-highlight { background: ${accent}; color: #000; padding: 0 4px; font-weight: bold; }

          .terminal-table { width: 100%; border-collapse: collapse; }
          .terminal-table th { color: ${accent}; text-align: left; padding: 15px 10px; border-bottom: 2px solid ${accent}44; font-size: 12px; font-weight: 900; }
          .terminal-table td { color: #fff; padding: 25px 10px; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 16px; }

          .footer-note-mono { font-family: ui-monospace, monospace; color: #444; font-size: 10px; letter-spacing: 1px; }
          .flex-link { margin-top: 20px; color: ${accent}; font-size: 11px; font-weight: 900; text-decoration: underline; cursor: pointer; }

          @media (max-width: 1455px) {
            .arena-container, .top-cards-fixed-row, .badge-claim-fixed, .auction-logs-fixed, .global-standings-fixed {
              width: 100% !important; min-width: 100% !important; height: auto !important; min-height: 0 !important;
            }
            .top-cards-fixed-row { grid-template-columns: 1fr; }
            .arena-main-title { font-size: 38px; }
          }
        `}
      </style>
    </section>
  );
};

export default ArenaSection;