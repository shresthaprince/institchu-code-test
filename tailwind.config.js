/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007BFF',
        accent: {
          primary: '#FFC107',
          secondary: '#FFA000',
        },
        gray: '#F8F8F8',
        error: '#FF6B6B'
      },
      fontFamily: {
        monsterrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      screens: {
        xs: '375px',
      }
    },
  },
  plugins: [],
}

