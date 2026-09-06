import{i as a,s as e,a as i,m as t}from"./layout-EjQjW8Fe.js";document.addEventListener("DOMContentLoaded",()=>{a("listings"),document.getElementById("listings-grid").innerHTML=e.getListings().map(s=>`
    <a class="card listing-card" href="listing.html?id=${s.id}">
      <div class="listing-media" style="--hue:${s.imageHue}">${i(s.image)?`<img class="listing-photo" src="${i(s.image)}" alt="">`:""}</div>
      <div class="card-kicker">${s.type} · DOM ${s.dom}</div>
      <h3>${s.title}</h3>
      <p>${s.bedrooms} bed · ${s.bathrooms} bath · ${s.sqft.toLocaleString()} sqft · ${t(s.ppsqft)}/sqft</p>
      <div class="row-between"><strong style="color:var(--sand)">${t(s.price)}</strong><span class="card-link">Detail</span></div>
    </a>`).join("")});
