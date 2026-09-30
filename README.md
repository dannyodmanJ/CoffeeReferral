# RoastRegister

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
- Qualitative match tiers in the UI so the weighted ranking is not presented as a mathematically precise percentage.
- A true empty state that waits for at least one visitor preference before showing recommendations.
- A starter catalog of US specialty roasters with exact, official product links.

## Notes on coverage

Each coffee record includes a `productUrl`, `availability`, and `lastChecked` date. Recommendations only rank records marked `available`, so changing a disappeared coffee to `unavailable` automatically substitutes the next-best match. Product links were checked against official roaster sites on September 2, 2026.

## Analytics

The lightweight `analytics.js` adapter tracks four GA4 custom events once per browser-tab session:

- `visitor` when the site loads.
- `matcher_used` when the visitor first selects a matcher preference.
- `match_received` when the first recommendation is shown.
- `roaster_clicked` when the visitor first opens a recommended coffee.

Create a GA4 web data stream, then set its public measurement ID in the `roast-register-ga4-id` meta tag in `index.html`. With the tag left blank, no analytics network request is made; local previews log and retain the events in memory for testing. Events include matcher settings, the recommended coffee and roaster, match tier, and result position, but no names, email addresses, or other visitor-provided personal information. Register any event parameters you want to use in GA4 reports as custom dimensions; the four event names are available immediately for Realtime, DebugView, and funnel exploration.

## Image prompt

The hero image was generated with the built-in image generation tool using an editorial third-wave roastery tasting table prompt with no brand names, text, logos, or people.
