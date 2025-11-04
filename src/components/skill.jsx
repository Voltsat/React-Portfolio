export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Python",
    "Git",
    "Flutter",
    "PHP",
  ];

  return (
    <section id="skills" className="relative flex flex-col items-center justify-center min-h-screen text-white px-6 py-16">
      <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative group bg-gray-800/50 border border-gray-700 rounded-xl p-6 flex items-center justify-center text-lg font-semibold transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] hover:border-purple-500"
          >
            <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
              {skill}
            </span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-300 bg-gradient-to-r from-blue-500 to-pink-500 blur-xl rounded-xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
}