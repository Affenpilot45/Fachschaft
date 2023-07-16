module.exports = {
  content: [
  ],
  
  theme: {
    extend: {
      colors: {
        'fh-blue': '#142465',
        'fh-blue-text' : '#5a73db'
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 20)',
      }
      
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
  ],
}
