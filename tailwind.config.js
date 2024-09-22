/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        customDark: '#1d232a', // কাস্টম কালার যুক্ত করা হলো
      },
    },
  },
  plugins: [require('daisyui')],
};

