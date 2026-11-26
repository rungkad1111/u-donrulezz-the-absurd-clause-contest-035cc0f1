// The Absurd Clause Contest — u-donrulezz-the-absurd-clause-contest-035cc0f1
// Entry: 151 characters (gate: 1–200), one sentence.
// Why this clause fits the brief: it opens as pure deadpan legal boilerplate
// ("The user hereby agrees that all disputes shall be resolved by...") and
// the absurdity ambushes the reader mid-sentence — single combat against an
// office goldfish, whose 214–0 record is stated with total bureaucratic
// calm. Concrete absurd image, no setup, no explaining of its own joke, and
// it could plausibly sit buried in a terms-of-service agreement until read.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "The user hereby agrees that all disputes shall be resolved by single combat between the user's champion and our office goldfish, whose record is 214–0.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
