/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray:{
          100:'#ADADAD',
          200:'#F9F9F9',
          300: '#DFDFDF'
        },
        blue: {
          500: '#1D91CC',
          600: '#11577A',
        },
      },
          height: {
            'sm': '32px',
            'md': '40px',
            'lg': '48px',
            'xl': '56px',
    },
    }
  },
  plugins: [],
}