import React from 'react';
import './CubeSkills.css'; // We'll create this CSS file

const CubeSkills = () => {
  return (
    <section className="cube-section">
      <h2 className="cube-title">Core Skills</h2>
      <div className="cube-container">
        <div className="cube">
          <div className="face front">React</div>
          <div className="face back">Node.js</div>
          <div className="face right">AWS</div>
          <div className="face left">Angular</div>
          <div className="face top">SQL</div>
          <div className="face bottom">Docker</div>
        </div>
      </div>
    </section>
  );
};

export default CubeSkills;

