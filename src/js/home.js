import store from './store.js';
import { initLayout, rentalCard, money } from './layout.js';

document.addEventListener('DOMContentLoaded', () => {
  initLayout('home');
  const m = store.getMarket();
  const strip = document.getElementById('market-strip');
  if (strip) {
    const cells = [
      ['Median ask', money(m.medianAsk)],
      ['Median sold', money(m.medianSold)],
      ['Catalog', String(m.rentalCatalogCount || store.getRentals().length)],
      ['Complexes', String(m.complexCount || store.getComplexes().length)],
      ['DOM', m.dom || '—'],
      ['Posture', m.posture || '—'],
    ];
    strip.innerHTML = cells.map(([l, v]) =>
      `<div class="market-stat"><div class="label">${l}</div><div class="value">${v}</div></div>`
    ).join('');
  }
  const feat = document.getElementById('featured-rentals');
  if (feat) {
    const gulf = store.getRentals().filter((r) => r.propertyType === 'gulf-front');
    const pick = (gulf.length ? gulf : store.getRentals()).slice(0, 6);
    feat.innerHTML = pick.map(rentalCard).join('');
  }
});
