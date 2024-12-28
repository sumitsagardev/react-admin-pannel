/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003049',
        secondary: '#669bbc',
        gray: '#808080',
        heading: '#ffffff'
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".placeholder-secondary::placeholder": {
          color: "#6b7280", // Secondary color for placeholders
        },
      });
    },
  ],
};
