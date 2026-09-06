import store from './store.js';
import { initLayout, money } from './layout.js';
import { isStripeCheckoutReady } from './stripe-config.js';

document.addEventListener('DOMContentLoaded', () => {
  initLayout();
  const sel = document.getElementById('rentalId');
  const pre = new URLSearchParams(location.search).get('rental');
  sel.innerHTML = store.getRentals().map((r) => `<option value="${r.id}" ${pre === r.id ? 'selected' : ''}>${r.title} — from ${money(r.nightlyFrom)}</option>`).join('');
  if (!isStripeCheckoutReady()) {
    document.getElementById('stripe-note').textContent = 'Online retainers opening soon — hold saves locally for ops follow-up.';
  }
  const est = () => {
    const r = store.getRentalById(sel.value);
    const inD = document.getElementById('checkIn').value;
    const outD = document.getElementById('checkOut').value;
    if (!r || !inD || !outD) return;
    const nights = Math.max(1, Math.round((new Date(outD) - new Date(inD)) / 86400000));
    const total = nights * r.nightlyAvg + r.cleaningFee;
    document.getElementById('est-total').textContent = `${nights} nights ≈ ${money(total)} (avg rate + cleaning)`;
  };
  ['rentalId','checkIn','checkOut'].forEach((id) => document.getElementById(id).addEventListener('change', est));
  document.getElementById('book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const r = store.getRentalById(sel.value);
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    const nights = Math.max(1, Math.round((new Date(checkOut) - new Date(checkIn)) / 86400000));
    const row = store.addReservation({
      rentalId: r.id,
      guestName: document.getElementById('guestName').value.trim(),
      guestEmail: document.getElementById('guestEmail').value.trim(),
      guestPhone: document.getElementById('guestPhone').value.trim(),
      checkIn, checkOut,
      guests: Number(document.getElementById('guests').value),
      nightly: r.nightlyAvg,
      nights,
      cleaningFee: r.cleaningFee,
      total: nights * r.nightlyAvg + r.cleaningFee,
      status: 'inquiry',
      paymentStatus: 'pending',
      cleaningFlag: 'none',
      notes: document.getElementById('notes').value.trim(),
    });
    document.getElementById('book-result').innerHTML = `Hold <strong style="color:var(--cream)">${row.id}</strong> saved. <a href="itinerary.html?id=${row.id}">Open itinerary</a>`;
  });
});
