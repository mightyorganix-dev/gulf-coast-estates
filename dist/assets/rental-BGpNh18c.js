import{i as l,s as r,a as o,m as t}from"./layout-EjQjW8Fe.js";document.addEventListener("DOMContentLoaded",()=>{l("rentals");const n=new URLSearchParams(location.search).get("id"),e=r.getRentalById(n||""),a=document.getElementById("rental-detail");if(!e){a.innerHTML='<div class="empty-state"><strong>Rental not found</strong><p><a href="rentals.html">Back to rentals</a></p></div>';return}document.title=`${e.title} | Gulf Coast Estates`;const s=o(e.image);a.innerHTML=`
    <div class="detail-hero">
      <div class="detail-media" style="--hue:${e.imageHue}">${s?`<img class="listing-photo" src="${s}" alt="">`:""}</div>
      <div>
        <div class="eyebrow">${e.complex||"Gulf Shores"} · ${e.zip}</div>
        <h1>${e.title}</h1>
        <p>${e.address||`${e.city}, AL ${e.zip}`} · ${e.area} · ${e.propertyType}</p>
        <p><strong style="color:var(--sand);font-size:1.35rem">${t(e.nightlyFrom)} – ${t(e.nightlyPeak)}</strong>
          <span class="muted"> / night demo band · min ${e.minStay} nights</span></p>
        <div class="amenity-list">${(e.amenities||[]).map(i=>`<span class="chip">${i}</span>`).join("")}</div>
        <p>${e.description}</p>
        <ul class="muted" style="padding-left:1.1rem;font-size:0.9rem">
          <li>${e.bedrooms} bed · ${e.bathrooms} bath · sleeps ${e.sleeps}${e.bedsEstimated?' <span class="badge badge-warn">beds estimated</span>':""}</li>
          <li>Manager landscape: <strong style="color:var(--cream)">${e.manager||"—"}</strong> — not an affiliation</li>
          <li>Cleaning fee ${t(e.cleaningFee)} · guest rating ${e.rating} (${e.reviewsCount})</li>
          ${e.source_url?`<li><a href="${e.source_url}" target="_blank" rel="noopener">Public source</a></li>`:""}
        </ul>
        <div class="hero-actions" style="margin-top:1.25rem">
          <a class="btn btn-primary" href="book.html?rental=${encodeURIComponent(e.id)}">Request hold</a>
          <a class="btn btn-ghost" href="rentals.html">All rentals</a>
        </div>
      </div>
    </div>`});
