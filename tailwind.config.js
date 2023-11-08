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
          10:'#CBCBCB',
          20:'#404040',
          100:'#ADADAD',
          200:'#F9F9F9',
          300: '#DFDFDF',
          400: '#EDEDED',
          450: '#ADADAD',
          500: '#868686',
          600: '#606060',
          650: '#ADADAD',
          700: '#868686',
        },
        red:{
          10:'#FFF2F2',
          20:'#C30000',
        },
        blue: {
          100: '#E8F4FA',
          300:'#77BDE0',
          400:  '#E8F4FA',
          500: '#1D91CC',
          600: '#11577A',
          650: '#1D91CC',
        },
        zard: {
          100: '#E3E989',
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