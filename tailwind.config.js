/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f3f8',
          100: '#cce7f1',
          200: '#99cfe3',
          300: '#66b7d5',
          400: '#339fc7',
          500: '#027ABF',
          600: '#026299',
          700: '#014973',
          800: '#01314c',
          900: '#073F5C',
        },
        accent: {
          50: '#fff7e6',
          100: '#ffefc2',
          200: '#ffde85',
          300: '#ffce47',
          400: '#ffbd0a',
          500: '#FDAD00',
          600: '#ca8a00',
          700: '#976800',
          800: '#654500',
          900: '#332300',
        },
        terracotta: {
          50: '#fef2ed',
          100: '#fde5db',
          200: '#fbcbb7',
          300: '#f9b193',
          400: '#f7976f',
          500: '#FD8304',
          600: '#F23E16',
          700: '#b82e11',
          800: '#8a230d',
          900: '#5c1708',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-up': 'fadeUp 0.6s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};