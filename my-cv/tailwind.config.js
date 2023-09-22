const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fill: {
      current: 'currentColor',
    },
    fill: theme => ({
      'white': theme('colors.white'),
    }),
    extend: {
      colors: {
        'my-blue': '#0070f3',
        'my-red': '#ff0000',
        'arsenic-primary': '#2E2F34',
        'arsenic-secondary': '#34353A',
        'copper': '#AA7934'
      },
    },
  },
  plugins: [],
});