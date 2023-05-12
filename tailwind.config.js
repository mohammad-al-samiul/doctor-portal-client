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

          // neutral: '#19D3AE',

          'base-100': '#FFFFFF'
        }
      }
    ]
  },
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui'), require('tw-elements/dist/plugin.cjs')]
};
