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
    }
  },
  plugins: [],
}

