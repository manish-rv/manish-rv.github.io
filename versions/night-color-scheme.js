/**
 * ┌─────────────────────────────────────────────────────────────┐
 * │  NIGHT COLOR SCHEME                                         │
 * │  Deep space blue/purple gradient theme                      │
 * │  Inspired by: pinterest.com/pin/123708321009757495          │
 * │  Applied: 2026-02-28                                        │
 * └─────────────────────────────────────────────────────────────┘
 */

const NIGHT_COLOR_SCHEME = {

  /* ── DARK THEME (default) ─────────────────────────────────── */
  darkTheme: {
    bgPrimary:      "#06060e",      // Deep dark blue-black background
    bgSecondary:    "#0a0a18",      // Slightly lighter dark blue
    bgTertiary:     "#12122a",      // Cards, elevated surfaces — dark indigo
    borderPrimary:  "#2a2a5c",      // Blue-tinted borders
    borderSubtle:   "#1a1a3e",      // Subtle blue dividers
    borderAccent:   "#2e2e60",      // Accent borders (tags, small elements)
    textPrimary:    "#e8e4f8",      // Light lavender headings
    textSecondary:  "#8a8aac",      // Muted blue-gray body text
    textTertiary:   "#6a6a90",      // Faint blue-gray captions
    textMuted:      "#3a3a6a",      // Ghost text, very muted
    textFaint:      "#5a5a88",      // Tag text, subtle labels
    hoverText:      "#c8c4e8",      // Hover state — brighter lavender
    btnBg:          "#8b5cf6",      // Vibrant purple button
    btnText:        "#ffffff",      // White button text
    btnHoverBg:     "#7c3aed",      // Deeper purple on hover
    navBg:          "rgba(6,6,14,0.92)",  // Dark blue-black navbar
    scrollbarThumb: "#2a2a5c",      // Blue-tinted scrollbar
    cursorColor:    "rgba(139,92,246,1)",   // Purple cursor
    cursorRing:     "rgba(139,92,246,0.35)", // Purple cursor ring
  },

  /* ── LIGHT THEME (toggle) ─────────────────────────────────── */
  lightTheme: {
    bgPrimary:      "#f0eef8",      // Soft lavender-white
    bgSecondary:    "#e8e5f4",      // Light purple-gray
    bgTertiary:     "#ddd8f0",      // Cards — pale lavender
    borderPrimary:  "#6b5ba0",      // Medium purple borders
    borderSubtle:   "#8878b8",      // Light purple dividers
    borderAccent:   "#7a6ab0",      // Purple accent borders
    textPrimary:    "#1a1040",      // Deep purple-black headings
    textSecondary:  "#4a3a7a",      // Medium purple body text
    textTertiary:   "#6a5a9a",      // Light purple captions
    textMuted:      "#9a8ac0",      // Muted lavender ghost text
    textFaint:      "#8070b0",      // Faint purple labels
    hoverText:      "#1a1040",      // Deep purple hover
    btnBg:          "#6d28d9",      // Vivid purple button
    btnText:        "#ffffff",      // White button text
    btnHoverBg:     "#5b21b6",      // Darker purple hover
    navBg:          "rgba(240,238,248,0.92)", // Light lavender navbar
    scrollbarThumb: "#8a7ab0",      // Purple scrollbar
    cursorColor:    "rgba(26,16,64,1)",      // Dark purple cursor
    cursorRing:     "rgba(26,16,64,0.25)",   // Dark purple cursor ring
  },

  /* ── CSS EXTRAS ───────────────────────────────────────────────
   *  Additional CSS applied in globals.css for this scheme:
   *
   *  body::before gradient overlay (deep space effect):
   *    radial-gradient(ellipse 80% 60% at 20% 10%, rgba(88,28,180,0.15) ...)
   *    radial-gradient(ellipse 70% 50% at 80% 80%, rgba(30,64,175,0.12) ...)
   *    radial-gradient(ellipse 60% 40% at 50% 50%, rgba(139,92,246,0.06) ...)
   *
   *  Button hover:
   *    Dark:  #7c3aed
   *    Light: #5b21b6
   * ──────────────────────────────────────────────────────────── */
};
