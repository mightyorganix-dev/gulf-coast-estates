# Launch Package — Gulf Coast Estates (Gulf Shores)

## Brand
Gulf Coast Estates — Gulf Shores. Quiet luxury brokerage + vacation rental desk. Hub ZIP 36542. Corridor: Orange Beach, Fort Morgan, Perdido Key.

## Go-live
1. Domain + deploy dist/ to Vercel (Stripe API ready).
2. Alabama REC licensing, fair housing, STR tax, privacy/terms.
3. Connect PMS (Guesty/Hostaway) — replace demo rates from data/rentals_36542.json ingest.
4. IDX/MLS later; keep quiet-luxury chrome.
5. Stripe retainers: api/create-checkout-session.js; stripe-config enabled false until STRIPE_SECRET_KEY set. No Cloudflare.
6. Branding: navy/sand/cream; Google Business Profile Gulf Shores 36542.
7. Ops: SMS leads, cleaning vendors, insurance partners, auth backend before live payments.

Demo = Vite MPA + localStorage. Production needs PMS/MLS/auth.

## Market snapshot (cite as 2026 research)
- Median ask ~$555K · median sold ~$450K · buyer-leaning tape
- VR mgmt fees often 20–35% gross (Harris, Liquid Life, Beachball, PMI landscape)
- Catalog: 463 research records mapped to 356 browseable stays + 100 complexes

## First-screen standard
Hero must feel inevitable: quiet luxury, 36542 authority, catalog count, market strip with ask/sold — not a portal clone.
