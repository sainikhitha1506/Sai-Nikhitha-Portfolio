import React from 'react';
import { FaSchool, FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-2 text-blue-400">Education</h2>
      <p className="text-gray-400 mb-10">My academic journey and achievements</p>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        
        {/* Master's */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-400 to-cyan-400 p-4 rounded-full text-white text-3xl">
              <FaGraduationCap />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-white">Master’s in Management Information Systems</h3>
          <p className="text-gray-400 text-sm mb-2">2022 – 2023 | USA</p>
          <p className="text-gray-300">
            Specialized in full-stack development, cloud computing, and AI projects.
          </p>
        </div>
        
        {/* Bachelor's */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-400 to-cyan-400 p-4 rounded-full text-white text-3xl">
              <FaSchool />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-white">Bachelor’s in Computer Science</h3>
          <p className="text-gray-400 text-sm mb-2">2017 – 2021 | India</p>
          <p className="text-gray-300">
            Focused on software engineering, data structures, and database design.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Education;
