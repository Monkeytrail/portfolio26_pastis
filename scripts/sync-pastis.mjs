import { copyFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const src = resolve(__dirname, '../node_modules/pastis-design-system/dist/pastis.js');
const dest = resolve(__dirname, '../public/pastis.js');

copyFileSync(src, dest);
console.log('Synced pastis.js from pastis-design-system into public/');
