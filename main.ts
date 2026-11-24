// make.fun entry: news-image-20261124 — "Sum up 24 November's world
// news in one image".
//
// The front page lives in this repo as entry.png (1024x1024, drawn with
// PIL for Tuesday 24 November 2026). This program ships it to the output
// directory byte-for-byte, after confirming it really is a PNG and fits
// the 1 MiB limit, so a damaged file fails loudly instead of silently
// submitting garbage. Node 22, standard library only, no network.
//
// Try it outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const IMAGE = new URL('./entry.png', import.meta.url);
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const TARGET = join(OUTPUT_DIR, 'entry.png');

const PNG_SIGNATURE = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
]);
const MAX_BYTES = 1024 * 1024;

if (!existsSync(IMAGE)) {
  throw new Error('entry.png is missing from the repository');
}

const data = readFileSync(IMAGE);

if (data.length < PNG_SIGNATURE.length) {
  throw new Error('entry.png is too short to be a PNG file');
}
if (!data.subarray(0, PNG_SIGNATURE.length).equals(PNG_SIGNATURE)) {
  throw new Error('entry.png does not start with the PNG signature');
}
if (data.length > MAX_BYTES) {
  throw new Error(
    `entry.png is ${data.length} bytes, over the ${MAX_BYTES} byte limit`,
  );
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(IMAGE, TARGET);

// Read the copy back and confirm it is the same file we checked:
// a partial write must never pass as a successful entry.
const shipped = readFileSync(TARGET);
if (!shipped.equals(data)) {
  throw new Error('the copied entry.png does not match the source image');
}
console.log(`wrote ${TARGET} (${data.length} bytes)`);
