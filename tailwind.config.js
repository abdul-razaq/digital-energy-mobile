/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        SatoshiBlack: ['SatoshiBlack'],
        SatoshiBold: ['SatoshiBold'],
        SatoshiLight: ['SatoshiLight'],
        SatoshiMedium: ['SatoshiMedium'],
        SatoshiRegular: ['SatoshiRegular'],
      },
    },
  },
  plugins: [],
};
