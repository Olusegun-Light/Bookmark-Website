/** @type {import('tailwindcss').Config} */
module.exports = {
  // the content: look in the root for any html/js folder that has tailwind class
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '760px',
      lg: '1020px',
      xl: '1440px'
    },
    extend: {
      colors: {
        softBlue: 'hsl(213, 69%, 60%)',
        softRed: 'hsl(0, 94%, 66%)',
        grayishBlue: 'hsl(229, 8%, 60%)',
        veryDarkBlue: 'hsl(229, 31%, 21%)'
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif']
      },
      backgroundImage: () => ({
        'dots': "url('../images/bg-dots.svg')"
      })
    },
  },
  plugins: [],
}
