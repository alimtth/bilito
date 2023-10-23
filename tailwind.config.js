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
          300: '#DFDFDF',
          400: '#EDEDED',
          500: '#868686'
        },
        blue: {
          100: '#E8F4FA',
          300:'#77BDE0',
          400:  '#E8F4FA',
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
       flex: {
        2: '1 0 0',
       },
       fontSize: {
        ssm: '10px',
       }
    }
  },
  plugins: [],
}