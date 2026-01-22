import React, { useState } from "react";
import partnersImg from "../assets/Patners.png";
import creatorsImg from "../assets/Creators.png";
import clubWarsImg from "../assets/ClubWars.png";

type TabType = "Partners" | "Creators" | "Club Wars";

const InfluenceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("Partners");
  const accent = "#B4FF2C";

  const tabAssets: Record<TabType, string> = {
    Partners: partnersImg,
    Creators: creatorsImg,
    "Club Wars": clubWarsImg,
  };

  return (
    <section className="influence-container">
      {/* 1. HEADERS */}
      <div className="header-stack relative z-10">
        <h2 className="influence-header">
          INFLUENCE OF <span style={{ color: accent }}>TRAIL</span>
        </h2>
        <p className="influence-subtitle">
          The creators, partners, and clubs shaping the simulation.
        </p>
      </div>

      {/* 2. TABS */}
      <div className="tab-wrapper relative z-10">
        {(["Partners", "Creators", "Club Wars"] as TabType[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="tab-button"
            style={{
              backgroundColor: activeTab === tab ? accent : "transparent",
              color: activeTab === tab ? "#000" : "#fff",
              borderColor:
                activeTab === tab ? accent : "rgba(255,255,255,0.15)",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 3. ASSET DISPLAY AREA */}
      <div className="asset-display-area relative z-10">
        <img
          key={activeTab}
          src={tabAssets[activeTab]}
          alt={activeTab}
          className="active-asset-image animate-fade-in"
        />
      </div>

      <style>
        {`
          .influence-container {
            width: 1455px; 
            height: 995px;
            min-width: 1455px;
            min-height: 995px;
            background-color: #0b0b0b;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 auto;
            box-sizing: border-box;
          }

          .header-stack {
            margin-top: 100px;
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 16px;
            width: 100%;
          }

          .influence-header {
            font-family: 'Blauer Neue', sans-serif;
            font-size: 64px;
            font-weight: 600;
            color: #FFFFFF;
            text-transform: uppercase;
            letter-spacing: -0.02em;
            margin: 0;
          }

          .influence-subtitle {
            font-family: 'Blauer Neue', sans-serif;
            font-size: 24px;
            font-weight: 300;
            color: rgba(255, 255, 255, 0.8);
            margin: 0;
          }

          .tab-wrapper {
            margin-top: 48px;
            display: flex;
            gap: 12px;
            justify-content: center;
          }

          .tab-button {
            padding: 12px 36px;
            border-radius: 4px; 
            font-family: 'Blauer Neue', sans-serif;
            font-size: 14px;
            font-weight: 600; 
            text-transform: uppercase;
            letter-spacing: 0.1em;
            border: 1px solid;
            cursor: pointer;
            transition: all 0.2s ease;
            white-space: nowrap;
          }

          .asset-display-area {
            flex-grow: 1;
            width: 100%;
            max-width: 1200px;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding: 60px 20px 0 20px;
            box-sizing: border-box;
          }

          .active-asset-image {
            max-width: 100%;
            height: auto;
            object-fit: contain;
            display: block;
          }

          .animate-fade-in {
            animation: fadeIn 0.4s ease-out forwards;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          /* RESPONSIVE OVERRIDES */
          @media (max-width: 1455px) {
            .influence-container {
              width: 100%;
              min-width: 100%;
              height: auto;
              min-height: auto;
              padding: 60px 0 0 0;
              margin-bottom: -15px;
            }
          }

          @media (max-width: 320px) {
            .influence-container {
              margin-bottom: -20px;
              padding-bottom: 0;
            }

            .header-stack {
              margin-top: 32px;
              gap: 12px;
            }

            .influence-header {
              font-size: 28px;
            }

            .influence-subtitle {
              font-size: 14px;
              padding: 0 16px;
            }

            .tab-wrapper {
              margin-top: 20px;
              overflow-x: auto;
              width: 100%;
              padding: 0 16px;
              justify-content: flex-start;
              scrollbar-width: none;
            }

            .tab-wrapper::-webkit-scrollbar {
              display: none;
            }

            .tab-button {
              padding: 8px 14px;
              font-size: 10px;
            }

            .asset-display-area {
              padding-top: 16px;
              padding-bottom: 0;
            }
          }
        `}
      </style>
    </section>
  );
};

export default InfluenceSection;
