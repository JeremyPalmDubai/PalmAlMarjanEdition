/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'deep-gray': 'rgb(44, 44, 44)',
        'light-beige': 'rgba(248, 243, 235, 1)',
        'premium-blue': '#007aff',
        'pure-white': '#ffffff',
        'glass': 'rgba(255, 255, 255, 0.1)',
        'glass-border': 'rgba(255, 255, 255, 0.2)',
        tesla: {
          black: 'rgb(44, 44, 44)',
          gray: {
            50: 'rgba(248, 243, 235, 0.5)',
            100: 'rgba(248, 243, 235, 0.7)',
            200: 'rgba(248, 243, 235, 0.9)',
            300: 'rgba(248, 243, 235, 1)',
            400: 'rgba(44, 44, 44, 0.4)',
            500: 'rgba(44, 44, 44, 0.6)',
            600: 'rgba(44, 44, 44, 0.8)',
            700: 'rgb(44, 44, 44)',
            800: 'rgb(35, 35, 35)',
            900: 'rgb(25, 25, 25)',
          },
          white: '#ffffff',
          blue: '#007aff',
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'counter-up': 'countUp 1.5s ease-out',
        'loading-bar': 'loading-bar 2s ease-in-out infinite',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      fontSize: {
        '2xs': '0.6875rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      letterSpacing: {
        'tighter': '-0.03em',
        'tight': '-0.02em',
        'wider': '0.1em',
        'widest': '0.15em',
      },
      lineHeight: {
        'extra-tight': '1.1',
        'tight': '1.2',
        'extra-loose': '2',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        '10xl': '104rem',
      },
      screens: {
        'xs': '475px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      borderRadius: {
        'tesla': '12px',
        'tesla-lg': '16px',
        'tesla-xl': '20px',
        'tesla-2xl': '24px',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      transitionTimingFunction: {
        'tesla': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'tesla-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '5/4': '5 / 4',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '5rem',
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.text-pretty': {
          'text-wrap': 'pretty',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
          '&::-webkit-scrollbar': {
            width: '2px',
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
}