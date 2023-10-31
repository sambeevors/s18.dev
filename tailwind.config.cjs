/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        title: "clamp(2.25rem, 4vw, 3.75rem)",
      },
      fontFamily: {
        mono: ["PT Mono", "monospace"],
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        blink: {
          "0%": { opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      colors: {
        code: {
          yellow: "#FFC967",
        },
      },
      minHeight: {
        "screen-no-nav": "calc(100dvh - 6rem)", // Screen without navbar
        viewport: "calc(100dvh - 6rem - 24px)", // Screen without navbar and padding
      },
    },
  },
  plugins: [],
};
