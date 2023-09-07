import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        'main-horizontal-spacing': 'var(--main-horizontal-spacing)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

        'gradient-main':
          'radial-gradient(circle at bottom, navy 0, black 100%)',
        'gradient-planet': `linear-gradient(to right top, 
          #03031e,
          #03041d,
          #03041b,
          #03051a,
          #030518,
          #030519,
          #04061b,
          #04061c,
          #050721,
          #060725,
          #06082a,
          #06082e
        )`,
      },
      backgroundColor: {
        'primary-light': 'var(--primary-light-color)',
        secondary: 'var(--secondary-color)',
        'particle-header': 'var(--particle-header-color)',
      },

      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        button: 'var(--button-color)',
        cream: 'var(--cream-border-color)',
      },
      textColor: {
        primary: 'var(--primary-color)',
        'primary-light': 'var(--primary-light-color)',
        secondary: 'var(--secondary-color)',
      },
      width: {
        'planet-paragraph': 'var(--responsive-planet-paragraph-width)',
      },
      height: {
        'header-height': 'var(--header-height)',
      },
      fontSize: {
        'planet-title': 'var(--responsive-planet-title-text-size)',
        'planet-section-title': 'var(--responsive-planet-section-title-size)',
        'planet-paragraph': 'var(--responsive-planet-paragraph-size)',
      },

      borderColor: {
        hover: 'var(--hover-color)',
        cream: 'var(--cream-border-color)',
      },
      animation: {
        motion: 'scale 10s infinite linear',
      },
      keyframes: {
        scale: {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.2)' },
        },
      },
    },
    gridTemplateColumns: {
      main: 'repeat(auto-fill, minmax(23.75rem, 1fr))',
      'planets-page': '4fr 1fr',
      '4fr-1fr': '4fr 1fr;',
      '1fr': '1fr',
    },
  },
  plugins: [require('rippleui'), require('@tailwindcss/forms')],
};
export default config;

/* Planets */
// .planet-content {
//   background-image: linear-gradient(
//     to right top,
//     #03031e,
//     #03041d,
//     #03041b,
//     #03051a,
//     #030518,
//     #030519,
//     #04061b,
//     #04061c,
//     #050721,
//     #060725,
//     #06082a,
//     #06082e
//   );
// }
