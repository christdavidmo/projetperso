/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/templates/**/*.html",
    "./src/static/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        customPurple:{
          '50': '#f5e3ff',
          '100': '#dac0ff',
          '200': '#bf9dff',
          '300': '#a47aff',
          '400': '#8947ff',
          '500': '#6e24ff',
          '600': '#5a1fcc',
          '700': '#461c99',
          '800': '#321966',
          '600': '#E02424',

          '50': '#DA3315FF',
        }
      }
    },
  },
  plugins: [
   
    require("flowbite/plugin")
 
  ],
}

