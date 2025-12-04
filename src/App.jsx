import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Project from "./components/project";
import Skills from "./components/skill";
import Contact from "./components/contact";


import ClickSpark from "./components/animation/clickSpark";
import Cursor from "./components/cursor";
import LightRays from './components/LightRays';


function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 1.2,
    });

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="bg-slate-900 w-full">
      
    <div className="fixed inset-0 z-0">
  <LightRays
    raysOrigin="top-center"
    raysColor="#686868"
    raysSpeed={1.5}
    lightSpread={0.8}
    rayLength={1.2}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays"
  />

    </div>
    <div>
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Navbar />
        <Hero />
        <About />
        <Project />
        <Skills />
        <Contact />
      </ClickSpark>

    </div>

    </div>




  );
}

export default App;
