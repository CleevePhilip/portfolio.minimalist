"use client"; // Mark as a client component

import React, { useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Link from "next/link";
// Helper function to construct the URL for assets
const url = (name, wrap = false) =>
  `${wrap ? "url(" : ""}/images/${name}.svg${wrap ? ")" : ""}`;

export default function Home() {
  const parallax = useRef(null);
  const [cursorStyle, setCursorStyle] = useState("default");
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const experiences = [
    {
      id: 1,
      title: "Fullstack Project",
      company: "ShopShere E-commerce Platform",
      description:
        "Designed and developed a responsive e-commerce web application using React (TypeScript) for frontend, Express.js for backend, and MySQL for database. Implemented user authentication, product browsing features, and a seamless shopping cart experience with real-time updates.",
    },
    {
      id: 2,
      title: "Frontend Project",
      company: "Personal Portfolio Project",
      description:
        "Created a modern, responsive portfolio website using Next.js with dynamic project showcases. Implemented SSR (Server-Side Rendering) and optimized performance through code-splitting and lazy loading.",
    },
    {
      id: 3,
      title: "Computer Vision Developer",
      company: "Capstone DressCan (Holy Cross College)",
      description:
        "Developed Python-based desktop application using Tkinter GUI and YOLOv8 object detection model to analyze student attire compliance. Integrated OpenCV for real-time image processing and compliance reporting.",
    },
    {
      id: 4,
      title: "Frontend Project",
      company: "MedSched Healthcare Platform",
      description:
        "Built landing page and core UI for doctor appointment system using React and Tailwind CSS. Implemented responsive design patterns and optimized form handling for appointment scheduling workflows.",
    },
    {
      id: 5,
      title: "Frontend Project",
      company: "Brainwave.io Consultancy",
      description:
        "Developed dynamic landing page with interactive elements using React and Tailwind CSS. Implemented smooth animations and mobile-first responsive layout to showcase company services.",
    },
    {
      id: 6,
      title: "Academic Achievement",
      company: "Holy Cross College of Davao",
      description:
        "Awarded for excellence in Information Technology program. Recognized for top performance in software development, system design, and academic research projects.",
    },
  ];
  // Handle scroll changes
  const handleScroll = (offset) => {
    if (offset === 0) {
      setCursorStyle("pointer"); // Change cursor on the first section
    } else {
      setCursorStyle("default"); // Reset cursor on other sections
    }
  };

  // Reusable Section Title Component
  const SectionTitle = ({ title }) => (
    <h2
      style={{
        fontSize: "3rem",
        marginBottom: "2rem",
        fontWeight: "bold",
        textAlign: "center",
        color: "#556B2F",
      }}
    >
      {title}
    </h2>
  );
  const projects = [
    {
      id: 1,
      title: "Healthcare Platform Landing Page",
      description:
        "A responsive landing page for healthcare services built with React and Tailwind CSS, featuring mobile-first design and smooth animations.",
      image: "/images/healthcare.png",
      link: "#",
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
      link: "#",
      techStack: [
        "React",
        "Tailwind CSS",
        "Mobile-First Approach",
        "Flexbox/Grid",
      ],
    },
  ];
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "#F5F5DC", // Beige background
        cursor: cursorStyle, // Custom cursor
      }}
    >
      <Parallax
        ref={parallax}
        pages={6}
        onChange={handleScroll} // Listen for scroll changes
      >
        {/* Floating Particles */}
        <ParallaxLayer
          offset={0}
          speed={0.2}
          style={{ zIndex: 1, pointerEvents: "none" }}
        >
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                backgroundColor: "#8FBC8F", // Soft green for particles
                opacity: Math.random() * 0.8 + 0.2,
                animation: `float ${
                  Math.random() * 5 + 3
                }s infinite ease-in-out`,
              }}
            />
          ))}

          {/* CSS for Floating Animation */}
          <style>
            {`
              @keyframes float {
                0%, 100% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-20px);
                }
              }
            `}
          </style>
        </ParallaxLayer>

        {/* Section 1: Hero Section */}
        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#556B2F", // Forest green text
            textAlign: "center",
            zIndex: 1, // Ensure content is above the mountain
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              marginBottom: "1rem",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)", // Add shadow for better visibility
            }}
          >
            Explore My Portfolio
          </h1>
          <p style={{ fontSize: "1.5rem", opacity: 0.8 }}>
            Scroll down to explore my work, skills, and experience
          </p>
          <img
            src={url("leaf")} // Points to /images/leaf.svg
            style={{
              width: "10%",
              marginTop: "2rem",
              cursor: "pointer",
              animation: "bounce 2s infinite", // Add bounce animation
            }}
            alt="scroll down"
          />

          {/* Smooth Scroll Indicator */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "40px",
                borderRadius: "10px",
                border: "2px solid #556B2F",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "4px",
                  height: "10px",
                  borderRadius: "2px",
                  backgroundColor: "#556B2F",
                  position: "absolute",
                  top: "5px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  animation: "scroll 2s infinite",
                }}
              />
            </div>
            <p
              style={{
                marginTop: "10px",
                fontSize: "0.9rem",
                color: "#556B2F",
              }}
            >
              Scroll Down
            </p>
          </div>

          {/* CSS for Bounce and Scroll Animations */}
          <style>
            {`
              @keyframes bounce {
                0%, 20%, 50%, 80%, 100% {
                  transform: translateY(0);
                }
                40% {
                  transform: translateY(-20px);
                }
                60% {
                  transform: translateY(-10px);
                }
              }
              @keyframes scroll {
                0%, 100% {
                  transform: translate(-50%, 0);
                }
                50% {
                  transform: translate(-50%, 10px);
                }
              }
            `}
          </style>
        </ParallaxLayer>

        {/* Gradient Overlay */}
        <ParallaxLayer
          offset={1}
          speed={0.1}
          style={{
            background: "linear-gradient(to bottom, #8FBC8F, #F5F5DC)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* Section 2: About Me */}
        <ParallaxLayer
          offset={1}
          speed={0.2}
          className="flex items-center justify-center bg-[#8FBC8F] text-white px-[10%] z-10"
        >
          <div className="max-w-6xl">
            <h2 className="text-5xl mb-6 font-bold animate-fade-in-up">
              About Me
            </h2>

            <div className="space-y-6">
              <p className="text-xl leading-relaxed animate-fade-in-up delay-100">
                Hi, I'm Cleeve Wong, a passionate full-stack developer crafting
                modern web experiences. With{" "}
                <span className="highlight-text">
                  1.5 years of React expertise
                </span>
                , I transform ideas into performant applications through clean,
                maintainable code.
              </p>

              <p className="text-xl leading-relaxed animate-fade-in-up delay-200">
                My core stack includes{" "}
                <span className="highlight-text">React</span> and{" "}
                <span className="highlight-text">Next.js</span>, enhanced with
                modern tools. I'm constantly exploring new technologies while
                maintaining robust development practices.
              </p>
            </div>

            {/* Tech Stack Section */}
            <div className="mt-12 animate-fade-in-up delay-300">
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
                    class:
                      "border-emerald-200 text-emerald-100 bg-[#8FBC8F]/20",
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
          </div>
        </ParallaxLayer>

        {/* Wave Animation */}
        <ParallaxLayer
          offset={2}
          speed={0.2}
          style={{ zIndex: 1, pointerEvents: "none" }}
        >
          <div
            style={{
              position: "absolute",

              bottom: 0,
              left: 0,
              width: "100%",
              color: "red",
              height: "100px",
              background: `url(${url("wave", true)}) repeat-x`,
              animation: "wave 10s linear infinite",
            }}
          />

          {/* CSS for Wave Animation */}
          <style>
            {`
              @keyframes wave {
                0% {
                  background-position-x: 0;
                }
                100% {
                  background-position-x: 1000px;
                }
              }
            `}
          </style>
        </ParallaxLayer>

        {/* Section 3: Skills */}
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
          <div style={{ width: "100%" }}>
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
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                  gap: "1.5rem",
                  justifyContent: "center",
                  alignItems: "center",
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
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={url(skill.icon)}
                      style={{ width: "50px", marginBottom: "0.5rem" }}
                      alt={skill.name}
                    />
                    <p
                      style={{ fontSize: "1rem", color: "#556B2F", margin: 0 }}
                    >
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
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
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                  gap: "1.5rem",
                  justifyContent: "center",
                }}
              >
                {[
                  { name: "Node.js", icon: "node" },
                  { name: "Django", icon: "django" },
                  { name: "Laravel", icon: "laravel" },
                  { name: "MySQL", icon: "mysql" },
                ].map((skill, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={url(skill.icon)}
                      style={{ width: "50px", marginBottom: "0.5rem" }}
                      alt={skill.name}
                    />
                    <p style={{ fontSize: "1rem", color: "#556B2F" }}>
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
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
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                  gap: "1.5rem",
                  justifyContent: "center",
                }}
              >
                {[{ name: "Git", icon: "git" }].map((skill, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={url(skill.icon)}
                      style={{ width: "50px", marginBottom: "0.5rem" }}
                      alt={skill.name}
                    />
                    <p style={{ fontSize: "1rem", color: "#556B2F" }}>
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ParallaxLayer>

        {/* Abstract Shapes */}
        <ParallaxLayer
          offset={1.5}
          speed={0.3}
          style={{ zIndex: 0, pointerEvents: "none" }}
        >
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "10%",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              backgroundColor: "rgba(143, 188, 143, 0.3)", // Soft green with transparency
              transform: "rotate(45deg)",
              animation: "float 6s infinite ease-in-out",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "10%",
              width: "80px",
              height: "80px",
              backgroundColor: "rgba(143, 188, 143, 0.3)", // Soft green with transparency
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              animation: "float 8s infinite ease-in-out",
            }}
          />
        </ParallaxLayer>

        {/* Section 4: Experience */}
        <ParallaxLayer
          offset={3}
          speed={0.4}
          className="flex items-center justify-center bg-[#8FBC8F] text-white p-4 md:p-6 lg:p-8 z-10"
        >
          <div className="w-full max-w-[1200px]">
            <h2 className="text-[clamp(1.5rem,6vw,2.5rem)] font-bold mb-4 md:mb-6 text-center">
              Experience
            </h2>

            <div className="flex flex-col gap-4 md:gap-6 px-2 sm:px-4">
              {/* Experience Tabs */}
              <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
                {experiences.map((exp, index) => (
                  <button
                    key={exp.id}
                    onClick={() => setActiveIndex(index)}
                    className={`px-4 py-2 text-sm md:text-base rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-white text-[#556B2F] shadow-md"
                        : "bg-transparent text-white hover:bg-white/20"
                    }`}
                  >
                    {exp.company}
                  </button>
                ))}
              </div>

              {/* Animated Content Area */}
              <div className="relative h-[230px]  lg:min-h-[400px] md:min-h-[350px]">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.id}
                    className={`absolute inset-0 bg-white p-4 md:p-6 rounded-lg shadow-md transition-all duration-300 ${
                      activeIndex === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                  >
                    <h3 className="text-[#556B2F] text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-4">
                      {exp.title}
                    </h3>
                    <p className="text-[#556B2F] text-sm md:text-base leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ParallaxLayer>
        {/* Section 5: Projects */}
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
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />

                      {/* Info Overlay */}
                      <div className="absolute inset-0 bg-[#8FBC8F] text-white p-6 flex flex-col items-center justify-center text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <h3 className="text-xl md:text-2xl font-bold mb-3">
                          {project.name}
                        </h3>
                        <p className="text-sm md:text-base mb-4">
                          {project.description}
                        </p>
                        <p className="text-sm md:text-base mb-4">
                          <strong>Tech Stack:</strong> {project.techStack}
                        </p>
                        <a
                          href={project.repositoryUrl}
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
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
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
        </ParallaxLayer>

        {/* Section 6: Contact */}
        <ParallaxLayer
          offset={5}
          speed={0.6}
          className="flex items-center justify-center bg-[#8FBC8F] text-white p-8 md:p-10 lg:p-12 z-0 relative overflow-hidden"
        >
          {/* Decorative Circles */}
          <div className="absolute top-[-50px] left-[-50px] w-[200px] h-[200px] rounded-full bg-[rgba(255,255,255,0.1)] z-[-1]" />
          <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-[rgba(255,255,255,0.1)] z-[-1]" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-[clamp(2rem,6vw,3rem)] font-bold mb-4 ">
              Contact Me
            </h2>
            <p className="text-[clamp(1rem,4vw,1.2rem)] mb-8 text-center">
              Let's connect! Feel free to reach out for collaborations or just a
              friendly chat.
            </p>
            <form className="flex flex-col gap-4 max-w-[400px] w-full">
              {/* Input Fields with Icons */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="pl-10 pr-3 py-2 text-[#556B2F] text-base rounded-lg border border-[#556B2F] w-full"
                />
                <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#556B2F] text-xl">
                  👤
                </span>
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="pl-10 pr-3 py-2 text-[#556B2F] text-base rounded-lg border border-[#556B2F] w-full"
                />
                <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#556B2F] text-xl">
                  ✉️
                </span>
              </div>
              <div className="relative">
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="pl-10 pr-3 py-2 text-[#556B2F] text-base rounded-lg border border-[#556B2F] w-full"
                />
                <span className="absolute left-2 top-2 text-[#556B2F] text-xl">
                  📝
                </span>
              </div>
              <button
                type="submit"
                className="px-4 py-2 text-base rounded-lg bg-[#556B2F] text-white cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#6B8E23]"
              >
                Send Message
              </button>
            </form>
          </div>
        </ParallaxLayer>
        {/* Floating Leaves */}
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

        <ParallaxLayer offset={1.5} speed={0.3} className="opacity-30 z-0">
          {/* Bottom Right Leaf */}
          <img
            src={url("leaf")} // Points to /images/leaf.svg
            className="absolute bottom-[10%] right-[15%] w-[8%] transform -rotate-[10deg]"
            alt="leaf"
          />
          {/* Bottom Left Leaf */}
          <img
            src={url("leaf")} // Points to /images/leaf.svg
            className="absolute bottom-[15%] left-[15%] w-[8%] transform rotate-[15deg]"
            alt="leaf"
          />
        </ParallaxLayer>

        {/* Earth Background */}
        <ParallaxLayer
          offset={3.5}
          speed={-0.1} // Slower speed for subtle movement
          className="flex items-end justify-center pointer-events-none opacity-30 z-10"
        >
          <img
            src={url("earth")} // Points to /images/earth.svg
            className="w-[80%] mb-0"
            alt="earth"
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
