import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

const Introduction = () => {
  return (
    <div className="intro-section bg-dark flex items-center justify-center 
      h-screen text-center text-white relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      <div className="z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500
           inline-block text-transparent bg-clip-text font-serif">
            Ravi Kumar Sharma</span>
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl font-semibold mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Crafting Stunning Digital Experiences
        </motion.h2>

        <motion.div
          className="text-xl md:text-3xl mb-8 font-mono"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <span>I specialize in {""}</span>
          <span className="text-cyan-300 italic font-semibold">
            <ReactTyped
              strings={["React.js", "Next.js", "Vue.js", "Nuxt.js"]}
              typeSpeed={60}
              backSpeed={30}
              loop
            />
          </span>
          <span className="text-gray-100"> and </span>
          <span className="text-cyan-300 animate-pulse">Creative Designs</span>.
        </motion.div>
        <a href="#contact">
          <motion.button className="mt-6 p-2 md:p-3 bg-cyan-800 hover:bg-cyan-900 text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            Let's Collaborate
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default Introduction;
