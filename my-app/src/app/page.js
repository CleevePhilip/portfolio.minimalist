"use client"; // Mark as a client component

import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// Helper function to construct the URL for assets
const url = (name, wrap = false) =>
  `${wrap ? "url(" : ""}/images/${name}.svg${wrap ? ")" : ""}`;

export default function Home() {
  const parallax = useRef(null);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "#F5F5DC", // Beige background
      }}
    >
      <Parallax ref={parallax} pages={6}>
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

          {/* CSS for Bounce Animation */}
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
    `}
          </style>
        </ParallaxLayer>

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
            {/* Introduction */}
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
            {/* Additional Details */}
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
            zIndex: 1, // Ensure content is above the mountain
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
                  alignItems: "center", // Align items vertically in the grid
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
                      display: "flex", // Use flexbox for alignment
                      flexDirection: "column", // Stack icon and text vertically
                      alignItems: "center", // Center items horizontally
                      justifyContent: "center", // Center items vertically
                      textAlign: "center", // Center text horizontally
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
                      display: "flex", // Use flexbox for alignment
                      flexDirection: "column", // Stack icon and text vertically
                      alignItems: "center", // Center items horizontally
                      justifyContent: "center", // Center items vertically
                      textAlign: "center", // Center text horizontally
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
                      display: "flex", // Use flexbox for alignment
                      flexDirection: "column", // Stack icon and text vertically
                      alignItems: "center", // Center items horizontally
                      justifyContent: "center", // Center items vertically
                      textAlign: "center", // Center text horizontally
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

        {/* Section 4: Experience */}
        <ParallaxLayer
          offset={3}
          speed={0.4}
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
              Experience
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  background: "#FFFFFF",
                  padding: "1rem",
                  borderRadius: "10px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3
                  style={{
                    color: "#556B2F",
                    fontSize: "1.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Frontend Developer
                </h3>
                <p style={{ color: "#556B2F", fontSize: "1rem" }}>
                  XYZ Company | 2021 - Present
                </p>
                <p style={{ color: "#556B2F", fontSize: "1rem" }}>
                  Developed responsive and interactive web applications using
                  React and Next.js.
                </p>
              </div>
              <div
                style={{
                  background: "#FFFFFF",
                  padding: "1rem",
                  borderRadius: "10px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3
                  style={{
                    color: "#556B2F",
                    fontSize: "1.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  UI/UX Designer
                </h3>
                <p style={{ color: "#556B2F", fontSize: "1rem" }}>
                  ABC Agency | 2019 - 2021
                </p>
                <p style={{ color: "#556B2F", fontSize: "1rem" }}>
                  Designed user-friendly interfaces and collaborated with
                  developers to implement designs.
                </p>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        {/* Section 5: Projects */}
        <ParallaxLayer
          offset={4}
          speed={0.5}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F5F5DC", // Beige background
            color: "#556B2F", // Forest green text
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
              Projects
            </h2>
            <div style={{ display: "flex", gap: "2rem" }}>
              <div style={{ textAlign: "center" }}>
                <img
                  src={url("project1")}
                  style={{ width: "100px" }}
                  alt="Project 1"
                />
                <p>Project 1</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <img
                  src={url("project2")}
                  style={{ width: "100px" }}
                  alt="Project 2"
                />
                <p>Project 2</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <img
                  src={url("project3")}
                  style={{ width: "100px" }}
                  alt="Project 3"
                />
                <p>Project 3</p>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        {/* Section 6: Contact */}
        <ParallaxLayer
          offset={5}
          speed={0.6}
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
              Contact Me
            </h2>
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
              Let's connect! Feel free to reach out for collaborations or just a
              friendly chat.
            </p>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                maxWidth: "400px",
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                style={{
                  padding: "0.5rem",
                  fontSize: "1rem",
                  borderRadius: "5px",
                  border: "1px solid #556B2F",
                }}
              />
              <input
                type="email"
                placeholder="Your Email"
                style={{
                  padding: "0.5rem",
                  fontSize: "1rem",
                  borderRadius: "5px",
                  border: "1px solid #556B2F",
                }}
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                style={{
                  padding: "0.5rem",
                  fontSize: "1rem",
                  borderRadius: "5px",
                  border: "1px solid #556B2F",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "1rem",
                  borderRadius: "5px",
                  border: "none",
                  backgroundColor: "#556B2F", // Forest green
                  color: "#FFFFFF", // White text
                  cursor: "pointer",
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </ParallaxLayer>

        {/* Floating Leaves */}
        <ParallaxLayer
          offset={0.5}
          speed={0.5}
          style={{ opacity: 0.2, zIndex: 0 }}
        >
          {/* Top Right Leaf */}
          <img
            src={url("leaf")} // Points to /images/leaf.svg
            style={{
              position: "absolute",
              top: "10%",
              right: "10%",
              width: "8%",
              transform: "rotate(20deg)", // Add a slight rotation for a natural look
            }}
            alt="leaf"
          />
          {/* Top Left Leaf */}
          <img
            src={url("leaf")} // Points to /images/leaf.svg
            style={{
              position: "absolute",
              top: "15%",
              left: "10%",
              width: "8%",
              transform: "rotate(-15deg)", // Add a slight rotation for a natural look
            }}
            alt="leaf"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.5}
          speed={0.3}
          style={{ opacity: 0.3, zIndex: 0 }}
        >
          {/* Bottom Right Leaf */}
          <img
            src={url("leaf")} // Points to /images/leaf.svg
            style={{
              position: "absolute",
              bottom: "10%",
              right: "15%",
              width: "8%",
              transform: "rotate(-10deg)", // Add a slight rotation for a natural look
            }}
            alt="leaf"
          />
          {/* Bottom Left Leaf */}
          <img
            src={url("leaf")} // Points to /images/leaf.svg
            style={{
              position: "absolute",
              bottom: "15%",
              left: "15%",
              width: "8%",
              transform: "rotate(15deg)", // Add a slight rotation for a natural look
            }}
            alt="leaf"
          />
        </ParallaxLayer>

        {/* Earth Background */}
        <ParallaxLayer
          offset={2.5}
          speed={-0.1} // Slower speed for subtle movement
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            pointerEvents: "none",
            opacity: 0.6, // Reduced opacity for subtlety
            zIndex: 0, // Ensure earth is below content
          }}
        >
          <img
            src={url("earth")} // Points to /images/earth.svg
            style={{ width: "80%", marginBottom: "0" }} // Adjusted width and margin
            alt="earth"
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
