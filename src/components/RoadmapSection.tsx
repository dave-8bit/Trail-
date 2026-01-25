import React from "react";
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
        position: "relative", // so absolute children are relative to this container
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

        {/* ===== PHASE 5B (RIGHT ONLY) ===== */}
        {[Phase5bImg, Phase5bAltImg, Phase5bAlt2Img, Phase5bAlt3Img, Phase5bAlt4Img].map(
          (imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Phase 5b Variant ${index + 1}`}
              style={{
                position: "absolute",
                top:
                  1480 +
                  index * (index === 4 ? 107.18 : index === 2 ? 127.18 : index === 1 ? 213.35 : 193.35),
                right: -10,
                width: 427,
                height:
                  index === 4
                    ? 107.18
                    : index === 2
                    ? 127.18
                    : index === 1
                    ? 213.35
                    : 193.35,
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
          )
        )}

        {/* ===== PHASE 6 ===== */}
        <img
          src={Phase6Text}
          alt="Phase 6 Text"
          style={{
            position: "absolute",
            top: 2592,
            left: 170,
            width: 283,
            height: 61,
            objectFit: "cover",
            borderRadius: 8,
          }}
        />

        <img
          src={Phase6Img}
          alt="Phase 6"
          style={{
            position: "absolute",
            top: 2592,
            right: 455,
            width: 427,
            height: 221.71,
            objectFit: "cover",
            borderRadius: 8,
          }}
        />

        {/* ===== FUTURE BUTTON ===== */}
        <button
          style={{
            position: "absolute",
            top: 3110, // leave room for nudging
            left: 270, // adjustable later
            width: 362,
            height: 37,
            backgroundColor: "#A8E04F",
            color: "#000000",
            fontFamily: "'CS Liona Mono', monospace",
            fontSize: 24,
            lineHeight: "37px", // vertical centering
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
            textAlign: "center",
            transition: "all 0.2s ease-in-out",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          The Future continues here
        </button>
      </div>
{/* ==== BEGINNING SECTION CTA ==== */}
<div
  style={{
    position: "absolute", // so you can nudge with top & left
    top: 3150,           // adjustable later
    left: 690,           // adjustable later
    width: 590,
    height: 265,
    backgroundColor: "#0B0B0B",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 12,    // optional, smooth edges
    padding: 16,         // internal padding
    boxSizing: "border-box",
  }}
>
  <h2
    style={{
      fontFamily: "'Blauer Neue', sans-serif",
      fontWeight: 700,
      fontSize: 28,
      color: "#fff",
      marginBottom: 12,
    }}
  >
    This is only the beginning.
  </h2>
  <p
    style={{
      fontFamily: "'CS Liona Mono', monospace",
      fontSize: 14,
      color: "#B2B2B2",
      marginBottom: 20,
    }}
  >
    Join the next phase of TRAIL.
  </p>

  <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
    <button
      style={{
        padding: "10px 24px",
        borderRadius: 8,
        fontWeight: 700,
        fontFamily: "'CS Liona Mono', monospace",
        fontSize: 16,
        backgroundColor: "#B4FF2C",
        color: "#000",
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      Begin Your Run
    </button>
    <button
      style={{
        padding: "10px 24px",
        borderRadius: 8,
        fontWeight: 700,
        fontFamily: "'CS Liona Mono', monospace",
        fontSize: 16,
        backgroundColor: "transparent",
        border: "1px solid #B4FF2C",
        color: "#fff",
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      Become a Creator
    </button>
  </div>
</div>


      {/* PRESERVED EMPTY SPACE */}
      <div style={{ flex: 1, width: "100%" }} />
    </section>
  );
};

export default RoadmapSection;
