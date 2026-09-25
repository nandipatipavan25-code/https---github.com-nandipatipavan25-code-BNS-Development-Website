/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#E6E6E6", // Primary white: #E6E6E6 (rgb: 230, 230, 230, hsl: 0, 0%, 90%)
        brand: {
          black: "#0A0A0A",
          dark: "#0F0F0F",
          graphite: "#151515",
          charcoal: "#1C1C1E",
          border: "rgba(245, 245, 243, 0.12)",
          borderLight: "rgba(245, 245, 243, 0.06)",
          red: "#D71920",
          redDark: "#B3141A",
          redGlow: "rgba(215, 25, 32, 0.25)",
          
          // Systematic Soft Off-White Hierarchy (no piercing 100% white)
          offwhite: "#E6E6E6",    // Primary white (#E6E6E6)
          heading: "#E6E6E6",     // Primary headings (H1, H2, major titles) - #E6E6E6
          subheading: "#D8D8D2",  // Subheadings (H3, H4, card titles, tags, key stats) - Soft oyster
          body: "#CCCCCC",        // General regular text - 80% soft refined white (#CCCCCC)
          subtext: "#A8A8A0",     // Subtext and text below section headings - #A8A8A0
          statText: "rgba(255, 255, 255, 0.60)", // Supporting/stat text - 60% white
          statMuted: "#999999",   // Supporting/stat text hex - 60% white
          mutedText: "#8A8A82",   // Secondary meta, captions, breadcrumbs
          steel: "#8E8E93",
          muted: "#A1A1A6",

          // Refined light architectural surface palette
          lightBg: "#F7F7F5",
          lightSurface: "#FFFFFF",
          lightBorder: "rgba(21, 21, 21, 0.1)",
          lightBorderSubtle: "rgba(21, 21, 21, 0.05)",
          lightText: "#111111",
          lightTextSecondary: "#52525B",
          lightMuted: "#71717A",
        }
      },
      fontFamily: {
        heading: ['"GT Super"', 'Georgia', 'serif'],
        display: ['"GT Super"', 'Georgia', 'serif'],
        sans: ['"Manrope"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        manrope: ['"Manrope"', 'sans-serif'],
        subheading: ['"Manrope"', 'sans-serif'],
        mono: ['"Roboto Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        widest: '0.2em',
        ultra: '0.3em',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'beam-sweep': 'beamSweep 4s ease-in-out infinite',
      },
      keyframes: {
        beamSweep: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
