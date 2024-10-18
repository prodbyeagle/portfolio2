/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        eagle: '#d683ff',
      },
      maxWidth: {
        120: "430px",
        150: "480px",
        200: "550px",
      },
    },
  },
  plugins: [],
};