import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-white">Contact Me</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Box - Contact Info */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-purple-500/50 transition">
          <h3 className="text-2xl font-semibold text-purple-400 mb-6">Contact Information</h3>
          <p className="flex items-center gap-3 text-gray-300 mb-4">
            <FaEnvelope className="text-purple-400 text-xl" />
            sainikhitha1506@gmail.com
          </p>
          <p className="flex items-center gap-3 text-gray-300 mb-8">
            <FaMapMarkerAlt className="text-purple-400 text-xl" />
            United States of America
          </p>

          <h3 className="text-2xl font-semibold text-purple-400 mb-4">Connect With Me</h3>
          <div className="flex gap-6">
            <a
              href="https://github.com/sainikhitha1506"
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-gray-800 rounded-full text-gray-300 hover:text-purple-400 shadow-lg hover:shadow-purple-400/50 text-2xl transition transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/YOUR-LINKEDIN"
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-gray-800 rounded-full text-gray-300 hover:text-purple-400 shadow-lg hover:shadow-purple-400/50 text-2xl transition transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:sainikhitha1506@gmail.com"
              className="p-4 bg-gray-800 rounded-full text-gray-300 hover:text-purple-400 shadow-lg hover:shadow-purple-400/50 text-2xl transition transform hover:scale-110"
            >
              <FaEnvelope />
            </a>
            <a
              href="tel:+13312491455"
              className="p-4 bg-gray-800 rounded-full text-gray-300 hover:text-purple-400 shadow-lg hover:shadow-purple-400/50 text-2xl transition transform hover:scale-110"
            >
              <FaPhone />
            </a>
          </div>
        </div>

        {/* Right Box - Contact Form */}
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-purple-500/50 transition">
          <h3 className="text-2xl font-semibold text-purple-400 mb-6">Send Me a Message</h3>
          <form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 mb-4 rounded bg-gray-800 text-white border border-purple-500 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 mb-4 rounded bg-gray-800 text-white border border-purple-500 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 mb-4 rounded bg-gray-800 text-white border border-purple-500 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold shadow-lg hover:shadow-purple-400/50 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
