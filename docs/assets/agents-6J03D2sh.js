import{i as a,s as i}from"./layout-CvHgV98I.js";document.addEventListener("DOMContentLoaded",()=>{a(),document.getElementById("agents-grid").innerHTML=i.getAgents().map(t=>`
    <article class="card" style="text-align:left">
      <div class="avatar" style="background:linear-gradient(135deg,#1a6f8f,#0b1524);display:grid;place-items:center;font-family:var(--display);font-size:1.5rem;color:var(--sand)">${t.name.split(" ").map(e=>e[0]).join("")}</div>
      <h3 style="margin-top:1rem">${t.name}</h3>
      <div class="card-kicker">${t.title}</div>
      <p>${t.bio}</p>
      <p class="muted">${t.phone} · ${t.email}</p>
      <div class="amenity-list">${(t.specialties||[]).map(e=>`<span class="chip">${e}</span>`).join("")}</div>
      <a class="btn btn-primary btn-sm" href="contact.html">Contact desk</a>
    </article>`).join("")});
