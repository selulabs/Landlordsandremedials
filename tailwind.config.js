/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EEF6F1',
          100: '#D5EADD',
          200: '#A9D4B8',
          300: '#6FB88C',
          400: '#55B52D',
          500: '#2F8F5B',
          600: '#0E7A45',
          700: '#075B32',
          800: '#054726',
          900: '#03321B',
        },
        ink: '#17191D',
        mist: '#F4F6F4',
        line: '#E2E7E3',
      },
      fontFamily: {
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(23, 25, 29, 0.04), 0 8px 24px -12px rgba(23, 25, 29, 0.12)',
        lift: '0 2px 4px rgba(23, 25, 29, 0.06), 0 24px 48px -16px rgba(7, 91, 50, 0.25)',
      },
    },
  },
  plugins: [],
};
