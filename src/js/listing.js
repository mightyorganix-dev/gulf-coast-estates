import store from './store.js';
import { initLayout, money } from './layout.js';
document.addEventListener('DOMContentLoaded', () => {
  initLayout('listings');
  const l = store.getListingById(new URLSearchParams(location.search).get('id') || '');
  const el = document.getElementById('listing-detail');
  if (!l) { el.innerHTML = '<div class="empty-state"><strong>Not found</strong></div>'; return; }
  const ag = store.getAgents().find((a) => a.id === l.agentId);
  el.innerHTML = `
    <div class="detail-hero">
      <div class="detail-media" style="--hue:${l.imageHue};--img:url('${l.image || ''}')"></div>
      <div>
        <div class="eyebrow">${l.zip} · DOM ${l.dom} days</div>
        <h1>${l.title}</h1>
        <p>${l.address}</p>
        <p><strong style="color:var(--sand);font-size:1.5rem">${money(l.price)}</strong> · ${money(l.ppsqft)}/sqft</p>
        <p>${l.description}</p>
        <p class="muted">${l.bedrooms} bed · ${l.bathrooms} bath · ${l.sqft} sqft · ${l.type}</p>
        ${ag ? `<div class="card" style="margin-top:1rem"><strong style="color:var(--cream)">${ag.name}</strong><div class="muted">${ag.title} · ${ag.phone}</div></div>` : ''}
        <div class="hero-actions" style="margin-top:1.25rem">
          <a class="btn btn-primary" href="buy.html?listing=${l.id}">Buyer consult</a>
          <a class="btn btn-ghost" href="sell.html">Seller CMA</a>
        </div>
      </div>
    </div>`;
});
