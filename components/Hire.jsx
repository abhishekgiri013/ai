"use client";
import { motion } from "framer-motion";

const skills = [
  "JavaScript", "React.js", "Next.js", "Node.js", "MongoDB",
  "Express.js", "Tailwind CSS", "Framer Motion", "Python",
  "C++", "REST APIs", "GraphQL", "PostgreSQL"
];

const Projects = () => {
  return (
    <section
      id="hire"
      className="py-16 px-4 sm:px-8 bg-black text-white min-h-screen flex flex-col-reverse md:flex-row items-center md:items-start m-4 md:m-12 rounded-2xl gap-5 md:gap-8"
    >
        
          {/* Right Section - Skills */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold text-amber-300 text-center md:text-left">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-gray-200">
          {skills.map((skill, index) => (
            <li key={index} className="bg-gray-800 p-3 rounded-md text-center">
              {skill}
            </li>
          ))}
        </ul>
      </div>
      {/* Left Section - Description */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl text-gray-300">Hire Me?</h1>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          I am a passionate Full-Stack Developer specializing in modern web technologies.
          I build innovative, scalable, and user-friendly web applications. My expertise includes
          front-end frameworks, backend development, database management, and real-time features.
          Let's collaborate to turn your ideas into reality!
        </p>

        {/* Resume Download */}
        <div className="mt-6">
          <a
            href="/abhishek.pdf" // Change this to your actual resume file path
            download="abhishek.pdf"
            className="bg-amber-400 text-black font-bold py-3 px-6 rounded-md hover:bg-amber-500 transition-all inline-block"
          >
            Download Resume
          </a>
        </div>
      </div>

    
    </section>
  );
};

export default Projects;
