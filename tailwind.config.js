/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "#f4f0ea",
        fonts: "#1b1816",
      },
      fontSize: {
        primary: "max(13px, 1rem)",
        big: "32vw",
        nav: "max(24px,5rem)",
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
