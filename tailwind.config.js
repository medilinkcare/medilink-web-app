/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fontFamily:{
          aeonik: ['Aeonik', 'sans-serif', 'system-ui', 'sans-serif'],
        }
        
      },
    },
  },
  plugins: [],
}