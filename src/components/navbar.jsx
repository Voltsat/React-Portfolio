import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const menu = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "project", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "-20% 0px -50% 0px",
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-screen z-50 bg-gray-900/70 backdrop-blur-xl border-b border-white/10 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl font-bold text-white"
        >
          <span className="text-cyan-400">D</span>habit
        </motion.a>

        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 relative">
            {menu.map((item) => (
              <li key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  className={`transition ${
                    active === item.id
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-cyan-300"
                  }`}
                >
                  {item.label}
                </a>

                {active === item.id && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-cyan-400 rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </li>
            ))}
          </ul>

          <motion.a
            href="/React-Portfolio/cv/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full
            bg-cyan-500 text-white font-semibold
            hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/30"
          >
            <FileText size={18} />
            Download CV
          </motion.a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-xl overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-6 gap-6">
              {menu.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: i * 0.05,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={`block text-lg ${
                      active === item.id
                        ? "text-cyan-400 font-semibold"
                        : "text-gray-300"
                    }`}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}

              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href="/React-Portfolio/cv/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-4 flex items-center justify-center gap-2
                  px-4 py-3 rounded-full bg-cyan-500
                  text-white font-semibold hover:bg-cyan-400 transition"
                >
                  <FileText size={18} />
                  Download CV
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
