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
    bgPrimary:      "#080808",      // Main page background
    bgSecondary:    "#0f0f0f",      // Alternate section backgrounds (Experience, Contact)
    bgTertiary:     "#161616",      // Cards, elevated surfaces
    borderPrimary:  "#333",         // Primary borders between sections
    borderSubtle:   "#222",         // Subtle dividers
    borderAccent:   "#2a2a2a",      // Accent borders (tags, small elements)
    textPrimary:    "#f0ede6",      // Headings, primary text
    textSecondary:  "#888",         // Body text, descriptions
    textTertiary:   "#666",         // Captions, labels, faint text
    textMuted:      "#444",         // Ghost text, very muted elements
    textFaint:      "#555",         // Tag text, subtle labels
    hoverText:      "#d8d4cc",      // Hover state for text
    btnBg:          "#fff",         // Primary button background
    btnText:        "#080808",      // Primary button text color
    btnHoverBg:     "#e8e4dc",      // Primary button hover background
    navBg:          "rgba(18,18,22,0.92)",  // Navbar background (with blur)
    scrollbarThumb: "#333",         // Custom scrollbar color
    cursorColor:    "rgba(255,255,255,1)",   // Custom cursor color
    cursorRing:     "rgba(255,255,255,0.35)", // Cursor ring/crosshair opacity
  },

  /* ── LIGHT THEME COLORS ─────────────────────────────────────
   *  Used when the user toggles to light mode.
   *  Same structure as darkTheme — just different values.
   * ──────────────────────────────────────────────────────────── */
  lightTheme: {
    bgPrimary:      "#f5f3ef",
    bgSecondary:    "#edebe6",
    bgTertiary:     "#e6e4df",
    borderPrimary:  "#3a4a6a",
    borderSubtle:   "#2a3a5a",
    borderAccent:   "#3a4a6a",
    textPrimary:    "#0c1a3a",
    textSecondary:  "#2a3f6e",
    textTertiary:   "#4a5d8a",
    textMuted:      "#7a8ab0",
    textFaint:      "#6678a0",
    hoverText:      "#0c1a3a",
    btnBg:          "#0c1a3a",
    btnText:        "#f5f3ef",
    btnHoverBg:     "#162d5a",
    navBg:          "rgba(238,236,230,0.92)",
    scrollbarThumb: "#7a8ab0",
    cursorColor:    "rgba(12,26,58,1)",
    cursorRing:     "rgba(12,26,58,0.25)",
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
