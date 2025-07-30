import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
// Removed Skills import as we will use SkillOutlet instead
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import CubeSkills from './components/CubeSkills';
import Skills from './components/Skills';



function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      {/* Replaced Skills with SkillOutlet */}
      <Skills />
      <CubeSkills />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
