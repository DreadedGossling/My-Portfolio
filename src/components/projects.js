import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Michigan Care Angels",
    description:
      "Developed a responsive UI for Michigan Care Angels, a health care domain website, using Next.js and React.js. Implemented efficient form management and validation with Zod resolver, ensuring seamless form submission and user interaction. Designed a visually appealing and fully responsive user interface using CSS and Tailwind CSS, optimized for accessibility across devices. Deployed the website on Vercel for reliable performance, delivering a professional and user-centric platform for health care services.",
    icon: "fas fa-tshirt",
  },
  {
    title: "Shopaway",
    description:
      "Designed and developed a personal e-commerce web application during free time using React.js, styled with Tailwind CSS, and enhanced with icons from React-Icons. The application integrates data from an external API and provides dynamic functionality to add and remove products from the cart seamlessly. Built with a responsive design to ensure optimal usability across all devices. Deployed on Vercel for fast performance and reliability, showcasing expertise in frontend development and e-commerce functionality.",
    icon: "fas fa-cloud-sun-rain",
  },
  {
    title: "Aurocares",
    description:
      "Built a comprehensive timesheet web application for the health care domain, AuroCares, using React.js and Next.js. The application includes key features such as attendance tracking, shift management, and API integration for sending reminders and notifications about shifts. Designed a modern and user-friendly interface with Material-UI and Tailwind CSS, ensuring a seamless experience across devices. Deployed on Vercel for optimal performance, creating a robust solution tailored to the needs of health care professionals.",
    icon: "fas fa-utensils",
  },
  {
    title: "Immigration Calculator",
    description:
      "Designed and developed an Immigration Calculator for Students working in the USA using Nuxt.js & Vue JS, providing an intuitive platform to calculate visa timelines and eligibility. The application leverages dynamic routing, reusable components, and real-time data updates for seamless user experience.Implemented responsive design to ensure accessibility across devices and utilized efficient state management for accurate calculations. This tool simplifies complex immigration calculations, offering students clarity and guidance regarding their stay and work permits. Developed using Nuxt JS, styled using tailwind css and deployed using cloudflare.",
    icon: "fas fa-gamepad",
  },
  {
    title: "SJS Yoga",
    description:
      "Designed and developed the SJS Yoga website for a Bangalore-based yoga firm using Nuxt.js & Vue JS, providing a platform for users to explore detailed information about various yoga classes and schedules. The website features a clean, responsive design for an engaging user experience on all devices. Integrated a dynamic form to enable users to easily connect with the firm, inquire about classes, and book sessions. Leveraged Nuxt.js capabilities for seamless navigation, fast load times, and optimized performance, ensuring a professional online presence for the yoga studio. styled using tailwind css and vuetify & deployed using cloudflare.",
    icon: "fas fa-film",
  },
  {
    title: "Diamond Future",
    description:
      "Developed the Diamond Future website for a Canada-based firm specializing in diamond extraction and quality verification. The website highlights the firm's expertise in ethically sourced diamonds, providing detailed insights and showcasing the authenticity and quality of their products. Designed with a user-friendly interface and responsive layout, the site offers seamless navigation across devices. Integrated features for users to check quality, ensuring trust and transparency. Leveraged modern web development practices to create an elegant and informative platform that reflects the brand's excellence.Developed using React JS, styled using tailwind css and vuetify & deployed using cloudflare.",
    icon: "fas fa-film",
  },
  {
    title: "Agua Wireless Systems",
    description:
      "Developed a cloned responsive landing page for Agua Wireless System using Next.js and React.js, styled with Tailwind CSS. The landing page features an engaging slideshow animation to showcase product highlights and a dynamic form for enhanced user interaction. Designed to be fully responsive, the website ensures seamless usability across small to large screens. Deployed the project on Vercel for fast and reliable performance, creating a professional and interactive user experience that mirrors the brand's innovative essence.",
    icon: "fas fa-film",
  },
];

const Projects = () => (
  <motion.section
    className="px-4 -my-16 md:-my-4"
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
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-stone-900 shadow-lg rounded-lg p-4 md:p-8 outline outline-1 outline-cyan-800
              hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                <span className=" text-4xl">
                  <i className={project.icon}></i>
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-semibold outline outline-1 outline-cyan-800 mb-4 
              p-2 text-center ">
                {project.title}
              </h3>
              <p className="text-justify md:text-lg capitalize">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.section>
);

export default Projects;
