/** @type {import('tailwindcss').Config} */
const themed = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        night: themed("night"),
        card: themed("card"),
        cream: themed("cream"),
        mist: themed("mist"),
        line: themed("line"),
        mint: themed("mint"),
      },
      fontFamily: {
        sans: ["Outfit", "Segoe UI", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"],
      },
      maxWidth: {
        page: "68rem",
      },
      boxShadow: {
        glow: "0 20px 60px -24px rgb(var(--mint) / 0.45)",
      },
    },
  },
  plugins: [],
};
