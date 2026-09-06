import store from './store.js';
import { initLayout, money, rentalCard } from './layout.js';

function render(ownerId) {
  const props = store.getRentals().filter((r) => r.ownerId === ownerId);
  document.getElementById('owner-props').innerHTML = props.slice(0, 12).map(rentalCard).join('') ||
    '<div class="empty-state">No assigned demo properties for this owner.</div>';
  const ids = new Set(props.map((p) => p.id));
  const res = store.getReservations().filter((r) => ids.has(r.rentalId));
  document.getElementById('owner-res').innerHTML = res.map((r) => {
    const p = store.getRentalById(r.rentalId);
    return `<tr><td>${r.id}</td><td>${p?.title || r.rentalId}</td><td>${r.checkIn} → ${r.checkOut}</td><td>${r.guestName}</td><td>${money(r.total)}</td><td>${r.status}</td></tr>`;
  }).join('') || '<tr><td colspan="6"><div class="empty-state">No reservations</div></td></tr>';
  const snap = store.revenueSnapshot();
  document.getElementById('owner-stats').innerHTML = `
    <div class="stat"><div class="label">Properties</div><div class="value">${props.length}</div></div>
    <div class="stat"><div class="label">Demo bookings</div><div class="value">${snap.bookings}</div></div>
    <div class="stat"><div class="label">Gross (demo)</div><div class="value">${money(snap.gross)}</div></div>
    <div class="stat"><div class="label">Fee context</div><div class="value" style="font-size:1.1rem">20–35%</div></div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  initLayout();
  const sel = document.getElementById('owner-select');
  store.getOwners().forEach((o) => {
    const opt = document.createElement('option');
    opt.value = o.id; opt.textContent = o.name;
    sel.appendChild(opt);
  });
  sel.addEventListener('change', () => render(sel.value));
  render(sel.value);
});
