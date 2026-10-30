// Remove image files in dist/_astro that no built page references
// (Vite emits every original that the gallery data module can import).
import { readdirSync, readFileSync, unlinkSync, statSync } from 'node:fs';
import { join } from 'node:path';
const dist = new URL('../dist/', import.meta.url).pathname;
const texts = [];
const walk = (d) => readdirSync(d).forEach((f) => { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : /\.(html|css|js|xml|json)$/.test(f) && texts.push(readFileSync(p, 'utf8')); });
walk(dist);
const all = texts.join('\n');
let removed = 0, bytes = 0;
for (const f of readdirSync(join(dist, '_astro'))) {
  if (!/\.(jpe?g|png|webp|avif)$/i.test(f)) continue;
  if (!all.includes(f)) { const p = join(dist, '_astro', f); bytes += statSync(p).size; unlinkSync(p); removed++; }
}
console.log(`prune-assets: removed ${removed} unreferenced images (${(bytes / 1e6).toFixed(1)} MB)`);
