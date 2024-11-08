/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      body : ['Inter', 'sans-serif'],
      body2 : ['Athiti', 'sans-serif'],
      body3 : ['Playwrite GB S', 'sans-serif'],
      body4 : ['Nunito']
    }
  },
  plugins: [],
}

