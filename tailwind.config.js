/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'default-card': '0px 2px 20px 2px rgba(0, 0, 0, 0.1)', // x, y, blur, spread, color
        'navlink': '2px 0px 20px 2px rgba(0, 0, 0, 0.1)', // x, y, blur, spread, color
        'object-card': '0px 2px 20px 2px rgba(0, 0, 0, 0.2)', // x, y, blur, spread, color
      },
      backgroundImage: {
        'app-gradient': 'linear-gradient(to bottom, #D8DEED 30%, #97A3C1)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#042452",
        secondary: "#F0F0F0",
        tertiary: "#595959",
        white: "#fafafa",
        "default": "#D9D9D9",
        "default-inner": "#A3A3A3",

        "err-txt": "#B71C1C",
        "err-bg": "#EF9A9A",

        "warn-txt": "#CBA727",
        "warn-bg": "#FFFA8E",

        "ok-txt": "#295429",
        "ok-bg": "#6fd96f",

        "info-txt": "#1a5a8f",
        "info-bg": "#a2c2db",
      },
    },
  },
  plugins: [],
};
