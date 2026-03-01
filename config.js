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
    bgPrimary:      "#161616",      // Near-black background
    bgSecondary:    "#10232A",      // Deep dark teal surface
    bgTertiary:     "#1c2e35",      // Cards — teal-tinted dark
    borderPrimary:  "#3D4D55",      // Blue-gray borders
    borderSubtle:   "#2a3a42",      // Subtle teal dividers
    borderAccent:   "#4a5a62",      // Accent borders (tags)
    textPrimary:    "#D3C3B9",      // Warm beige headings
    textSecondary:  "#A79E9C",      // Warm gray body text
    textTertiary:   "#7a7270",      // Muted warm captions
    textMuted:      "#3D4D55",      // Ghost text — blue-gray
    textFaint:      "#6a7a82",      // Tag text, subtle labels
    hoverText:      "#B58863",      // Hover — warm amber
    btnBg:          "#B58863",      // Warm amber button
    btnText:        "#161616",      // Dark button text
    btnHoverBg:     "#a07650",      // Deeper amber on hover
    navBg:          "rgba(22,22,22,0.92)",  // Near-black navbar
    scrollbarThumb: "#3D4D55",      // Blue-gray scrollbar
    cursorColor:    "rgba(181,136,99,1)",    // Amber cursor
    cursorRing:     "rgba(181,136,99,0.35)", // Amber cursor ring
  },

  /* ── LIGHT THEME COLORS ─────────────────────────────────────
   *  Used when the user toggles to light mode.
   *  Same structure as darkTheme — just different values.
   * ──────────────────────────────────────────────────────────── */
  lightTheme: {
    bgPrimary:      "#F2E9E4",      // Warm cream background
    bgSecondary:    "#e8ddd6",      // Slightly deeper cream
    bgTertiary:     "#ddd0c8",      // Cards — warm beige
    borderPrimary:  "#C9ADA7",      // Dusty rose borders
    borderSubtle:   "#d8c4be",      // Subtle warm dividers
    borderAccent:   "#b89e98",      // Deeper rose accent borders
    textPrimary:    "#22223B",      // Deep navy headings
    textSecondary:  "#4A4E69",      // Muted indigo body text
    textTertiary:   "#6a6d84",      // Light indigo captions
    textMuted:      "#C9ADA7",      // Ghost text — dusty rose
    textFaint:      "#8a7e7a",      // Tag text, subtle labels
    hoverText:      "#22223B",      // Deep navy hover
    btnBg:          "#4A4E69",      // Muted indigo button
    btnText:        "#F2E9E4",      // Cream button text
    btnHoverBg:     "#22223B",      // Deep navy hover
    navBg:          "rgba(242,233,228,0.92)", // Warm cream navbar
    scrollbarThumb: "#C9ADA7",      // Dusty rose scrollbar
    cursorColor:    "rgba(34,34,59,1)",      // Navy cursor
    cursorRing:     "rgba(34,34,59,0.25)",   // Navy cursor ring
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
