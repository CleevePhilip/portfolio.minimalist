import React from "react";

const ProjectCard = ({ title, description, image, link, techStack }) => (
  <div
    style={{
      background: "rgba(255, 255, 255, 0.7)",
      backdropFilter: "blur(10px)",
      borderRadius: "12px",
      padding: "1.5rem",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      width: "320px",
      textAlign: "left",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
      overflow: "hidden",
      border: "1px solid rgba(234, 234, 234, 0.3)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.03)";
      e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.15)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
    }}
  >
    {image ? (
      <img
        src={image}
        style={{
          width: "100%",
          borderRadius: "8px",
          marginBottom: "1.5rem",
          objectFit: "cover",
          height: "180px",
        }}
        alt={title}
        onError={(e) => {
          e.target.style.display = "none"; // Hide the image if it fails to load
        }}
      />
    ) : (
      <div
        style={{
          width: "100%",
          height: "180px",
          borderRadius: "8px",
          backgroundColor: "#EDF2F7",
          marginBottom: "1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#4A5568",
          fontSize: "1rem",
        }}
      >
        Image Not Found
      </div>
    )}
    <h3
      style={{
        fontSize: "1.5rem",
        marginBottom: "0.75rem",
        color: "#556B2F",
        fontWeight: "600",
      }}
    >
      {title}
    </h3>
    <p
      style={{
        fontSize: "1rem",
        color: "#4A5568",
        lineHeight: "1.5",
        marginBottom: "1.5rem",
      }}
    >
      {description}
    </p>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        marginBottom: "1.5rem",
      }}
    >
      {techStack.map((tech, index) => (
        <span
          key={index}
          style={{
            backgroundColor: "#EDF2F7",
            color: "#2D3748",
            padding: "0.25rem 0.75rem",
            borderRadius: "20px",
            fontSize: "0.875rem",
            fontWeight: "500",
          }}
        >
          {tech}
        </span>
      ))}
    </div>
    <a
      href={link}
      style={{
        display: "inline-block",
        width: "100%",
        textAlign: "center",
        padding: "0.75rem 1rem",
        backgroundColor: "#556B2F",
        color: "#FFFFFF",
        borderRadius: "8px",
        textDecoration: "none",
        transition: "background-color 0.3s ease",
        fontWeight: "500",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#8FBC8F";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#556B2F";
      }}
    >
      View Project
    </a>
  </div>
);

export default ProjectCard;
