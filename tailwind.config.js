//'./src/**/*.{js,jsx,ts,tsx}', './public/index.html'

const { colors, fontSize, spacing } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          '700': '#666666',
          Windows10: '#525E73',
          Windows10TaskIcon: '#2d3748',
          Windows10Taskbar: '#1a202c',
          Windows10WindowHighlight: "#5A5A55",
          Windows95: '#C1C1C1',
          Windows95Start: '#808080',
          Windows95Window: '#BFC7C9',
          Windows95WindowHover: '#A9B1B3',
          Windows7: '#A5C2DF',
          Windows7Highlight: '#D7E8F8',
          Windows7Button: '#BECBDD',
          MacTaskbar: 'rgba(113,128,150, .85)',
          MacTaskIcon: '#a0aec0',
          MacWindow: '#D7D7D7',
          MacWindowBG: '#ECECEC',
          MacBanner: '#cbd5e0',
          LinuxTaskbar: 'rgba(0,0,0, .75)',
          UbuntuWindow: '#4D4B43'
        },
        blue: {
          ...colors.blue,
          XP: '#245EDC',
          XPButton: '#4277F5',
          XPButtonHighlight: '#6791F4',
          Highlight: '#2494DC',
          XPStartHighlight: '#326BC5',
          XPLogOff: '#0843C3',
          W95Start: '#010A7F',
          W95WindowBar: '#0011A7'
        },
        green: {
          ...colors.green,
          XP_Start: '#46AA49',
          StartHighlight: '#228b20'
        },
        red: {
          ...colors.red,
          closeButton: '#E71122',
          closeButtonHighlight: '#E6643D'
        },
        macbutton: {
          50: '#F3F9FF',
          100: '#E7F2FF',
          200: '#C2DFFF',
          300: '#9ECCFF',
          400: '#55A5FE',
          500: '#0C7FFE',
          600: '#0B72E5',
          700: '#074C98',
          800: '#053972',
          900: '#04264C'
        }
      }
    },
    fontSize: {
      ...fontSize,
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
      '10xl': '10rem',
      '11xl': '12rem'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '1xl': '1536px',
      '2xl': '1920px',
      '3xl': '2560px',
      '4xl': '3840px'
    },
    spacing: {
      ...spacing,
      '72': '18rem',
      '84': '21rem',
      '96': '24rem',
      '108': '27rem',
      '120': '30rem',
      '132': '33rem',
      '144': '36rem'
    }
  },
  variants: {},
  plugins: []
};
