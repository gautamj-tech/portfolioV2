/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require('tailwindcss/colors')

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  darkMode:'class',
  theme: {

    extend:{
      colors:{
        
        primary: '#1E1E1E',
        secondary: '#F7F7F9',
        textPrimary:"#747474",
        textSecondary:"#949494",
        darkBg : colors.zinc[900]
        
      },
      backgroundImage: {
        'hero': "url('../public/hero.png')",
      },
      
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
})
