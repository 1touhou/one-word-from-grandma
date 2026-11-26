# One Word From Grandma

[![make.fun](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun)
[![rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/1touhou/one-word-from-grandma/rank.svg)](https://make.fun)
[![reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/1touhou/one-word-from-grandma/reward.svg)](https://make.fun)

An entry for [One Word From Grandma](https://make.fun) — a program that writes
exactly one word, the single word a grandma would text about AI, to
`/output/entry.txt`.

The word is **contraption**: the word a grandma reaches for when a machine
baffles her — warm, a little baffled, unmistakably about a machine, and funny
standing alone with no caption.

## Run

```sh
node main.ts
```

Writes the word to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`
when set). Node 22 stdlib only, deterministic, no trailing newline.
