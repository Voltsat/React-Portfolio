import { useState, useEffect } from "react";
import { FileText, Menu, X } from 'lucide-react'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Efek untuk menutup menu saat resizing ke desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  // Data Menu
  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "project", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  // Efek untuk menentukan section yang aktif menggunakan IntersectionObserver
  useEffect(() => {
    // 1. PERBAIKAN: Memilih semua elemen section yang memiliki ID
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 2. PERBAIKAN LOGIKA: Hanya set aktif jika section mulai terlihat
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // 3. PERBAIKAN KONFIGURASI: Threshold kecil dan rootMargin untuk zona tengah
        threshold: 0.1, 
        rootMargin: "-40% 0px -40% 0px" 
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []); // Dependency array kosong

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center p-4 md:px-12 bg-gray-900/80 backdrop-blur-lg z-50 shadow-xl border-b border-cyan-700/50">
      
      {/* Logo Keren */}
      <a href="#home" className="text-3xl ml-3 font-extrabold tracking-wider text-white transition duration-300 hover:text-cyan-400">
        <span className="text-cyan-400">D</span>
        <span className="text-gray-300">habit</span>
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 mx-auto text-lg font-medium text-gray-300">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={`relative group transition duration-300`}
          >
            <a 
              href={`#${item.id}`}
              className={`block py-1 transition-colors duration-300 ${
                activeSection === item.id
                  ? "text-cyan-400 font-bold"
                  : "text-gray-300 hover:text-cyan-200"
              }`}
            >
              {item.label}
            </a>
            {/* Indikator Garis Bawah Aktif */}
            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-cyan-400 transition-all duration-300 ${
                activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </li>
        ))}
      </ul>

      {/* Tombol Download CV (Desktop) */}
      <a 
        href="https://www.youtube.com/" // Ganti dengan link CV Anda
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex text-lg font-semibold items-center gap-2 py-2 px-4 rounded-full bg-cyan-600 text-white shadow-lg shadow-cyan-500/50 hover:bg-cyan-500 transition duration-300 mr-3"
      >
        <FileText className="w-5 h-5" />
        Download CV
      </a>

      {/* Hamburger Toggle Button (Mobile) */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="md:hidden ml-auto p-2 text-white z-50 transition duration-300 hover:text-cyan-400"
        aria-label="Toggle navigation"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed inset-0 top-[68px] z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)}></div>
        
        {/* Menu Konten */}
        <div className="absolute right-0 w-64 bg-gray-800/95 backdrop-blur-md text-white shadow-2xl h-full p-6 border-l border-cyan-700">
          <ul className="flex flex-col gap-6 text-xl font-medium">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`transition duration-300 border-b border-gray-700 pb-2 ${
                  activeSection === item.id ? "text-cyan-400 font-bold" : "text-gray-300 hover:text-cyan-300"
                }`}
              >
                <a 
                  href={`#${item.id}`} 
                  onClick={() => setIsOpen(false)} 
                  className="block"
                >
                  {item.label}
                </a>
              </li>
            ))}
            {/* Tombol CV (Mobile) */}
            <li className="mt-4">
                <a 
                    href="https://www.youtube.com/" // Ganti dengan link CV Anda
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-cyan-600 text-white shadow-md hover:bg-cyan-500 transition duration-300 text-lg"
                >
                    <FileText className="w-5 h-5" />
                    Download CV
                </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}