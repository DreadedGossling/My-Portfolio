import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <motion.section
    className="px-4 pb-6 md:pb-12 text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="bg-white py-10 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-bold font-mono text">About Me</h2>
        <p className="text-center md:text-xl mb-10 md:mb-20">
          <span className="text-cyan-500 text-2xl font-bold">— </span>
          Who AM I
          <span className="text-cyan-500 text-2xl font-bold"> —</span>
        </p>
        <div className="lg:flex md:gap-4 xl:gap-0 justify-between items-center md:mx-auto">
          <div className="w-full flex justify-center lg:justify-start">
            <img
              src='/ravi_kr_sharma.jpg'
              alt="Profile"
              className="w-48 md:w-80 h-48 md:h-80"
            />
          </div>
          <div>
            <p className="max-w-xl text-lg md:text-2xl font text-start mt-4 :mt-0 capitalize">
              I'm <span>Ravi</span>, a passionate software engineer.
            </p>
            <p className="text-justify mt-2 md:mt-6 capitalize  md:text-lg">
              Innovative and detail-oriented frontend developer with 4+ years of experience building responsive, user-centric web applications.
              Proficient in modern frameworks like React.js, Vue.js, and Next.js, with a strong foundation in HTML, CSS, JavaScript, and TypeScript.
            </p>
            <div className="flex justify-start py-3 md:py-6">
              <a href="/RaviKumarSharma_4years+_frontend.pdf" download="Ravi Kumar Sharma's Resume"
                target="_blank">
                <button className="p-2 md:p-3 text-white bg-cyan-800 hover:bg-cyan-900">Download Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

export default About;
