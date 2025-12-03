import portfolioIMG from "../assets/portfolio.png";
import digidawIMG from "../assets/digidaw.png";
import placeHolder from "../assets/placeHold.png";

export default function Projects() {
  const projects = [
    {
      title: "React Portfolio",
      desc: "A personal portfolio website I built using React and Tailwind CSS. It shows who I am, what I do, and the projects I’ve created. This site also helps people reach me easily for collaboration or job opportunities.",
      stats: [
        { label: "Views", value: "1K+" },
        { label: "Completion", value: "78%" },
        { label: "Coffe Cups", value: "20+" },
      ],
      tech: ["React", "Node.js", "Tailwind CSS", "Vite"],
      image: portfolioIMG,
    },
    {

      title: "Digital Clock",
      desc: "The Digital Clock project is a simple application that displays the current time in hours, minutes, and seconds. It updates automatically every second to show real-time changes.",
      stats: [
        { label: "Events/Day", value: "1M+" },
        { label: "Companies", value: "10+" },
        { label: "Response Time", value: "<100ms" },
      ],
      tech: ["Next.js", "TailwindCSS", "Supabase", "Chart.js"],
      image: digidawIMG,
    },
    {

      title: "Unde Omnis Consectetur Adipiscing",

      title: "Project Dos",

      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      stats: [
        { label: "Events/Day", value: "1M+" },
        { label: "Companies", value: "10+" },
        { label: "Response Time", value: "<100ms" },
      ],
      tech: ["Next.js", "TailwindCSS", "Supabase", "Chart.js"],
      image: placeHolder,
    },
  ];

  return (

  <section id="project" className="min-h-screen text-gray-100 px-8 py-20 z-10">

    <div className="max-w-screen-xl mx-auto">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-white">Featured Projects</h2>
        <p className="text-gray-400 text-lg mt-2">
          Showcasing impactful solutions that drive real business value
        </p>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="flex flex-col gap-16 mt-16">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-8`}
          >
            <div className="w-full md:w-1/2">
              <div className="border-2 border-slate-700 hover:border-slate-500 overflow-hidden rounded-md w-full md:w-fit h-fit md:max-h-72 md:h-fit">
              <img
              src={p.image}
              alt={p.title}
              className="w-full h-full object-contain transition-transform duration-500 ease-in-out hover:scale-110"
              />
              </div>
            </div>

            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold text-white mb-4">{p.title}</h3>
              <p className="text-gray-400 mb-6">{p.desc}</p>

              <div className="flex flex-wrap gap-3 mb-6">
                {p.stats.map((stat, j) => (
                  <div
                    key={j}
                    className="bg-gray-800 hover:bg-slate-600 p-3 px-1 lg:px-10 rounded-xl text-center min-w-[100px] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
                  >
                    <p className="text-lg font-bold text-cyan-400">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
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
