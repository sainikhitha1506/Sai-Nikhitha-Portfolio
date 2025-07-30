import React from "react";
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-bg text-white relative">
      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Floating Particles */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Sai Nikhitha
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl font-medium mb-6">
          <ReactTyped
            strings={[
              "Software Engineer",
              "Full Stack Developer",
              "Cloud Enthusiast",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </h2>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-500 rounded-lg font-medium shadow-lg hover:scale-105 hover:shadow-blue-500/50 transition-all duration-300"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-6 py-3 bg-gray-700 rounded-lg font-medium shadow-lg hover:scale-105 hover:shadow-gray-500/50 transition-all duration-300"
          >
            View Projects
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:sainikhitha1506@gmail.com"
            className="hover:text-red-400 transition-colors duration-300"
          >
            <FaEnvelope />
          </a>
          <a
            href="tel:+13312491455"
            className="hover:text-green-400 transition-colors duration-300"
          >
            <FaPhone />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
