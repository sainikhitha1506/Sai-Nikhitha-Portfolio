import React from "react";
import "./Experience.css";

const experienceData = [
  {
    role: "Software Engineer",
    company: "First Citizens Bank",
    duration: "Dec 2023 – Present",
    description:
      "Developed and maintained banking applications with a focus on performance, scalability, and security.",
    responsibilities: [
      "Implemented CI/CD pipelines for automated deployments.",
      "Optimized APIs for high-traffic financial transactions.",
      "Collaborated with cross-functional teams to ensure compliance and data integrity."
    ],
    technologies: ["Java", "Spring Boot", "React", "AWS", "Docker", "Kubernetes"]
  },
  {
    role: "Software Engineer",
    company: "Accenture",
    duration: "Jan 2020 – May 2022",
    description:
      "Worked on enterprise applications focusing on backend systems and cloud migrations.",
    responsibilities: [
      "Developed RESTful APIs and integrated third-party services.",
      "Automated onboarding processes with PowerShell & C# scripts.",
      "Improved performance by 30% through database query optimization."
    ],
    technologies: [".NET Core", "C#", "SQL Server", "Azure", "Jenkins", "Terraform"]
  }
];

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-card">
            <span className="duration">{exp.duration}</span>
            <h3 className="role">{exp.role}</h3>
            <h4 className="company">{exp.company}</h4>
            <p className="description">{exp.description}</p>
            <h5 className="sub-title">Responsibilities</h5>
            <ul>
              {exp.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <h5 className="sub-title">Technologies</h5>
            <div className="tech-tags">
              {exp.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
