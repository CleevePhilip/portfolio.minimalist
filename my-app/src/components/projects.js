import React, { useState } from "react";
import { ParallaxLayer } from "@react-spring/parallax";

const ProjectSection = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const projects = [
    {
      id: 1,
      title: "Healthcare Platform Landing Page",
      description:
        "A responsive landing page for healthcare services built with React and Tailwind CSS, featuring mobile-first design and smooth animations.",
      image: "/images/healthcare.png",
      link: "#", // Change this to the actual link for the repository if available
      techStack: [
        "React",
        "Tailwind CSS",
        "Responsive Design",
        "CSS Animations",
      ],
    },
    {
      id: 2,
      title: "Consultancy Services Landing Page",
      description:
        "Modern business consultancy website developed using React and Tailwind CSS, with adaptive layouts for all screen sizes and devices.",
      image: "/images/consultancy.png",
      link: "#", // Change this to the actual link for the repository if available
      techStack: [
        "React",
        "Tailwind CSS",
        "Mobile-First Approach",
        "Flexbox/Grid",
      ],
    },
  ];

  return (
    <ParallaxLayer
      offset={4}
      speed={0.5}
      className="flex items-center justify-center bg-[#F5F5DC] text-[#556B2F] p-4 md:p-6 lg:p-8 z-0"
    >
      <div className="w-full max-w-[1200px]">
        <h2 className="text-[clamp(1.5rem,6vw,2.5rem)] font-bold mb-6 md:mb-8 text-center">
          Projects
        </h2>

        {/* Slider Container */}
        <div className="relative overflow-hidden w-full h-[500px] md:h-[600px]">
          {/* Slides */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeProjectIndex * 100}%)`,
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="w-full flex-shrink-0 px-4 h-full relative group"
              >
                {/* Project Card */}
                <div className="w-full h-full rounded-lg overflow-hidden shadow-lg relative">
                  <img
                    src={project.image}
                    alt={project.title} // Updated alt text to match 'title' field
                    className="w-full h-full object-cover"
                  />

                  {/* Info Overlay */}
                  <div className="absolute inset-0 bg-[#8FBC8F] text-white p-6 flex flex-col items-center justify-center text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">
                      {project.title} {/* Updated title field */}
                    </h3>
                    <p className="text-sm md:text-base mb-4">
                      {project.description}
                    </p>
                    <p className="text-sm md:text-base mb-4">
                      <strong>Tech Stack:</strong>{" "}
                      {project.techStack.join(", ")}{" "}
                      {/* Join tech stack items */}
                    </p>
                    <a
                      href={project.link} // Changed to 'link' to match project data
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-white text-[#556B2F] rounded-lg font-bold hover:bg-[#F5F5DC] transition-colors flex items-center gap-2"
                    >
                      <span>View Code</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() =>
              setActiveProjectIndex((prev) => Math.max(prev - 1, 0))
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 text-[#556B2F] p-2 rounded-full hover:bg-white/50 transition-colors"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() =>
              setActiveProjectIndex((prev) =>
                Math.min(prev + 1, projects.length - 1)
              )
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 text-[#556B2F] p-2 rounded-full hover:bg-white/50 transition-colors"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Progress Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProjectIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeProjectIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-6 md:mt-8">
          <a
            href="/project"
            className="px-6 py-2 md:px-8 md:py-3 bg-[#556B2F] text-white rounded-lg font-bold hover:bg-[#3D4D2B] transition-colors flex items-center gap-2"
          >
            <span>View All Projects</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default ProjectSection;
