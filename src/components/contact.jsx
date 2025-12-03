import React, { useState } from 'react';
import { Mail, MapPin, Send, Linkedin, Github, Instagram } from 'lucide-react';

// GANTI URL INI DENGAN ENDPOINT FORMSPREE UNIK ANDA!
const FORMSPREE_URL = 'https://formspree.io/f/xgvgyddb'; 

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage("❌ Fill all of the column.");
      setIsSubmitting(false);
      return;
    }

    try {
      // --- LOGIKA KIRIM FORM KE FORMSPREE ---
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Jika berhasil (Status 200/OK dari Formspree)
        setStatusMessage("✅ Message successfully sent! Thank you!");
        setFormData({ name: '', email: '', message: '' }); // Bersihkan form
      } else {
        // Jika Formspree mengembalikan error (misalnya validasi gagal)
        const data = await response.json();
        const errorMessage = data.error || 'Server responded with an error.';
        setStatusMessage(`❌ Error sending message: ${errorMessage}`);
      }
    } catch (error) {
      // Jika ada error jaringan
      setStatusMessage("❌ Network error or failed to send the message. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen pt-20 pb-12 text-white">
      
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white">
          Get In Touch
        </h2>
        <p className="mt-2 text-xl text-gray-400">
          I like to discuss about new project or thing that i like.
        </p>
      </div>

      <div className="mx-auto w-11/12 xl:w-4/5 bg-gray-800/80 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10">

        <div className="md:w-1/3 flex flex-col justify-start">
          <h3 className="text-2xl font-bold mb-6 text-cyan-300 border-b border-cyan-700 pb-2">
            Contact Information
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="text-gray-400 font-semibold">My Email</p>
                <a href="mailto:dhabitmuhammadfaqih@gmail.com" className="text-white hover:text-cyan-400 transition">dhabitmuhammadfaqih@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="text-gray-400 font-semibold">My Location</p>
                <p className="text-white">Gunung Putri, West Java, Indonesia</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-10 mb-4 text-cyan-300 border-b border-cyan-700 pb-2">
            Follow Me
          </h3>
          <div className="flex gap-4 text-zinc-300">
            <a href="https://linkedin.com/in/dh" target="_blank" rel="noopener noreferrer" className="p-[6px] rounded-md hover:text-cyan-400 transition-colors duration-300">
              <Linkedin size={30} />
            </a>
            <a href="https://github.com/dh" target="_blank" rel="noopener noreferrer" className="p-[6px] rounded-md hover:text-cyan-400 transition-colors duration-300">
              <Github size={30} />
            </a>
            <a href="https://instagram.com/dh" target="_blank" rel="noopener noreferrer" className="p-[6px] rounded-md hover:text-cyan-400 transition-colors duration-300">
              <Instagram size={30} />
            </a>
          </div>
        </div>

        <div className="md:w-2/3">
          <h3 className="text-2xl font-bold mb-6 text-cyan-300 border-b border-cyan-700 pb-2">
            Send Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Input your name here"
                required
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-cyan-500 focus:ring-cyan-500 text-white placeholder-gray-400 transition duration-300"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Input your active email here"
                required
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-cyan-500 focus:ring-cyan-500 text-white placeholder-gray-400 transition duration-300"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="What are you wanted to tell me about?"
                required
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-cyan-500 focus:ring-cyan-500 text-white placeholder-gray-400 transition duration-300"
              ></textarea>
            </div>

            {statusMessage && (
              <p className={`text-sm font-semibold ${statusMessage.startsWith('✅') ? 'text-green-400' : 'text-red-400'}`}>
                {statusMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-bold transition duration-300 ${
                isSubmitting
                  ? 'bg-cyan-700/50 cursor-not-allowed'
                  : 'bg-cyan-600 hover:bg-cyan-500 shadow-md shadow-cyan-500/30'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}