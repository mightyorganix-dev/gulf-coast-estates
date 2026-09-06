import store from './store.js';
import { initLayout } from './layout.js';
document.addEventListener('DOMContentLoaded', () => {
  initLayout();
  document.getElementById('agents-grid').innerHTML = store.getAgents().map((a) => `
    <article class="card" style="text-align:left">
      ${a.avatar || a.image
        ? `<img class="avatar" src="${a.avatar || a.image}" alt="${a.name}" width="72" height="72" />`
        : `<div class="avatar" style="background:linear-gradient(135deg,#1a6f8f,#0b1524);display:grid;place-items:center;font-family:var(--display);font-size:1.5rem;color:var(--sand)">${a.name.split(' ').map(x=>x[0]).join('')}</div>`}
      <h3 style="margin-top:1rem">${a.name}</h3>
      <div class="card-kicker">${a.title}</div>
      <p>${a.bio}</p>
      <p class="muted">${a.phone} · ${a.email}</p>
      <div class="amenity-list">${(a.specialties||[]).map(s=>`<span class="chip">${s}</span>`).join('')}</div>
      <a class="btn btn-primary btn-sm" href="contact.html">Contact desk</a>
    </article>`).join('');
});
