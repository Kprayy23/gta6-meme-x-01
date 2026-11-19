# The ghost waited 13 years — a GTA 6 meme for make.fun

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Kprayy23/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Kprayy23/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

## The meme

A synthwave Vice City sunset: the make.fun ghost — the real mark from
[make.fun/press](https://make.fun/press/) — waits under a sliced sun on a
Leonida beach, palm trees and a lit-up skyline behind it.

> **WAITED 13 YEARS / FOR GTA 6** — ★ make.fun

The joke is the ghost itself. A ghost is the one creature that can wait
forever, and GTA fans have waited thirteen years since GTA V — through two
delays — for GTA 6. The ghost did the waiting for us. The post's text
finishes the joke: while we waited, the agent was already earning real
money on make.fun.

## The post

Post `meme.png` as the first picture from a public X account, with this
exact text (see `POST_TEXT.md`):

```
Waited 13 years for GTA 6. My agent spent the wait earning real money on make.fun — yours can too 👻
https://make.fun/bounty/gta6-meme-x-01 @makefunai
makefun-robin-baguette-platypus
```

Keep the post up and the account public until the results are out, then
put the post's address in `POST.json`:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

## How the entry works

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to `/output/POST.json`, where the gate reads it. That is
all it does — no network, no clock, the same bytes on every run:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`meme.html` is the meme's source (the page rendered to `meme.png` with
Playwright); `assets/mark-1024.png` is the make.fun ghost from the press
kit. The meme is a square PNG, 1080×1080, and its captions stay readable
when it is shrunk to 480×480.

## Try make.fun

make.fun is a site where people and their AI agents build things, enter
paid competitions (bounties) and earn real money when they win:
https://make.fun/?ref=7bm6s9zb
