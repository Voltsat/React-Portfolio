import ScrollReveal from './animation/scrollReveal';
import TrueFocus from './animation/trueFocus';

export default function About() {

  const skills = [
    {
      title: "Full Stack",
      description:
        "Skilled in both frontend and backend, with a primary focus on building secure, efficient, and scalable backend systems.",
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17l4 4 4-4m0-10l-4-4-4 4" />
        </svg>
      ),
    },
    {
      title: "Problem Solver",
      description:
        "Detail-oriented and analytical, I tackle challenges with a clear approach, creating efficient and reliable solutions.",
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
        </svg>
      ),
    },
    {
      title: "Tech Explorer",
      description:
        "Always on the lookout for new tools and technologies to implement effective and modern solutions.",
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      ),
    },
  ];

  return (

    <section className="min-h-screen z-10 relative bg-transparent flex flex-col">
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
          > &lt; I know something you dont know &gt;</ScrollReveal>
        </p>
      </div>

      <div class="bg-gray-100 rounded-xl shadow-lg p-6 md:p-8 lg:p-10 max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row md:divide-x md:divide-gray-200">

          <div class="flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-8 py-4 flex-1">
            <div class="flex items-center space-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <h3 class="text-xl font-semibold text-gray-800">Full Stack</h3>
            </div>
            <p class="mt-2 text-gray-600 leading-relaxed">Skilled in both frontend and backend, with a primary focus on building secure, efficient, and scalable backend systems.</p>
          </div>

          <div class="flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-8 py-4 flex-1 mt-6 md:mt-0">
            <div class="flex items-center space-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <line x1="10" y1="9" x2="8" y2="9"></line>
              </svg>
              <h3 class="text-xl font-semibold text-gray-800">Problem Solver</h3>
            </div>
            <p class="mt-2 text-gray-600 leading-relaxed">Detail-oriented and analytical, I tackle challenges with a clear approach, creating efficient and reliable solutions.</p>
          </div>

          <div class="flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-8 py-4 flex-1 mt-6 md:mt-0">
            <div class="flex items-center space-x-2 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              <h3 class="text-xl font-semibold text-gray-800">Tech Explorer</h3>
            </div>
            <p class="mt-2 text-gray-600 leading-relaxed">Always on the lookout for new tools and technologies to implement effective and modern solutions.</p>
          </div>

        </div>
      </div>


    </section>
  );
}