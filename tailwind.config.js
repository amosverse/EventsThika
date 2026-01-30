/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      csssm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      animation: {
        'bounce-slow': 'bounce 3s infinite',
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
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}

