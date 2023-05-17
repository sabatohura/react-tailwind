/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        blackColor: '#000300',
        GreenColor: '#00df90',
        GreenAccent: '#89fad3',
      },
      fontFamily:{
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

