import store from './store.js';

const PAGES = [
  { href: 'index.html', label: 'Home', key: 'home' },
  { href: 'rentals.html', label: 'Rentals', key: 'rentals' },
  { href: 'listings.html', label: 'Buy', key: 'listings' },
  { href: 'invest.html', label: 'Invest', key: 'invest' },
  { href: 'market.html', label: 'Market', key: 'market' },
  { href: 'about.html', label: 'About', key: 'about' },
  { href: 'contact.html', label: 'Contact', key: 'contact' },
];

const PORTAL_LINKS = [
  { href: 'book.html', label: 'Book' },
  { href: 'itinerary.html', label: 'Itinerary' },
  { href: 'owner-portal.html', label: 'Owners' },
  { href: 'agent-portal.html', label: 'Ops' },
  { href: 'admin.html', label: 'Admin' },
];

const LOGO = `<svg class="brand-svg" viewBox="0 0 40 40" width="34" height="34" aria-hidden="true"><defs><linearGradient id="gceGrad" x1="0" y1="0" x2="40" y2="40"><stop stop-color="#0b1524"/><stop offset="1" stop-color="#1a6f8f"/></linearGradient></defs><rect x="2" y="2" width="36" height="36" rx="10" fill="url(#gceGrad)"/><path d="M8 26c4-8 10-10 14-4s7 2 10-3" stroke="#f3ebe0" stroke-width="1.7" fill="none" stroke-linecap="round"/><circle cx="28" cy="12" r="2.2" fill="#d9cbb8"/></svg>`;

function currentPage() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  return path === '' ? 'index.html' : path;
}

export function renderNav(active = '') {
  const page = currentPage();
  const navEl = document.getElementById('site-nav');
  if (!navEl) return;
  const guestLinks = PAGES.map((p) => {
    const isActive = page === p.href || active === p.key;
    return `<a href="${p.href}" class="nav-link${isActive ? ' is-active' : ''}">${p.label}</a>`;
  }).join('');
  navEl.innerHTML = `
    <div class="nav-inner">
      <a href="index.html" class="brand" id="brand-mark" title="Gulf Coast Estates">
        <span class="brand-mark">${LOGO}</span>
        <span class="brand-text">
          <strong>Gulf Coast Estates</strong>
          <em>Gulf Shores · 36542</em>
        </span>
      </a>
      <button type="button" class="nav-toggle" id="nav-toggle" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <div class="nav-panel" id="nav-panel">
        <div class="nav-links">${guestLinks}</div>
        <div class="nav-portals">
          ${PORTAL_LINKS.map((l) => `<a href="${l.href}" class="portal-chip">${l.label}</a>`).join('')}
        </div>
        <div class="nav-end">
          <a href="book.html" class="btn btn-primary nav-cta">Reserve a Stay</a>
        </div>
      </div>
    </div>`;
  const toggle = document.getElementById('nav-toggle');
  const panel = document.getElementById('nav-panel');
  toggle?.addEventListener('click', () => {
    const open = panel.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

export function renderFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;
  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <strong>Gulf Coast Estates</strong>
          <p>The definitive Gulf Shores brokerage and vacation rental desk — quiet luxury for once-in-a-lifetime coastal decisions.</p>
          <p class="muted" style="font-size:0.8rem;margin-top:0.75rem">Sample office · Gulf Shores, AL 36542<br/>Corridor · Orange Beach · Fort Morgan · Perdido</p>
        </div>
        <div class="footer-cols">
          <div>
            <h4>Stay</h4>
            <a href="rentals.html">Vacation Rentals</a>
            <a href="book.html">Request a Hold</a>
            <a href="itinerary.html">Guest Itinerary</a>
            <a href="reviews.html">Guest Reviews</a>
          </div>
          <div>
            <h4>Own</h4>
            <a href="listings.html">Homes for Sale</a>
            <a href="buy.html">Buyer Desk</a>
            <a href="sell.html">Seller CMA</a>
            <a href="invest.html">Owner / Invest</a>
            <a href="market.html">36542 Market</a>
          </div>
          <div>
            <h4>Portals</h4>
            <a href="owner-portal.html">Owner Portal</a>
            <a href="agent-portal.html">Ops Portal</a>
            <a href="admin.html">Admin</a>
            <a href="managers.html">Market Landscape</a>
            <a href="faq.html">FAQ</a>
            <a href="contact.html">Contact</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2026 Gulf Coast Estates · Gulf Shores</span>
        <span class="notice-tag">Demo inventory · Not live MLS/PMS</span>
      </div>
    </div>`;
}

export function money(n) {
  return '$' + Number(n || 0).toLocaleString('en-US');
}

export function imgSrc(path) {
  if (!path) return '';
  if (/^(https?:|data:|\/|\.\/)/.test(path)) return path;
  return './' + path.replace(/^\.?\/?/, '');
}

export function rentalCard(r) {
  const bedNote = r.bedsEstimated ? ' · beds est.' : '';
  const src = imgSrc(r.image);
  return `
    <a class="card listing-card" href="rental.html?id=${encodeURIComponent(r.id)}">
      <div class="listing-media" style="--hue:${r.imageHue || 200}">${src ? `<img class="listing-photo" src="${src}" alt="">` : ''}</div>
      <div class="card-kicker">${r.complex || r.manager || 'Gulf Shores'} · ${r.area}</div>
      <h3>${r.title}</h3>
      <p>${r.bedrooms} bed · ${r.bathrooms} bath · sleeps ${r.sleeps}${r.petsAllowed ? ' · pets' : ''}${bedNote}</p>
      <p class="muted" style="font-size:0.78rem;margin:0 0 0.5rem">${r.manager || ''}</p>
      <div class="row-between">
        <strong style="color:var(--sand)">${money(r.nightlyFrom)}–${money(r.nightlyPeak)}<span class="muted" style="font-weight:400"> / night</span></strong>
        <span class="card-link">View</span>
      </div>
    </a>`;
}

export function initLayout(active = '') {
  void store;
  renderNav(active);
  renderFooter();
}
