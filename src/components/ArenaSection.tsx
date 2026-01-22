import React from "react";

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
        
        {/* 2. TOP CARDS (Left Aligned Group) */}
        <div className="arena-grid row-2 mb-12">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="terminal-card">
              <div className="flex items-center gap-2 mb-4">
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H7M17 7V17" stroke={accent} strokeWidth="3"/></svg>
                 <span className="user-handle">@TECHFLEXSG</span>
              </div>
              <p className="body-text-accent">
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
          {/* Badge Claim */}
          <div className="terminal-card badge-claim-card border-accent relative">
            <CornerArrow />
            <div className="flex gap-4">
                <div className="w-16 h-16 bg-red-900/30 flex-shrink-0 flex items-center justify-center border border-red-500/50">
                    <span className="text-2xl">🧩</span>
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

          {/* Auction Logs */}
          <div className="terminal-card auction-logs-card border-accent relative">
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

        {/* 4. GLOBAL STANDINGS (Centered Full Width) */}
        <div className="terminal-card w-full relative">
          <CornerArrow />
          <h2 className="card-title-white mb-2">GLOBAL STANDINGS</h2>
          <p className="body-text-accent-small mb-8">
            Rank +18 after Auction #3 — transmission timing made the difference. 2-hour advantage = positioning secured.
          </p>

          <div className="overflow-x-auto">
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
          
          {/* Large decorative arrow in bottom right corner of table */}
          <div className="absolute bottom-4 right-4 opacity-40">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H7M17 7V17" stroke={accent} strokeWidth="2"/></svg>
          </div>
        </div>
      </div>

      <style>
        {`
          /* DESKTOP VIEW - PRESERVED FIXED DIMENSIONS */
          @media (min-width: 1456px) {
            .arena-container {
                width: 1455px;
                min-width: 1455px;
                padding: 120px 80px;
                margin: 0 auto;
            }
            .arena-grid.row-2 { grid-template-columns: repeat(2, 1fr); }
            .badge-claim-card { width: 60%; }
            .auction-logs-card { width: 50%; }
          }

          /* SHARED BASE STYLES */
          .arena-container {
            background-color: #0b0b0b;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            box-sizing: border-box;
          }

          .dashboard-content { width: 100%; max-width: 1250px; }
          .arena-header-wrapper { text-align: center; margin-bottom: 100px; width: 100%; position: relative; }
          .arena-main-title { font-family: 'Blauer Neue', sans-serif; font-size: 64px; font-weight: 600; color: #FFFFFF; line-height: 1.1; }
          .arena-grid { display: grid; gap: 30px; }
          .terminal-card { background: #000; border: 1.5px solid ${accent}44; padding: 35px; position: relative; box-shadow: inset 0 0 20px ${accent}05; }
          .user-handle { font-family: 'Blauer Neue', sans-serif; font-weight: 800; color: #fff; font-size: 14px; }
          .body-text-accent { color: ${accent}; font-family: 'Blauer Neue', sans-serif; font-size: 16px; font-weight: 400; line-height: 1.5; }
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
          .terminal-table td { color: #fff; padding: 18px 10px; border-bottom: 1px solid rgba(255,255,255,0.05); font-size: 14px; }
          .footer-note-mono { font-family: ui-monospace, monospace; color: #444; font-size: 10px; letter-spacing: 1px; }
          .flex-link { margin-top: 20px; color: ${accent}; font-size: 11px; font-weight: 900; text-decoration: underline; text-underline-offset: 4px; cursor: pointer; }

          /* RESPONSIVE VIEW (Up to Desktop) */
          @media (max-width: 1455px) {
            .arena-container { width: 100%; min-width: 100%; padding: 60px 20px; }
            .arena-grid.row-2 { grid-template-columns: 1fr; }
            .arena-main-title { font-size: 42px; }
            .terminal-card { width: 100% !important; padding: 25px; }
            .arena-header-wrapper { margin-bottom: 50px; }
          }

          /* TARGETED 320PX MOBILE RESPONSIVENESS */
          @media (max-width: 320px) {
            .arena-main-title { font-size: 28px; }
            .terminal-card { padding: 15px; }
            .card-title { font-size: 16px; }
            .body-text-accent { font-size: 14px; }
            .user-handle { font-size: 12px; }
            .log-list-mono { font-size: 11px; }
            .terminal-table td, .terminal-table th { font-size: 10px; padding: 8px 4px; }
            .arena-grid { gap: 15px; }
            .mb-12, .mb-20 { margin-bottom: 30px !important; }
          }
        `}
      </style>
    </section>
  );
};

export default ArenaSection;