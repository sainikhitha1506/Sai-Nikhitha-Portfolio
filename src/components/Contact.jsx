
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-6 text-white">Contact</h2>
      <p className="mb-4 text-gray-300">Email me at: <a href="mailto:sainikhitha1506@gmail.com" className="text-blue-400">sainikhitha1506@gmail.com</a></p>
      <div className="flex justify-center gap-4">
        <a href="https://github.com/sainikhitha1506" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-blue-400">GitHub</a>
        <a href="https://linkedin.com/in/YOUR-LINKEDIN" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-blue-400">LinkedIn</a>
      </div>
    </section>
  );
};

export default Contact;
