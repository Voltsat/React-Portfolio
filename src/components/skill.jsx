import React, { useState } from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 

import sertif1 from "../assets/sertif1.png"; 
import sertif2 from "../assets/sertif2.png"; 
import sertif3 from "../assets/sertif3.png"; 
import sertif4 from "../assets/sertif4.png"; 

const tombol = ["Skills", "Certificate", "Tools"];

const content = {
  Skills: [
    { name: "Javascript", gambar: "https://www.w3schools.com/js/img_javascript_480.jpg", persen: 90 },
    { name: "Python", gambar: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png", persen: 31 },
    { name: "PHP", gambar: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg", persen: 37 },
    { name: "React", gambar: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png", persen: 46 }
  ],
  Certificate: [
    { name: "Codelamp Game Developer Certificate", gambar: sertif1 },
    { name: "IDNetworks Capture The Flag Certificate", gambar: sertif2 },

    { name: "Codelamp Game Developer Market Certificate", gambar: sertif3 }, 
    { name: "Codelamp Game Developer Road Map Certificate", gambar: sertif4 } 
  ],
  Tools: [
    { name: "Visual Studio Code", gambar: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png" },
    { name: "Git & GitHub", gambar: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png" },
    { name: "Figma", gambar: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" }
  ]
};

const SkillCard = ({ name, gambar, persen }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05 }} className="bg-gray-900/70 backdrop-blur-xl rounded-2xl p-4 flex flex-col items-center shadow-xl border border-cyan-600/40 hover:border-cyan-400 transition-all duration-300">
    <img src={gambar} alt={name} className="w-14 h-14 object-contain mb-3 drop-shadow-lg" />
    <p className="text-lg font-semibold text-cyan-300 mb-2 text-center">{name}</p>
    <div className="w-full mt-2">
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div initial={{ width: 0 }} animate={{ width: `${persen}%` }} transition={{ duration: 1 }} className="h-full bg-cyan-500"></motion.div>
      </div>
      <p className="text-sm text-cyan-400 text-right mt-1">{persen}%</p>
    </div>
  </motion.div>
);

const CertificateCard = ({ name, gambar }) => (
  <motion.div 
    className="bg-gray-900/80 rounded-2xl shadow-xl border border-cyan-600/40 overflow-hidden w-full mx-auto" 
  >
    <div className="p-4 bg-gray-950 border-b border-cyan-600 min-h-[6rem] flex items-center justify-center">
      <p className="text-xl text-center font-bold text-cyan-300 leading-snug">{name}</p>
    </div>
    
    <img src={gambar} alt={name} className="w-full max-h-[400px] object-cover" />
  </motion.div>
);

const ToolCard = ({ name, gambar }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.07 }} className="bg-gray-900/70 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-indigo-500/40 flex flex-col items-center">
    <img src={gambar} alt={name} className="w-14 h-14 object-contain mb-3" />
    <p className="text-lg font-semibold text-indigo-300 text-center">{name}</p>
  </motion.div>
);

export default function Skills() {
  const [activeTab, setActiveTab] = useState(tombol[0]);

  const renderContent = () => {
    const items = content[activeTab];

    if (activeTab === "Skills") {
      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
          {items.map((item, i) => <SkillCard key={i} {...item} />)}
        </div>
      );
    }

    if (activeTab === "Certificate") {
      return (
        <div className="p-4 relative w-full max-w-4xl mx-auto"> 
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            loop={true}
            className="mySwiper"
          >
            {items.map((item, i) => (
              <SwiperSlide key={i} className="pb-10">
                <div className="flex justify-center">
                    <CertificateCard {...item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <style global jsx>{`
            .swiper-button-prev, .swiper-button-next {
              color: #22d3ee !important; /* Warna panah navigasi cyan */
            }
            .swiper-pagination-bullet-active {
              background: #22d3ee !important; /* Warna dot aktif cyan */
            }
            .swiper-slide {
                display: flex;
                justify-content: center; /* Memastikan slide di tengah */
            }
          `}</style>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4">
        {items.map((item, i) => <ToolCard key={i} {...item} />)}
      </div>
    );
  };

  return (
    <section id="skills" className="min-h-screen pt-20 pb-12 text-white relative">

      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black -z-10"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/20 blur-[200px] rounded-full -z-10"></div>

      <h2 className="text-5xl font-extrabold text-center mb-12 text-white drop-shadow-lg tracking-wide">My Expertise</h2>

      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="flex bg-gray-900/80 backdrop-blur-xl rounded-full p-2 shadow-2xl border border-cyan-700/30">
          {tombol.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === tab ? "bg-cyan-600 text-white shadow-lg" : "text-gray-300 hover:text-white hover:bg-gray-700"}`}>{tab}</button>
          ))}
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto w-11/12 xl:w-4/5 2xl:w-2/3 min-h-[50vh] bg-gray-900/60 backdrop-blur-2xl border border-gray-700 rounded-2xl shadow-2xl p-8">
        <h3 className="text-3xl font-bold mb-6 text-center text-cyan-300 border-b border-gray-700 pb-3">{activeTab}</h3>
        {renderContent()}
      </motion.div>
    </section>
  );
}