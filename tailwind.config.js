/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundPrimary: "#F6F6F6",
        backgroundSecondary: "#1A2C47",
        primary: '#DE604B',
        textPrimary: '#535353',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}