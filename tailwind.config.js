// const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        cyan:{
          darkest: '#3D6666',
          darker: '#00474B',
          light: '#26C2AE',
          lightest: '#C5E4E7',
          label: '#5E7A7D',
          icon: '#9EBBBD',
          'text-field': '#F3F9FA',
          focus: '#26C2AE',
          hover:'#9FE8DF',
          text: '#00474B',
          'text-light': '#547878',
        }
      }
    },
  },
  plugins: [],
}