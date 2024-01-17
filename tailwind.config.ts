import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './features/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      screens: {
        '3xl': '1920px',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        'new-athletic-m54': ['var(--font-new-athletic-m54)'],
      },
      boxShadow: {
        'button-0': '0px 0px 0px 0px black',
        'yellow-800-button-8': '8px 8px 0px 0px #854D0E',
        'yellow-800-button-12': '12px 12px 0px 0px #854D0E',
      },
      textShadow: {
        'stroke-1':
          '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black',
        'stroke-2':
          '-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        'button-reflect-slide': '2.5s infinite button-reflect-slide',
        marquee: 'marquee 3s linear infinite',
      },
      keyframes: {
        'button-reflect-slide': {
          '0%': {
            transform: 'translateX(-100%) rotate(-45deg);',
          },
          '50%': {
            transform: 'translateX(100%) rotate(-45deg);',
          },
          '100%': {
            transform: 'translateX(-100%) rotate(-45deg);',
          },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': value => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      );
    }),
  ],
};
export default config;
