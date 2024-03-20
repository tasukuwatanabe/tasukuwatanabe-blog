/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      aspectRatio: {
        'thumbnail': '16/7'
      },
      minHeight: {
        'screenMinusHeader': 'calc(100vh - 4rem)'
      },
      gridTemplateColumns: {
        'baseLayout': '1fr 3fr'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class'
}

