"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <div className="font-light">
      <section 
        id="about" 
        className="py-20 px-6 sm:px-8 rounded-2xl border-2 shadow-2xl bg-black text-white min-h-screen flex flex-col items-center m-6 sm:m-20 hover:bg-black hover:scale-105 hover:shadow-2xl"
      >
        {/* Title Animation */}
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          
          {/* Left Side - Text */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 text-left sm:ml-20"
          >
            <h1 className="text-3xl sm:text-5xl mb-6 text-center sm:text-left">
              Hello, I am <span className="text-amber-300">Abhishek</span> - a passionate full-stack developer, specializing in modern web technologies.  
              I love building innovative digital solutions that enhance user experiences.  
            </h1>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 flex justify-center"
          >
            <Image
              src="/profile.jpg" 
              alt="Abhishek Giri"
              width={250} 
              height={250} 
              className="shadow-lg rounded-full sm:w-[350px] sm:h-[350px]"
            />
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="mt-10 bg-gray-900 p-5 rounded-lg text-center sm:text-left">
          <span className="bg-amber-300 rounded-sm p-1 text-black font-bold mr-2">Hire me</span>
          Currently working on creative projects. Learn more →
        </div>
      </section>
    </div>
  );
};

export default About;
