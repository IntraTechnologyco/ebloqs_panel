/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        "purple-dark":"#170658",
        "purple-full-light":"#7E819F"
      }
    },
  },
  plugins: [],
}
