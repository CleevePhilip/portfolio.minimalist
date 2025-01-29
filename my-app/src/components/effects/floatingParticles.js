import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
const FloatingParticles = () => {
  return (
    <>
      {" "}
      <ParallaxLayer
        offset={0}
        speed={0.2}
        style={{ zIndex: 1, pointerEvents: "none" }}
      >
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              backgroundColor: "#8FBC8F", // Soft green for particles
              opacity: Math.random() * 0.8 + 0.2,
              animation: `float ${Math.random() * 5 + 3}s infinite ease-in-out`,
            }}
          />
        ))}

        {/* CSS for Floating Animation */}
        <style>
          {`
      @keyframes float {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-20px);
        }
      }
    `}
        </style>
      </ParallaxLayer>
    </>
  );
};

export default FloatingParticles;
