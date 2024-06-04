/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: "'Outfit',sans-seri"
      },
      /* start animation code*/
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-10%)' },
          '50%': { transform: 'translateY(0)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      animation: {
        bounce: 'bounce 0.5s ease-in-out infinite',
        spin: 'spin 1s linear infinite',
        pulse: 'pulse 1s ease-in-out infinite',
      },

      /* end */
    },
  },
  plugins: [],
}

