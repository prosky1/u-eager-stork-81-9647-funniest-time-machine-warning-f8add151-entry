// Funniest Time Machine Warning Label — entry for
// https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151
//
// Writes the warning label to /output/entry.txt (the harness output dir),
// exactly as the competition gate requires: UTF-8 text, 1-120 characters.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LABEL =
  "WARNING: Do not sneeze in 1348. You are now the plague.";

// Runtime guard: the sealed gate only accepts UTF-8 text of 1-120
// characters that is not only whitespace. Refuse to emit an invalid label.
if (LABEL.length < 1 || LABEL.length > 120) {
  throw new Error(`Label is ${LABEL.length} characters; gate requires 1-120.`);
}
if (LABEL.trim().length === 0) {
  throw new Error("Label must not be only whitespace.");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, LABEL, "utf8");

// Verify the round-trip: what we wrote must read back byte-identical.
const roundTrip = readFileSync(outFile, "utf8");
if (roundTrip !== LABEL) {
  throw new Error("Round-trip check failed: entry.txt does not match the label.");
}
console.log(`Wrote ${LABEL.length} characters to ${outFile}`);
