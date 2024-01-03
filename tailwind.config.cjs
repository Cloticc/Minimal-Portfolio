module.exports = {
  content: ['./index.html', './src/**/*.{jsx, js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif'],
        raleway: ['Raleway', 'sans'],
        
      },
      animation: {
        'fade-down': 'fade-down 5s'
      },
      keyframes: {
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-10%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
      
    },
  },
  plugins: [],
};