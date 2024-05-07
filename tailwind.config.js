/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      'login': '12px',
      'icon': '20px',
      '5px': '5px'
    },
    extend: {
      colors:{
        'heading': '#181E4B',
        linkActive: '#4737FF',
        linkDeactive: '#9A9EA6',
        desc: '#5E6282',
        primary1: '#4475F2',
        placeholder: '#9C9C9C',
        border1: '#DEDEDE'
      }
    },
  },
  plugins: [],
}

