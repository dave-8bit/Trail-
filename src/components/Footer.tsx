import { Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import trailLogo from "../assets/trail-logo.jpg";

type FooterProps = {
  accent: string;
};

function Footer({ accent }: FooterProps) {
  const accentText = { color: accent };
  const accentBorder = { borderColor: accent };
  const accentBg = { backgroundColor: accent };

  return (
    // Set main footer background to your exact hex
    <footer className="bg-[#0b0b0b] border-t border-white/10 text-sm">
      <div className="px-6 md:px-24 pt-12 pb-8">
        <div className="grid gap-8 grid-cols-2 md:grid-cols-5 text-white">
          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold uppercase tracking-wider" style={accentText}>
              Company
            </h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">About TRAIL</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dubai Gaming License</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="mb-4 font-semibold uppercase tracking-wider" style={accentText}>
              PLATFORM
            </h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">How it works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">6 Auction Types</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Club System</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Puzzle Progression</a></li>
              <li><a href="#" className="hover:text-white transition-colors">XP &amp; PBT Economy</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 font-semibold uppercase tracking-wider" style={accentText}>
              RESOURCES
            </h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Amin.chat (AI Guide)</a></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="mb-4 font-semibold uppercase tracking-wider" style={accentText}>
              COMMUNITY
            </h3>
            <ul className="space-y-2 text-white/70 text-[13px]">
              <li><a href="https://t.me/OfficialTrail_By_Partbuy" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Telegram Channel</a></li>
              <li><a href="https://x.com/trailbypartbuy" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">X/Twitter</a></li>
              <li><a href="https://youtube.com/@trailbypartbuy" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">YouTube</a></li>
              <li><a href="https://www.instagram.com/trailbypartbuy" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="https://linkedin.com/company/trail-by-partbuy" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="mb-4 font-semibold uppercase tracking-wider" style={accentText}>
              NEWSLETTER
            </h3>
            <p className="mb-3 text-xs text-white/70">
              Get weekly tactical updates
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full rounded-md bg-transparent border px-3 py-2 text-xs text-white placeholder:text-white/20 focus:outline-none"
                style={accentBorder}
              />
              <button
                className="w-full rounded-md px-3 py-2 text-xs font-bold text-black uppercase hover:scale-[0.98] transition-transform"
                style={accentBg}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar - Also set to your exact background hex */}
      <div className="border-t border-white/10 bg-[#0b0b0b]">
        <div className="px-6 md:px-24 py-6 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-white/50">
          <div className="flex items-center gap-4">
            <img src={trailLogo} alt="Trail logo" className="h-6 grayscale opacity-80" />
            <span>Copyright © 2026 PartBuy. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://instagram.com/trailbypartbuy" target="_blank" rel="noreferrer">
              <Instagram size={18} style={accentText} />
            </a>
            <a href="https://x.com/trailbypartbuy" target="_blank" rel="noreferrer">
              <Twitter size={18} style={accentText} />
            </a>
            <a href="https://youtube.com/@trailbypartbuy" target="_blank" rel="noreferrer">
              <Youtube size={18} style={accentText} />
            </a>
            <div className="h-3 w-[1px] bg-white/20 hidden md:block" />
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;