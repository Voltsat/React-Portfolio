import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about'

import ClickSpark from './components/animation/clickSpark';

function App() {
  return (
    <div className="min-h-screen w-full bg-black relative">
      {/* Midnight Mist */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
          radial-gradient(circle at 50% 100%, rgba(70, 85, 110, 0.5) 0%, transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.4) 0%, transparent 70%),
          radial-gradient(circle at 50% 100%, rgba(181, 184, 208, 0.3) 0%, transparent 80%)
        `,
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