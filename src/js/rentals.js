import store from './store.js';
import { initLayout, rentalCard } from './layout.js';

function render() {
  const opts = {
    q: document.getElementById('f-q').value.trim(),
    area: document.getElementById('f-area').value,
    beds: document.getElementById('f-beds').value,
    type: document.getElementById('f-type').value,
    pets: document.getElementById('f-pets').value,
    manager: document.getElementById('f-manager').value,
  };
  const rows = store.filterRentals(opts);
  document.getElementById('rental-count').textContent =
    `${rows.length} stays · catalog from public 36542 research (demo rates)`;
  const grid = document.getElementById('rental-grid');
  // Paginate render for performance — first 60, load more
  const limit = Number(grid.dataset.limit || 48);
  const slice = rows.slice(0, limit);
  grid.innerHTML = slice.map(rentalCard).join('') ||
    '<div class="empty-state"><strong>No matches</strong><p>Adjust filters.</p></div>';
  if (rows.length > limit) {
    grid.insertAdjacentHTML('beforeend',
      `<div style="grid-column:1/-1;text-align:center;margin-top:1rem">
        <button type="button" class="btn btn-ghost" id="load-more">Show more (${rows.length - limit} remaining)</button>
      </div>`);
    document.getElementById('load-more')?.addEventListener('click', () => {
      grid.dataset.limit = String(limit + 48);
      render();
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initLayout('rentals');
  const mgr = document.getElementById('f-manager');
  const names = [...new Set(store.getRentals().map((r) => r.manager).filter(Boolean))].sort();
  names.forEach((n) => {
    const o = document.createElement('option');
    o.value = n; o.textContent = n;
    mgr.appendChild(o);
  });
  render();
  document.getElementById('f-go').addEventListener('click', () => {
    document.getElementById('rental-grid').dataset.limit = '48';
    render();
  });
  ['f-q','f-area','f-beds','f-type','f-pets','f-manager'].forEach((id) => {
    document.getElementById(id).addEventListener('change', () => {
      document.getElementById('rental-grid').dataset.limit = '48';
      render();
    });
  });
});
