import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled || isOpen ? "bg-cyan-800" : "bg-transparent"
        }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="flex justify-between items-center h-20 font-serif">
          <div className="flex-shrink-0">
            <a href="#about" className="text-3xl font-bold">
              My Portfolio
            </a>
          </div>
          <div className="hidden md:flex space-x-4 text-xl">
            <a href="#about" className="hover:scale-105">
              About
            </a>
            <a href="#projects" className="hover:scale-105 ">
              Projects
            </a>
            <a href="#skills" className="hover:scale-105 ">
              Skills
            </a>
            <a href="#contact" className=" hover:scale-105 ">
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden h-screen flex justify-center bg-cyan-800 text-white text-center">
          <div className="space-y-12 pt-[30%]">
            <a
              href="#about"
              className="block px-4 py-2 hover:font-bold"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="block px-4 py-2 hover:font-bold"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="block px-4 py-2 hover:font-bold"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 hover:font-bold"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
