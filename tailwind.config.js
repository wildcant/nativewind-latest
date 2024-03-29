/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.js'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'brand-darkViolet': '#1E1E20',
        'brand-white': '#FFFFFF',
        // 'brand-yellow': '#FFC700',
        brand: {
          yellow: '#FFC700',
        },
        'gray-25': '#FCFCFD',
        'gray-50': '#F4F4F4',
        'gray-100': '#DDDDDE',
        'gray-200': '#C7C7C7',
        'gray-300': '#DCDEE1',
        'gray-400': '#B0B3B8',
        'gray-500': '#828489',
        'gray-600': '#63676C',
        'gray-700': '#4E535B',
        'gray-800': '#272A2E',
        'gray-900': '#232427',
        'gray-950': '#1E1E20',
        'error-25': '#FFFBFA',
        'error-50': '#FEF3F2',
        'error-100': '#FEE4E2',
        'error-200': '#FECDCA',
        'error-300': '#FDA29B',
        'error-400': '#F97066',
        'error-500': '#F04438',
        'error-600': '#D92D20',
        'error-700': '#B42318',
        'error-800': '#912018',
        'error-900': '#7A271A',
        'error-950': '#55160C ',
        'warning-25': '#FFFCF5',
        'warning-50': '#FFFAEB',
        'warning-100': '#FEF0C7',
        'warning-200': '#FEDF89',
        'warning-300': '#FEC84B',
        'warning-400': '#FDB022',
        'warning-500': '#F79009',
        'warning-600': '#DC6803 ',
        'warning-700': '#B54708',
        'warning-800': '#93370D',
        'warning-900': '#7A2E0E',
        'warning-950': '#4E1D09',
        'success-25': '#F6FEF9',
        'success-50': '#ECFDF3',
        'success-100': '#DCFAE6',
        'success-200': '#A9EFC5 ',
        'success-300': '#75E0A7',
        'success-400': '#47CD89',
        'success-500': '#17B26A',
        'success-600': '#079455',
        'success-700': '#067647',
        'success-800': '#085D3A',
        'success-900': '#074D31',
        'success-950': '#053321',
        landing: {
          yellow: {
            600: '#FFB300',
          },
          gray: {
            500: '#8E8E8F',
            750: '#565658',
          },
        },
        utility: {
          brand: {
            500: '#F4F3F5',
          },
        },
      },
      spacing: {
        0: '0rem',
        0.5: '0.125rem',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        32: '8rem',
        40: '10rem',
        48: '12rem',
        56: '14rem',
        64: '16rem',
        80: '20rem',
        96: '24rem',
        120: '30rem',
        140: '35rem',
        160: '40rem',
        180: '45rem',
        192: '48rem',
        256: '64rem',
        320: '80rem',
        360: '90rem',
        400: '100rem',
        480: '120rem',
      },
      padding: {
        0: '0rem',
        0.5: '0.125rem',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        32: '8rem',
        40: '10rem',
        48: '12rem',
        56: '14rem',
        64: '16rem',
        80: '20rem',
        96: '24rem',
        120: '30rem',
        140: '35rem',
        160: '40rem',
        180: '45rem',
        192: '48rem',
        256: '64rem',
        320: '80rem',
        360: '90rem',
        400: '100rem',
        480: '120rem',
      },
      borderRadius: {
        xxs: '0.125rem',
        xs: '0.25rem',
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.625rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.25rem',
        '4xl': '1.5rem',
        full: '9999px',
      },
      // fontFamily: {
      //   redhatdisplay: ['Red Hat Display', ...defaultTheme.fontFamily.sans],
      //   dmsans: ['DM Sans', ...defaultTheme.fontFamily.sans],
      //   inter: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      // },
      fontSize: {
        'heading-desktop-1': '5rem',
        'heading-desktop-2': '4rem',
        'heading-desktop-3': '2rem',
        'heading-desktop-4': '1.5rem',
        'heading-desktop-5': '1.25rem',
        'heading-desktop-6': '1.125rem',

        'heading-mobile-1': '2.5rem',
        'heading-mobile-2': '2.125rem',
        'heading-mobile-3': '1.5rem',
        'heading-mobile-4': '1.25rem',
        'heading-mobile-5': '1.125rem',
        'heading-mobile-6': '1rem',

        'body-1': '1.25rem',
        'body-2': '1.125rem',
        'body-3': '1rem',
        'body-4': '0.875rem',
        'body-5': '0.75rem',

        'quote-desktop-1': '2rem',
        'quote-desktop-2': '1.5rem',

        'quote-mobile-1': '1.375rem',
        'quote-mobile-2': '1.125rem',

        'label-1': '1rem',
        'label-2': '0.875rem',

        'display-2xl': ['4.5rem', { lineHeight: '5.625rem', letterSpacing: '-1.44px' }],
        'display-xl': ['3.75rem', { lineHeight: '4.5rem', letterSpacing: '-1.2px' }],
        'display-lg': ['3rem', { lineHeight: '3.75rem', letterSpacing: '-0.96px' }],
        'display-md': ['2.25rem', { lineHeight: '2.75rem', letterSpacing: '-0.72px' }],
        'display-sm': ['1.875rem', { lineHeight: '2.375rem' }],
        'display-xs': ['1.5rem', { lineHeight: '2rem' }],

        'text-xl': ['1.25rem', { lineHeight: '1.875rem' }],
        'text-lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'text-md': ['1rem', { lineHeight: '1.5rem' }],
        'text-sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'text-xs': ['0.75rem', { lineHeight: '1.125rem' }],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      // boxShadow: {
      //   xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      //   sm: '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)',
      //   md: '0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10)',
      //   lg: '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.05)',
      //   ringShadowXs: '0px 0px 0px 4px rgba(166, 166, 166, 0.24), 0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      //   filter: '0px 8px 24px 0px rgba(149, 157, 165, 0.20)',
      //   search: '0px 7px 29px 0px rgba(100, 100, 111, 0.10)',
      // },
    },
  },
  plugins: [],
}
