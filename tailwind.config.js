module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef7ff",
          500: "#2B85FF",
          600: "#1E6FE6",
          700: "#155CB4",
        },
        muted: "#9CA3AF",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
        heading: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "neumo-sm":
          "3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.8)",
        "neumo-md":
          "6px 6px 12px rgba(0, 0, 0, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.8)",
        "neumo-lg":
          "30px 30px 60px rgba(15,23,42,0.06), -20px -20px 40px rgba(255,255,255,0.9)",
      },
    },
  },
  plugins: [],
};
