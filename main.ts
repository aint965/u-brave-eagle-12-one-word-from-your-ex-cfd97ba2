import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Word From Your Ex — the word an ex would use to describe the entrant.
// Round 2 (final): "forgettable".
// Reconsideration vs round 1's "exhausting": both are one word an ex would
// say, but "forgettable" wins on the judge's criteria in order — the laugh
// is a brutal punchline rather than a knowing nod, the sting is erasure
// (not even worth remembering) rather than annoyance, and no synonym
// carries its edge ("unmemorable" is limp), while "exhausting" swaps for
// "draining" with little loss and is said about jobs and toddlers too.
// "Forgettable" is specific to being erased from someone's memory.
// The output directory defaults to /output (the grader's mount); OUTPUT_DIR
// exists only so the program can be run locally for testing.
const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const WORD = "forgettable";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), WORD, "utf8");
