import seed from '../data/seed.json';

const KEYS = {
  rentals: 'gce_rentals',
  listings: 'gce_listings',
  agents: 'gce_agents',
  owners: 'gce_owners',
  leads: 'gce_leads',
  reservations: 'gce_reservations',
  showings: 'gce_showings',
  appointments: 'gce_appointments',
  managers: 'gce_managers',
  complexes: 'gce_complexes',
  market: 'gce_market',
  seed: 'gce_seed_v5',
};

class EstateStore {
  constructor() {
    this.init();
  }

  init() {
    if (localStorage.getItem(KEYS.seed) !== '5') {
      localStorage.setItem(KEYS.rentals, JSON.stringify(seed.rentals));
      localStorage.setItem(KEYS.listings, JSON.stringify(seed.listings));
      localStorage.setItem(KEYS.agents, JSON.stringify(seed.agents));
      localStorage.setItem(KEYS.owners, JSON.stringify(seed.owners));
      localStorage.setItem(KEYS.leads, JSON.stringify(seed.leads));
      localStorage.setItem(KEYS.reservations, JSON.stringify(seed.reservations));
      localStorage.setItem(KEYS.managers, JSON.stringify(seed.managers));
      localStorage.setItem(KEYS.complexes, JSON.stringify(seed.complexes || []));
      localStorage.setItem(KEYS.market, JSON.stringify(seed.market));
      if (!localStorage.getItem(KEYS.showings)) localStorage.setItem(KEYS.showings, JSON.stringify([]));
      if (!localStorage.getItem(KEYS.appointments)) localStorage.setItem(KEYS.appointments, JSON.stringify([]));
      localStorage.setItem(KEYS.seed, '5');
    }
  }

  _get(key) {
    try { return JSON.parse(localStorage.getItem(key) || '[]'); }
    catch { return []; }
  }

  _set(key, val) { localStorage.setItem(key, JSON.stringify(val)); }

  getRentals() { return this._get(KEYS.rentals); }
  getRentalById(id) {
    return this.getRentals().find((r) => String(r.id).toLowerCase() === String(id).toLowerCase());
  }
  getListings() { return this._get(KEYS.listings); }
  getListingById(id) {
    return this.getListings().find((l) => String(l.id).toLowerCase() === String(id).toLowerCase());
  }
  getAgents() { return this._get(KEYS.agents); }
  getOwners() { return this._get(KEYS.owners); }
  getLeads() { return this._get(KEYS.leads); }
  getReservations() { return this._get(KEYS.reservations); }
  getReservationById(id) {
    return this.getReservations().find((r) => String(r.id).toLowerCase() === String(id).toLowerCase());
  }
  getManagers() { return this._get(KEYS.managers); }
  getComplexes() { return this._get(KEYS.complexes); }
  getMarket() {
    try { return JSON.parse(localStorage.getItem(KEYS.market) || '{}'); }
    catch { return seed.market; }
  }
  getShowings() { return this._get(KEYS.showings); }
  getAppointments() { return this._get(KEYS.appointments); }

  addLead(data) {
    const leads = this.getLeads();
    const id = 'LD-' + Math.floor(600 + Math.random() * 900);
    const row = { ...data, id, createdAt: new Date().toISOString(), status: data.status || 'new' };
    leads.unshift(row);
    this._set(KEYS.leads, leads);
    return row;
  }

  addReservation(data) {
    const rows = this.getReservations();
    const id = 'GS-' + Math.floor(7800 + Math.random() * 1000);
    const row = { ...data, id, createdAt: new Date().toISOString() };
    rows.unshift(row);
    this._set(KEYS.reservations, rows);
    return row;
  }

  updateReservation(id, updates) {
    const rows = this.getReservations();
    const i = rows.findIndex((r) => r.id === id);
    if (i < 0) return null;
    rows[i] = { ...rows[i], ...updates };
    this._set(KEYS.reservations, rows);
    return rows[i];
  }

  addShowing(data) {
    const rows = this.getShowings();
    const id = 'SH-' + Math.floor(1000 + Math.random() * 9000);
    const row = { ...data, id, createdAt: new Date().toISOString() };
    rows.unshift(row);
    this._set(KEYS.showings, rows);
    return row;
  }

  addAppointment(data) {
    const rows = this.getAppointments();
    const id = 'AP-' + Math.floor(1000 + Math.random() * 9000);
    const row = { ...data, id, createdAt: new Date().toISOString() };
    rows.unshift(row);
    this._set(KEYS.appointments, rows);
    return row;
  }

  filterRentals({ area, beds, pets, type, q, maxNightly, manager } = {}) {
    return this.getRentals().filter((r) => {
      if (area && area !== 'all') {
        const hit = r.area === area || r.city === area || r.zip === area;
        if (!hit) return false;
      }
      if (beds && Number(beds) && r.bedrooms < Number(beds)) return false;
      if (pets === 'yes' && !r.petsAllowed) return false;
      if (type && type !== 'all' && r.propertyType !== type && r.recordType !== type) return false;
      if (manager && manager !== 'all' && r.manager !== manager) return false;
      if (maxNightly && r.nightlyFrom > Number(maxNightly)) return false;
      if (q) {
        const s = q.toLowerCase();
        const blob = `${r.title} ${r.complex} ${r.area} ${r.city} ${r.manager} ${r.address}`.toLowerCase();
        if (!blob.includes(s)) return false;
      }
      return true;
    });
  }

  revenueSnapshot() {
    const res = this.getReservations().filter((r) => r.status === 'confirmed' || r.paymentStatus === 'hold');
    const gross = res.reduce((s, r) => s + (r.total || 0), 0);
    return { bookings: res.length, gross, avg: res.length ? Math.round(gross / res.length) : 0 };
  }
}

window.estateStore = new EstateStore();
export default window.estateStore;
