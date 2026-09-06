import{i as s,s as d}from"./layout-EjQjW8Fe.js";document.addEventListener("DOMContentLoaded",()=>{s(),document.getElementById("ops-leads").innerHTML=d.getLeads().map(t=>`<tr><td>${t.id}</td><td>${t.type}</td><td><strong style="color:var(--cream)">${t.name}</strong><div class="muted">${t.phone}</div></td><td>${t.message}</td><td><span class="badge badge-info">${t.status}</span></td></tr>`).join("");const n=()=>{document.getElementById("ops-res").innerHTML=d.getReservations().map(t=>{const e=d.getRentalById(t.rentalId);return`<tr>
        <td>${t.id}</td>
        <td>${t.guestName}</td>
        <td>${(e==null?void 0:e.title)||t.rentalId}</td>
        <td>${t.checkIn} → ${t.checkOut}</td>
        <td><span class="badge ${t.cleaningFlag==="scheduled"?"badge-ok":"badge-warn"}">${t.cleaningFlag||"none"}</span></td>
        <td>${t.status}</td>
        <td><button type="button" class="btn btn-sm btn-ghost" data-clean="${t.id}">Toggle clean</button>
            <a class="btn btn-sm btn-primary" href="itinerary.html?id=${t.id}">Itinerary</a></td>
      </tr>`}).join(""),document.querySelectorAll("[data-clean]").forEach(t=>{t.addEventListener("click",()=>{const e=d.getReservationById(t.dataset.clean),a=e.cleaningFlag==="scheduled"?"done":"scheduled";d.updateReservation(e.id,{cleaningFlag:a}),n()})})};n()});
