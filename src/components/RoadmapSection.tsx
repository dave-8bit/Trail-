import React from "react";
import Line30 from "../assets/Line 30.png";

import Phase1Img from "../assets/Phase 1.png";

import Phase2Text from "../assets/Phase2Text.png";
import Phase2Img from "../assets/Phase2.png";

import Phase3Text from "../assets/phase3Text.png";
import Phase3Img from "../assets/phase 3.png";

import Phase4Text from "../assets/phase4Text.png";
import Phase4Img from "../assets/phase 4.png";

import Phase5Img from "../assets/phase 5.png";       // LEFT image
import Phase5Text from "../assets/phase5Text.png";  // RIGHT text

import Phase5bImg from "../assets/phase 5b.png"; // RIGHT-only image
import Phase5bAltImg from "../assets/phase 5b (1).png";
import Phase5bAlt2Img from "../assets/phase 5b (2).png";



const RoadmapSection: React.FC = () => {
  const accent = "#B4FF2C";

  return (
    <section
      style={{
        width: "1455px",
        height: "3549px",
        backgroundColor: "#0b0b0b",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 20,
        boxSizing: "border-box",
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
    top: 1340,       // ⬅ same horizontal line
    left: 35,       // ⬅ LEFT side image
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
    top: 1340,       // ⬅ SAME top value
    right: 620,      // ⬅ RIGHT side text
    width: 283,
    height: 61,
    objectFit: "cover",
    borderRadius: 8,
  }}
/>

{/* ===== PHASE 5B (RIGHT ONLY) ===== */}
<img
  src={Phase5bImg}
  alt="Phase 5b"
  style={{
    position: "absolute",
    top: 1480,        // ⬅ slightly below Phase 5
    right: -10,       // ⬅ same right alignment rhythm
    width: 427,
    height: 193.35,
    objectFit: "cover",
    borderRadius: 8,
  }}
/>

<img
  src={Phase5bAltImg}
  alt="Phase 5b Variant"
  style={{
    position: "absolute",
    top: 1700,          // ✅ SAME vertical distance
    right: -10,         // ⬅ shifted left so they sit side-by-side
    width: 427,
    height: 213.35,
    objectFit: "cover",
    borderRadius: 8,
  }}
/>

<img
  src={Phase5bAlt2Img}
  alt="Phase 5b Variant 2"
  style={{
    position: "absolute",
    top: 1920,        // ⬅ continues vertical flow cleanly
    right: -10,       // ⬅ same right alignment
    width: 427,
    height: 127.18,
    objectFit: "cover",
    borderRadius: 8,
  }}
/>
      </div>

      {/* PRESERVED EMPTY SPACE */}
      <div style={{ flex: 1, width: "100%" }} />
    </section>
  );
};

export default RoadmapSection;
