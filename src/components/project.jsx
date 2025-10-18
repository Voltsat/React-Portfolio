export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Website pribadi dengan React + Tailwind untuk menampilkan profil dan project.",
    },
    {
      title: "Kas Tracker App",
      desc: "Aplikasi pencatat pembayaran kas siswa yang terhubung ke Google Spreadsheet.",
    },
    {
      title: "Mini Quiz Game",
      desc: "Game sederhana berbasis web dengan HTML, CSS, dan JavaScript.",
    },
  ];

  return (
    <section id="projects" className="min-h-screen text-gray-100 px-8 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-gray-800 p-6 rounded-2xl shadow-md border border-transparent hover:border-indigo-500 transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}