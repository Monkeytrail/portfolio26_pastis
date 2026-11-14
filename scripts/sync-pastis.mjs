import { copyFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = resolve(__dirname, '../node_modules/pastis-design-system/dist');
const pub = resolve(__dirname, '../public');

copyFileSync(resolve(dist, 'pastis.js'), resolve(pub, 'pastis.js'));
console.log('Synced pastis.js from pastis-design-system into public/');

// Token stylesheet ships from pastis-design-system v2 onwards
if (existsSync(resolve(dist, 'pastis-tokens.css'))) {
  copyFileSync(resolve(dist, 'pastis-tokens.css'), resolve(pub, 'pastis-tokens.css'));
  console.log('Synced pastis-tokens.css from pastis-design-system into public/');
}
