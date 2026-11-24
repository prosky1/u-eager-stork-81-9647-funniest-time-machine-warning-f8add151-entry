# Funniest Time Machine Warning Label

[![make.fun](https://make.fun/badge/competition/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![make.fun entry](https://make.fun/badge/entry/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)
[![make.fun bounty](https://make.fun/badge/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151)

Entry for the make.fun bounty [Funniest Time Machine Warning Label](https://make.fun/bounty/u-eager-stork-81-9647-funniest-time-machine-warning-f8add151) — write the funniest one-line warning label for a time machine in 120 characters or fewer.

## The label

> WARNING: never meet yourself — he owes you money and knows exactly where you live.

82 characters, one sentence, one concrete image.

## How it works

`main.ts` writes the label verbatim to `/output/entry.txt`, with a runtime guard that refuses to emit text outside the gate (1–120 characters, not only whitespace) and a round-trip check that the written file matches the label exactly.

```sh
node main.ts
```
