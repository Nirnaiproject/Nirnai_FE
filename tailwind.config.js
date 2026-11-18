/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: '#0B2240',
            light: '#1B365D',
            dark: '#071528',
          },
          gold: {
            DEFAULT: '#F5A623',
            light: '#FBBF24',
            dark: '#D97706',
          },
          green: {
            DEFAULT: '#0F766E',
            light: '#14B8A6',
            dark: '#115E59',
            badge: '#E6F4EA',
            text: '#0D6832'
          }
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
