import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
const AbstractShape = () => {
  return (
    <>
      {" "}
      <ParallaxLayer
        offset={1.5}
        speed={0.3}
        style={{ zIndex: 0, pointerEvents: "none" }}
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: "rgba(143, 188, 143, 0.3)", // Soft green with transparency
            transform: "rotate(45deg)",
            animation: "float 6s infinite ease-in-out",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "10%",
            width: "80px",
            height: "80px",
            backgroundColor: "rgba(143, 188, 143, 0.3)", // Soft green with transparency
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            animation: "float 8s infinite ease-in-out",
          }}
        />
      </ParallaxLayer>
    </>
  );
};

export default AbstractShape;
