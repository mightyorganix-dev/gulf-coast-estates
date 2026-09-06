# Gulf Coast Estates — Gulf Shores

Premier brokerage + vacation rental app for the Alabama Gulf Coast.
Primary hub: Gulf Shores AL 36542. Corridor: Orange Beach, Fort Morgan, Perdido Key.

## Commands

Install dependencies, start the Vite dev server, then create the production bundle with the build script in package.json. Preview the dist output locally.

## Stack
- Vite multi-page, vanilla HTML/CSS/JS
- Shared layout: src/js/layout.js
- Store: src/js/store.js (localStorage seed v5)
- Inventory source: data/rentals_36542.json (463 records ingested)

## Pages
index, rentals, rental, book, listings, listing, buy, sell, invest, market, managers, about, contact, faq, reviews, agents, owner-portal, agent-portal, admin, itinerary

## Docs
MARKET_GULF_SHORES_36542.md · RENTALS_AREA_LIST.md · LAUNCH_PACKAGE.md · data/

## Stripe
Optional retainer checkout via Vercel api/create-checkout-session.js. Disabled by default in stripe-config.js. No Cloudflare.
