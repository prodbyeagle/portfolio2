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
        bird: "#70534c",
      },
      maxWidth: {
        120: '430px',
        150: '480px',
        200: '550px',
      },
      boxShadow: {
        '3xl': '0 10px 30px 0px rgba(0, 0, 0, 0.5)',
        '4xl': '0 10px 40px 0px rgba(0, 0, 0, 0.5)',
        '5xl': '0 10px 50px 0px rgba(0, 0, 0, 0.5)',
        '6xl': '0 15px 60px 0px rgba(0, 0, 0, 0.5)',
        '7xl': '0 10px 380px 0px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
