import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const navLinks = [
    { to: "hero", label: "Home" },
    { to: "about", label: "About" },
    { to: "experience", label: "Experience" },
    { to: "education", label: "Education" },
    { to: "projects", label: "Projects" },
    { to: "skills", label: "Skills" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-gray-900 bg-opacity-80 shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* SN Logo scrolls to hero section */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          offset={-70}
          className="text-xl font-bold text-white cursor-pointer hover:text-blue-400 transition-colors"
        >
          SN
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 text-white">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70} // Adjust for navbar height
              className="cursor-pointer hover:text-blue-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
