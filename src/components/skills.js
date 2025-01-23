import React from "react";
import { motion } from "framer-motion";

const skills = ["React.js", "Next.js", "Vue.js", "Nuxt.js", "JavaScript",
  "Tailwind CSS", "Node.js", "Git", "Jira", "Vuetify", "Firebase", "Express.js",
  "Firestore", "Mongo Db", "Material UI", "Postman", "Strapi", "Cloudflare","Vercel",
  "Netlify"
];

const Skills = () => (
  <motion.section
    className="px-4 py-6 md:py-12 text-center"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="bg-white py-10 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-bold  font-mono">Skills</h2>
        <p className="text-center md:text-xl mb-10 md:mb-20">
          <span className="text-cyan-500 text-2xl font-bold">— </span>
          Technologies I Know
          <span className="text-cyan-500 text-2xl font-bold"> —</span>
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-2 md:px-5 py-1 md:py-3 bg-cyan-800 text-white cursor-text
              rounded-tr-2xl rounded-bl-2xl text-sm md:text-lg hover:shadow-lg hover:shadow-cyan-900
              hover:translate-y-1 
              transition duration-300 ease-in-out"
            >
              {skill}
            </div>

          ))}
        </div>
        <p className="text-justify md:py-6 pt-6 md:pt-16 md:text-lg capitalize">
          As a frontend developer with 4 years of experience, I specialize in crafting user-centric, responsive, and visually appealing interfaces.
          My expertise lies in leveraging modern JavaScript frameworks, optimizing web performance, and translating design concepts into fully functional, scalable web applications.
          I am passionate about creating seamless user experiences and staying updated with the latest technologies to deliver cutting-edge solutions.
        </p>
      </div>
    </div>
  </motion.section>
);

export default Skills;
