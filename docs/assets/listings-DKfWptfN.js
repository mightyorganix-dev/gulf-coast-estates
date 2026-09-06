import{i as t,s as e,m as s}from"./layout-BN_Rhxej.js";document.addEventListener("DOMContentLoaded",()=>{t("listings"),document.getElementById("listings-grid").innerHTML=e.getListings().map(i=>`
    <a class="card listing-card" href="listing.html?id=${i.id}">
      <div class="listing-media" style="--hue:${i.imageHue};--img:url('${i.image||""}')"></div>
      <div class="card-kicker">${i.type} · DOM ${i.dom}</div>
      <h3>${i.title}</h3>
      <p>${i.bedrooms} bed · ${i.bathrooms} bath · ${i.sqft.toLocaleString()} sqft · ${s(i.ppsqft)}/sqft</p>
      <div class="row-between"><strong style="color:var(--sand)">${s(i.price)}</strong><span class="card-link">Detail</span></div>
    </a>`).join("")});
