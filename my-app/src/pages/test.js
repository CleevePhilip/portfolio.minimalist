"use client";

import React, { useRef, useState, useEffect } from "react";
import "../app/globals.css"; // Make sure to import your CSS file

const Test = () => {
  const sectionRefs = useRef([]);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const updatedSections = {};
        entries.forEach((entry) => {
          updatedSections[entry.target.id] = entry.isIntersecting;
        });
        setVisibleSections((prev) => ({ ...prev, ...updatedSections }));
      },
      { threshold: 0.3 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="space-y-16 p-10">
      {[...Array(15)].map((_, index) => (
        <div
          key={index}
          id={`section-${index}`}
          ref={(el) => (sectionRefs.current[index] = el)}
          className={`transition-all duration-700 ${
            visibleSections[`section-${index}`] ? "fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold text-center">
            Test Section {index + 1}
          </h2>
          <p className="text-lg text-center">
            This section will fade in and slide up when visible.
          </p>
        </div>
      ))}
    </div>
  );
};

export default Test;
