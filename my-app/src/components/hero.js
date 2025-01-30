import React from "react";
import { ParallaxLayer } from "@react-spring/parallax"; // Helper function to construct the URL for assets
const url = (name, wrap = false) =>
  `${wrap ? "url(" : ""}/images/${name}.svg${wrap ? ")" : ""}`;

const HeroSection = () => {
  return (
    <>
      {" "}
      <h1 className="text-[4rem] mb-4 font-bold drop-shadow-md opacity-0 animate-entrance delay-300 ">
        Explore My Portfolio
      </h1>
      <p className="text-[1.5rem] opacity-0 animate-entrance delay-500">
        Scroll down to explore my work, skills, and experience
      </p>
      <div className=" opacity-0 animate-entrance delay-700  flex justify-center items-center">
        <img
          src={url("leaf")}
          className="w-[10%]  mt-10 cursor-pointer animate-bounce-custom "
          alt="scroll down"
        />
      </div>
      {/* Smooth Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center ">
        <div className="w-5 h-10 rounded-lg border-2 border-forest-green relative">
          <div className="w-1 h-2.5 rounded-sm bg-forest-green absolute top-1 left-1/2 -translate-x-1/2 animate-scroll-custom " />
        </div>
        <p className="mt-2.5 text-sm text-forest-green  opacity-0 animate-entrance delay-900">
          Scroll Down
        </p>
      </div>
    </>
  );
};

export default HeroSection;
