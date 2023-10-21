/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#1D91CC',
          600: '#11577A',
        },
        gray: {
          100: '#DFDFDF'
        }
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