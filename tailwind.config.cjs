module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef7ff',
          500: '#2B85FF',
          600: '#1E6FE6'
        },
        muted: '#9CA3AF'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'sans-serif']
      },
      boxShadow: {
        'neumo-lg': '30px 30px 60px rgba(15,23,42,0.06), -20px -20px 40px rgba(255,255,255,0.9)',
        'neumo-sm': '8px 8px 18px rgba(15,23,42,0.05), -4px -4px 10px rgba(255,255,255,0.9)'
      }
    }
  },
  plugins: []
}
