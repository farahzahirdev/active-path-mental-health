import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bt: {
          ink: "#1D2C4C",
          "ink-2": "#3F90C9",
          paper: "#F5FBFC",
          sand: "#E8F4F7",
          card: "#FFFFFF",
          body: "#304049",
          muted: "#5F6F7A",
          accent: "#3F90C9",
          "accent-hover": "#2F74A8",
          "accent-ink": "#1D2C4C",
          line: "#CDE3EC",
          rose: "#E27C74",
          "rose-hover": "#D65F56",
          lavender: "#CAEAE9",
          "lavender-muted": "#7B8A94",
          "cta-text": "#CAEAE9",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        heading: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      fontSize: {
        "bt-body": ["1.0625rem", { lineHeight: "1.7" }],
        "bt-large": ["1.15rem", { lineHeight: "1.65" }],
        "bt-small": ["0.9375rem", { lineHeight: "1.65" }],
        "bt-h1": [
          "clamp(2.5rem, 6vw, 4rem)",
          { lineHeight: "1.12", letterSpacing: "-0.02em" },
        ],
        "bt-h2": [
          "clamp(1.75rem, 3.6vw, 2.5rem)",
          { lineHeight: "1.18", letterSpacing: "-0.02em" },
        ],
        "bt-h3": [
          "clamp(1.25rem, 2.2vw, 1.5rem)",
          { lineHeight: "1.25", letterSpacing: "-0.015em" },
        ],
      },
      maxWidth: {
        content: "1140px",
      },
      borderRadius: {
        brand: "14px",
        card: "14px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(29, 44, 76, 0.05), 0 10px 30px rgba(29, 44, 76, 0.06)",
        card: "0 1px 2px rgba(29, 44, 76, 0.05), 0 10px 30px rgba(29, 44, 76, 0.06)",
        lift: "0 4px 18px rgba(29, 44, 76, 0.28)",
        "hero-offset": "1.6rem -1.6rem -1.6rem 1.6rem",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(1.25rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.96)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.8s ease-out both",
        "scale-in": "scale-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        marquee: "marquee 40s linear infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
