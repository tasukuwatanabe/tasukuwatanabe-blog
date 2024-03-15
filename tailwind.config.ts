/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      aspectRatio: {
        'thumbnail': '16/7'
      },
      height: {
        'fullMinusHeader': 'calc(100vh - 4rem)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}

