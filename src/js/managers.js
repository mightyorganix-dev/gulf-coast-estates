import store from './store.js';
import { initLayout } from './layout.js';
document.addEventListener('DOMContentLoaded', () => {
  initLayout();
  document.getElementById('managers-grid').innerHTML = store.getManagers().map((m) => `
    <article class="card">
      <div class="card-kicker">${m.area || 'Alabama Gulf Coast'}</div>
      <h3>${m.name}</h3>
      <p>${m.focus || m.feeNote}</p>
      <p class="muted" style="font-size:0.85rem">${m.feeNote || ''}</p>
      ${m.source_url ? `<a class="card-link" href="${m.source_url}" target="_blank" rel="noopener">Public source</a>` : ''}
    </article>`).join('');
});
