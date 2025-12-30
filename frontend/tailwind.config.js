/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary: '#3162B3',
        primaryLight: '#407DE3',
        white: '#ffffff ',
        background: '#1D2129',
        buttonColor: '#393E46',
      }
    },
  },
  plugins: [],
}