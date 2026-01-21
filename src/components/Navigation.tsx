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

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <header className="px-6 md:px-10 py-4 border-b border-white/10 relative z-50 bg-[#0b0b0b]">
      <div className="flex items-center justify-between relative z-50 max-w-[1400px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" onClick={closeMenu}>
            <img src={trailLogo} alt="Trail logo" className="h-7 rounded" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-white opacity-70 transition-all duration-300 font-mono hover:opacity-100 hover:text-[#B4FF2C]"
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
            <button className="inline-flex items-center gap-1.5 py-2 text-white opacity-70 transition-all duration-300 hover:opacity-100 hover:text-[#B4FF2C]">
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

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-4 text-[13px] font-bold">
          <Link
            to="/talk-to-amin"
            className="text-white opacity-70 transition-all px-1 font-mono hover:opacity-100 hover:text-[#B4FF2C]"
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

        {/* Mobile Hamburger Icon */}
        <button className="md:hidden p-2 text-white z-[60]" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 w-full h-screen bg-[#0b0b0b] p-6 flex flex-col z-[55] pt-24 animate-in fade-in duration-300">
          {/* Main Links */}
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                to={link.to} 
                onClick={closeMenu} 
                className="text-white/90 text-3xl font-mono font-bold"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="h-[1px] bg-white/10 my-8" />

          {/* Personas Section */}
          <div className="flex flex-col gap-5">
            <p className="text-white/30 font-mono text-[10px] uppercase tracking-[0.2em]">Personas</p>
            {personas.map((persona) => (
              <Link 
                key={persona.label} 
                to={persona.to} 
                onClick={closeMenu} 
                className="flex items-center gap-4 text-white/70 font-mono"
              >
                <div className="p-2 bg-white/5 rounded-lg">{persona.icon}</div>
                <span className="text-lg">{persona.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile CTA Buttons */}
          <div className="mt-auto flex flex-col gap-4 pb-8">
            <Link
              to="/talk-to-amin"
              onClick={closeMenu}
              className="w-full py-4 rounded-md border border-white/20 text-white font-mono text-center font-bold text-lg active:bg-white/10 transition-colors"
            >
              Talk to Amin
            </Link>
            <Link
              to="/book-pilot"
              onClick={closeMenu}
              className="w-full py-4 rounded-md text-black font-mono text-center font-bold text-lg"
              style={{ 
                backgroundColor: accent, 
                boxShadow: `0 0 25px ${accent}50` 
              }}
            >
              Book a Pilot
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;