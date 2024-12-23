/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f29f67',
        secondary: '#1e1e2c',
        gray: '#808080'
      },
    },
  },
  plugins: [],
}