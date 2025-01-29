import React, { useRef, useState, useEffect } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion"; // Import motion from framer-motion

const url = (name, wrap = false) =>
  `${wrap ? "url(" : ""}/images/${name}.svg${wrap ? ")" : ""}`;

const SkillSection = () => {
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

  // Parent animation settings for the whole section
  const sectionAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: isVisible ? 1 : 0,
      y: isVisible ? 0 : 50,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Child animation settings for skills
  const skillAnimation = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
  };

  return (
    <ParallaxLayer
      offset={2}
      speed={0.3}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F5F5DC", // Beige background
        color: "#556B2F", // Forest green text
        padding: "0 10%",
        zIndex: 0, // Ensure content is above the mountain
      }}
    >
      {/* Motion div for section visibility animation */}
      <motion.div
        ref={sectionRef}
        style={{ width: "100%" }}
        className="transition-all duration-700"
        initial={sectionAnimation.initial}
        animate={sectionAnimation.animate}
      >
        <h2
          style={{
            fontSize: "3rem",
            marginBottom: "2rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Skills
        </h2>
        {/* Frontend Skills */}
        <div style={{ marginBottom: "2rem" }}>
          <h3
            style={{
              fontSize: "2rem",
              marginBottom: "1rem",
              fontWeight: "bold",
              color: "#556B2F",
            }}
          >
            Frontend
          </h3>
          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
              gap: "1.5rem",
              justifyContent: "center",
              alignItems: "center",
            }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.1 },
              },
            }}
          >
            {[
              { name: "React", icon: "react" },
              { name: "JavaScript", icon: "javascript" },
              { name: "HTML", icon: "html" },
              { name: "CSS", icon: "css" },
              { name: "Tailwind CSS", icon: "tailwind" },
              { name: "Next.js", icon: "next" },
              { name: "TypeScript", icon: "ts" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  cursor: "pointer",
                }}
                initial={skillAnimation.initial}
                animate={skillAnimation.animate}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={url(skill.icon)}
                  style={{ width: "50px", marginBottom: "0.5rem" }}
                  alt={skill.name}
                />
                <p style={{ fontSize: "1rem", color: "#556B2F", margin: 0 }}>
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Backend Skills */}
        <div style={{ marginBottom: "2rem" }}>
          <h3
            style={{
              fontSize: "2rem",
              marginBottom: "1rem",
              fontWeight: "bold",
              color: "#556B2F",
            }}
          >
            Backend
          </h3>
          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
              gap: "1.5rem",
              justifyContent: "center",
            }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.1 },
              },
            }}
          >
            {[
              { name: "Node.js", icon: "node" },
              { name: "Django", icon: "django" },
              { name: "Laravel", icon: "laravel" },
              { name: "MySQL", icon: "mysql" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  cursor: "pointer",
                }}
                initial={skillAnimation.initial}
                animate={skillAnimation.animate}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={url(skill.icon)}
                  style={{ width: "50px", marginBottom: "0.5rem" }}
                  alt={skill.name}
                />
                <p style={{ fontSize: "1rem", color: "#556B2F" }}>
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tools */}
        <div>
          <h3
            style={{
              fontSize: "2rem",
              marginBottom: "1rem",
              fontWeight: "bold",
              color: "#556B2F",
            }}
          >
            Tools
          </h3>
          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
              gap: "1.5rem",
              justifyContent: "center",
            }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.1 },
              },
            }}
          >
            {[{ name: "Git", icon: "git" }].map((skill, index) => (
              <motion.div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  cursor: "pointer",
                }}
                initial={skillAnimation.initial}
                animate={skillAnimation.animate}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={url(skill.icon)}
                  style={{ width: "50px", marginBottom: "0.5rem" }}
                  alt={skill.name}
                />
                <p style={{ fontSize: "1rem", color: "#556B2F" }}>
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </ParallaxLayer>
  );
};

export default SkillSection;
