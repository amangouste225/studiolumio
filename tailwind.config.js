/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "#f4f0ea",
        fonts: "#1b1816",
        secondary: "#9f9689",
      },
      fontSize: {
        primary: "max(13px, 1rem)",
        big: "32vw",
        nav: "max(30px,5rem)",
        upper: "max(18px,3rem)",
        medium: "max(16px,2.5rem)",
        small: "max(8px,0.8rem)",
      },
      fontFamily: {
        primary: "Manrope",
      },
      letterSpacing: {
        site: "-.05em",
      },
      lineHeight: {
        site: "1",
      },
      backgroundImage: "url(./video/video.mp4)",
    },
  },
  plugins: [],
};
