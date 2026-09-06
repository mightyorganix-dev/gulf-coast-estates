import store from './store.js';
import { initLayout, money } from './layout.js';

document.addEventListener('DOMContentLoaded', () => {
  initLayout('rentals');
  const id = new URLSearchParams(location.search).get('id');
  const r = store.getRentalById(id || '');
  const el = document.getElementById('rental-detail');
  if (!r) {
    el.innerHTML = '<div class="empty-state"><strong>Rental not found</strong><p><a href="rentals.html">Back to rentals</a></p></div>';
    return;
  }
  document.title = `${r.title} | Gulf Coast Estates`;
  el.innerHTML = `
    <div class="detail-hero">
      <div class="detail-media" style="--hue:${r.imageHue}"></div>
      <div>
        <div class="eyebrow">${r.complex || 'Gulf Shores'} · ${r.zip}</div>
        <h1>${r.title}</h1>
        <p>${r.address || `${r.city}, AL ${r.zip}`} · ${r.area} · ${r.propertyType}</p>
        <p><strong style="color:var(--sand);font-size:1.35rem">${money(r.nightlyFrom)} – ${money(r.nightlyPeak)}</strong>
          <span class="muted"> / night demo band · min ${r.minStay} nights</span></p>
        <div class="amenity-list">${(r.amenities || []).map((a) => `<span class="chip">${a}</span>`).join('')}</div>
        <p>${r.description}</p>
        <ul class="muted" style="padding-left:1.1rem;font-size:0.9rem">
          <li>${r.bedrooms} bed · ${r.bathrooms} bath · sleeps ${r.sleeps}${r.bedsEstimated ? ' <span class="badge badge-warn">beds estimated</span>' : ''}</li>
          <li>Manager landscape: <strong style="color:var(--cream)">${r.manager || '—'}</strong> — not an affiliation</li>
          <li>Cleaning fee ${money(r.cleaningFee)} · guest rating ${r.rating} (${r.reviewsCount})</li>
          ${r.source_url ? `<li><a href="${r.source_url}" target="_blank" rel="noopener">Public source</a></li>` : ''}
        </ul>
        <div class="hero-actions" style="margin-top:1.25rem">
          <a class="btn btn-primary" href="book.html?rental=${encodeURIComponent(r.id)}">Request hold</a>
          <a class="btn btn-ghost" href="rentals.html">All rentals</a>
        </div>
      </div>
    </div>`;
});
