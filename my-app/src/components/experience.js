import React, { useState, useEffect, useRef } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false); // Track visibility in viewport
  const sectionRef = useRef(null);

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

  // Set up IntersectionObserver to track when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting); // Update state when section is in view
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing the section
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Clean up observer when component unmounts
      }
    };
  }, []);

  const getButtonClassNames = (index) => {
    return activeIndex === index
      ? "bg-white text-[#556B2F] shadow-md"
      : "bg-transparent text-white hover:bg-white/20";
  };

  return (
    <ParallaxLayer
      offset={3}
      speed={0.4}
      className="flex items-center justify-center bg-[#8FBC8F] text-white p-4 md:p-6 lg:p-8 z-10"
    >
      <motion.div
        ref={sectionRef} // Reference the section for IntersectionObserver
        className={`w-full max-w-[1200px] transition-all duration-500 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`} // Apply animation based on visibility
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
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
                className={`px-4 py-2 text-sm md:text-base rounded-full transition-all duration-300 ${getButtonClassNames(
                  index
                )}`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Animated Content Area */}
          <div className="relative h-[230px] lg:min-h-[400px] md:min-h-[350px]">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`absolute inset-0 bg-white p-4 md:p-6 rounded-lg shadow-md transition-all duration-300 ${
                  activeIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  activeIndex === index ? { opacity: 1 } : { opacity: 0 }
                }
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-[#556B2F] text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-4">
                  {exp.title}
                </h3>
                <p className="text-[#556B2F] text-sm md:text-base leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </ParallaxLayer>
  );
};

export default ExperienceSection;
