module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width : {
        '800' : '800px'
      },
      flex : {
        '0' : '0 0 100%'
      },
      borderRadius : {
        'half' : '50%',
      },

    },
  },
  plugins: [],
}