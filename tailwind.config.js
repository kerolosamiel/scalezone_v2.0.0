/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // bg: "var(--bg)",
        // surface: "var(--surface)",
        // "surface-border": "var(--surface-border)",
        // text: "var(--text)",
        // "text-muted": "var(--text-muted)",
        // "text-heading": "var(--text-heading)",
        // primary: {
        //   DEFAULT: "var(--primary)",
        //   hover: "var(--primary-hover)",
        // },
        // accent: "var(--accent)",
        // // Palette Brand Constants
        // brand: {
        //   scarlet: "#ff1301",
        //   orange: "#ff600b",
        //   softwhite: "#f3f3f3",
        //   gray: "#b2b2b2",
        //   black: "#000000",
        // },
      },
      fontFamily: {
        // heading: ["var(--font-ardela)", "sans-serif"],
        // body: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
