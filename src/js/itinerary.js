import store from './store.js';
import { initLayout, money } from './layout.js';

function show(id) {
  const res = store.getReservationById(id);
  const el = document.getElementById('itinerary-result');
  if (!res) {
    el.innerHTML = '<div class="empty-state"><strong>Not found</strong><p>Check the reference or request a new hold.</p></div>';
    return;
  }
  const rental = store.getRentalById(res.rentalId);
  el.innerHTML = `
    <div class="card" style="padding:1.5rem">
      <div class="eyebrow">${res.status} · ${res.paymentStatus}</div>
      <h2 style="color:var(--cream)">${res.id}</h2>
      <p><strong style="color:var(--sand)">${res.guestName}</strong> · ${res.guestEmail} · ${res.guestPhone}</p>
      <p>${rental ? rental.title : res.rentalId}<br/>
      ${res.checkIn} → ${res.checkOut} · ${res.nights} nights · ${res.guests} guests</p>
      <div class="deposit-line"><span>Estimated total</span><span>${money(res.total)}</span></div>
      <p class="muted" style="margin-top:1rem">Cleaning: ${res.cleaningFlag || 'none'}. This is a demo itinerary — not a live PMS confirmation.</p>
      <a class="btn btn-ghost btn-sm" href="rentals.html">Browse more stays</a>
    </div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  initLayout();
  const pre = new URLSearchParams(location.search).get('id');
  if (pre) {
    document.getElementById('lookup-id').value = pre;
    show(pre);
  }
  document.getElementById('lookup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    show(document.getElementById('lookup-id').value.trim());
  });
});
