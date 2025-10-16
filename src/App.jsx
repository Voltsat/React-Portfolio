import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about'

import ClickSpark from './components/animation/clickSpark';

function App() {
  return (
    <div className="min-h-screen w-full bg-black relative">
  {/* Cosmic Noise */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.05) 0%, transparent 40%), linear-gradient(120deg, #0f0e17 0%, #1a1b26 100%)"
    }}
  />
  <ClickSpark
    sparkColor='#fff'
    sparkSize={10}
    sparkRadius={15}
    sparkCount={8}
    duration={400}
  >
    <Navbar />
    <Hero />
    <About />
    </ClickSpark>
  </div>

  );
}

export default App;