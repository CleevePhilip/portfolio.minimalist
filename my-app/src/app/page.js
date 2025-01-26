"use client"; // Mark as a client component

import React, { useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ProjectCard from "@/components/ProjectCard";
// Helper function to construct the URL for assets
const url = (name, wrap = false) =>
  `${wrap ? "url(" : ""}/images/${name}.svg${wrap ? ")" : ""}`;

export default function Home() {
  const parallax = useRef(null);
  const [cursorStyle, setCursorStyle] = useState("default");

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
  // Project data
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "A modern web application built with React and Next.js.",
      image: "/images/project1.png", // Path to image in the public folder
      link: "#",
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Project 2",
      description: "An e-commerce platform with a responsive design.",
      image: "/images/project1.png", // Path to image in the public folder
      link: "#",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      id: 3,
      title: "Project 2",
      description: "An e-commerce platform with a responsive design.",
      image: "/images/project1.png", // Path to image in the public folder
      link: "#",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      id: 4,
      title: "Project 2",
      description: "An e-commerce platform with a responsive design.",
      image: "/images/project1.png", // Path to image in the public folder
      link: "#",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
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
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#8FBC8F", // Forest green background
            color: "#FFFFFF", // White text
            padding: "0 10%",
            zIndex: 1, // Ensure content is above the mountain
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "3rem",
                marginBottom: "1rem",
                fontWeight: "bold",
              }}
            >
              About Me
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.8",
                marginBottom: "1.5rem",
              }}
            >
              Hi, I'm Cleeve Wong, a passionate and creative developer with a
              love for building modern, user-friendly web applications. With{" "}
              <span
                style={{
                  backgroundColor: "#FFFACD",
                  color: "#556B2F",
                  padding: "0.1rem 0.3rem",
                  borderRadius: "4px",
                }}
              >
                1.5 years of experience in React
              </span>
              , I enjoy turning ideas into reality through clean, efficient, and
              scalable code.
            </p>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
              I specialize in{" "}
              <span
                style={{
                  backgroundColor: "#FFFACD",
                  color: "#556B2F",
                  padding: "0.1rem 0.3rem",
                  borderRadius: "4px",
                }}
              >
                React
              </span>
              ,{" "}
              <span
                style={{
                  backgroundColor: "#FFFACD",
                  color: "#556B2F",
                  padding: "0.1rem 0.3rem",
                  borderRadius: "4px",
                }}
              >
                Next.js
              </span>
              , and modern web technologies. I'm always exploring new tools and
              frameworks to enhance my skill set. When I'm not coding, you can
              find me contributing to open-source projects, learning new design
              trends, or enjoying the great outdoors.
            </p>
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
          className="flex items-center justify-center bg-[#8FBC8F] text-white p-8 md:p-10 lg:p-12 z-10"
        >
          <div className="w-full max-w-[1200px]">
            <h2 className="text-[clamp(2rem,6vw,3rem)] font-bold mb-4 text-center">
              Experience
            </h2>
            <div className="flex flex-col gap-6 px-4">
              {/* Experience Card 1 */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-[#556B2F] text-[clamp(1.25rem,5vw,1.5rem)] mb-2">
                  Fullstack Developer - Shopshere
                </h3>
                <p className="text-[#556B2F] text-[clamp(0.9rem,4vw,1rem)] leading-relaxed">
                  Designed and developed a responsive e-commerce web application
                  using React (TypeScript), Express.js, and MySQL. Implemented
                  user authentication, product browsing, and a seamless shopping
                  cart experience.
                </p>
              </div>

              {/* Experience Card 2 */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-[#556B2F] text-[clamp(1.25rem,5vw,1.5rem)] mb-2">
                  Frontend Developer - Personal Portfolio
                </h3>
                <p className="text-[#556B2F] text-[clamp(0.9rem,4vw,1rem)] leading-relaxed">
                  Built a modern, responsive portfolio website using Next.js to
                  showcase projects and skills, demonstrating expertise in
                  React-based frameworks and web development best practices.
                </p>
              </div>

              {/* Experience Card 3 */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-[#556B2F] text-[clamp(1.25rem,5vw,1.5rem)] mb-2">
                  Frontend Developer - MedSched
                </h3>
                <p className="text-[#556B2F] text-[clamp(0.9rem,4vw,1rem)] leading-relaxed">
                  Developed a landing page for a doctor appointment web app
                  using React and Tailwind CSS, focusing on a modern, responsive
                  design to enhance user experience and streamline appointment
                  scheduling.
                </p>
              </div>

              {/* Experience Card 4 */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-[#556B2F] text-[clamp(1.25rem,5vw,1.5rem)] mb-2">
                  Frontend Developer - Brainwave.io
                </h3>
                <p className="text-[#556B2F] text-[clamp(0.9rem,4vw,1rem)] leading-relaxed">
                  Created a dynamic, user-friendly landing page for a
                  consultancy firm using React and Tailwind CSS, emphasizing a
                  seamless and responsive design to highlight the company's
                  services and expertise.
                </p>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        {/* Section 5: Projects */}
        {/* Section 5: Projects */}
        <ParallaxLayer
          offset={4}
          speed={0.5}
          className="flex items-center justify-center bg-gradient-to-r from-[#F5F5DC] via-[#E6E6CB] to-[#F5F5DC] bg-[length:200%_200%] animate-gradientShift text-[#556B2F] p-8 md:p-10 lg:p-12 z-0"
        >
          <div className="w-full max-w-[1200px]">
            <h2 className="text-[clamp(2rem,6vw,3rem)] font-bold mb-8 text-center">
              Projects
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 justify-center px-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                  onMouseEnter={(e) => {
                    e.currentTarget
                      .querySelector(".hover-overlay")
                      .classList.remove("opacity-0");
                    e.currentTarget
                      .querySelector(".hover-overlay")
                      .classList.add("opacity-100");
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget
                      .querySelector(".hover-overlay")
                      .classList.remove("opacity-100");
                    e.currentTarget
                      .querySelector(".hover-overlay")
                      .classList.add("opacity-0");
                  }}
                >
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
                  />

                  {/* Hover Overlay */}
                  <div className="hover-overlay absolute top-0 left-0 w-full h-full bg-[rgba(85,107,47,0.9)] text-white flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out p-6 text-center">
                    {/* Project Name */}
                    <h3 className="text-2xl font-bold mb-3">{project.name}</h3>

                    {/* Project Description */}
                    <p className="text-sm mb-4">{project.description}</p>

                    {/* Tech Stack */}
                    <p className="text-sm mb-4">
                      <strong>Tech Stack:</strong> {project.techStack}
                    </p>

                    {/* View Repository Button */}
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-white text-[#556B2F] rounded-lg font-bold no-underline transition-colors duration-300 ease-in-out hover:bg-[#F5F5DC] flex items-center gap-2"
                    >
                      <span>View Repository</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Projects Button */}
            <div className="flex justify-center mt-10">
              <a
                href="/projects" // Replace with your actual link
                className="px-8 py-3 bg-[#556B2F] text-white rounded-lg font-bold no-underline transition-colors duration-300 ease-in-out hover:bg-[#3D4D2B] flex items-center gap-2"
              >
                <span>View More Projects</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
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
            <h2 className="text-[clamp(2rem,6vw,3rem)] font-bold mb-4 text-center">
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
          offset={2.5}
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
