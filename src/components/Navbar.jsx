
import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-gray-900 bg-opacity-80 shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">SN</h1>
        <div className="space-x-6 text-white">
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400">Home</Link>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400">About</Link>
          <Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400">Experience</Link>
          <Link to="education" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400">Education</Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400">Projects</Link>
          <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400">Skills</Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
