export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fbfbfd",
        foreground: "#0f172a",
        primary: "#4f46e5",
        glow: "#a855f7",
        accent: "#3b82f6",
        border: "#e2e8f0",
        muted: "#f1f5f9",
      },
      fontFamily: {
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
