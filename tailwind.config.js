module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'exact-lg': { 'raw': '(width: 1024px) and (height: 768px)' },
      }
    },
  },
  plugins: [],
}
