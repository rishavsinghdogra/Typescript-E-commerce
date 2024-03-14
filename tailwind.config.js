/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   screens:{
    'xxs' : "430px",
    'xs' : "597px",
    'sm': "640px",
    'md': "768px",
    'lg': "1024px",
    'xl': "1280px",
   },
    extend: {},
  },
  plugins: [],
}

