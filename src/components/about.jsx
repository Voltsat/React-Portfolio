import ScrollReveal from './animation/scrollReveal';
import TrueFocus from './animation/trueFocus';
import TextType from './animation/textType';

import Muka from "../assets/face.png";
import AnimatedContent from './animation/AnimatedContent'
import SpotlightCard from './reactbits/SpotlightCard'
import CountUp from './reactbits/CountUp'

const stats = [
  {
    label: "Created Project",
    value: 1,
    suffix: "",
    description: "Projects that I have created show my journey of learning and building useful applications.",
    accent: "from-cyan-400 to-blue-600",
    spotlight: "rgba(34, 211, 238, 0.3)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
    ),
  },
  {
    label: "Owned Certificate",
    value: 5,
    suffix: "",
    description: "Certificates that I have earned reflect the skills and knowledge I have achieved so far.",
    accent: "from-purple-400 to-fuchsia-600",
    spotlight: "rgba(192, 132, 252, 0.3)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <line x1="10" y1="9" x2="8" y2="9"></line>
      </svg>
    ),
  },
  {
    label: "Years of Experience",
    value: 1,
    suffix: "+",
    description: "My experience in programming represents the growth and challenges I have faced while improving my skills.",
    accent: "from-emerald-400 to-teal-600",
    spotlight: "rgba(52, 211, 153, 0.3)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id='about' className="pb-6 z-10 relative bg-transparent flex flex-col">
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

      <div className='block mx-auto md:flex mb-12 min-w-screen justify-center mt-0 md:mt-[6vh] lg:mt-[8vh]'>
        <div className='text-white flex flex-col md:ml-auto'>
          <span className='mx-auto md:mx-0 text-4xl font-sans font-bold'>
            <TextType
              text={["Hey there!", "What's up?", "Welcome!"]}
              textColors={["#06b6d4", "#10b981", "#8b5cf6"]}
              typingSpeed={60}
              pauseDuration={1750}
              showCursor={true}
              cursorCharacter="|"
            />
          </span>
          <p className='w-80 md:w-[520px] lg:w-[560px] [@media(min-width:1320px)]:w-[60vw] mx-auto mb-5 text-lg md:text-xl text-gray-200'>
            My name is <span className='text-white'>Dhabit Muhammad Faqih</span>, a passionate software developer who loves exploring new technologies and turning ideas into real, working solutions. With a strong curiosity for learning, I constantly challenge myself to improve in mobile development, making sure the projects I build are efficient, modern, and scalable.
          </p>
          <p className='w-80 md:w-[520px] lg:w-[560px] [@media(min-width:1320px)]:w-[60vw] mx-auto mb-5 text-lg md:text-xl text-gray-200'>
            Beyond coding, I enjoy solving problems and finding the most effective way to deliver clean, maintainable solutions. For me, technology is not just a tool, but also a way to create meaningful impact and help people through innovative applications.
          </p>
        </div>

      
      <div className="relative w-fit h-fit mx-auto">
        <div className="rounded-full overflow-hidden w-48 h-48 sm:w-56 sm:h-56 border-2 border-gray-300 shadow-md transition-all duration-500 hover:shadow-lg">
          <img
            src={Muka}
            alt="Profile"
            className="w-full h-full object-cover transition duration-500"
          />
        </div>
      </div>

      </div>
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        duration={0.5}
        ease="power3.out"
        initialOpacity={0.2}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0.1}
      >
      <div className='md:mx-auto md:w-[95%] px-9 mt-[4vh] md:mt-[8vh] lg:mt-[14vh] md:flex md:flex-wrap gap-4'>
        {stats.map((stat, i) => (
          <SpotlightCard
            key={i}
            spotlightColor={stat.spotlight}
            className="relative overflow-hidden bg-white/5 backdrop-blur-md rounded-2xl shadow-lg mb-2 mx-auto border border-white/10 hover:border-white/30 flex-1 transition-colors duration-300"
          >
            <div className={`absolute -top-10 -right-10 h-28 w-28 rounded-full bg-gradient-to-br ${stat.accent} opacity-20 blur-2xl`} />

            <div className="relative flex flex-col items-center md:items-start text-center md:text-left px-6 py-6">
              <div className={`h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${stat.accent} text-white shadow-lg mb-4`}>
                {stat.icon}
              </div>

              <p className="text-4xl font-extrabold text-white leading-none">
                <CountUp to={stat.value} duration={1.5} />
                {stat.suffix}
              </p>
              <h3 className="mt-1 text-sm font-semibold uppercase tracking-wide text-gray-300">{stat.label}</h3>
              <p className="mt-3 text-sm text-gray-400">{stat.description}</p>
            </div>
          </SpotlightCard>
        ))}
      </div>
      </AnimatedContent>



    </section>
  );
}
