import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectList from "./project-comp";

const projectList = [
  {
    title: "Diversify",
    url: "https://diversify-items.vercel.app/",
    description:
      "Developed and maintain a fully responsive data management platform for a refund portal named Diversify using React.js and Tailwind CSS. The application allows users to efficiently track products with complete CRUD functionality, ensuring seamless data handling. Deployed on Vercel for high performance, scalability, and reliability, with ongoing maintenance to deliver a smooth and optimized user experience.",
    icon: "fas fa-database",
  },
  {
    title: "Michigan Care Angels",
    url: 'https://michigancareangels.com/',
    description:
      "Developed a responsive UI for Michigan Care Angels using Next.js and React.js, styled with CSS and Tailwind CSS. Implemented form validation with Zod resolver for seamless user interaction. Optimized for accessibility across devices, ensuring a smooth experience. Deployed on Vercel for reliable performance, creating a professional, user-centric platform for healthcare services.",
    icon: "fas fa-tshirt",
  },
  {
    title: "Shopaway",
    url: 'https://shop-away-website.vercel.app/',
    description:
      "Designed and developed a personal e-commerce web app using React.js, styled with Tailwind CSS, and enhanced with React-Icons. Integrated an external API for dynamic product management, allowing users to add/remove items seamlessly. Built with a responsive design for optimal usability across devices. Deployed on Vercel, ensuring fast performance and showcasing expertise in frontend e-commerce development.",
    icon: "fas fa-cloud-sun-rain",
  },
  {
    title: "Aurocares",
    url: 'https://timesheets-staging.vercel.app/',
    description:
      "Built a timesheet web app for AuroCares in the healthcare domain using React.js and Next.js, deployed on Vercel. Features include attendance tracking, shift management, and API-based reminders. Designed with Material-UI and Tailwind CSS for a modern, user-friendly interface. Ensured a responsive experience, delivering a robust solution for healthcare professionals' scheduling needs.",
    icon: "fas fa-utensils",
  },
  {
    title: "Immigration Calculator",
    url: '',
    description:
      "Designed and developed an Immigration Calculator for students in the USA using Nuxt.js and Vue.js, styled with Tailwind CSS, and deployed on Cloudflare. The tool calculates visa timelines and eligibility with real-time updates, dynamic routing, and efficient state management. Featuring a responsive design, it ensures accurate calculations and seamless accessibility, simplifying immigration planning for students.",
    icon: "fas fa-gamepad",
  },
  {
    title: "SJS Yoga",
    url: 'https://www.sjsyoga.in/',
    description:
      "Designed and developed the SJS Yoga website for a Bangalore-based yoga firm using Nuxt.js and Vue.js, styled with Tailwind CSS and Vuetify, and deployed on Cloudflare. The site offers class details, schedules, and a dynamic booking form. With a clean, responsive design, it ensures seamless navigation, fast load times, and an engaging user experience across all devices.",
    icon: "fas fa-film",
  },
  {
    title: "Diamond Future",
    url: '',
    description:
      "Developed the Diamond Future website for a Canada-based diamond firm using React.js, Tailwind CSS, and Vuetify, deployed on Cloudflare. The site showcases ethically sourced diamonds, ensuring quality verification and transparency. Designed with a responsive layout and user-friendly interface, it enables seamless navigation across devices, reflecting the brand’s excellence through an elegant and informative platform.",
    icon: "fas fa-film",
  },
  {
    title: "Agua Wireless Systems",
    url: 'https://agua-ws-clone.vercel.app/',
    description:
      "Developed a responsive landing page for Agua Wireless System using Next.js, React.js, and Tailwind CSS. Integrated an animated slideshow and a dynamic form for engagement. Deployed on Vercel for fast performance. Ensured seamless usability across all devices, creating a professional, interactive experience that reflects the brand’s innovation and enhances speed, accessibility, and engagement.",
    icon: "fas fa-film",
  },
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null); // Store the ID of the currently expanded project

  const toggleExpand = (index) => {
    setExpandedProject((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <motion.section
      className="px-4 py-6 md:py-12"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center font-mono">Projects</h2>
          <p className="text-center md:text-xl mb-10 md:mb-20">
            <span className="text-cyan-500 text-2xl font-bold">— </span>
            Created By Me
            <span className="text-cyan-500 text-2xl font-bold"> —</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 md:py-6">
            {projectList.map((project, index) => (
              <ProjectList
                project={project}
                index={index}
                key={project.title}
                expandedProject={expandedProject}
                toggleExpand={toggleExpand}
              />
              // <div
              //   key={index}
              //   className="bg-stone-900 shadow-lg rounded-lg p-4 md:p-8 outline outline-1 outline-cyan-800
              //   hover:md:scale-105 hover:bg-cyan-800 transition-transform duration-300 group"
              // >
              //   <div className="flex items-center justify-center mb-4">
              //     <span className=" text-4xl">
              //       <i className={project.icon}></i>
              //     </span>
              //   </div>
              //   <h3 className="text-xl md:text-2xl font-serif font-semibold outline outline-1 outline-cyan-800 mb-4 
              //     p-2 text-center group-hover:outline-white">
              //     {project.title}
              //   </h3>
              //   <div className="sm:hidden">
              //     <p className="text-justify">
              //       {expandedProject === index
              //         ? project.description
              //         : `${project.description.slice(0, 200)} ...`}
              //     </p>
              //     <div className="w-full relative h-8">
              //       <button
              //         onClick={() => toggleExpand(index)}
              //         className="absolute bottom-0 left-0 font-mono text-cyan-600 rounded group-hover:underline group-hover:text-white font-bold"
              //       >
              //         {expandedProject === index ? "See Less" : "Read More"}
              //       </button>
              //     </div>
              //   </div>
              //   <div className="hidden sm:block text-justify md:text-lg capitalize">
              //     {project.description}
              //   </div>

              // </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
};

export default Projects;
