import React from 'react';
import { FaMedal } from 'react-icons/fa';

const Certifications = () => {
  return (
    <section className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">
        Certifications
      </h2>
      <div className="flex flex-wrap justify-center gap-8">

        {/* Azure Certification */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-6 w-64 hover:scale-105 transition-transform duration-300">
          <div className="text-blue-400 text-4xl mb-3 mx-auto">
            <FaMedal />
          </div>
          <h3 className="text-lg font-semibold">
            Microsoft Azure Fundamentals
          </h3>
          <p className="text-sm text-gray-300">AZ-900 Certified</p>
        </div>

        {/* AWS Certification */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-6 w-64 hover:scale-105 transition-transform duration-300">
          <div className="text-blue-400 text-4xl mb-3 mx-auto">
            <FaMedal />
          </div>
          <h3 className="text-lg font-semibold">
            AWS Certified Cloud Practitioner
          </h3>
          <p className="text-sm text-gray-300">Issued by AWS</p>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
