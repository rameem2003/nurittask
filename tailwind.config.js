/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        custom:
          "linear-gradient(90deg, rgba(252,0,255,1) 0%, rgba(0,219,222,1) 100%)",

        customOne:
          "linear-gradient(175deg, rgba(255,255,255,1) 0%, rgba(48,48,48,1) 100%)",

        customTwo:
          "linear-gradient(164deg, rgba(255,0,0,1) 0%, rgba(255,199,0,1) 100%)",
      },
      maxWidth: {
        container: "1730px",
      },
      colors: {
        body: "#1E1E1E",
        fade: "#1E2127",
        pink: "#FB01FF",
      },

      fontFamily: {
        os: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
