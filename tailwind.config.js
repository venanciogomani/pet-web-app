/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'default-yellow-dark': '#E0B833',
        'default-yellow-light': '#F8CF47',
        'default-blue-dark': '#285DAB',
        'default-blue-light': '#2B6DB1',
        'default-red': '#BF2C23',
        'default-grey-dark': '#666666',
        'default-grey-light': '#999999',
      }
    },
  },
  plugins: [],
}

