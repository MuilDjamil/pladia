/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: '1rem',
    //     sm: '0',
    //   },
    //   screens: {
    //     sm: '90%',
    //     lg: '80%',
    //   },  
    // },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      // colors: {
      //   blue: '#333',
      // },
      animation: {
        'expand-menu': 'expand .5s linear forwards'
      },
      keyframes: {
        expand: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
    },
  },
  plugins: [],
}

