import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-white'>
      <div className='flex justify-center space-x-4 md:space-x-20 p-4 md:p-8'>
        <a href="https://www.instagram.com/_sharma_r.k/" target='_blank' rel='noreferrer'>
          <FaInstagram className='md:size-8 hover:text-cyan-800 hover:scale-105 transition ease-in duration-300 cursor-pointer' />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100001232814919" target='_blank' rel='noreferrer'>
          <FaFacebook className='md:size-8 hover:text-cyan-800 hover:scale-105 transition ease-in duration-300 cursor-pointer' />
        </a>
        <a href="https://www.linkedin.com/in/ravi-sharma-92689b179" target='_blank' rel='noreferrer'>
          <FaLinkedin className='md:size-8 hover:text-cyan-800 hover:scale-105 transition ease-in duration-300 cursor-pointer' />
        </a>
        <a href="https://github.com/DreadedGossling" target='_blank' rel='noreferrer'>
          <FaGithub className='md:size-8 hover:text-cyan-800 hover:scale-105 transition ease-in duration-300 cursor-pointer' />
        </a>
      </div>
      <footer className="p-2 md:p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Portfolio</p>
      </footer>
    </div>
  )
}

export default Footer
