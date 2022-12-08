/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#0E1822',
        'secondary': '#030209', 
        'cyan': '#00E0FF'

      }
    },
  },
  plugins: [],
}
