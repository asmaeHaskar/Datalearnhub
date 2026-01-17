/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

content: [
  './index.html',
  './src/**/*.{html,js,ts,jsx,tsx}',
],

  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', /* slate-700 */
        input: 'var(--color-input)', /* slate-700 */
        ring: 'var(--color-ring)', /* sky-500 */
        background: 'var(--color-background)', /* slate-900 */
        foreground: 'var(--color-foreground)', /* slate-200 */
        primary: {
          DEFAULT: 'var(--color-primary)', /* sky-500 */
          foreground: 'var(--color-primary-foreground)', /* white */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* slate-500 */
          foreground: 'var(--color-secondary-foreground)', /* white */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* emerald-500 */
          foreground: 'var(--color-accent-foreground)', /* white */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* red-600 */
          foreground: 'var(--color-destructive-foreground)', /* white */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* emerald-600 */
          foreground: 'var(--color-success-foreground)', /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* amber-600 */
          foreground: 'var(--color-warning-foreground)', /* white */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* red-600 */
          foreground: 'var(--color-error-foreground)', /* white */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* slate-700 */
          foreground: 'var(--color-muted-foreground)', /* slate-400 */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* slate-800 */
          foreground: 'var(--color-card-foreground)', /* slate-100 */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* slate-800 */
          foreground: 'var(--color-popover-foreground)', /* slate-100 */
        },
        text: {
          primary: 'var(--color-text-primary)', /* slate-50 */
          secondary: 'var(--color-text-secondary)', /* slate-400 */
        },
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      fontFamily: {
        heading: ['JetBrains Mono', 'monospace'],
        body: ['Manrope', 'sans-serif'],
        caption: ['Inter', 'sans-serif'],
        code: ['Fira Code', 'monospace'],
      },
      fontSize: {
        'h1': ['2.25rem', { lineHeight: '1.2' }],
        'h2': ['1.875rem', { lineHeight: '1.25' }],
        'h3': ['1.5rem', { lineHeight: '1.3' }],
        'h4': ['1.25rem', { lineHeight: '1.4' }],
        'h5': ['1.125rem', { lineHeight: '1.5' }],
        'caption': ['0.875rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '6': '6px',
        '12': '12px',
        '18': '18px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
        '80': '80px',
        '120': '120px',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        'primary-sm': 'var(--shadow-primary-sm)',
        'primary-md': 'var(--shadow-primary-md)',
        'primary-lg': 'var(--shadow-primary-lg)',
      },
      transitionDuration: {
        '250': '250ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      zIndex: {
        '1': '1',
        '10': '10',
        '50': '50',
        '100': '100',
        '200': '200',
        '300': '300',
        '1000': '1000',
        '1010': '1010',
        '1020': '1020',
      },
      maxWidth: {
        'prose': '70ch',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
}