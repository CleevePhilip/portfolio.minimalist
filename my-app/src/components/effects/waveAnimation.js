import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
const url = (name, wrap = false) =>
  `${wrap ? "url(" : ""}/images/${name}.svg${wrap ? ")" : ""}`;

const WaveAnimation = () => {
  return (
    <>
      {" "}
      <ParallaxLayer
        offset={2}
        speed={0.2}
        style={{ zIndex: 1, pointerEvents: "none" }}
      >
        <div
          style={{
            position: "absolute",

            bottom: 0,
            left: 0,
            width: "100%",
            color: "red",
            height: "100px",
            background: `url(${url("wave", true)}) repeat-x`,
            animation: "wave 10s linear infinite",
          }}
        />

        {/* CSS for Wave Animation */}
        <style>
          {`
        @keyframes wave {
          0% {
            background-position-x: 0;
          }
          100% {
            background-position-x: 1000px;
          }
        }
      `}
        </style>
      </ParallaxLayer>
    </>
  );
};

export default WaveAnimation;
