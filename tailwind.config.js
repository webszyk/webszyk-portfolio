/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'teal': {
          800: '#115e59',
          900: '#134e4a',
        },
        'green': {
          500: '#10b981',
          600: '#059669',
        }
      }
    },
  },
  plugins: [],
} 