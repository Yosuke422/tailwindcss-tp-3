/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
      extend: {},
  },
  plugins: [],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "black": "#000000",
        "white": "#ffffff",
        "primary": "#A70F4E",
        "secondary": "#E9C8D8",
        "secondcard": "#F4F2F3",
        "thirdcard": "#E6E3E3",
      },
      fontFamily: {
        body: ['"Montserrat"'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    }
  }
}