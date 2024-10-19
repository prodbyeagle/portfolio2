/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        eagle: '#d683ff',
        html: '#FF5733',
        css: '#4A90E2',
        javascript: '#F0DB4F',
        typescript: '#007ACC',
        react: '#61DAFB',
        tailwind: '#38B2AC',
        python: '#306998',
        electron: '#5A5B6E',
        mongodb: '#4DB33D',
        bird: "#70534c"
      },
      maxWidth: {
        120: '430px',
        150: '480px',
        200: '550px',
      },
    },
  },
  plugins: [],
};