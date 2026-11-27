// Spotlight @crisxai5 entry (Node 22, standard library only): it copies
// POST.json from the repository root to /output/POST.json, where the house
// gate reads it. That is all the program has to do. The post itself is the
// entry: an original spotlight card for @crisxai5, posted on X from a public
// account with the sponsor mention and a make.fun play code in its text, and
// the house reads the post's likes, reposts and quotes from X.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
console.log('POST.json copied to', join(OUTPUT_DIR, 'POST.json'));
