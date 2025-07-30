import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 text-center bg-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-white">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">

        {/* Project 1 */}
        <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold mb-2 text-blue-400">Nikhi's Shopping App</h3>
          <p className="text-gray-300 mb-3">
            A full-stack e-commerce platform built with Java, Spring Boot, and React.
            Includes user authentication, shopping cart, and order management.
          </p>
          <a 
            href="https://github.com/sainikhitha1506/Nikhi-s-shopping-app" 
            target="_blank" 
            rel="noreferrer" 
            className="text-blue-400 font-semibold hover:underline"
          >
            View Code
          </a>
        </div>

        {/* Project 2 */}
        <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold mb-2 text-blue-400">Smart Resume Analyzer</h3>
          <p className="text-gray-300 mb-3">
            A resume analysis tool built with Spring Boot and React. Uses AI-based keyword matching
            to rank resumes against job descriptions with real-time insights.
          </p>
          <a 
            href="https://github.com/sainikhitha1506/smart-resume-analyzer" 
            target="_blank" 
            rel="noreferrer" 
            className="text-blue-400 font-semibold hover:underline"
          >
            View Code
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;

