import{i as d,s as a,a as r,m as n}from"./layout-EjQjW8Fe.js";document.addEventListener("DOMContentLoaded",()=>{d("listings");const t=a.getListingById(new URLSearchParams(location.search).get("id")||""),e=document.getElementById("listing-detail");if(!t){e.innerHTML='<div class="empty-state"><strong>Not found</strong></div>';return}const s=a.getAgents().find(o=>o.id===t.agentId),i=r(t.image);e.innerHTML=`
    <div class="detail-hero">
      <div class="detail-media" style="--hue:${t.imageHue}">${i?`<img class="listing-photo" src="${i}" alt="">`:""}</div>
      <div>
        <div class="eyebrow">${t.zip} · DOM ${t.dom} days</div>
        <h1>${t.title}</h1>
        <p>${t.address}</p>
        <p><strong style="color:var(--sand);font-size:1.5rem">${n(t.price)}</strong> · ${n(t.ppsqft)}/sqft</p>
        <p>${t.description}</p>
        <p class="muted">${t.bedrooms} bed · ${t.bathrooms} bath · ${t.sqft} sqft · ${t.type}</p>
        ${s?`<div class="card" style="margin-top:1rem"><strong style="color:var(--cream)">${s.name}</strong><div class="muted">${s.title} · ${s.phone}</div></div>`:""}
        <div class="hero-actions" style="margin-top:1.25rem">
          <a class="btn btn-primary" href="buy.html?listing=${t.id}">Buyer consult</a>
          <a class="btn btn-ghost" href="sell.html">Seller CMA</a>
        </div>
      </div>
    </div>`});
