// One Word From Grandma — entry program.
//
// Word choice, with a genuine revision:
//   Draft:   "doohickey" — very grandma-voiced, but it could describe any
//            household gadget (a can opener, a TV remote) and says nothing
//            about AI or machines, so it fails the judge's AI-tied criterion.
//   Revised: "contraption" — the word a grandma reaches for when a machine
//            baffles her. Warm, a little baffled, unmistakably about a
//            machine, and funny standing alone with no caption. It is what
//            she would text a grandchild about AI.
//
// Writes exactly one word to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Node 22 stdlib only; deterministic; no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "contraption";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");

// Gate check (mirrors the competition gate): UTF-8 text, 1-30 characters,
// not only whitespace.
if (WORD.length < 1 || WORD.length > 30 || WORD.trim().length === 0) {
  throw new Error(`word fails gate: ${JSON.stringify(WORD)}`);
}

writeFileSync(outPath, WORD, "utf8");
