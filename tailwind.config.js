/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      sans: ["IranSans"],
      serif: ["IranSans"]
    },
    extend: {
      colors: {
        blue: {
          500: '#1D91CC',
          600: '#11577A',
        }
      }
      
    },
  },
  plugins: [],
}