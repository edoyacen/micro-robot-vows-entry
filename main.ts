// This entry writes the answer for The Funniest Sick-Day Excuse to the output directory.
// It resolves the target directory from MAKEFUN_OUTPUT_DIR, creates it if needed, and
// writes the single-line excuse to entry.txt without a trailing newline.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = "I am not sick; I am beta-testing a build where my immune system forgot to merge the patch.";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
