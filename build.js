/**
 * build.js — Injects component source files into index.html
 *
 * Usage:  node build.js
 *
 * Reads each file listed in COMPONENTS, wraps it with a comment header,
 * and replaces everything between the BUILD:START / BUILD:END markers
 * in index.html.  The component files in components/ are the source of
 * truth — edit them, then run this script.
 */

const fs = require('fs');
const path = require('path');

const COMPONENTS = [
  'components/shared.js',
  'components/Cursor.js',
  'components/Particles.js',
  'components/Nav.js',
  'components/Hero.js',
  'components/Marquee.js',
  'components/About.js',
  'components/Experience.js',
  'components/Projects.js',
  'components/Contact.js',
];

const HTML_FILE = path.join(__dirname, 'index.html');
const START = '/* ==BUILD:START== */';
const END   = '/* ==BUILD:END== */';

// Read and concatenate component files
let bundle = '';
for (const file of COMPONENTS) {
  const filePath = path.join(__dirname, file);
  const src = fs.readFileSync(filePath, 'utf-8').trimEnd();
  const name = path.basename(file);
  bundle += `/* ── ${name} ── */\n\n${src}\n\n`;
}

// Read index.html and replace between markers
let html = fs.readFileSync(HTML_FILE, 'utf-8');
const startIdx = html.indexOf(START);
const endIdx   = html.indexOf(END);

if (startIdx === -1 || endIdx === -1) {
  console.error('ERROR: Could not find BUILD:START / BUILD:END markers in index.html');
  process.exit(1);
}

html = html.slice(0, startIdx + START.length)
     + '\n' + bundle
     + html.slice(endIdx);

fs.writeFileSync(HTML_FILE, html, 'utf-8');
console.log('Done — injected ' + COMPONENTS.length + ' components into index.html');
