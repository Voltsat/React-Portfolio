import { Github, Linkedin, Mail, ArrowRight, UserStar, PanelsTopLeft, ArrowDown } from 'lucide-react';
import TextType from './animation/textType';



export default
  function Hero() {
  return (
    <section id='home' className="z-10 mx-4 flex flex-col text-center min-h-screen justify-center relative motion-scale-in-[0.25] motion-blur-in-[10px] motion-delay-[0.25s]/blur motion-ease-linear">
      <div className="flex gap-4 mx-auto">
        <h1 className="text-xl md:text-3xl font-thin text-white mb-3">Hi, I am</h1>
        <span className="text-2xl md:text-6xl font-bold mb-2 md:mb-5 text-white z-10">
          <TextType
            text={["Devaccto RPL", "Dhabit Muhammad Faqih"]}
            textColors={["#06b6d4", "#319e81"]}
            typingSpeed={60}
            pauseDuration={1750}
            showCursor={true}
            cursorCharacter="|"
          />
        </span>
      </div>
      <h2 className="text-3xl md:text-8xl font-semibold mb-6 text-white">Mobile Developer</h2>
      <p className="text-neutral-300 text-sm md:text-lg w-96 md:w-[768px] max-w-full mx-auto">Building products that matter. I am a FullStack Developer dedicated to designing and implementing high-performance, scalable systems that solve complex business challenges.</p>
      <div className="flex justify-center space-x-6 mb-8 text-zinc-300 mt-4">
        <a href="https://github.com/Voltsat" target="_blank" className=" p-[6px] rounded-md hover:text-white  transition-colors duration-300 ">
          <Github size={24} />
        </a>
        <a href="https://imnotoldenoughlol" target="_blank" className=" p-[6px] rounded-md hover:text-white  transition-colors duration-300">
          <Linkedin size={24} />
        </a>
        <a href="mailto:dhabitmuhammadfaqih@gmail.com" className=" p-[6px] rounded-md hover:text-white  transition-colors duration-300">
          <Mail size={24} />
        </a>
      </div>
      <div className="flex justify-center space-x-4 mb-8">
        <a href='#contact' className="flex items-center bg-blue-600 px-6 py-3 rounded-lg font-medium border border-gray-600 text-white hover:bg-blue-700 motion-scale-in-[0.5] motion-translate-x-in-[-141%] motion-translate-y-in-[4%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate motion-ease-bounce">
          <UserStar className="mr-1" />
          <span>Get in Touch</span>
        </a>
        <a href='#project' className="flex group items-center bg-transparent pl-6 pr-1 py-3 rounded-lg font-medium border border-gray-600 text-white hover:border-blue-600 hover:pr-4 motion-scale-in-[0.5] motion-translate-x-in-[159%] motion-translate-y-in-[1%] motion-opacity-in-[0%] motion-rotate-in-[12deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate motion-ease-bounce">
          <PanelsTopLeft className="mr-1" />
          <span>View Projects</span>
          <ArrowRight size={18} className="scale-0 group-hover:scale-100 ml-1 transition-all duration-200" />
        </a>
      </div>
      <div className='absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce'>
        <ArrowDown size={30} className='text-white' />
      </div>
    </section>

  );
}