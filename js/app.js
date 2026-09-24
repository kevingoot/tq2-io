(function () {
  const D = window.TQ2;
  const app = document.getElementById("app");
  const q = document.getElementById("q");
  const itemById = Object.fromEntries(D.items.map((i) => [i.id, i]));
  function rate(count, kills) {
    if (!kills) return "\u2014";
    return (count / kills * 100).toFixed(1) + "% (" + count + "/" + kills + ")";
  }
  function itemLink(id) {
    const it = itemById[id];
    if (!it) return id;
    return '<a class="item-name ' + it.rarity + '" href="#/item/' + it.id + '">' + it.name + "</a>";
  }
  function sampleOf(b) { return (b.samples && b.samples[0]) || null; }
  function statusOf(b) {
    const s = sampleOf(b);
    if (s) return s.status;
    return b.kind === "verify" ? "verify" : "stub";
  }
  function bossCard(b) {
    const s = sampleOf(b);
    const st = statusOf(b);
    return `<a class="card" href="#/boss/${b.id}">
      <div class="card-top"><span class="pill act">Act ${b.act}</span>
      <span class="pill r-${st === "closed" ? "named" : st === "open" ? "infreq" : st === "verify" ? "off" : "gold"}">${st}</span></div>
      <h3>${b.name}</h3>
      <div class="meta">${b.title || ""}</div>
      <div class="meta">${s ? (s.label + " \u00b7 " + s.kills + " kills") : (b.remnantConfirmed ? "remnant confirmed \u00b7 no sample" : "remnant unconfirmed")}</div>
      ${s && s.gold ? `<div class="meta">Gold ${s.gold}</div>` : ""}
    </a>`;
  }
  function bossesByAct() {
    const acts = {};
    D.bosses.forEach((b) => {
      const key = b.actName || ("Act " + b.act);
      (acts[key] = acts[key] || []).push(b);
    });
    return acts;
  }
  function home() {
    const samples = D.bosses.flatMap((b) => b.samples || []);
    const closed = samples.filter((s) => s.status === "closed");
    const open = samples.filter((s) => s.status === "open");
    const acts = bossesByAct();
    return `<h1>Titan Quest 2 database</h1>
      <p class="lede">Observed remnant drop tables. Cap ${D.meta.cap}, ${D.meta.chapter}, updated ${D.meta.updated}.</p>
      <div class="statrow">
        <div class="stat"><b>${D.items.length}</b>catalogued items</div>
        <div class="stat"><b>${D.bosses.length}</b>boss stubs</div>
        <div class="stat"><b>${closed.reduce((a,s)=>a+s.kills,0)}</b>closed-sample kills</div>
        <div class="stat"><b>${open.reduce((a,s)=>a+s.kills,0)}</b>open-sample kills</div>
      </div>
      ${Object.entries(acts).map(([name, list]) => `<h2>${name}</h2><div class="grid">${list.map(bossCard).join("")}</div>`).join("")}
      <h2>Not remnant tables</h2>
      <ul class="muted-list">${(D.excluded || []).map((e) => `<li><strong>${e.name}</strong> \u2014 ${e.reason}</li>`).join("")}</ul>`;
  }
  function itemsView(filter) {
    let list = D.items;
    if (filter && filter !== "all") list = list.filter((i) => i.rarity === filter);
    return `<h1>Items</h1>
      <div class="filters">${["all","epic","named-essence","infrequent","off-table"].map((f) =>
        `<button data-f="${f}" class="${(!filter && f==="all") || filter===f ? "on":""}">${f}</button>`).join("")}</div>
      <table><thead><tr><th>Name</th><th>Rarity</th><th>Slot</th><th>Notes</th></tr></thead><tbody>
      ${list.map((i) => `<tr><td>${itemLink(i.id)}</td><td><span class="pill r-${i.rarity.startsWith("epic")?"epic":i.rarity}">${i.rarity}</span></td><td>${i.slot||""}</td><td class="meta">${i.notes||""}</td></tr>`).join("")}
      </tbody></table>`;
  }
  function itemView(id) {
    const i = itemById[id];
    if (!i) return "<p>Unknown item.</p>";
    const sources = [];
    D.bosses.forEach((b) => (b.samples || []).forEach((s) => {
      (s.drops || []).forEach((d) => { if (d.item === id) sources.push({ boss: b, sample: s, drop: d }); });
    }));
    return `<p class="meta"><a href="#/items">Items</a></p>
      <h1 class="item-name ${i.rarity}">${i.name}</h1>
      <p><span class="pill r-${i.rarity.startsWith("epic")?"epic":i.rarity}">${i.rarity}</span> ${i.slot||""} ${i.unique?"\u00b7 unique":""}</p>
      ${i.notes?`<p class="lede">${i.notes}</p>`:""}
      ${i.mods?`<ul class="mods">${i.mods.map((m)=>`<li>${m}</li>`).join("")}</ul>`:""}
      <h2>Observed sources</h2>
      ${sources.length?`<table><thead><tr><th>Boss</th><th>Sample</th><th>Rate</th></tr></thead><tbody>
        ${sources.map((s)=>`<tr><td><a href="#/boss/${s.boss.id}">${s.boss.name}</a></td><td>${s.sample.label} (${s.sample.kills})</td><td>${rate(s.drop.count,s.sample.kills)}${s.drop.flag?" \u00b7 "+s.drop.flag:""}</td></tr>`).join("")}
      </tbody></table>`:"<p class='meta'>No remnant sample attached yet.</p>"}`;
  }
  function dropsView() {
    const acts = bossesByAct();
    return `<h1>Drop tables</h1>
      <p class="lede">One page per boss. Never mix remnant tables. +0 and +3 are separate samples.</p>
      ${Object.entries(acts).map(([name, list]) => `<h2>${name}</h2><div class="grid">${list.map(bossCard).join("")}</div>`).join("")}
      <h2>Not remnant tables</h2>
      <ul class="muted-list">${(D.excluded || []).map((e) => `<li><strong>${e.name}</strong> \u2014 ${e.reason}</li>`).join("")}</ul>`;
  }
  function bossView(id) {
    const b = D.bosses.find((x)=>x.id===id);
    if (!b) return "<p>Unknown boss.</p>";
    const s = sampleOf(b);
    if (!s) {
      return `<p class="meta"><a href="#/drops">Drops</a> \u00b7 Act ${b.act}</p>
      <h1>${b.name}</h1>
      <p class="lede">${b.title||""} \u00b7 ${b.zone} \u00b7 ${b.kind}</p>
      <p>Remnant: <strong>${b.remnant}</strong> ${b.remnantConfirmed?'<span class="pill r-named">confirmed</span>':'<span class="pill r-off">needs confirm</span>'}</p>
      ${b.notes?`<p class="lede">${b.notes}</p>`:""}
      <p class="warn">No sample yet. Dedicated chat when you start the 100-kill pass.</p>`;
    }
    return `<p class="meta"><a href="#/drops">Drops</a> \u00b7 Act ${b.act}</p>
      <h1>${b.name}</h1>
      <p class="lede">Remnant: ${b.remnant} \u00b7 ${b.zone} \u00b7 sample ${s.label} \u00b7 <strong>${s.status}</strong> at ${s.kills} kills (${s.date}).</p>
      <div class="statrow">
        <div class="stat"><b>${s.kills}</b>kills</div>
        <div class="stat"><b>${s.epics??"\u2014"}</b>epics</div>
        <div class="stat"><b>${s.infrequents??"\u2014"}</b>infrequents</div>
        <div class="stat"><b>${s.namedEssences??"\u2014"}</b>named essences</div>
        <div class="stat"><b>${s.gold}</b>gold</div>
      </div>
      <p class="lede">${s.notes||""}</p>
      <h2>Named / unique hits</h2>
      <table><thead><tr><th>Item</th><th>n</th><th>Observed</th></tr></thead><tbody>
      ${(s.drops||[]).map((d)=>`<tr><td>${itemLink(d.item)}${d.flag?' <span class="pill r-off">'+d.flag+'</span>':""}</td><td>${d.count}</td><td>${rate(d.count,s.kills)}</td></tr>`).join("")}
      </tbody></table>
      ${s.infrequentNames?`<h2>Infrequent names seen</h2><ul>${s.infrequentNames.map((n)=>`<li>${n}</li>`).join("")}</ul>`:""}`;
  }
  function skillsView(mid) {
    const m = D.masteries.find((x)=>x.id===mid)||D.masteries[0];
    const nodes = D.skills[m.id]||[];
    return `<h1>Skill trees</h1>
      <p class="warn">Stub trees. Nodes marked wip need an in-client screenshot pass.</p>
      <div class="filters">${D.masteries.map((x)=>`<a href="#/skills/${x.id}"><button class="${x.id===m.id?"on":""}">${x.name}</button></a>`).join("")}</div>
      <h2>${m.name} <span class="meta">${m.tag}</span></h2>
      <div class="tree">${nodes.map((n)=>`<div class="node ${n.type==="wip"?"":"active"}"><div class="tier">T${n.tier} \u00b7 ${n.type}</div><strong>${n.name}</strong><div class="meta">${n.note||""}</div></div>`).join("")}</div>
      <h2>Dual-mastery classes</h2>
      <div class="grid">${D.classes.map((c)=>`<div class="card"><h3>${c.name}</h3><div class="meta">${c.a} + ${c.b}</div></div>`).join("")}</div>`;
  }
  function render() {
    const hash = location.hash.slice(2) || "";
    const [route, arg] = hash.split("/");
    if (!route) app.innerHTML = home();
    else if (route === "items") app.innerHTML = itemsView();
    else if (route === "item") app.innerHTML = itemView(arg);
    else if (route === "drops") app.innerHTML = dropsView();
    else if (route === "boss") app.innerHTML = bossView(arg);
    else if (route === "skills") app.innerHTML = skillsView(arg);
    else app.innerHTML = home();
    app.querySelectorAll(".filters button[data-f]").forEach((btn) => {
      btn.onclick = () => { app.innerHTML = itemsView(btn.dataset.f); };
    });
  }
  q.addEventListener("input", () => {
    const term = q.value.trim().toLowerCase();
    let box = document.getElementById("results");
    if (!box) { box = document.createElement("div"); box.id = "results"; box.className = "results"; document.body.appendChild(box); }
    if (!term) { box.style.display = "none"; return; }
    const hits = [
      ...D.items.filter((i) => i.name.toLowerCase().includes(term)).map((i) => ({ href: "#/item/" + i.id, label: i.name })),
      ...D.bosses.filter((b) => b.name.toLowerCase().includes(term)).map((b) => ({ href: "#/boss/" + b.id, label: b.name + " (boss)" }))
    ].slice(0, 12);
    box.innerHTML = hits.map((h) => `<a href="${h.href}">${h.label}</a>`).join("") || "<a>No hits</a>";
    box.style.display = "block";
    box.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => { box.style.display = "none"; }));
  });
  window.addEventListener("hashchange", render);
  render();
})();
