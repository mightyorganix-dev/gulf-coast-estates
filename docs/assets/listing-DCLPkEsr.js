import{i as d,s as i,m as a}from"./layout-BN_Rhxej.js";document.addEventListener("DOMContentLoaded",()=>{d("listings");const t=i.getListingById(new URLSearchParams(location.search).get("id")||""),s=document.getElementById("listing-detail");if(!t){s.innerHTML='<div class="empty-state"><strong>Not found</strong></div>';return}const e=i.getAgents().find(n=>n.id===t.agentId);s.innerHTML=`
    <div class="detail-hero">
      <div class="detail-media" style="--hue:${t.imageHue};--img:url('${t.image||""}')"></div>
      <div>
        <div class="eyebrow">${t.zip} · DOM ${t.dom} days</div>
        <h1>${t.title}</h1>
        <p>${t.address}</p>
        <p><strong style="color:var(--sand);font-size:1.5rem">${a(t.price)}</strong> · ${a(t.ppsqft)}/sqft</p>
        <p>${t.description}</p>
        <p class="muted">${t.bedrooms} bed · ${t.bathrooms} bath · ${t.sqft} sqft · ${t.type}</p>
        ${e?`<div class="card" style="margin-top:1rem"><strong style="color:var(--cream)">${e.name}</strong><div class="muted">${e.title} · ${e.phone}</div></div>`:""}
        <div class="hero-actions" style="margin-top:1.25rem">
          <a class="btn btn-primary" href="buy.html?listing=${t.id}">Buyer consult</a>
          <a class="btn btn-ghost" href="sell.html">Seller CMA</a>
        </div>
      </div>
    </div>`});
