// Downloads the live OpenAPI spec and reports what changed. Node 18+.
import { readFile, writeFile } from 'node:fs/promises';

const URL = 'https://studio99.app/developers/openapi.json';
const FILE = new globalThis.URL('../openapi.json', import.meta.url);

const res = await fetch(URL);
if (!res.ok) throw new Error(`GET ${URL} -> ${res.status}`);
const next = await res.json();

let prev = null;
try { prev = JSON.parse(await readFile(FILE, 'utf8')); } catch { /* first run */ }

await writeFile(FILE, JSON.stringify(next, null, 2) + '\n');

if (!prev) {
  console.log(`Saved ${next.info.title} ${next.info.version}.`);
} else {
  const before = new Set(Object.keys(prev.paths));
  const after = new Set(Object.keys(next.paths));
  const added = [...after].filter((p) => !before.has(p));
  const removed = [...before].filter((p) => !after.has(p));
  console.log(`Version ${prev.info.version} -> ${next.info.version}`);
  if (added.length) console.log('Added paths:', added.join(', '));
  if (removed.length) console.log('Removed paths:', removed.join(', '));
  if (!added.length && !removed.length) console.log('Same paths; run `git diff openapi.json` for detail.');
}
