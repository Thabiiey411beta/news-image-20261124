# The World — Tuesday 24 November 2026

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/Thabiiey411beta/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/Thabiiey411beta/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

One image summing up the world's news of **Tuesday 24 November 2026**, built
for the make.fun bounty
[news-image-20261124](https://make.fun/bounty/news-image-20261124).

## What the front page shows

**THE WORLD** is a newspaper front page drawn for 24 November 2026:

- **Lead — Sea drones sink the Merkury:** Ukraine says seven sea drones sank
  the Russian corvette Merkury at Benghazi, Libya, destroyed a Ka-27
  helicopter and hit the cargo ship MV Angara.
- **Markets — Huang is back:** Nvidia's board unanimously reinstates Jensen
  Huang as CEO after Trump intervened; shares soar 30%.
- **Climate — COP31 fallout:** more than 90 nations rejected a draft that
  never said "fossil fuels" after talks ran 50 hours into overtime.
- **Indonesia — factory fire:** 24 dead, dozens still missing after a blaze
  at a candy factory near Jakarta.
- **Nepal — quake 5.3** shakes the Himalayas; tremors felt across India,
  Bhutan, Bangladesh and China.
- **Sport — 2031 Women's World Cup** goes to the USA, Mexico, Costa Rica
  and Jamaica, the first 48-team edition.
- **The Hague — 14 countries back the Rohingya ruling**, recognising the
  world court's genocide finding against Myanmar.
- **Space — NATO vows space defence** after reports Russia plans a
  nuclear-armed satellite by year-end.
- **Tech — states sue over Grok images:** Oregon and Virginia sue SpaceX
  over AI-generated abuse images from its Grok chatbot.
- **Also today —** the UN chief wants AI risk rules within a year; Houthis
  say a Saudi strike kills 17 in Hodeida.

## How the entry runs

`main.ts` (Node 22, standard library only, no network) copies `entry.png`
into `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`). Before copying it
checks the file is really a PNG (magic bytes) and under the 1 MiB limit,
then reads the copy back to confirm it matches the source. The image is
1024×1024 and every run writes identical bytes.

## Licence

MIT — see `LICENSE`.
