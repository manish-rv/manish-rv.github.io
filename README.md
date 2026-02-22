# Manish Rudra Vijayakumar — Portfolio

A modular, React-based portfolio website with a stark monochrome editorial aesthetic.

---

## Project Structure

```
portfolio/
├── index.html                  ← Self-contained preview (React via CDN, no build needed)
│
└── src/
    ├── data/
    │   └── content.js          ← ✏️  ALL hardcoded text lives here. Edit this to update the site.
    │
    ├── styles/
    │   └── globals.css         ← All global CSS, animations, and utility classes
    │
    └── components/
        ├── App.jsx             ← Root component — composes all sections
        ├── Cursor.jsx          ← Custom crosshair cursor
        ├── Particles.jsx       ← Canvas particle effect
        ├── useReveal.js        ← Scroll-reveal hooks (useReveal, useTimelineFill)
        ├── Nav.jsx             ← Navigation bar
        ├── Hero.jsx            ← Hero / landing section
        ├── Marquee.jsx         ← Scrolling skill ticker
        ├── About.jsx           ← About me + info grid
        ├── Experience.jsx      ← Timeline (work + education)
        ├── Projects.jsx        ← Project cards with video/demo area
        └── Contact.jsx         ← Contact section + footer
```

---

## Editing Content

**To update any text**, open `src/data/content.js` and edit the relevant export:

| Export        | Controls                                      |
|---------------|-----------------------------------------------|
| `nav`         | Logo name, nav links, hire-me CTA             |
| `hero`        | Name, role, bio, stats, CTA buttons           |
| `marqueeSkills` | Skills in the scrolling ticker              |
| `about`       | About text, skills list, info grid            |
| `experience`  | Timeline entries (role, company, dates, tags) |
| `projects`    | Project cards (title, stack, description, GitHub link, video) |
| `contact`     | Contact heading, body text, links, footer     |

### Adding a project video

In `content.js`, find the project entry and set `videoSrc`:

```js
{
  index: "01",
  title: "SF Analytics Dashboard",
  videoSrc: "/videos/sf-dashboard.mp4",  // ← set this
  ...
}
```

---

## Running Locally

### Option A — Zero build (open directly in browser)
```
open index.html
```
Uses React + Babel via CDN. No npm required.

### Option B — With a build tool (Vite recommended)
```bash
npm create vite@latest portfolio-app -- --template react
cd portfolio-app

# Copy src/ files in
cp -r src/ portfolio-app/src/

npm install
npm run dev
```

Then in `main.jsx`:
```jsx
import './src/styles/globals.css'
import App from './src/components/App'
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```

---

## Tech Stack

- **React 18** — component architecture
- **Tailwind CSS** — utility classes
- **Bebas Neue + Barlow Condensed + IBM Plex Mono** — typography
- **IntersectionObserver** — scroll-triggered reveal animations
- **Canvas API** — particle effect
- **CSS keyframes** — all animations (no animation library dependency)
