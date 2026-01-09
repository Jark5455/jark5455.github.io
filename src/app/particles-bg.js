"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Background() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        className="absolute flex top-0 bottom-0 right-0 left-0 bg-yellow bg-cover bg-center bg-no-repeat -z-10"
        particlesLoaded={particlesLoaded}
        url="/json/particles.json"
      />
    );
  }

  return <></>;
}
