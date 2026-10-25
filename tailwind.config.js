/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          red: '#E30613',
          dark: '#0D0D0D',
          charcoal: '#111111',
          steel: '#1C1C1C',
          warm: '#F5F3F0',
          warmgray: '#E8E4DF',
        },
      },
      letterSpacing: {
        display: '0.04em',
      },
      transitionTimingFunction: {
        'engineered': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
};
