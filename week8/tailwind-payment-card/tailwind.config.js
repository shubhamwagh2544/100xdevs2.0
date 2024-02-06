/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          800: '#146EB4',
          850: '#0E4F82',
          700: '#156FB4'
        }
      }
    },
  },
  plugins: [],
}

