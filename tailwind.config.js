/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary : "#002231",
      secondary : "#DD1155",
      text_base : "white",
      content : "#4D4D4D",
      textarea : "#F2F2F2",
      card : "#f1f1f1"
    },
    screens: {
      'xs':'420px',
      'sm': '720px',
      // => @media (min-width: 640px) { ... }

      'md': '1024px',
      // => @media (min-width: 768px) { ... }

      'lg': '1296px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      borderRadius: {
        'n': '10px',
      },
      fontSize : {
        // "xl" : "52px",
      }
    },
  },
  plugins: [],
}

