import{i as a,s as r}from"./layout-BN_Rhxej.js";document.addEventListener("DOMContentLoaded",()=>{a(),document.getElementById("managers-grid").innerHTML=r.getManagers().map(e=>`
    <article class="card">
      <div class="card-kicker">${e.area||"Alabama Gulf Coast"}</div>
      <h3>${e.name}</h3>
      <p>${e.focus||e.feeNote}</p>
      <p class="muted" style="font-size:0.85rem">${e.feeNote||""}</p>
      ${e.source_url?`<a class="card-link" href="${e.source_url}" target="_blank" rel="noopener">Public source</a>`:""}
    </article>`).join("")});
