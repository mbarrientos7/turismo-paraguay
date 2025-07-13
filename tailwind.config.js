module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // Azul principal
          dark: '#1e40af',
        },
        secondary: {
          DEFAULT: '#e0f2fe', // Celeste
          light: '#bae6fd',
        },
        neutral: {
          DEFAULT: '#f3f4f6', // Gris claro
          dark: '#1f2937',    // Gris oscuro
        },
        contrast: '#fde047', // Amarillo para accesibilidad
        white: '#ffffff',
        black: '#000000',
      },
    },
  },
  plugins: [],
}; 