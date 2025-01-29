import React, { useState } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Healthcare Platform Landing Page",
    description:
      "A responsive landing page for healthcare services built with React and Tailwind CSS, featuring mobile-first design and smooth animations.",
    image: "/images/healthcare.png",
    link: "#",
    techStack: ["React", "Tailwind CSS", "Responsive Design", "CSS Animations"],
  },
  {
    id: 2,
    title: "Consultancy Services Landing Page",
    description:
      "Modern business consultancy website developed using React and Tailwind CSS, with adaptive layouts for all screen sizes and devices.",
    image: "/images/consultancy.png",
    link: "#",
    techStack: [
      "React",
      "Tailwind CSS",
      "Mobile-First Approach",
      "Flexbox/Grid",
    ],
  },
];

const ProjectSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ParallaxLayer
      offset={4}
      speed={0.5}
      className="flex items-center justify-center bg-[#F5F5DC] text-[#556B2F] p-6 md:p-8 lg:p-10"
    >
      <div className="w-full max-w-[1200px]">
        <h2 className="text-[clamp(1.5rem,6vw,2.5rem)] font-bold mb-8 text-center">
          Projects
        </h2>

        {/* Project Slider */}
        <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-lg shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[activeIndex].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute w-full h-full"
            >
              <img
                src={projects[activeIndex].image}
                alt={projects[activeIndex].title}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="absolute inset-0 bg-[#8FBC8F] text-white p-6 flex flex-col items-center justify-center text-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl font-bold mb-3">
                  {projects[activeIndex].title}
                </h3>
                <p className="text-sm md:text-base mb-4">
                  {projects[activeIndex].description}
                </p>
                <p className="text-sm md:text-base mb-4">
                  <strong>Tech Stack:</strong>{" "}
                  {projects[activeIndex].techStack.join(", ")}
                </p>
                <a
                  href={projects[activeIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-white text-[#556B2F] rounded-lg font-bold hover:bg-[#F5F5DC] transition-colors"
                >
                  View Code
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => setActiveIndex((prev) => Math.max(prev - 1, 0))}
            className="bg-white/30 text-[#556B2F] p-3 rounded-full hover:bg-white/50 transition-all"
          >
            ◀
          </button>
          <button
            onClick={() =>
              setActiveIndex((prev) => Math.min(prev + 1, projects.length - 1))
            }
            className="bg-white/30 text-[#556B2F] p-3 rounded-full hover:bg-white/50 transition-all"
          >
            ▶
          </button>
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-8">
          <a
            href="/project"
            className="px-8 py-3 bg-[#556B2F] text-white rounded-lg font-bold hover:bg-[#3D4D2B] transition-all"
          >
            View All Projects
          </a>
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default ProjectSection;
