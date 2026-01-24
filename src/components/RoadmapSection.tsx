import React from "react";
import Line30 from "../assets/Line 30.png";
import Phase1Img from "../assets/Phase 1.png";
import Phase2Text from "../assets/Phase2Text.png"; // Phase 2 left card
import Phase2Img from "../assets/Phase2.png";      // Phase 2 right image

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
      {/* Header */}
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

      {/* Start Here Button */}
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

      {/* LINE IMAGE */}
      <div
        style={{
          marginTop: 60,
          position: "relative", // allows absolute positioning of cards/images
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* Line image */}
        <img
          src={Line30}
          alt="Line 30"
          style={{
            width: "1710px",
            height: "3100px",
            objectFit: "contain",
          }}
        />

        {/* Phase 1 Text Card (Left) */}
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 180,
            width: 283,
            height: 61,
            padding: 10,
            borderRadius: 8,
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: accent,
            fontFamily: "'Blauer Neue', sans-serif",
            fontWeight: 600,
            fontSize: 14,
            textAlign: "center",
            opacity: 1,
          }}
        >
          PHASE 1 — IGNITION (NOW → Q1 2026)
        </div>

        {/* Phase 1 Image Card (Right) */}
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

        {/* Phase 2 Text Card (Left) */}
        <img
          src={Phase2Text}
          alt="Phase 2 Text"
          style={{
            position: "absolute",
            top: 400, // adjust vertical spacing from Phase 1
            left: 180,
            width: 283,
            height: 61,
            objectFit: "cover",
            borderRadius: 8,
          }}
        />

        {/* Phase 2 Image Card (Right) */}
        <img
          src={Phase2Img}
          alt="Phase 2"
          style={{
            position: "absolute",
            top: 400, // same vertical as left card
            right: 475,
            width: 427,
            height: 217.24,
            objectFit: "cover",
            borderRadius: 8,
          }}
        />
      </div>

      {/* Empty space for future content */}
      <div style={{ flex: 1, width: "100%" }} />
    </section>
  );
};

export default RoadmapSection;
