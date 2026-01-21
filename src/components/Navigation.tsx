import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Trophy, Rocket, Building2 } from "lucide-react";

import trailLogo from "../assets/trail-logo.jpg";

const Navigation: React.FC = () => {
  const [personasOpen, setPersonasOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/how-it-works", label: "How It Works" },
    { to: "/pricing", label: "Pricing" },
  ];

  const accent = "#B4FF2C";

  const personas = [
    {
      label: "For Players",
      to: "/personas/players",
      description: "Compete & climb the leaderboard",
      icon: <Trophy size={14} color={accent} />,
    },
    {
      label: "For Creators",
      to: "/personas/creators",
      description: "Launch Wars & earn revenue",
      icon: <Rocket size={14} color={accent} />,
    },
    {
      label: "For Enterprise",
      to: "/personas/enterprise",
      description: "Sponsor & train your team",
      icon: <Building2 size={14} color={accent} />,
    },
  ];

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <header className="px-6 md:px-10 py-4 border-b border-white/10 relative z-50 bg-[#0b0b0b]">
      <div className="flex items-center justify-between relative z-50">
        <div className="flex items-center gap-2">
          <img src={trailLogo} alt="Trail logo" className="h-7 rounded" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-semibold relative z-50">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="group relative py-1 text-white opacity-70 transition-all duration-300 font-mono hover:opacity-100"
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = `drop-shadow(0 0 10px ${accent})`;
                e.currentTarget.style.color = accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "none";
                e.currentTarget.style.color = "white";
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* Personas Dropdown */}
          <div
            className="relative font-mono"
            onMouseEnter={() => setPersonasOpen(true)}
            onMouseLeave={() => setPersonasOpen(false)}
          >
            <button
              className="inline-flex items-center gap-1.5 py-2 text-white outline-none cursor-default opacity-70 transition-all duration-300 font-mono"
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = `drop-shadow(0 0 10px ${accent})`;
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.color = accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "none";
                e.currentTarget.style.opacity = "0.7";
                e.currentTarget.style.color = "white";
              }}
            >
              <span>Personas</span>
              <span
                className="text-[9px] transition-transform duration-300"
                style={{ transform: personasOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                ▼
              </span>
            </button>

            {personasOpen && (
              <div className="absolute left-0 pt-2 w-64 z-50">
                <div className="rounded-xl bg-zinc-950 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden backdrop-blur-xl">
                  {personas.map((persona) => (
                    <Link
                      key={persona.label}
                      to={persona.to}
                      className="group block w-full px-5 py-4 text-left transition-all duration-200 relative border-b border-white/[0.03] last:border-0 font-mono"
                    >
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-200 z-10"
                        style={{
                          backgroundColor: accent,
                          boxShadow: `inset 0 0 20px rgba(255,255,255,0.4), 0 0 35px ${accent}`,
                        }}
                      />
                      <div className="relative z-20 flex flex-col">
                        <div className="flex items-center gap-3 font-bold text-[13px]">
                          {persona.icon}
                          <span className="text-white group-hover:text-black transition-all uppercase tracking-tighter">
                            {persona.label}
                          </span>
                        </div>
                        <div className="text-[10px] text-white/40 group-hover:text-black/60 mt-1 leading-tight pl-[26px] font-medium">
                          {persona.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4 text-[13px] font-bold">
          <Link
            to="/talk-to-amin"
            className="text-white opacity-70 transition-all px-1 font-mono hover:opacity-100"
          >
            Talk to Amin
          </Link>
          <Link
            to="/book-pilot"
            className="px-4 py-1.5 rounded-md text-black transition-all hover:scale-[1.05] active:scale-95 shadow-lg font-mono"
            style={{ backgroundColor: accent, boxShadow: `0 0 15px ${accent}66` }}
          >
            Book a Pilot
          </Link>
        </div>

        <button className="md:hidden p-2 text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-[#0b0b0b] p-6 flex flex-col gap-6 z-40 pt-24">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to} onClick={closeMenu} className="text-white/80 text-2xl font-mono">
              {link.label}
            </Link>
          ))}
          <div className="h-[1px] bg-white/10 my-2" />
          {personas.map((persona) => (
            <Link key={persona.label} to={persona.to} onClick={closeMenu} className="flex items-center gap-4 text-white/80 font-mono">
              {persona.icon}
              <span className="text-lg">{persona.label}</span>
            </Link>
          ))}
          <Link
            to="/book-pilot"
            onClick={closeMenu}
            className="mt-auto px-4 py-4 rounded-md text-black font-mono text-center font-bold text-lg"
            style={{ backgroundColor: accent }}
          >
            Book a Pilot
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navigation;