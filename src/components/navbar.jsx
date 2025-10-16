import { useState, useEffect } from "react";
import { FileUser } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full justify-center flex p-4 backdrop-blur-sm bg-white/1 z-20">
      {/* Logo */}
      <div className="text-3xl ml-3 font-extrabold tracking-wider relative after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-blue-400 after:left-0 after:bottom-[-4px] after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100">
        <span className="text-blue-400">D</span>
        <span className="text-gray-300">habit</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-14 mx-auto text-2xl text-gray-300">
        <li className="relative cursor-pointer after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-400 after:left-0 after:bottom-0 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-white"><a href="https://www.youtube.com/">Home</a></li>
        <li className="relative cursor-pointer after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-400 after:left-0 after:bottom-0 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-white"><a href="https://www.youtube.com/">About Me</a></li>
        <li className="relative cursor-pointer after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-400 after:left-0 after:bottom-0 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-white"><a href="https://www.youtube.com/">Project</a></li>
        <li className="relative cursor-pointer after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-400 after:left-0 after:bottom-0 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-white"><a href="https://www.youtube.com/">Skills</a></li>
        <li className="relative cursor-pointer after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-blue-400 after:left-0 after:bottom-0 after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-white"><a href="https://www.youtube.com/">Contact</a></li>
      </ul>
        <li className="hidden md:flex text-2xl mr-3 text-white bg-sky-500 py-1 px-2 rounded-md hover:bg-black/50"><a href="https://www.youtube.com/" className="flex h-full items-center gap-2"><FileUser />Download CV</a></li>

      {/* Hamburger */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col gap-1 justify-center ml-auto relative w-8 h-8">
        <span className={`absolute block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${isOpen ? "rotate-45" : "-translate-y-2"}`}></span>
        <span className={`absolute block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
        <span className={`absolute block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45" : "translate-y-2"}`}></span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute right-4 top-16 w-40 bg-gradient-to-b from-slate-500 to-gray-700 text-white shadow-lg rounded-md overflow-hidden">
          <ul className="flex flex-col gap-7 text-2xl text-center p-4">
            <li className="relative cursor-pointer active:text-sky-500"><a href="https://www.youtube.com/">Home</a></li>
            <li className="relative cursor-pointer active:text-sky-500"><a href="https://www.youtube.com/">About Me</a></li>
            <li className="relative cursor-pointer active:text-sky-500"><a href="https://www.youtube.com/">Project</a></li>
            <li className="relative cursor-pointer active:text-sky-500"><a href="https://www.youtube.com/">Skills</a></li>
            <li className="relative cursor-pointer active:text-sky-500"><a href="https://www.youtube.com/">Contact</a></li>
            <li className="relative cursor-pointer active:text-sky-500"><a href="https://www.youtube.com/">Download CV</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}