import React, { useRef, useState, useEffect } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";

const AboutSection = () => {
  const sectionRef = useRef(null); // Reference to the section
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to detect visibility of the section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <ParallaxLayer
      offset={1}
      speed={0.2}
      className="flex items-center justify-center bg-[#8FBC8F] text-white px-[10%] z-10"
    >
      <motion.div
        ref={sectionRef}
        className="max-w-6xl about"
        initial={{ opacity: 0, y: 30 }} // Initial state: invisible and slightly below
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 30, // Move up when visible
        }}
        transition={{ duration: 0.7 }} // Smooth transition
      >
        <h2 className="text-5xl mb-6 font-bold">About Me</h2>

        <div className="space-y-6">
          <p className="text-xl leading-relaxed delay-100">
            Hi, I'm Cleeve Wong, a passionate full-stack developer crafting
            modern web experiences. With{" "}
            <span className="highlight-text">1.5 years of React expertise</span>
            , I transform ideas into performant applications through clean,
            maintainable code.
          </p>

          <p className="text-xl leading-relaxed delay-200">
            My core stack includes <span className="highlight-text">React</span>{" "}
            and <span className="highlight-text">Next.js</span>, enhanced with
            modern tools. I'm constantly exploring new technologies while
            maintaining robust development practices.
          </p>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-12 delay-300">
          <h3 className="flex items-center gap-3 text-2xl font-semibold mb-6 text-[#FFFACD]">
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Current Tech Arsenal
          </h3>

          <div className="flex flex-wrap gap-4">
            {[
              {
                name: "Tailwind CSS",
                icon: "🌿",
                class: "border-emerald-200 text-emerald-100 bg-[#8FBC8F]/20",
              },
              {
                name: "React",
                icon: "⚛️",
                class: "border-sky-200 text-sky-100 bg-[#8FBC8F]/20",
              },
              {
                name: "TypeScript",
                icon: "📘",
                class: "border-blue-200 text-blue-100 bg-[#8FBC8F]/20",
              },
              {
                name: "Express.js",
                icon: "🚀",
                class: "border-amber-200 text-amber-100 bg-[#8FBC8F]/20",
              },
              {
                name: "MySQL",
                icon: "🗃️",
                class: "border-teal-200 text-teal-100 bg-[#8FBC8F]/20",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border 
      transition-all duration-300 hover:scale-105 hover:shadow-lg 
      motion-reduce:transition-none ${tech.class}`}
              >
                <span className="text-xl">{tech.icon}</span>
                <span className="text-sm font-medium tracking-wide">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </ParallaxLayer>
  );
};

export default AboutSection;
