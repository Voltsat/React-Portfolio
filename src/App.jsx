import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Project from "./components/project";
import ClickSpark from "./components/animation/clickSpark";
import Cursor from "./components/cursor";

function App() {
  useEffect(() => {
    // ✅ Versi ringan banget tapi tetap halus
    const lenis = new Lenis({
      duration: 1.4,          // 0.6–0.8 = halus tapi tetap responsif
      easing: (t) => 1 - Math.pow(1 - t, 3), // cubic easing, licin tapi ringan
      smoothWheel: true,
      smoothTouch: false,     // matikan biar gak drop FPS di HP
      touchMultiplier: 1.2,
    });

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    // ✅ Bersihin animasi kalau komponen di-unmount
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black relative overflow-x-hidden">
      {/* Background mist */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 100%, rgba(70, 85, 110, 0.35) 0%, transparent 60%),
            radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.3) 0%, transparent 70%),
            radial-gradient(circle at 50% 100%, rgba(181, 184, 208, 0.25) 0%, transparent 80%)
          `,
        }}
      />
      <Cursor />

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
      </ClickSpark>
    </div>
  );
}

export default App;
