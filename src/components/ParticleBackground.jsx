import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#111827" },
        particles: {
          color: { value: "#00ffff" },
          links: { enable: true, color: "#00ffff", distance: 150 },
          move: { enable: true, speed: 1 },
          number: { value: 40 },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } },
        },
      }}
    />
  );
};

export default ParticleBackground;
