import React from "react";
import { FaReact, FaHtml5, FaBootstrap, FaNodeJs, FaAws, FaPython, FaCloud } from "react-icons/fa";
import { SiJavascript, SiFlask, SiFastapi, SiAzure, SiShell } from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    icon: <FaReact className="text-teal-400 text-xl" />,
    items: [
      { name: "React", level: "90%" },
      { name: "JavaScript", level: "85%" },
      { name: "HTML/CSS", level: "90%" },
      { name: "Bootstrap", level: "80%" },
    ],
  },
  {
    category: "Backend",
    icon: <FaNodeJs className="text-green-400 text-xl" />,
    items: [
      { name: "Node.js", level: "80%" },
      { name: "Python", level: "85%" },
      { name: "Flask", level: "75%" },
      { name: "FastAPI", level: "80%" },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: <FaCloud className="text-blue-400 text-xl" />,
    items: [
      { name: "Azure", level: "85%" },
      { name: "AWS", level: "75%" },
      { name: "DevOps", level: "80%" },
      { name: "Shell Scripting", level: "70%" },
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-8 text-blue-400">Technical Skills</h2>
      <p className="mb-12 text-gray-400">Technologies and tools I work with</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {skills.map((group, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2">
              {group.icon} {group.category}
            </h3>
            {group.items.map((skill, idx) => (
              <div key={idx} className="mb-4 text-left">
                <div className="flex justify-between text-sm mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-400 to-teal-400 h-2 rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
