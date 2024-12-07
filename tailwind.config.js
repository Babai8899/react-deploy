/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mylighttheme: {
          "primary": "#00a898",
          "secondary": "#308b00",
          "accent": "#787200",
          "neutral": "#130600",
          "base-100": "#fff5db",
          "info": "#0069df",
          "success": "#a4d600",
          "warning": "#c96800",
          "error": "#ff83a6",
        },
      },
      {
        mydarktheme: {
          "primary": "#008fdf",
          "secondary": "#009700",
          "accent": "#00918e",
          "neutral": "#392621",
          "base-100": "#1c2323",
          "info": "#00c4ff",
          "success": "#00e8b9",
          "warning": "#c22f00",
          "error": "#ff004a",
        },
      }
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}
