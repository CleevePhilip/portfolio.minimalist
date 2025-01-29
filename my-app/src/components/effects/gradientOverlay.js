import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
const GradientOverlay = () => {
  return (
    <>
      {" "}
      <ParallaxLayer
        offset={1}
        speed={0.1}
        style={{
          background: "linear-gradient(to bottom, #8FBC8F, #F5F5DC)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
    </>
  );
};

export default GradientOverlay;
