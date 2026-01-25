import React, { useState, useEffect } from "react";
import Line30 from "../assets/Line 30.png";

import Phase1Img from "../assets/Phase 1.png";
import Phase2Text from "../assets/Phase2Text.png";
import Phase2Img from "../assets/Phase2.png";
import Phase3Text from "../assets/phase3Text.png";
import Phase3Img from "../assets/phase 3.png";
import Phase4Text from "../assets/phase4Text.png";
import Phase4Img from "../assets/phase 4.png";
import Phase5Img from "../assets/phase 5.png";
import Phase5Text from "../assets/phase5Text.png";
import Phase5bImg from "../assets/phase 5b.png";
import Phase5bAltImg from "../assets/phase 5b (1).png";
import Phase5bAlt2Img from "../assets/phase 5b (2).png";
import Phase5bAlt3Img from "../assets/phase 5b (3).png";
import Phase5bAlt4Img from "../assets/phase 5b (4).png";
import Phase6Text from "../assets/phase6Text.png";
import Phase6Img from "../assets/phase 6.png";

const RoadmapSection: React.FC = () => {
  const accent = "#B4FF2C";
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile vs desktop
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ==========================================
  // MOBILE RENDER (320px - 768px)
  // ==========================================
  if (isMobile) {
    return (
      <section style={{ width: "100%", backgroundColor: "#0b0b0b", padding: "40px 16px", boxSizing: "border-box", color: "#fff" }}>
        <h2 style={{ fontFamily: "'Blauer Neue', sans-serif", fontSize: "42px", fontWeight: 600, lineHeight: 1.1, textAlign: "center", marginBottom: 20 }}>
          The <span style={{ color: accent }}>Roadmap</span>
        </h2>
        
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
          <button style={{ backgroundColor: accent, color: "#000", fontSize: 13, padding: "10px 24px", fontWeight: 700, borderRadius: 3, textTransform: "uppercase", border: "none" }}>
            Start here
          </button>
        </div>

        {/* Vertical Phase Stack */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px", alignItems: "center" }}>
          
          {/* Phase 1 */}
          <div style={{ width: "100%", border: `1px solid ${accent}`, padding: "12px", borderRadius: 8, textAlign: "center", color: accent, fontSize: 12, fontWeight: 600 }}>
            PHASE 1 — IGNITION (NOW → Q1 2026)
          </div>
          <img src={Phase1Img} style={{ width: "100%", borderRadius: 8 }} alt="P1" />

          {/* Phase 2 */}
          <img src={Phase2Text} style={{ width: "80%" }} alt="P2T" />
          <img src={Phase2Img} style={{ width: "100%", borderRadius: 8 }} alt="P2I" />

          {/* Phase 3 */}
          <img src={Phase3Text} style={{ width: "80%" }} alt="P3T" />
          <img src={Phase3Img} style={{ width: "100%", borderRadius: 8 }} alt="P3I" />

          {/* Phase 4 */}
          <img src={Phase4Text} style={{ width: "80%" }} alt="P4T" />
          <img src={Phase4Img} style={{ width: "100%", borderRadius: 8 }} alt="P4I" />

          {/* Phase 5 */}
          <img src={Phase5Text} style={{ width: "80%" }} alt="P5T" />
          <img src={Phase5Img} style={{ width: "100%", borderRadius: 8 }} alt="P5I" />

          {/* Phase 6 */}
          <img src={Phase6Text} style={{ width: "80%" }} alt="P6T" />
          <img src={Phase6Img} style={{ width: "100%", borderRadius: 8 }} alt="P6I" />

          <button style={{ width: "100%", padding: "15px", backgroundColor: "#A8E04F", color: "#000", fontFamily: "'CS Liona Mono', monospace", fontSize: 18, border: "none", borderRadius: 4, fontWeight: "bold" }}>
            The Future continues here
          </button>
        </div>

        {/* CTA Section */}
        <div style={{ marginTop: 60, padding: "30px 20px", backgroundColor: "#111", borderRadius: 12, textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Blauer Neue', sans-serif", fontSize: 26, marginBottom: 15 }}>This is only the beginning.</h2>
          <p style={{ color: "#B2B2B2", fontSize: 14, marginBottom: 25 }}>Join the next phase of TRAIL.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <button style={{ width: "100%", padding: "12px", borderRadius: 8, backgroundColor: accent, color: "#000", border: "none", fontWeight: 700 }}>Begin Your Run</button>
            <button style={{ width: "100%", padding: "12px", borderRadius: 8, backgroundColor: "transparent", border: `1px solid ${accent}`, color: "#fff", fontWeight: 700 }}>Become a Creator</button>
          </div>
        </div>
      </section>
    );
  }

  // ==========================================
  // DESKTOP RENDER (STRICTLY UNTOUCHED)
  // ==========================================
  return (
    <section
      style={{
        width: "1455px",
        minHeight: "3600px",
        backgroundColor: "#0b0b0b",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 20,
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* HEADER */}
      <h2
        style={{
          fontFamily: "'Blauer Neue', sans-serif",
          fontSize: 110,
          fontWeight: 600,
          lineHeight: 1,
          marginBottom: 40,
        }}
      >
        <span style={{ color: "#fff" }}>The </span>
        <span style={{ color: accent }}>Roadmap</span>
      </h2>

      {/* START HERE BUTTON */}
      <button
        style={{
          backgroundColor: accent,
          color: "#000",
          fontSize: 13,
          padding: "8px 22px",
          fontWeight: 700,
          borderRadius: 3,
          textTransform: "uppercase",
          letterSpacing: 0.7,
          cursor: "pointer",
        }}
      >
        Start here
      </button>

      {/* LINE + PHASE CONTENT */}
      <div
        style={{
          marginTop: 60,
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* LINE */}
        <img
          src={Line30}
          alt="Roadmap Line"
          style={{
            width: "1710px",
            height: "3100px",
            objectFit: "contain",
          }}
        />

        {/* ===== PHASE 1 ===== */}
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 180,
            width: 283,
            height: 61,
            padding: 10,
            borderRadius: 8,
            backgroundColor: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: accent,
            fontFamily: "'Blauer Neue', sans-serif",
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          PHASE 1 — IGNITION (NOW → Q1 2026)
        </div>

        <img
          src={Phase1Img}
          alt="Phase 1"
          style={{
            position: "absolute",
            top: 10,
            right: 560,
            width: 345,
            height: 217,
            objectFit: "cover",
            borderRadius: 8,
          }}
        />

        {/* ===== PHASE 2 ===== */}
        <img
          src={Phase2Text}
          alt="Phase 2 Text"
          style={{
            position: "absolute",
            top: 320,
            left: 180,
            width: 283,
            height: 61,
            objectFit: "cover",
            borderRadius: 8,
          }}
        />

        <img
          src={Phase2Img}
          alt="Phase 2"
          style={{
            position: "absolute",
            top: 320,
            right: 475,
            width: 427,
            height: 217.24,
            objectFit: "cover",
            borderRadius: 8,
          }}
        />

        {/* ===== PHASE 3 ===== */}
        <img
          src={Phase3Text}
          alt="Phase 3 Text"
          style={{
            position: "absolute",
            top: 640,
            left: 180,
            width: 316,
            height: 61,
            objectFit: "cover",
            borderRadius: 8,
          }}
        />

        <img
          src={Phase3Img}
          alt="Phase 3"
          style={{
            position: "absolute",
            top: 640,
            right: 475,
            width: 427,
            height: 262.42,
            objectFit: "cover",
            borderRadius: 8,
          }}
        />

        {/* ===== PHASE 4 ===== */}
        <img
          src={Phase4Text}
          alt="Phase 4 Text"
          style={{
            position: "absolute",
            top: 1000,
            left: 180,
            width: 283,
            height: 61,
            objectFit: "cover",
            borderRadius: 8,
          }}
        />

        <img
          src={Phase4Img}
          alt="Phase 4"
          style={{
            position: "absolute",
            top: 1000,
            right: 475,
            width: 427,
            height: 242.42,
            objectFit: "cover",
            borderRadius: 8,
          }}
        />

        {/* ===== PHASE 5 ===== */}
        <img
          src={Phase5Img}
          alt="Phase 5"
          style={{
            position: "absolute",
            top: 1340,
            left: 35,
            width: 427,
            height: 217.24,
            objectFit: "cover",
            borderRadius: 8,
          }}
        />

        <img
          src={Phase5Text}
          alt="Phase 5 Text"
          style={{
            position: "absolute",
            top: 1340,
            right: 620,
            width: 283,
            height: 61,
            objectFit: "cover",
            borderRadius: 8,
          }}
        />

        {/* ===== PHASE 5B Gallery ===== */}
        <img src={Phase5bImg} style={{ position: "absolute", top: 1480, right: -10, width: 427, height: 193.35, objectFit: "cover", borderRadius: 8 }} alt="5b1" />
        <img src={Phase5bAltImg} style={{ position: "absolute", top: 1705, right: -10, width: 427, height: 213.35, objectFit: "cover", borderRadius: 8 }} alt="5b2" />
        <img src={Phase5bAlt2Img} style={{ position: "absolute", top: 1945, right: -10, width: 427, height: 127.18, objectFit: "cover", borderRadius: 8 }} alt="5b3" />
        <img src={Phase5bAlt3Img} style={{ position: "absolute", top: 2100, right: -10, width: 427, height: 193.35, objectFit: "cover", borderRadius: 8 }} alt="5b4" />
        <img src={Phase5bAlt4Img} style={{ position: "absolute", top: 2325, right: -10, width: 427, height: 107.18, objectFit: "cover", borderRadius: 8 }} alt="5b5" />

        {/* ===== PHASE 6 ===== */}
        <img src={Phase6Text} style={{ position: "absolute", top: 2592, left: 170, width: 283, height: 61, objectFit: "cover", borderRadius: 8 }} alt="P6T" />
        <img src={Phase6Img} style={{ position: "absolute", top: 2592, right: 455, width: 427, height: 221.71, objectFit: "cover", borderRadius: 8 }} alt="P6I" />

        {/* ===== FUTURE BUTTON ===== */}
        <button
          style={{ position: "absolute", top: 3110, left: 270, width: 362, height: 37, backgroundColor: "#A8E04F", color: "#000000", fontFamily: "'CS Liona Mono', monospace", fontSize: 24, lineHeight: "37px", border: "none", borderRadius: 4, cursor: "pointer", textAlign: "center", transition: "all 0.2s ease-in-out" }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          The Future continues here
        </button>
      </div>

      {/* ==== BEGINNING SECTION CTA ==== */}
      <div style={{ position: "absolute", top: 3150, left: 690, width: 590, height: 265, backgroundColor: "#0B0B0B", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", borderRadius: 12, padding: 16, boxSizing: "border-box" }}>
        <h2 style={{ fontFamily: "'Blauer Neue', sans-serif", fontWeight: 700, fontSize: 34, color: "#fff", marginBottom: 12 }}>This is only the beginning.</h2>
        <p style={{ fontFamily: "'CS Liona Mono', monospace", fontSize: 12, color: "#B2B2B2", marginBottom: 20 }}>Join the next phase of TRAIL.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button style={{ padding: "10px 24px", borderRadius: 8, fontWeight: 700, fontFamily: "'CS Liona Mono', monospace", fontSize: 16, backgroundColor: "#B4FF2C", color: "#000", border: "none" }}>Begin Your Run</button>
          <button style={{ padding: "10px 24px", borderRadius: 8, fontWeight: 700, fontFamily: "'CS Liona Mono', monospace", fontSize: 16, backgroundColor: "transparent", border: "1px solid #B4FF2C", color: "#fff" }}>Become a Creator</button>
        </div>
      </div>

      <div style={{ flex: 1, width: "100%" }} />
    </section>
  );
};

export default RoadmapSection;