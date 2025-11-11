/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00796B',
        'primary-light': 'rgba(0, 121, 107, 0.1)',
        'primary-lighter': 'rgba(0, 121, 107, 0.2)',
        'primary-medium': 'rgba(0, 121, 107, 0.3)',
        'secondary': '#E53935',
        'secondary-light': 'rgba(229, 57, 53, 0.2)',
        'accent-yellow': '#FBC02D',
        'accent-yellow-light': 'rgba(251, 192, 45, 0.2)',
        'accent-blue': '#1E88E5',
        'accent-blue-light': 'rgba(30, 136, 229, 0.2)',
        'text-dark': '#333333',
        'text-main': '#444444',
        'text-light': '#4B5563',
        'background-main': '#FFFFFF',
        'background-light': '#F7FAFA',
        'background-alt': '#F9FAFB',
        'footer-bg': '#111827',
        'footer-text': '#9CA3AF',
        'footer-text-light': '#D1D5DB',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0px 2px 4px -2px rgba(0, 0, 0, 0.1), 0px 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'image': '0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'schedule': '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
