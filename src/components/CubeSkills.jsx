import React from "react";
import { FaAws, FaDocker, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiKubernetes, SiMongodb, SiSpringboot } from "react-icons/si";
import "./SkillsCube.css";

const CubeSkills = () => {
  return (
    <section className="core-skills-section">
      <h2 className="core-skills-title">Core Skills</h2>
      <div className="cube-container">
        {/* Cube 1 */}
        <div className="cube">
          <div className="face"><FaAws size={30} /><p>AWS</p></div>
          <div className="face"><FaDocker size={30} /><p>Docker</p></div>
          <div className="face"><SiKubernetes size={30} /><p>Kubernetes</p></div>
          <div className="face"><FaReact size={30} /><p>React</p></div>
          <div className="face"><FaNodeJs size={30} /><p>Node.js</p></div>
          <div className="face"><FaJava size={30} /><p>Java</p></div>
        </div>

        {/* Cube 2 */}
        <div className="cube">
          <div className="face"><SiSpringboot size={30} /><p>Spring Boot</p></div>
          <div className="face"><SiMongodb size={30} /><p>MongoDB</p></div>
          <div className="face"><FaDocker size={30} /><p>Docker</p></div>
          <div className="face"><FaReact size={30} /><p>React</p></div>
          <div className="face"><FaAws size={30} /><p>AWS</p></div>
          <div className="face"><FaNodeJs size={30} /><p>Node.js</p></div>
        </div>
      </div>
    </section>
  );
};

export default CubeSkills;
