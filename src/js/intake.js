import store from './store.js';
import { initLayout } from './layout.js';
document.addEventListener('DOMContentLoaded', () => {
  const t = document.getElementById('leadType')?.value || 'buy';
  initLayout(t === 'buy' ? 'listings' : t === 'owner' ? 'invest' : '');
  document.getElementById('intake-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const row = store.addLead({
      type: document.getElementById('leadType').value,
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      message: document.getElementById('message').value.trim(),
    });
    document.getElementById('lead-result').innerHTML = `Received <strong style="color:var(--cream)">${row.id}</strong>. Our desk will follow up.`;
    e.target.reset();
  });
});
