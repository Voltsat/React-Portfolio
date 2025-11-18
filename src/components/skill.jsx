import React, { useState } from 'react';

export default function skills() {

  const tombol = ["Skills","Certificate","Tools"];

  const content = {
    Skills : [
      {
        name: "Javascript",
        gambar: "https://www.w3schools.com/js/img_javascript_480.jpg",
        persen: 90
      },
      {
        name: "Python",
        gambar: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
        persen: 31
      },
      {
        name: "PHP",
        gambar: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
        persen: 37
      },
    ],
    Certificate : [
      {
        name: "Lomba Tidur",
        gambar : "https://marketplace.canva.com/EAGtogiRr2U/1/0/1600w/canva-biru-dan-putih-modern-profesional-sertifikat-magang-MsToP4OwpN8.jpg"
      }
    ],
    Tools : [
      {
        name : "Visual Studio Code",
        gambar : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png"
      }
    ]
  }

  const [activeTab,setActiveTab] = useState(tombol[0]);

  return (
    <section id="skills" className="min-h-screen flex flex-col">

      <div className='flex justify-center mx-auto mt-20 h-fit shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.15)]'>
        {tombol.map((tombol, index) => (
          <button
          key={tombol}
          onClick={() => setActiveTab(tombol)}
          className={`
            p-3 px-6 font-semibold transition-all duration-300
            ${activeTab === tombol
              ? 'bg-cyan-900 text-white'
              : 'bg-gray-800 text-gray-300'
            }
            ${index === 0 ? 'rounded-l-xl' : ""}
            ${index === 3 - 1 ? 'rounded-r-xl' : ""}
            `}
          >{tombol}</button>
        ))}
      </div>

      <div className='mx-auto mt-8 w-11/12 md:w-2/3 min-h-[40vh] p-6 shadow-xl rounded-xl flex flex-col'>
      
      <h3 className='text-xl font-bold mb-4 text-cyan-600 border-b pb-2 text-center'>{activeTab}</h3>
      

      <ul className='grid grid-cols-5 grid-rows-5 gap-4'
      >
        {content[activeTab].map((item, index) =>(
          <li
          key={index}
          className='flex items-center p-3 bg-gray-700 rounded-lg shadow-sm'
          >

            <img
            src={item.gambar}
            className='h-9'
            ></img>

            <p
            className='mx-auto text-lg text-white'
            >{item.name}</p>
          </li>
        ))}
      </ul>


      </div>


    </section>
  )
}