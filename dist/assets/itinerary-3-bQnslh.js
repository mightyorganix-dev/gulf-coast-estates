import{i as r,s as a,m as i}from"./layout-CvHgV98I.js";function o(t){const e=a.getReservationById(t),n=document.getElementById("itinerary-result");if(!e){n.innerHTML='<div class="empty-state"><strong>Not found</strong><p>Check the reference or request a new hold.</p></div>';return}const s=a.getRentalById(e.rentalId);n.innerHTML=`
    <div class="card" style="padding:1.5rem">
      <div class="eyebrow">${e.status} · ${e.paymentStatus}</div>
      <h2 style="color:var(--cream)">${e.id}</h2>
      <p><strong style="color:var(--sand)">${e.guestName}</strong> · ${e.guestEmail} · ${e.guestPhone}</p>
      <p>${s?s.title:e.rentalId}<br/>
      ${e.checkIn} → ${e.checkOut} · ${e.nights} nights · ${e.guests} guests</p>
      <div class="deposit-line"><span>Estimated total</span><span>${i(e.total)}</span></div>
      <p class="muted" style="margin-top:1rem">Cleaning: ${e.cleaningFlag||"none"}. This is a demo itinerary — not a live PMS confirmation.</p>
      <a class="btn btn-ghost btn-sm" href="rentals.html">Browse more stays</a>
    </div>`}document.addEventListener("DOMContentLoaded",()=>{r();const t=new URLSearchParams(location.search).get("id");t&&(document.getElementById("lookup-id").value=t,o(t)),document.getElementById("lookup-form").addEventListener("submit",e=>{e.preventDefault(),o(document.getElementById("lookup-id").value.trim())})});
