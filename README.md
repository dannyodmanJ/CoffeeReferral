# Coffee Referral

A static, flavor-first website for recommending coffees from US third-wave roasters. It is built as a no-dependency prototype so it can be opened directly in a browser or served from any static host.

## Run locally

Open `index.html` in a browser, or serve the folder if you prefer a local URL:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## What is included

- A generated editorial hero image stored at `assets/coffee-roastery-hero.png`.
- The original CoffeeSubscription D3 flavor wheel, ported to `flavor-wheel.js` with the same hierarchy, palette, hover behavior, and category selection.
- A recommendation engine in `app.js` that scores coffees by wheel selections, roast, brew method, region, budget, and decaf preference.
- A starter catalog of US specialty roasters with official shop links.

## Notes on coverage

The current catalog is intentionally structured so more roasters or live inventory feeds can be added without changing the UI. Exact coffee availability changes frequently on third-wave roaster sites, so the prototype points to official shops rather than scraped stale listings.

## Image prompt

The hero image was generated with the built-in image generation tool using an editorial third-wave roastery tasting table prompt with no brand names, text, logos, or people.
