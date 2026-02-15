import portfolioIMG from "../assets/portfolio.png";
import digidawIMG from "../assets/digidaw.png";
import fitnessIMG from "../assets/fitnessProject.png";

export default function Projects() {
  const projects = [
    {
      title: "React Portfolio",
      desc: "A personal portfolio website built using React and Tailwind CSS. It presents my profile, skills, and selected projects in a clean and modern layout.",
      stats: [
        { label: "Views", value: "1K+" },
        { label: "Completion", value: "100%" },
        { label: "Sections", value: "6+" },
      ],
      tech: ["React", "Tailwind CSS", "Vite"],
      image: portfolioIMG,
    },
    {
      title: "Digital Clock",
      desc: "A simple digital clock application that displays real-time hours, minutes, and seconds with 24-hour and 12-hour format options.",
      stats: [
        { label: "Mode", value: "24H / 12H" },
        { label: "Realtime", value: "Live" },
        { label: "Update Speed", value: "1s" },
      ],
      tech: ["HTML", "CSS", "JavaScript"],
      image: digidawIMG,
    },
    {
      title: "Fitness Application",
      desc: "A mobile fitness app built using Flutter that helps users discover workout routines, track progress, and stay consistent with healthy habits.",
      stats: [
        { label: "Workout Plans", value: "12+" },
        { label: "Screens", value: "8+" },
        { label: "Build Time", value: "2 Weeks" },
      ],
      tech: ["Flutter", "Dart"],
      image: fitnessIMG,
    },
  ];

  return (
    <section id="project" className="min-h-screen text-gray-100 px-8 py-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">Featured Projects</h2>
          <p className="text-gray-400 text-lg mt-2">
            Showcasing impactful solutions that I’ve built
          </p>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-col gap-20 mt-16">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center gap-10`}
            >

              <div className="w-full md:w-1/2">
  <div className="border border-slate-700 hover:border-slate-500 
                  bg-slate-900 p-6 rounded-xl 
                  overflow-hidden w-full h-full 
                  flex justify-center items-center
                  shadow-lg hover:shadow-2xl 
                  transition-all duration-500">

    <img
      src={p.image}
      alt={p.title}
      className={`
        transition-transform duration-500 ease-in-out hover:scale-105
        object-contain
        ${i === 2
          ? "max-h-[420px] w-auto"
          : "w-full"
        }
      `}
    />

  </div>
</div>


              <div className="md:w-1/2">
                <h3 className="text-3xl font-semibold text-white mb-4">
                  {p.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  {p.stats.map((stat, j) => (
                    <div
                      key={j}
                      className="bg-gray-800 hover:bg-slate-700 px-6 py-3 rounded-xl text-center min-w-[110px] transition"
                    >
                      <p className="text-lg font-bold text-cyan-400">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t, j) => (
                    <span
                      key={j}
                      className="bg-sky-900 text-cyan-300 px-3 py-1 rounded-md text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
