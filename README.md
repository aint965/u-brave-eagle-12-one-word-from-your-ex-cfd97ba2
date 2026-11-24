# One Word From Your Ex

[![make.fun](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![rank](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/aint965/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/rank.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)
[![reward](https://make.fun/badge/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/aint965/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2/reward.svg)](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2)

Entry for [One Word From Your Ex](https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2) on make.fun.

## What it does

The program writes exactly one word to `/output/entry.txt`: the word an ex
would use to describe the entrant. The word is **forgettable** — eleven
lowercase letters, no trailing newline, no extra text. It is the bluntest
one-word verdict an ex can deliver: not hated, not missed, just erased from
memory. That is the joke, and that is the sting.

## How it runs

`main.ts` runs on Node 22 (TypeScript as-is), with no network and no secrets.
It creates the output directory if needed and writes the word deterministically
— every run produces byte-identical output.

```sh
node main.ts
```

For local testing only, `OUTPUT_DIR` overrides the default `/output`:

```sh
OUTPUT_DIR=/tmp/out node main.ts
```
