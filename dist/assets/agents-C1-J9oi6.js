import{i as e,s as i,a as s}from"./layout-EjQjW8Fe.js";document.addEventListener("DOMContentLoaded",()=>{e(),document.getElementById("agents-grid").innerHTML=i.getAgents().map(a=>`
    <article class="card" style="text-align:left">
      ${a.avatar||a.image?`<img class="avatar" src="${s(a.avatar||a.image)}" alt="${a.name}" width="72" height="72" />`:`<div class="avatar" style="background:linear-gradient(135deg,#1a6f8f,#0b1524);display:grid;place-items:center;font-family:var(--display);font-size:1.5rem;color:var(--sand)">${a.name.split(" ").map(t=>t[0]).join("")}</div>`}
      <h3 style="margin-top:1rem">${a.name}</h3>
      <div class="card-kicker">${a.title}</div>
      <p>${a.bio}</p>
      <p class="muted">${a.phone} · ${a.email}</p>
      <div class="amenity-list">${(a.specialties||[]).map(t=>`<span class="chip">${t}</span>`).join("")}</div>
      <a class="btn btn-primary btn-sm" href="contact.html">Contact desk</a>
    </article>`).join("")});
