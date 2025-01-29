import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
const url = (name, wrap = false) =>
  `${wrap ? "url(" : ""}/images/${name}.svg${wrap ? ")" : ""}`;

const FloatingLeaves = () => {
  return (
    <>
      <ParallaxLayer offset={1.5} speed={0.3} className="opacity-30 z-0">
        {/* Bottom Right Leaf */}
        <img
          src={url("leaf")} // Points to /images/leaf.svg
          className="absolute bottom-[10%] right-[15%] w-[8%] transform -rotate-[10deg]"
          alt="leaf"
        />
        {/* Bottom Left Leaf */}
        <img
          src={url("leaf")} // Points to /images/leaf.svg
          className="absolute bottom-[15%] left-[15%] w-[8%] transform rotate-[15deg]"
          alt="leaf"
        />
      </ParallaxLayer>
    </>
  );
};

export default FloatingLeaves;
