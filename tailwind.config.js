const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.js',
    './pages/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        purple: '#F5EBFF',
        primary: 'var(--primary)',
        lightgrey: '#393e46',
        linkedIn: '#0076b5',
        darkgrey: 'var(--darkgray)',
        text: 'var(--text)',
        orange: '#b55400',
        yellow: 'var(--yellow)',
        blue: 'var(--blue)',
        secondary: 'var(--secondary)',
        lightpurple: 'var(--lightpurple)',
      },
    minHeight: {
      '60vh': '60vh'
    },
  }
},
  variants: {},
  plugins: [
    require( 'tailwindcss' ),
    require( 'autoprefixer' )
  ]
}