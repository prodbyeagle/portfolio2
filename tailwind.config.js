/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        eagle: '#d683ff',
      },
      backgroundColor: {
        'eagle-hover': '#b359ff',
      },
    },
  },
  plugins: [],
};
