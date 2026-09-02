import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        'paper-2': 'var(--paper-2)',
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        rule: 'var(--rule)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        display: [
          '"Fraunces Variable"',
          'Fraunces',
          'ui-serif',
          'Georgia',
          'serif',
        ],
        sans: [
          '"Inter Variable"',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },
      letterSpacing: {
        mega: '-0.04em',
      },
      maxWidth: {
        wrap: '1280px',
      },
      transitionProperty: {
        theme: 'background-color, color, border-color, fill, stroke',
      },
      transitionDuration: {
        '200': '200ms',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.25' },
        },
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        blink: 'blink 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
