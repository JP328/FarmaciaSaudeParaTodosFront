/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        redBackground : "url('/img/pexels-artem-podrez-8533061.jpg')",
        DoctorBackground : "url('/img/pexels-pixabay-356040.jpg')",
        blueBackground : "url('/img/pexels-chokniti-khongchum-3938023.jpg')",
      }
    },
  },
  plugins: [],
}

