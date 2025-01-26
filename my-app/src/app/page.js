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
            Welcome to My Portfolio
          </h1>
          <p style={{ fontSize: "1.5rem", opacity: 0.8 }}>
            Scroll down to explore my work, skills, and experience
          </p>
          <img
            src={url("leaf")} // Points to /images/leaf.svg
            style={{ width: "10%", marginTop: "2rem", cursor: "pointer" }}
            alt="scroll down"
          />
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
            <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
              I'm a passionate developer with expertise in React, Next.js, and
              modern web technologies. I love building creative and interactive
              user experiences. When I'm not coding, you can find me exploring
              new design trends or contributing to open-source projects.
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
          <div>
            <h2
              style={{
                fontSize: "3rem",
                marginBottom: "1rem",
                fontWeight: "bold",
              }}
            >
              Skills
            </h2>
            <div style={{ display: "flex", gap: "2rem" }}>
              <div style={{ textAlign: "center" }}>
                <img src={url("react")} style={{ width: "50px" }} alt="React" />
                <p>React</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <img
                  src={url("node")}
                  style={{ width: "50px" }}
                  alt="Node.js"
                />
                <p>Node.js</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <img
                  src={url("javascript")}
                  style={{ width: "50px" }}
                  alt="JavaScript"
                />
                <p>JavaScript</p>
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
          <img
            src={url("leaf")} // Points to /images/leaf.svg
            style={{ display: "block", width: "10%", marginLeft: "55%" }}
            alt="leaf"
          />
          <img
            src={url("leaf")} // Points to /images/leaf.svg
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
            alt="leaf"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.5}
          speed={0.3}
          style={{ opacity: 0.3, zIndex: 0 }}
        >
          <img
            src={url("leaf")} // Points to /images/leaf.svg
            style={{ display: "block", width: "10%", marginLeft: "70%" }}
            alt="leaf"
          />
          <img
            src={url("leaf")} // Points to /images/leaf.svg
            style={{ display: "block", width: "10%", marginLeft: "40%" }}
            alt="leaf"
          />
        </ParallaxLayer>

        {/* Mountains */}
        <ParallaxLayer
          offset={2.5}
          speed={-0.1} // Slower speed for subtle movement
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            pointerEvents: "none",
            opacity: 0.6, // Reduced opacity for subtlety
            zIndex: 0, // Ensure mountain is below content
          }}
        >
          <img
            src={url("earth")} // Points to /images/mountain.svg
            style={{ width: "80%", marginBottom: "0" }} // Adjusted width and margin
            alt="mountain"
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
