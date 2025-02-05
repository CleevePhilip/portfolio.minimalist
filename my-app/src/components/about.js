"use client";

import React, { useRef, useState, useEffect } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <ParallaxLayer
      offset={1}
      speed={0.2}
      className="flex items-center justify-center bg-[#8FBC8F] text-white px-[10%] z-10"
    >
      <motion.div
        ref={sectionRef}
        className="max-w-6xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
        transition={{ duration: 1.5, ease: "easeInOut" }} // Increased duration for smoother transition
      >
        <h2 className="text-3xl lg:text-5xl my-3 lg:mb-6 font-bold text-white lg:text-white md:text-white">
          About Me
        </h2>
        <div className="space-y-6 lg:text-xl leading-relaxed  text-sm md:text-xl">
          <p>
            Hi, I'm{" "}
            <span className="text-[#FFD700] font-semibold">Cleeve Wong</span>, a
            passionate
            <span className="font-semibold ">
              {" "}
              full-stack developer
            </span> with{" "}
            <span className="font-semibold">
              1.5 years of expertise in React
            </span>
            . I specialize in building high-performance applications using
            clean, maintainable code.
          </p>
          <p>
            My core stack includes{" "}
            <span className="text-[#61DAFB] font-semibold">React</span>,
            <span className="text-[#3178C6] font-semibold"> TypeScript</span>,
            <span className="text-[#F7DF1E] font-semibold"> JavaScript</span>,
            <span className="text-[#06B6D4] font-semibold"> Tailwind CSS</span>,
            <span className="text-[#F4A261] font-semibold"> Express.js</span>,
            and
            <span className="text-[#00758F] font-semibold"> MySQL</span>.
          </p>
        </div>

        {/* Education Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-[#FFD700]">
            🎓 Academic Background
          </h3>
          <p className="text-sm lg:text-xl leading-relaxed">
            I'm currently pursuing a{" "}
            <span className="text-[#FFD700] font-semibold">
              Bachelor of Science in Information Technology (BSIT)
            </span>
            . My academic journey has strengthened my problem-solving skills and
            deepened my understanding of system design.
          </p>
        </div>

        {/* Tech Stack Section */}
        <div className="lg:mt-12 md:mt-10">
          <h3 className="text-2xl font-semibold mb-6 text-[#FFD700] flex items-center gap-3">
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            >
              🚀
            </motion.span>
            Current Tech Arsenal
          </h3>
          <div className="flex flex-wrap gap-4">
            {[
              { name: "Tailwind CSS", icon: "🌿", color: "text-[#06B6D4]" },
              { name: "React", icon: "⚛️", color: "text-[#61DAFB]" },
              { name: "TypeScript", icon: "📘", color: "text-[#3178C6]" },
              { name: "Express.js", icon: "🚀", color: "text-[#F4A261]" },
              { name: "MySQL", icon: "🗃️", color: "text-[#00758F]" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border border-white ${tech.color} transition-all duration-300 hover:scale-105 hover:shadow-lg`}
              >
                <span className="text-xl">{tech.icon}</span>
                <span className="text-sm font-medium tracking-wide">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </ParallaxLayer>
  );
};

export default AboutSection;
