import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
const url = (name, wrap = false) =>
  `${wrap ? "url(" : ""}/images/${name}.svg${wrap ? ")" : ""}`;

const EarthBackground = () => {
  return (
    <>
      {" "}
      <ParallaxLayer
        offset={3.5}
        speed={-0.1} // Slower speed for subtle movement
        className="flex items-end justify-center pointer-events-none opacity-30 z-10"
      >
        <img
          src={url("earth")} // Points to /images/earth.svg
          className="w-[80%] mb-0"
          alt="earth"
        />
      </ParallaxLayer>
    </>
  );
};

export default EarthBackground;
