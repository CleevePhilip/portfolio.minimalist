import Link from "next/link";
import { FiGithub, FiExternalLink, FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "../app/globals.css";

const Project = () => {
  // Projects data defined within the component
  const projects = [
    {
      id: 1,
      title: "Healthcare Platform",
      description:
        "Responsive medical service landing page with appointment booking system",
      image: "/images/healthcare.png",
      link: "#",
      repositoryUrl: "#",
      techStack: ["React", "Tailwind CSS", "Formik", "React Icons"],
    },
    {
      id: 2,
      title: "Consultancy Services",
      description:
        "Business consultancy website with service showcases and contact system",
      image: "/images/consultancy.png",
      link: "#",
      repositoryUrl: "#",
      techStack: ["Next.js", "Framer Motion", "Tailwind CSS", "Nodemailer"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      {/* Navigation Header */}
      <motion.nav
        className="bg-[#556B2F] text-[#F5F5DC] py-6 px-4 md:px-8 lg:px-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }} // Smooth fade-in transition
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <FiArrowLeft className="text-xl" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <h1 className="text-2xl font-bold">Project Archive</h1>
        </div>
      </motion.nav>

      {/* Projects Grid */}
      <motion.main
        className="py-12 px-4 md:px-8 lg:px-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }} // Fade-in after header
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }} // Initial state off-screen
              animate={{ opacity: 1, y: 0 }} // Fade and slide into position
              transition={{ duration: 0.8 }} // Animation duration
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#556B2F]/90 via-[#556B2F]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-[#556B2F] mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#556B2F]/10 text-[#556B2F] rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 px-4 py-2 bg-[#556B2F] text-white rounded-lg hover:bg-[#3D4D2B] transition-colors text-sm"
                  >
                    <FiExternalLink className="text-base" />
                    Live Demo
                  </a>
                  <a
                    href={project.repositoryUrl}
                    className="flex items-center gap-2 px-4 py-2 border border-[#556B2F] text-[#556B2F] rounded-lg hover:bg-[#556B2F]/10 transition-colors text-sm"
                  >
                    <FiGithub className="text-base" />
                    Source Code
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
        transition={{ duration: 1, delay: 0.5 }} // Fade-in after main content
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
