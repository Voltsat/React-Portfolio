/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"], // wajib isi, biar Tailwind scan file React
  theme: {
    extend: {
      
    },
  },
  plugins: [require('tailwindcss-motion')],
}