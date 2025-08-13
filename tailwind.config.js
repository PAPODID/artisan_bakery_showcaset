module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8B4513", // brown-700
          50: "#F5F1ED",
          100: "#E8DDD1",
          200: "#D4C2A8",
          300: "#C0A67F",
          400: "#AC8A56",
          500: "#8B4513", // brown-700
          600: "#7A3C11",
          700: "#69330F",
          800: "#582A0D",
          900: "#47210B",
        },
        secondary: {
          DEFAULT: "#D2B48C", // tan
          50: "#FAF8F4",
          100: "#F4F0E8",
          200: "#E9DFD1",
          300: "#DDCEBA",
          400: "#D2B48C", // tan
          500: "#C7A373",
          600: "#B8925A",
          700: "#A08041",
          800: "#876E28",
          900: "#6F5C0F",
        },
        accent: {
          DEFAULT: "#CC465E", // rose-600
          50: "#FDF2F4",
          100: "#FCE7EA",
          200: "#F9CFD5",
          300: "#F5B7C0",
          400: "#F19FAB",
          500: "#CC465E", // rose-600
          600: "#B83E54",
          700: "#A4364A",
          800: "#902E40",
          900: "#7C2636",
        },
        background: "#EBE1E0", // stone-200
        surface: "#F5F5DC", // beige
        text: {
          primary: "#2F2F2F", // gray-800
          secondary: "#6B6B6B", // gray-500
        },
        success: "#8FBC8F", // green-400
        warning: "#DAA520", // yellow-600
        error: "#CD5C5C", // red-400
        border: "#E5E5E5", // gray-200
      },
      fontFamily: {
        headline: ['Playfair Display', 'serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        cta: ['Montserrat', 'sans-serif'],
        accent: ['Dancing Script', 'cursive'],
        sans: ['Source Sans Pro', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'large': '0 8px 32px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
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
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
      },
    },
  },
  plugins: [],
}