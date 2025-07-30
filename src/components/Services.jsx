import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaCloud } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    { title: 'Web Development', icon: <FaLaptopCode />, text: 'Creating responsive and dynamic web applications.' },
    { title: 'Mobile Apps', icon: <FaMobileAlt />, text: 'Building cross-platform mobile experiences.' },
    { title: 'Cloud Solutions', icon: <FaCloud />, text: 'Deploying and managing cloud infrastructure.' },
  ];

  return (
    <section className="services">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <div className="service-icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Services;
