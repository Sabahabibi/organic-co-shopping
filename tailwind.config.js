/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Matches all your component files
  ],
  theme: {
    extend: {
      fontFamily: {
        lateef: ['lateef_regular', 'sans-serif'],
        lateefMedium: ['lateef_medium', 'sans-serif'],
        lateefLight: ['lateef_light', 'sans-serif'],
        lateefBold: ['lateef_bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
