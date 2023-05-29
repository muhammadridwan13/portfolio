/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#93DEFF',
        secondary: '#616571',
        dark: '#1A1A1A',
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

