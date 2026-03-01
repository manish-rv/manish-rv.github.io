/**
 * ┌─────────────────────────────────────────────────────────────┐
 * │  PORTFOLIO CONFIG                                           │
 * │  Edit this file to customize colors, fonts, animations,     │
 * │  layout, and features. All design tokens live here.         │
 * │                                                             │
 * │  After editing, just refresh the browser — no build needed. │
 * │  (Only component changes need `node build.js`)              │
 * └─────────────────────────────────────────────────────────────┘
 */

const CONFIG = {

  /* ── DARK THEME COLORS ──────────────────────────────────────
   *  These are used when the page is in dark mode (default).
   *  Each color maps to a CSS custom property (--bg-primary, etc.)
   *  which Tailwind references via the skin-* color palette.
   * ──────────────────────────────────────────────────────────── */
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

  /* ── LIGHT THEME COLORS ─────────────────────────────────────
   *  Used when the user toggles to light mode.
   *  Same structure as darkTheme — just different values.
   * ──────────────────────────────────────────────────────────── */
  lightTheme: {
    bgPrimary:      "#f0eef8",
    bgSecondary:    "#e8e5f4",
    bgTertiary:     "#ddd8f0",
    borderPrimary:  "#6b5ba0",
    borderSubtle:   "#8878b8",
    borderAccent:   "#7a6ab0",
    textPrimary:    "#1a1040",
    textSecondary:  "#4a3a7a",
    textTertiary:   "#6a5a9a",
    textMuted:      "#9a8ac0",
    textFaint:      "#8070b0",
    hoverText:      "#1a1040",
    btnBg:          "#6d28d9",
    btnText:        "#ffffff",
    btnHoverBg:     "#5b21b6",
    navBg:          "rgba(240,238,248,0.92)",
    scrollbarThumb: "#8a7ab0",
    cursorColor:    "rgba(26,16,64,1)",
    cursorRing:     "rgba(26,16,64,0.25)",
  },

  /* ── FONTS ──────────────────────────────────────────────────
   *  Change these to swap typefaces. Update importUrl to match.
   *  Browse fonts at https://fonts.google.com
   *
   *  display:    Large headings (MANISH RUDRA VIJAYAKUMAR, section titles)
   *  condensed:  Subheadings, role titles, labels
   *  body:       Paragraphs, descriptions
   *  mono:       Tags, technical labels, section numbers
   * ──────────────────────────────────────────────────────────── */
  fonts: {
    display:   '"Bebas Neue"',
    condensed: '"Barlow Condensed"',
    body:      'Barlow',
    mono:      '"IBM Plex Mono"',
    // Google Fonts import URL — must include all fonts above with needed weights
    importUrl: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Barlow+Condensed:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@300;400;500&display=swap",
  },

  /* ── ANIMATIONS ─────────────────────────────────────────────
   *  Control timing, intensity, and behavior of all animations.
   * ──────────────────────────────────────────────────────────── */
  animations: {
    revealDuration:  "0.65s",   // How long scroll-reveal transitions take
    revealOffset:    "28px",    // How far elements slide up/in on reveal
    marqueeSpeed:    "18s",     // Marquee scroll duration (lower = faster)
    particleCount:   40,        // Number of floating background particles
    particleOpacity: 0.25,      // Particle canvas opacity (0 = invisible, 1 = full)
    grainOpacity:    0.55,      // Film-grain overlay opacity (0 = off, 1 = heavy)
  },

  /* ── LAYOUT ─────────────────────────────────────────────────
   *  Adjust spacing and sizing of the overall page structure.
   * ──────────────────────────────────────────────────────────── */
  layout: {
    navBlur: "12px",            // Navbar backdrop blur radius
  },

  /* ── FEATURE TOGGLES ────────────────────────────────────────
   *  Enable or disable visual features with true/false.
   * ──────────────────────────────────────────────────────────── */
  features: {
    darkModeDefault: true,      // true = start in dark mode, false = start in light
    showParticles:   true,      // Floating particle background effect
    showGrain:       true,      // Film-grain texture overlay
    showCursor:      true,      // Custom crosshair cursor (false = default arrow)
    showMarquee:     true,      // Scrolling text ticker between Hero and About
    smoothScroll:    true,      // Smooth scroll behavior for anchor links
  },
};
