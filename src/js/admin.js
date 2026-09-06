import store from './store.js';
import { initLayout, money } from './layout.js';

document.addEventListener('DOMContentLoaded', () => {
  initLayout();
  const rentals = store.getRentals();
  const snap = store.revenueSnapshot();
  document.getElementById('admin-stats').innerHTML = `
    <div class="stat"><div class="label">Rentals</div><div class="value">${rentals.length}</div></div>
    <div class="stat"><div class="label">Complexes</div><div class="value">${store.getComplexes().length}</div></div>
    <div class="stat"><div class="label">Leads</div><div class="value">${store.getLeads().length}</div></div>
    <div class="stat"><div class="label">Demo gross</div><div class="value">${money(snap.gross)}</div></div>`;
  document.getElementById('admin-rentals').innerHTML = rentals.slice(0, 40).map((r) =>
    `<tr><td>${r.id}</td><td><a href="rental.html?id=${encodeURIComponent(r.id)}">${r.title}</a></td><td>${r.area}</td><td>${r.bedrooms}</td><td>${r.manager || '—'}</td><td>${money(r.nightlyFrom)}</td></tr>`
  ).join('');
  document.getElementById('admin-leads').innerHTML = store.getLeads().map((l) =>
    `<tr><td>${l.id}</td><td>${l.type}</td><td>${l.name}</td><td>${l.status}</td></tr>`
  ).join('');
});
