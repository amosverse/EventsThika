/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '475px',   // Extra small devices
      sm: '640px',   // Mobile landscape / small tablets
      md: '768px',   // Tablet portrait
      lg: '1024px',  // Desktop / tablet landscape
      xl: '1280px',  // Large desktop
      '2xl': '1536px', // Extra large screens
    },
    extend: {
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '112': '28rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.25vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.5vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.5rem + 1.5vw, 2.5rem)',
        'fluid-4xl': 'clamp(2.25rem, 1.8rem + 2vw, 3rem)',
        'fluid-5xl': 'clamp(3rem, 2.4rem + 2.5vw, 4rem)',
      },
      colors: {
        /* Strict Color System - Primary */
        'primary-dark': '#1F2645',
        
        /* Strict Color System - Accent */
        accent: {
          DEFAULT: '#E55625',
          hover: '#D14A1F',
          light: '#F37B4D',
        },
        
        /* Strict Color System - Success */
        success: {
          DEFAULT: '#4CAF50',
          light: '#81C784',
          dark: '#388E3C',
        },
        
        /* Additional brand colors */
        teal: {
          DEFAULT: '#14B8A6',
          subtle: '#F0FDFA',
        },
        purple: {
          DEFAULT: '#8B5CF6',
          subtle: '#FAF5FF',
        },
        
        /* Strict Color System - Backgrounds */
        background: '#FFFFFF',
        'background-alt': '#F5F7FA',
        surface: '#FFFFFF',
        
        /* Strict Color System - Text Hierarchy */
        'text-primary': '#1F2645',
        'text-secondary': 'rgba(31, 38, 69, 0.7)',
        'text-muted': 'rgba(31, 38, 69, 0.5)',
        
        /* Strict Color System - Border */
        border: 'rgba(31, 38, 69, 0.12)',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        tightish: '-0.015em',
        wideish: '0.04em',
      },
      boxShadow: {
        lift: '0 14px 40px rgba(43, 43, 43, 0.10)',
        liftSm: '0 10px 24px rgba(43, 43, 43, 0.10)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glow': '0 0 20px rgba(229, 86, 37, 0.15)',
      },
      borderRadius: {
        xl2: '1.25rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}

