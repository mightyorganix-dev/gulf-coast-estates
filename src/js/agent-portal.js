import store from './store.js';
import { initLayout, money } from './layout.js';

document.addEventListener('DOMContentLoaded', () => {
  initLayout();
  document.getElementById('ops-leads').innerHTML = store.getLeads().map((l) =>
    `<tr><td>${l.id}</td><td>${l.type}</td><td><strong style="color:var(--cream)">${l.name}</strong><div class="muted">${l.phone}</div></td><td>${l.message}</td><td><span class="badge badge-info">${l.status}</span></td></tr>`
  ).join('');
  const renderRes = () => {
    document.getElementById('ops-res').innerHTML = store.getReservations().map((r) => {
      const p = store.getRentalById(r.rentalId);
      return `<tr>
        <td>${r.id}</td>
        <td>${r.guestName}</td>
        <td>${p?.title || r.rentalId}</td>
        <td>${r.checkIn} → ${r.checkOut}</td>
        <td><span class="badge ${r.cleaningFlag === 'scheduled' ? 'badge-ok' : 'badge-warn'}">${r.cleaningFlag || 'none'}</span></td>
        <td>${r.status}</td>
        <td><button type="button" class="btn btn-sm btn-ghost" data-clean="${r.id}">Toggle clean</button>
            <a class="btn btn-sm btn-primary" href="itinerary.html?id=${r.id}">Itinerary</a></td>
      </tr>`;
    }).join('');
    document.querySelectorAll('[data-clean]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const row = store.getReservationById(btn.dataset.clean);
        const next = row.cleaningFlag === 'scheduled' ? 'done' : 'scheduled';
        store.updateReservation(row.id, { cleaningFlag: next });
        renderRes();
      });
    });
  };
  renderRes();
});
