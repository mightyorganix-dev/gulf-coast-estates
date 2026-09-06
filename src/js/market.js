import store from './store.js';
import { initLayout, money } from './layout.js';
document.addEventListener('DOMContentLoaded', () => {
  initLayout('market');
  const m = store.getMarket();
  document.getElementById('market-stats').innerHTML = [
    ['Median ask', money(m.medianAsk)],
    ['Median sold', money(m.medianSold)],
    ['LT rent ~', money(m.medianRent)+'/mo'],
    ['Inventory', `~${m.inventoryMonths} mo`],
  ].map(([l,v]) => `<div class="stat"><div class="label">${l}</div><div class="value">${v}</div></div>`).join('');
  document.getElementById('catalog-blurb').textContent =
    `${store.getRentals().length} browseable stays · ${store.getComplexes().length} named complexes in research set.`;
});
