import React from "react";
import playbookBackground from "../assets/PlayBook.jpg";

const PlaybookSection: React.FC = () => {
  return (
    <section 
      className="relative mx-auto overflow-hidden playbook-container"
      style={{ 
        backgroundColor: "#B4FF2C" 
      }}
    >
      {/* THE IMAGE LAYER */}
      <img 
        src={playbookBackground} 
        alt="Tactical Playbook" 
        className="playbook-image"
        style={{
          display: "block",
          pointerEvents: "none",
          userSelect: "none",
          mixBlendMode: "multiply",
          opacity: "0.8",
          filter: "contrast(1.2) brightness(1.1)",
          objectFit: "cover"
        }}
      />

      {/* OVERLAY LAYER FOR NEXT STEPS */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* We will place Step 2 elements here */}
      </div>

      <style>
        {`
          /* Desktop Defaults */
          .playbook-container {
            width: 1453px;
            height: 1074px;
            max-width: 100%; /* Prevents overflow if screen is smaller than 1453px */
          }
          
          .playbook-image {
            width: 1453px;
            height: 1074px;
          }

          /* Tablet & Large Mobile (General Responsive) */
          @media (max-width: 1453px) {
            .playbook-container {
              width: 100%;
              height: auto;
              aspect-ratio: 1453 / 1074;
            }
            .playbook-image {
              width: 100%;
              height: auto;
            }
          }

          /* Specific 320px Mobile Fixes */
          @media (max-width: 320px) {
            .playbook-container {
              width: 100vw;
              height: auto;
              overflow: hidden;
            }
            .playbook-image {
              width: 100%;
              height: auto;
              object-fit: contain; /* Ensures the whole graphic is visible on tiny screens */
            }
          }
        `}
      </style>
    </section>
  );
};

export default PlaybookSection;