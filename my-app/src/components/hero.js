"use client";

import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <ParallaxLayer
      offset={0}
      speed={0.2}
      className="relative flex flex-col items-center justify-center text-center min-h-screen overflow-hidden bg-black"
    >
      {/* Background Energy Waves */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute w-full h-full opacity-30 animate-pulse"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#4ADE80"
            d="M43.3,-50C58.7,-37.2,75.8,-25.1,81.4,-7.7C87.1,9.6,81.3,32.4,66,47.1C50.7,61.9,25.9,68.7,2,67.4C-21.8,66.1,-43.6,56.8,-54.6,41.1C-65.6,25.4,-65.8,3.3,-59.7,-14.9C-53.5,-33.2,-41.1,-47.7,-26.4,-60.4C-11.6,-73.1,5.5,-84.1,18.3,-80.1C31.1,-76.2,39.6,-57.3,43.3,-50Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Glowing Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl lg:text-[5rem] font-extrabold text-green-400 drop-shadow-glow tracking-wider animate-neon-pulse"
      >
        Welcome to the Future
      </motion.h1>

      {/* Futuristic Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="text-[1.8rem] text-gray-300 mt-4 max-w-3xl"
      >
        Explore a world of innovation, technology, and endless possibilities.
      </motion.p>

      {/* Floating Particles with Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-green-400 rounded-full opacity-50 shadow-lg animate-particle"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: 0.5,
            }}
            animate={{ y: ["0%", "-15%", "0%"], scale: [0.8, 1.2, 0.8] }}
            transition={{ repeat: Infinity, duration: Math.random() * 3 + 2 }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Interactive Light Trail Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[80vw] h-[80vh] bg-green-400 opacity-10 blur-3xl animate-trail"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
      </div>

      {/* Glassmorphism Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-10 flex flex-col items-center backdrop-blur-md bg-white/10 p-4 rounded-xl shadow-xl"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-10 h-10 border-4 border-green-400 rounded-full flex items-center justify-center relative shadow-lg"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            className="w-3 h-3 bg-green-400 rounded-full"
          />
        </motion.div>
        <p className="mt-2 text-lg text-green-400 font-semibold">Scroll Down</p>
      </motion.div>
    </ParallaxLayer>
  );
};

export default HeroSection;
