/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DABB04', // Amarelo
        secondary: '#56C9F6', // Azul
        offWhite: {
          DEFAULT: '#F5F5F5',
          light: '#F7F6F3',
          lighter: '#ECE9E3',
        },
        darkNeutral: '#3E3E3E',
      },
      fontSize: {
        h1: ['48px', { lineHeight: '1.2' }],
        h2: ['40px', { lineHeight: '1.2' }],
        h3: ['32px', { lineHeight: '1.2' }],
        h4: ['28px', { lineHeight: '1.5' }],
        body: ['24px', { lineHeight: '1.5' }],
        small: ['20px', { lineHeight: '1.5' }],
        button: ['18px', { lineHeight: '1.5' }],
      },
      boxShadow: {
        button: '0px 4px 8px rgba(218, 187, 4, 0.4)',
        card: '0px 2px 5px rgba(0, 0, 0, 0.1)',
        hover: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};

