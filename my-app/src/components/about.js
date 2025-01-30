import React, { useRef, useState, useEffect } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

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
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-5xl mb-6 font-bold">About Me</h2>

        <div className="space-y-6">
          <p className="text-xl leading-relaxed">
            Hi, I'm{" "}
            <span className="text-[#FFFACD] font-semibold">Cleeve Wong</span>, a
            dedicated{" "}
            <span className="highlight-text">full-stack developer</span> with a
            passion for crafting seamless digital experiences. With over
            <span className="highlight-text">
              {" "}
              1.5 years of expertise in React
            </span>
            , I transform ideas into intuitive, high-performance applications
            using clean and maintainable code.
          </p>

          <p className="text-xl leading-relaxed">
            My core stack revolves around
            <span className="text-[#61DAFB] font-semibold"> React</span> and
            <span className="text-[#3178C6] font-semibold"> TypeScript</span>,
            combined with{" "}
            <span className="text-[#F7DF1E] font-semibold">JavaScript</span> and
            <span className="text-[#06B6D4] font-semibold">
              {" "}
              Tailwind CSS
            </span>{" "}
            to build responsive and modern applications. On the backend, I work
            with
            <span className="text-[#F4A261] font-semibold">
              {" "}
              Express.js
            </span>{" "}
            and
            <span className="text-[#00758F] font-semibold"> MySQL</span> to
            create scalable, efficient systems.
          </p>
        </div>

        {/* Education Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-[#FFFACD]">
            🎓 Academic Background
          </h3>
          <p className="text-xl leading-relaxed">
            I'm currently pursuing a{" "}
            <span className="text-[#FFD700] font-semibold">
              Bachelor of Science in Information Technology (BSIT)
            </span>
            . My academic journey has equipped me with strong problem-solving
            skills, a deep understanding of system design, and hands-on
            experience in real-world development scenarios.
          </p>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-12">
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
              { name: "Tailwind CSS", icon: "🌿", class: "text-[#06B6D4]" },
              { name: "React", icon: "⚛️", class: "text-[#61DAFB]" },
              { name: "TypeScript", icon: "📘", class: "text-[#3178C6]" },
              { name: "Express.js", icon: "🚀", class: "text-[#F4A261]" },
              { name: "MySQL", icon: "🗃️", class: "text-[#00758F]" },
            ].map((tech, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border border-white 
      transition-all duration-300 hover:scale-105 hover:shadow-lg ${tech.class}`}
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
