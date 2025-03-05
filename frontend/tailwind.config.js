/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Activer le mode sombre
  theme: {
    extend: {
      colors: {
        mandarine: {
          50: '#fff3e6',
          100: '#ffe0c2',
          200: '#ffc999',
          300: '#ffb270',
          400: '#ff9b47',
          500: '#ff841e', // couleur principale
          600: '#ff6d00',
          700: '#cc5700',
          800: '#994200',
          900: '#662c00',
        },
      },
    },
  },
  plugins: [],
}

