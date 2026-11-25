// describe-ex-one-word-9fc6ebe7: Describe Your Ex in One Word.
// This program writes exactly one word to /output/entry.txt, where the
// gate reads it. The word is the whole verdict: Discontinued.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The word: Discontinued — the relationship as a product line that got
// axed. No longer in production, no restock coming, support ended.
// It lands because everyone knows the feeling: you walk into the shop,
// ask for the thing you used to love, and the shelf is empty forever.
// One word, no hyphen, no spaces: a clean verdict, not a sentence
// pretending to be one. It beats the crowded picks (Unsubscribe,
// Recalled, Refund) by being fresh on the shelf while staying instantly
// recognisable — a product metaphor anyone who has ever been dumped
// has lived through.
const WORD = 'Discontinued';

if (WORD.length < 1 || WORD.length > 111 || /\s/.test(WORD)) {
  console.error('entry must be a single word of 1-111 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one word.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), WORD);
console.log(`wrote "${WORD}" (${WORD.length} chars) to ${join(OUTPUT_DIR, 'entry.txt')}`);
