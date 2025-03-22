"use client";
import { motion } from "framer-motion";

const projects = [
  { title: "Project 1", description: "Description for project 1" },
  { title: "Project 2", description: "Description for project 2" },
  { title: "Project 3", description: "Description for project 3" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-8 bg-black text-white min-h-screen flex flex-col items-center">
      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl font-bold relative inline-block pb-2"
      >
        Projects
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="absolute bottom-0 left-0 w-full h-1 bg-white origin-left"
        />
      </motion.h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.2)" }}
            className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700 transition-all duration-300 cursor-pointer hover:bg-gray-700"
          >
            <h3 className="text-2xl font-semibold relative pb-2">
              {project.title}
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-1 bg-white"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </h3>
            <p className="text-gray-400 mt-3">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
