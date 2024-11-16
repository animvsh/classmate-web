module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'], // Ensure all files in src are scanned for Tailwind classes
  theme: {
    extend: {
      // Adding custom colors
      colors: {
        'gray-750': '#2e2e2e', // Custom gray color
      },
      // Adding keyframe animations for 'blob'
      animation: {
        blob: 'blob 8s infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
};
