import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('1. Building singlefile bundle with Vite...');
execSync('npx vite build --config vite.config.singlefile.js', {
  cwd: __dirname,
  stdio: 'inherit',
});

const distSingleHtmlPath = path.join(__dirname, 'dist-single', 'index.html');
let html = fs.readFileSync(distSingleHtmlPath, 'utf8');

// 1. Remove all modulepreload links if present
html = html.replace(/<link[^>]*rel="modulepreload"[^>]*>\s*/gi, '');

// 2. Remove any stray redirect scripts if present
html = html.replace(/<script>[\s\S]*?window\.location\.replace\(['"]\.\/BNS Website\.html[\s\S]*?<\/script>\s*/gi, '');

// 3. Remove Vite's modulepreload polyfill from the inline script to eliminate all fetch calls on file:///
const modulepreloadPolyfillRegex = /;?\(function\(\)\s*\{\s*let\s+e\s*=\s*document\.createElement\([`'"]link[`'"]\)\.relList;[\s\S]*?fetch\(e\.href,\s*n\)[\s\S]*?\}\)\(\);?/g;
html = html.replace(modulepreloadPolyfillRegex, ';');

// 4. Remove type="module" and crossorigin so browsers execute the inline script cleanly without CORS or module restrictions
html = html.replace(/<script\s+type="module"\s+crossorigin>/gi, '<script>');
html = html.replace(/<script\s+type="module">/gi, '<script>');

// 5. Verify <div id="root"></div> is before the first <script>
const rootIdx = html.indexOf('<div id="root">');
const scriptIdx = html.indexOf('<script>');
if (rootIdx === -1) {
  // If missing, inject directly before the script tag
  html = html.replace('<script>', '<div id="root"></div>\n<script>');
} else if (rootIdx > scriptIdx && scriptIdx !== -1) {
  // If root is after script, move it before script
  html = html.replace(/<div\s+id="root">\s*<\/div>/gi, '');
  html = html.replace('<script>', '<div id="root"></div>\n<script>');
}

// 6. Replace root-absolute paths with relative paths
html = html.replaceAll('"/videos/', '"./videos/');
html = html.replaceAll("'/videos/", "'./videos/");
html = html.replaceAll('"/images/', '"./images/');
html = html.replaceAll("'/images/", "'./images/");
html = html.replaceAll('"/logos/', '"./logos/');
html = html.replaceAll("'/logos/", "'./logos/");

// 7. Ensure title is BNS Website
if (!html.includes('<title>BNS Website</title>')) {
  html = html.replace(/<title>.*?<\/title>/i, '<title>BNS Website</title>');
}

// Write the patched HTML to dist-single/index.html
fs.writeFileSync(distSingleHtmlPath, html, 'utf8');

// 8. Copy media folders so relative paths work from any location
const publicDir = path.join(__dirname, 'public');
const webDir = __dirname;
const parentDir = path.join(__dirname, '..');

const copyFolderRecursive = (src, dest) => {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (const item of fs.readdirSync(src)) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    if (fs.statSync(srcPath).isDirectory()) {
      copyFolderRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

console.log('2. Syncing media assets for offline file:// execution...');
for (const folder of ['videos', 'images', 'logos']) {
  const src = path.join(publicDir, folder);
  // Into dist-single/
  copyFolderRecursive(src, path.join(__dirname, 'dist-single', folder));
  // Into Web/
  copyFolderRecursive(src, path.join(webDir, folder));
  // Into parent (BNS Logo/)
  copyFolderRecursive(src, path.join(parentDir, folder));
}

// 9. Save destinations
const destinations = [
  path.join(webDir, 'BNS Website.html'),
  path.join(parentDir, 'BNS Website.html'),
  path.join(__dirname, 'dist', 'index.html'),
  path.join(__dirname, 'dist', 'BNS Website.html'),
];

for (const dest of destinations) {
  const dir = path.dirname(dest);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(dest, html, 'utf8');
  console.log(`Saved single HTML to: ${dest}`);
}

console.log('Done! Single HTML standalone website built successfully.');
