module.exports = {
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },
    extend: {
      colors: {
        mygreen: '#28a745',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
