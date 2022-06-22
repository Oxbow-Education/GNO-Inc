/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#104476'
      }
    },
    fontFamily: {
      base: ['apertura', 'sans-serif']
    },
  },
  plugins: [],
};
