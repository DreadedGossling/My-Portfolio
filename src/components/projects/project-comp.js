import React from 'react'

const ProjectComp = ({ index, project, expandedProject, toggleExpand }) => {
  return (
    <div
      key={index}
      className="bg-black shadow-lg rounded-lg p-4 md:p-8 outline outline-1 outline-cyan-800
                hover:md:scale-105 hover:bg-stone-900 transition-transform duration-300 group"
    >
      {project.url ?
        <a href={project.url}
          target='_blank'
          rel="noreferrer">
          <h3 className="text-xl md:text-2xl font-serif font-semibold outline outline-1 outline-cyan-800 mb-4 
                  p-2 text-center group-hover:bg-cyan-800">
            {project.title}
          </h3>
        </a> :
        <h3 className="text-xl md:text-2xl font-serif font-semibold outline outline-1 outline-cyan-800 mb-4 
                  p-2 text-center group-hover:bg-cyan-800">
          {project.title}
        </h3>
      }
      <div className="sm:hidden">
        <p className="text-center">
          {expandedProject === index
            ? project.description
            : `${project.description.slice(0, 200)} ...`}
        </p>
        <div className="w-full relative h-8">
          <button
            onClick={() => toggleExpand(index)}
            className="absolute bottom-0 left-0 font-mono text-cyan-600 rounded group-hover:underline"
          >
            {expandedProject === index ? "See Less" : "Read More"}
          </button>
        </div>
      </div>
      <div className="hidden sm:block text-center md:text-md ">
        {project.description}
      </div>

    </div>
  )
}

export default ProjectComp
