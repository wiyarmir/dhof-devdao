<p align="center">
  <h1 align="center">dhof-loot</h1>
</p>
<p align="center">
<b><a href="https://github.com/anish-agnihotri/dhof-devdao#About">About</a></b>
|
|
<b><a href="https://github.com/anish-agnihotri/dhof-devdao#License">License</a></b>
</p>

# About

This repository contains tooling and data for [devdao](), and is free to use without credit or attribution, for any means.

> Loot itself is a collection of 8,000 unique bags of adventurer gear NFTs. At release, anyone could claim loot bags for just gas, and all bags were claimed in under 4 hours. Each loot bag contains 8 items: a piece for an adventurer's chest, foot, hand, head, neck, ring, waist, and weapon.

# Loot

## Distribution

- tokenIds `1` to `7778` claimable by user.
- tokenIds `7778` to `8000` claimable by contract owner.
- Each token has attributes: `chest`, `foot`, `hand`, `head`, `neck`, `ring`, `waist`, `weapon`.

## Output

- `output/loot.json` contains all tokenIds and their attributes.
- `output/occurences.json` contains the number of occurences by attribute.
- `output/rare.json` contains a mapping of `lootId` to `score` (which is the sum of number of occcrences of each child attribute for a `lootId`), sorted ascending by `score`. It also includes `rarest` which is how rare the loot bags attributes are (`1` == `rarest`, `8000` == `least rare`), based on this specific ranking mechanism.
- `output/probability.json` contains a mapping of `lootId` to `rank` by probabilistic occurence rather than rank (`P(A in bag at slot 1)` and `P(B in bag at slot 2)`, then `P(A in slot 1 and B in slot 2)` is the product of the 2 probabilities).
- `output/images.json` contains the base64 encoded SVG of each tokenId

## Run locally

```bash
# Install dependencies
npm install

# Collect all Loot
npm run collect

# Parse Loot statistics
npm run parse

# Collect Loot base64 encoded images
npm run images
```

To run derivative scripts, follow the README in their subdirectory.

# Credits

- forked from https://github.com/Anish-Agnihotri/dhof-loot

# License

Loot is licensed under [The Unlicense](https://github.com/Anish-Agnihotri/dhof-loot/blob/master/LICENSE)—a license with no conditions whatsoever which dedicates works to the public domain.

Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.
