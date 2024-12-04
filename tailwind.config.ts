/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",          // Raíz del proyecto.
    "./src/**/*.{js,ts,jsx,tsx}" // Archivos en los que usarás Tailwind CSS.
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#36A21D', // Nombre personalizado para el color
        titleGreen: '#007934',
      },
    }, // Aquí puedes personalizar el tema.
  },
  plugins: [],
};
