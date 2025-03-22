"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "CompEgg",
    description: "React, Node, Express, MongoDB, Tailwind CSS, Firebase ",
    liveLink: "https://compegg.onrender.com/",
    githubLink: "https://github.com/abhishekgiri013/CompEgg",
    image: "/project1.png", // Update with actual image path
  },
  {
    title: "NextCommerce",
    description: " Next.js 14, Sanity.io, Stripe, and Shadcn/UI",
    liveLink: "https://e-commerce-lovat-sigma-76.vercel.app/",
    githubLink: "https://github.com/abhishekgiri013/NextCommerce",
    image: "/image.png", // Update with actual image path
  },
  {
    title: "Zestofy",
    description: "Next.js, Node, Express, Tailwind CSS, Firebase  ",
    liveLink: "https://zestofy.com/",
    githubLink: "https://github.com/abhishekgiri013/zestofy.com",
    image: "/project3.png", // Update with actual image path
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-8 bg-black text-white min-h-screen flex flex-col items-center"
    >
      {/* Title Animation */}
   
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
            {/* Project Image */}
            <div className="relative w-full h-48 overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Project Info */}
            <h3 className="text-2xl font-semibold mt-4 relative pb-2">
              {project.title}
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-1 bg-white"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </h3>
            <p className="text-gray-400 mt-3">{project.description}</p>

            {/* Links */}
            <div className="mt-4 flex gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-400 text-black font-bold py-2 px-4 rounded-md hover:bg-amber-500 transition-all"
              >
                Live
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-500 transition-all"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
