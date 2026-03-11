# Manish Rudra Vijayakumar — Portfolio

A modular, config-driven portfolio website built with React, Tailwind CSS, and a warm editorial aesthetic. Features dark/light theming, scroll-reveal animations, canvas particles, and an interactive chatbot.

---

## Project Structure

```
portfolio/
├── index.html              ← Main HTML file (React via CDN, no npm needed)
├── config.js               ← ✏️  Design tokens: colors, fonts, animations, feature toggles
├── globals.css             ← Global styles, animations, chatbot styles
├── build.js                ← Injects components/ into index.html
│
├── data/                   ← ✏️  All portfolio text lives here
│   ├── nav.js              ← Logo name, nav links
│   ├── hero.js             ← Name, role, bio, stats, CTA buttons
│   ├── marquee.js          ← Skills in the scrolling ticker
│   ├── about.js            ← About text, skills list, info grid
│   ├── experience.js       ← Timeline entries (role, company, dates, tags)
│   ├── projects.js         ← Project cards (title, stack, description, links)
│   ├── contact.js          ← Contact heading, body text, links, footer
│   ├── chatbot.js          ← Chatbot Q&A knowledge base and suggestions
│   └── assets/             ← Images (logos, etc.)
│
├── components/             ← ✏️  React components (source of truth)
│   ├── shared.js           ← useReveal, useTimelineFill, SectionHeading, LinkButton, SectionLabel
│   ├── Cursor.js           ← Custom crosshair cursor
│   ├── Particles.js        ← Canvas particle background effect
│   ├── Nav.js              ← ThemeToggle, MobileMenu, Nav
│   ├── Hero.js             ← Hero / landing section
│   ├── Marquee.js          ← Scrolling skill ticker
│   ├── About.js            ← About me + info grid
│   ├── Experience.js       ← Timeline (work history)
│   ├── Projects.js         ← Project cards
│   ├── Contact.js          ← Contact section + footer
│   └── Chatbot.js          ← Floating chatbot widget
│
└── versions/               ← Session change logs
```

---

## Editing Content

**To update portfolio text**, edit the individual files in `data/`:

| File              | Controls                                      |
|-------------------|-----------------------------------------------|
| `data/nav.js`     | Logo name, nav links                          |
| `data/hero.js`    | Name, role, bio, stats, CTA buttons           |
| `data/marquee.js` | Skills in the scrolling ticker                |
| `data/about.js`   | About text, skills list, info grid            |
| `data/experience.js` | Timeline entries (role, company, dates, tags) |
| `data/projects.js`   | Project cards (title, stack, description, links) |
| `data/contact.js`    | Contact heading, body text, links, footer     |
| `data/chatbot.js`    | Chatbot name, greeting, suggestions, Q&A pairs |

**To customize design** (colors, fonts, animations, features), edit `config.js`. Changes take effect on browser refresh — no build needed.

---

## Building After Component Changes

If you edit files in `components/`, run the build script to inject them into `index.html`:

```bash
node build.js
```

This replaces everything between the `BUILD:START` / `BUILD:END` markers in `index.html` with the concatenated component files.

> Changes to `config.js`, `globals.css`, or `data/*.js` do **not** require a build — just refresh the browser.

---

## Running Locally

Open `index.html` directly in a browser — no npm or build tools required. React, ReactDOM, Babel, and Tailwind are loaded via CDN.

For a local server (recommended for best experience):

```bash
npx serve .
```

---

## Features

- **Dark / Light Theme** — toggle in the navbar, persisted in localStorage
- **Config-Driven Design** — all colors, fonts, animations, and feature toggles in `config.js`
- **Scroll Reveal Animations** — elements animate in on viewport entry via IntersectionObserver
- **Canvas Particles** — floating particle background effect
- **Film Grain Overlay** — subtle texture overlay (toggleable)
- **Custom Cursor** — crosshair cursor with dot follower (toggleable)
- **Scrolling Marquee** — skills ticker between Hero and About sections
- **Interactive Chatbot** — floating chat widget with keyword-matched Q&A about the portfolio owner
- **Mobile Responsive** — hamburger menu, responsive layout, touch-friendly chatbot

## Tech Stack

- **React 18** — component architecture (CDN, no build tooling)
- **Tailwind CSS 3.4** — utility classes via CDN
- **Babel Standalone** — JSX transformation in-browser
- **Bebas Neue + Barlow + Barlow Condensed + IBM Plex Mono** — typography
- **IntersectionObserver** — scroll-triggered reveal animations
- **Canvas API** — particle effect
- **CSS custom properties** — theming system
- **CSS keyframes** — all animations (no animation library dependency)
