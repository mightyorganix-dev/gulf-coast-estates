import store from './store.js';
import { initLayout } from './layout.js';
document.addEventListener('DOMContentLoaded', () => {
  initLayout('contact');
  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const row = store.addLead({
      type: 'contact',
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      phone: '',
      message: document.getElementById('message').value.trim(),
    });
    document.getElementById('contact-result').textContent = `Received ${row.id}. We will respond shortly.`;
    e.target.reset();
  });
});
