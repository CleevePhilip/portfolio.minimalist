"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiGithub, FiExternalLink, FiArrowLeft } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";
import "../app/globals.css";

const Project = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsScrolling(true);
        controls.start({
          height: 0,
          opacity: 0,
          transition: { duration: 0.5 },
        });
      } else {
        setIsScrolling(false);
        controls.start({
          height: "70px",
          opacity: 1,
          transition: { duration: 0.6 },
        });
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const projects = [
    {
      id: 1,
      title: "Color Tap Game",
      description:
        "A fun color-matching game built with HTML and Tailwind CSS.",
      image: "/images/colortap.png",
      link: "https://color-tap.vercel.app/",
      repositoryUrl: "#",
      techStack: ["HTML", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Healthcare Platform",
      description:
        "Responsive medical service landing page with appointment booking system",
      image: "/images/healthcare.png",
      link: "#",
      repositoryUrl: "#",
      techStack: ["React", "Tailwind CSS", "Formik", "React Icons"],
    },
    {
      id: 3,
      title: "Consultancy Services",
      description:
        "Business consultancy website with service showcases and contact system",
      image: "/images/consultancy.png",
      link: "#",
      repositoryUrl: "#",
      techStack: ["Next.js", "Framer Motion", "Tailwind CSS", "Nodemailer"],
    },
    {
      id: 4,
      title: "Inventory Management System",
      description:
        "Full-stack e-commerce website with product management and payment integration",
      image: "/images/inventory_management_system.jpg",
      link: "#",
      repositoryUrl: "#",
      techStack: ["C#", ".NET GUI", "Microsoft SQL"],
    },

    {
      id: 5,
      title: "Color Tap Game",
      description:
        "A fun color-matching game built with HTML and Tailwind CSS.",
      image: "/images/colortap.png",
      link: "https://color-tap.vercel.app/",
      repositoryUrl: "#",
      techStack: ["HTML", "Tailwind CSS"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      {/* Navbar */}
      <motion.nav
        className="bg-[#556B2F] text-[#F5F5DC] fixed w-full top-0 left-0 h-[70px] flex items-center z-50 shadow-lg"
        initial={{ height: "70px", opacity: 1 }}
        animate={controls}
      >
        <div className="max-w-6xl w-full mx-auto flex items-center justify-between px-4">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <FiArrowLeft className="text-xl" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <h1 className="text-lg font-bold">PROJECT ARCHIVE</h1>
        </div>
      </motion.nav>

      {/* Main Content */}
      <motion.main
        className="pt-24 pb-12 px-4 md:px-8 lg:px-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col md:flex-row items-center gap-6 p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-xl font-bold text-[#556B2F] mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#556B2F]/10 text-[#556B2F] rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                  <a
                    href={project.link}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-[#556B2F] text-white rounded-lg hover:bg-[#3D4D2B] transition-colors text-sm"
                  >
                    <FiExternalLink className="text-base" /> Live Demo
                  </a>
                  <a
                    href={project.repositoryUrl}
                    className="flex items-center justify-center gap-2 px-4 py-2 border border-[#556B2F] text-[#556B2F] rounded-lg hover:bg-[#556B2F]/10 transition-colors text-sm"
                  >
                    <FiGithub className="text-base" /> Source Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.main>

      {/* Footer */}
      <motion.footer
        className="mt-16 py-8 border-t border-[#556B2F]/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="max-w-6xl mx-auto text-center text-[#556B2F]/80">
          <p>
            Want to see more? Contact me for additional projects and case
            studies
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Project;
