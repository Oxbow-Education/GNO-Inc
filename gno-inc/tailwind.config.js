/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#104476',
        orange: '#F26522'
      },
      fontSize: {
        '5xl': '70px',
        '2xl': '25px'
      },
      lineHeight: {
        'copy': '33px',
        'heading': '75px'
      },
      minWidth: {
        button: '200px'
      },
      borderRadius: {
        button: '8px'
      },
      height: {
        button: '70px'
      }
     
    },
    fontFamily: {
      base: ['apertura', 'sans-serif']
    },

  },
  plugins: [],
};
