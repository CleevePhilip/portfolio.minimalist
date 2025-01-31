"use client"; // Mark as a client component

import React, { useEffect, useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import HeroSection from "@/components/hero";
import FloatingParticles from "@/components/effects/floatingParticles";
import GradientOverlay from "@/components/effects/gradientOverlay";
import AbstractShape from "@/components/effects/abstractShape";
import AboutSection from "@/components/about";
import SkillSection from "@/components/skills";
import ExperienceSection from "@/components/experience";
import ProjectSection from "@/components/projects";
import ContactSection from "@/components/contact";
import EarthBackground from "@/components/effects/earthBackground";
import FloatingLeaves from "@/components/effects/floatingLeaves";

// Helper function to construct the URL for assets
const url = (name, wrap = false) =>
  `${wrap ? "url(" : ""}/images/${name}.svg${wrap ? ")" : ""}`;

export default function Home() {
  const parallax = useRef(null);
  const [cursorStyle, setCursorStyle] = useState("default");

  // Handle scroll changes
  const handleScroll = (offset) => {
    if (offset === 0) {
      setCursorStyle("pointer"); // Ch  ange cursor on the first section
    } else {
      setCursorStyle("default"); // Reset cursor on other sections
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "white", // Beige background
        cursor: cursorStyle, // Custom cursor
      }}
    >
      <Parallax
        ref={parallax}
        pages={6}
        onChange={handleScroll} // Listen for scroll changes
      >
        {/* Floating Particles */}
        <FloatingParticles />

        {/* Section 1: Hero Section */}

        <HeroSection />

        {/* Section 2: About Me */}
        <AboutSection />

        {/* Section 3: Skills */}
        <SkillSection />

        {/* Abstract Shapes */}
        <AbstractShape />

        {/* Section 4: Experience */}
        <ExperienceSection />

        {/* Section 5: Projects */}
        <ProjectSection />

        {/* Section 6: Contact */}
        <ContactSection />

        {/* Floating Leaves Top */}

        <ParallaxLayer offset={0.5} speed={0.5} className="opacity-20 z-0">
          {/* Top Right Leaf */}
          <img
            src={url("leaf")} // Points to /images/leaf.svg
            className="absolute top-[10%] right-[10%] w-[8%] transform rotate-[20deg]"
            alt="leaf"
          />
          {/* Top Left Leaf */}
          <img
            src={url("leaf")} // Points to /images/leaf.svg
            className="absolute top-[15%] left-[10%] w-[8%] transform -rotate-[15deg]"
            alt="leaf"
          />
        </ParallaxLayer>

        {/* Floating Leaves */}
        <FloatingLeaves />

        {/* Earth Background */}
        <EarthBackground />
      </Parallax>
    </div>
  );
}
