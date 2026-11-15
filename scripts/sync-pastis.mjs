import { copyFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = resolve(__dirname, '../node_modules/pastis-design-system/dist');
const pub  = resolve(__dirname, '../public');

copyFileSync(resolve(dist, 'pastis.js'),         resolve(pub, 'pastis.js'));
copyFileSync(resolve(dist, 'pastis-tokens.css'), resolve(pub, 'pastis-tokens.css'));
console.log('Synced pastis.js + pastis-tokens.css from pastis-design-system into public/');
