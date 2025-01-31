import React, { useEffect, useState, useRef } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { FaRegFolder } from "react-icons/fa";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { GoProjectSymlink } from "react-icons/go";

const projects = [
  {
    id: 1,
    title: "Color Tap",
    description: "A fun color-matching game built with HTML and Tailwind CSS.",
    techStack: ["HTML", "CSS", "Tailwind CSS"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: 2,
    title: "Healthcare Platform Landing Page",
    description:
      "A responsive landing page for healthcare services built with React and Tailwind CSS.",
    techStack: ["React", "Tailwind CSS", "Responsive Design", "CSS Animations"],
    githubLink: "https://github.com/CleevePhilip/MedSched",
    liveLink: "#",
  },
  {
    id: 3,
    title: "Consultancy Services Landing Page",
    description:
      "A modern business consultancy website developed using React and Tailwind CSS.",
    techStack: [
      "React",
      "Tailwind CSS",
      "Mobile-First Approach",
      "Flexbox/Grid",
    ],
    githubLink: "https://github.com/CleevePhilip/AgencyLandingpage",
    liveLink: "#",
  },
  {
    id: 4,
    title: "Inventory Management System",
    description:
      "A robust system for efficient stock tracking and sales processing, built with C# and Microsoft SQL.",
    techStack: ["C#", "Microsoft SQL", "GUI .Net Framework"],
    githubLink: "https://github.com/CleevePhilip/improject",
    liveLink: "#",
  },
];

const ProjectSection = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardId = entry.target.getAttribute("data-id");
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(cardId)); // Add the card to the visible set
          } else {
            setVisibleCards((prev) => {
              const newSet = new Set(prev);
              newSet.delete(cardId); // Remove the card when it goes out of view
              return newSet;
            });
          }
        });
      },
      { threshold: 0.2 }
    ) // Trigger when 20% of the card is visible
  );

  useEffect(() => {
    const elements = document.querySelectorAll(".project-card");
    elements.forEach((el) => observer.current.observe(el));
    return () => {
      elements.forEach((el) => observer.current.unobserve(el));
    };
  }, []);

  return (
    <ParallaxLayer
      offset={4}
      speed={0.5}
      className="flex flex-col items-center justify-center bg-gradient-to-r bg-[#8FBC8F] p-8 md:p-12 lg:p-16 relative"
    >
      <div className="w-full max-w-[1200px] text-center text-white relative z-10">
        <h2 className="text-[clamp(2rem,6vw,3rem)] font-bold mb-12 text-shadow-md">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-id={project.id}
              className={`project-card h-[300px] z-10 p-5 w-[300px] bg-white flex flex-col shadow-md rounded-md transform transition-all duration-500 opacity-0 ${
                visibleCards.has(String(project.id))
                  ? `translate-y-0 opacity-100 delay-${index * 200}`
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex justify-between items-center">
                <FaRegFolder className="text-5xl text-[#556B2F]" />
                <div className="flex justify-center items-center space-x-3">
                  <div className="relative group">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <FiGithub className="text-2xl text-[#556B2F]" />
                    </a>
                  </div>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink className="text-2xl text-[#556B2F]" />
                  </a>
                </div>
              </div>
              <div className="h-[10rem] flex flex-col justify-center items-start space-y-3">
                <p className="text-lg uppercase text-left text-[#556B2F]">
                  {project.title}
                </p>
                <p className="text-sm text-[#556B2F] text-left leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#556B2F]/10 text-[#556B2F] rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="/project"
            className="px-8 py-3 bg-[#556B2F] text-white rounded-lg font-bold hover:bg-[#3D4D2B] transition-all flex justify-between items-center gap-3"
          >
            <GoProjectSymlink className="text-xl" />
            View All Projects
          </a>
        </div>
      </div>
    </ParallaxLayer>
  );
};

export default ProjectSection;
