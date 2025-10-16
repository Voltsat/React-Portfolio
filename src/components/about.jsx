import ScrollReveal from './animation/scrollReveal';
import TrueFocus from './animation/trueFocus';
import TextType from './animation/textType';

import Muka from "../assets/jeannedarc.jpg";

export default function About() {
  return (
    <section className="pb-6 z-10 relative bg-transparent flex flex-col">
      <div className='flex flex-col items-center'>
        <h2 className="text-5xl font-bold text-white mt-20">
          <TrueFocus
            sentence="About Me"
            manualMode={false}
            blurAmount={5}
            borderColor="#0384fc"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </h2>
        <p className='mt-6 text-gray-300 flex'>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={4}
            blurStrength={10}
            textClassName='text-lg'
          >
            &lt; I know something you dont know &gt;
          </ScrollReveal>
        </p>
      </div>

      <div className='block mx-auto lg:mx-0 md:flex mb-12 min-w-screen mt-0 md:mt-[6vh] lg:mt-[8vh]'>
        <div className='text-white flex flex-col lg:ml-16'>
          <span className='text-4xl font-sans font-bold'>
            <TextType
              text={["Hey there!", "What's up?", "Welcome!"]}
              textColors={["#06b6d4", "#10b981", "#8b5cf6"]}
              typingSpeed={60}
              pauseDuration={1750}
              showCursor={true}
              cursorCharacter="|"
            />
          </span>
          <p className='w-80 md:w-[520px] lg:w-[560px] [@media(min-width:1320px)]:w-[60vw] mb-5 lg:ml-6 text-lg md:text-xl text-gray-200'>
            My name is <span className='text-white'>Dhabit Muhammad Faqih</span>, a passionate software developer who loves exploring new technologies and turning ideas into real, working solutions. With a strong curiosity for learning, I constantly challenge myself to improve both in frontend and backend development, making sure the projects I build are efficient, modern, and scalable.
          </p>
          <p className='w-80 md:w-[520px] lg:w-[560px] [@media(min-width:1320px)]:w-[60vw] mb-5 lg:ml-6 text-lg md:text-xl text-gray-200'>
            Beyond coding, I enjoy solving problems and finding the most effective way to deliver clean, maintainable solutions. For me, technology is not just a tool, but also a way to create meaningful impact and help people through innovative applications.
          </p>
        </div>
        <div className='ml-auto lg:mr-[12vw]'>
          <img
            src={Muka}
            className='mx-auto w-32 h-32 md:h-48 md:w-48 lg:h-64 lg:w-64 rounded-full border-2'
          />
        </div>
      </div>

      <div className='md:mx-auto md:w-11/12 px-9 mt-[4vh] md:mt-[8vh] lg:mt-[14vh] md:flex md:flex-wrap gap-4'>
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-3 mb-2 mx-auto border-2 border-white/5 hover:border-white flex-1">
          <div className="flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-8 py-4">
            <div className='flex justify-between items-center w-full'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white p-2 bg-gray-500 border-2 border-white/20 rounded-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 170l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <h3 className="text-xl font-semibold text-cyan-400">Created Project</h3>
              <p className='text-2xl text-white p-2 bg-white/20 rounded-md w-12 flex justify-center'>1</p>
            </div>
            <p className="mt-2 text-gray-300 mx-auto">Projects that I have created show my journey of learning and building useful applications.</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-3 mb-2 mx-auto border-2 border-white/5 hover:border-white flex-1">
          <div className="flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-8 py-4 mt-6 md:mt-0">
            <div className='flex justify-between items-center w-full'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white p-2 bg-gray-500 border-2 border-white/20 rounded-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <line x1="10" y1="9" x2="8" y2="9"></line>
                </svg>
                <h3 className="text-xl font-semibold text-cyan-400">Owned Certificate</h3>
              <p className='text-2xl text-white p-2 bg-white/20 rounded-md w-12 flex justify-center'>5</p>
            </div>
            <p className="mt-2 text-gray-300 mx-auto">Certificates that I have earned reflect the skills and knowledge I have achieved so far.</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-3 mb-2 mx-auto border-2 border-white/5 hover:border-white flex-1">
          <div className="flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-8 py-4 mt-6 md:mt-0">
            <div className='flex justify-between items-center w-full'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white p-2 bg-gray-500 border-2 border-white/20 rounded-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
                <h3 className="text-xl font-semibold text-cyan-400">Years of Experience</h3>
              <p className='text-2xl text-white p-2 bg-white/20 rounded-md w-12 flex justify-center'>1</p>
            </div>
            <p className="mt-2 text-gray-300 mx-auto">My experience in programming represents the growth and challenges I have faced while improving my skills.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
