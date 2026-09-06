import store from './store.js';
import { initLayout, money, imgSrc } from './layout.js';
document.addEventListener('DOMContentLoaded', () => {
  initLayout('listings');
  document.getElementById('listings-grid').innerHTML = store.getListings().map((l) => `
    <a class="card listing-card" href="listing.html?id=${l.id}">
      <div class="listing-media" style="--hue:${l.imageHue}">${imgSrc(l.image) ? `<img class="listing-photo" src="${imgSrc(l.image)}" alt="">` : ''}</div>
      <div class="card-kicker">${l.type} · DOM ${l.dom}</div>
      <h3>${l.title}</h3>
      <p>${l.bedrooms} bed · ${l.bathrooms} bath · ${l.sqft.toLocaleString()} sqft · ${money(l.ppsqft)}/sqft</p>
      <div class="row-between"><strong style="color:var(--sand)">${money(l.price)}</strong><span class="card-link">Detail</span></div>
    </a>`).join('');
});
