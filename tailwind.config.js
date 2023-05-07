/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        doctorsTheme: {
          primary: '#3A4256',

          secondary: '#19D3AE',

          accent: '#0FCFEC', //#0FCFEC

          neutral: '#3A4256',

          'base-100': '#FFFFFF'
        }
      }
    ]
  },
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')]
};
