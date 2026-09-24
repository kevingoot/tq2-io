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
    const href = it.aliasOf ? it.aliasOf : it.id;
    return '<a class="item-name ' + it.rarity + '" href="#/item/' + href + '">' + it.name + "</a>";
  }
  function sampleOf(b) { return (b.samples && b.samples[0]) || null; }
  function sampleByAres(b, tier) {
    const tag = "+" + tier;
    return (b.samples || []).find((s) => (s.ares === tier) || (s.label && s.label.indexOf(tag) !== -1)) || null;
  }
  function uniqueRate(s) {
    if (!s || !s.kills) return "\u2014";
    const n = s.epics != null ? s.epics : 0;
    return (n / s.kills * 100).toFixed(1) + "%";
  }
  function infreqRate(s) {
    if (!s || !s.kills || s.infrequents == null) return "\u2014";
    return (s.infrequents / s.kills * 100).toFixed(1) + "%";
  }
  function dropTable(s) {
    if (!s) return '<p class="meta">No sample yet. Empty row waiting on a dedicated 100-kill chat.</p>';
    return `<div class="statrow">
        <div class="stat"><b>${s.kills}</b>total runs</div>
        <div class="stat"><b>${uniqueRate(s)}</b>uniques dropped</div>
        <div class="stat"><b>${infreqRate(s)}</b>infrequents dropped${s.infrequentAttribution==="zone-likely"?'<div class="meta">likely zone / world</div>':""}</div>
        <div class="stat"><b>${s.gold || "\u2014"}</b>avg gold / band</div>
        <div class="stat"><b>${s.namedEssences ?? "\u2014"}</b>named essences</div>
      </div>
      ${s.notes ? `<p class="lede">${s.notes}</p>` : ""}
      ${s.drops && s.drops.length ? `<table class="drops"><thead><tr><th>Item</th><th>n</th><th>Observed</th></tr></thead><tbody>
          ${s.drops.map((d) => `<tr><td>${itemLink(d.item)}${d.flag ? ' <span class="pill r-off">'+d.flag+'</span>' : ""}</td><td>${d.count}</td><td>${rate(d.count, s.kills)}</td></tr>`).join("")}
        </tbody></table>` : ""}
      ${s.infrequentNames ? `<h3>Infrequent names seen</h3><ul>${s.infrequentNames.map((n)=>`<li>${n}</li>`).join("")}</ul>` : ""}`;
  }
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
  function isBase(i) {
    return !i.aliasOf && (i.unique || i.rarity === "epic" || i.rarity === "infrequent");
  }
  function itemsView(filter) {
    let list = D.items.filter((i) => !i.aliasOf);
    if (!filter || filter === "all") list = list.filter(isBase);
    else if (filter === "unique" || filter === "epic") list = list.filter((i) => i.unique || i.rarity === "epic");
    else list = list.filter((i) => i.rarity === filter);
    return `<h1>Items</h1>
      <p class="lede">Bases only. Uniques are one page each. Infrequents are one page per base; rolled names live on that page.</p>
      <div class="filters">${["all","unique","infrequent","named-essence"].map((f) =>
        `<a href="#/items/${f}"><button data-f="${f}" class="${(!filter || filter==="all") && f==="all" || filter===f || ((filter==="epic") && f==="unique") ? "on":""}">${f}</button></a>`).join("")}</div>
      <table><thead><tr><th>Name</th><th>Type</th><th>Slot</th><th>Variants seen</th></tr></thead><tbody>
      ${list.map((i) => `<tr><td>${itemLink(i.id)}</td><td><span class="pill r-${i.rarity.startsWith("epic")||i.unique?"epic":i.rarity}">${i.unique?"unique":i.rarity}</span></td><td>${i.slot||""}</td><td class="meta">${(i.variants&&i.variants.length)?(i.variants.length+" logged"):(i.unique?"unique base":"")}</td></tr>`).join("")}
      </tbody></table>`;
  }
  function itemView(id) {
    let i = itemById[id];
    if (!i) return "<p>Unknown item.</p>";
    if (i.aliasOf && itemById[i.aliasOf]) i = itemById[i.aliasOf];
    const sources = [];
    D.bosses.forEach((b) => (b.samples || []).forEach((s) => {
      (s.drops || []).forEach((d) => { if (d.item === i.id || (itemById[d.item] && itemById[d.item].aliasOf === i.id)) sources.push({ boss: b, sample: s, drop: d }); });
    }));
    return `<p class="meta"><a href="#/items">Items</a></p>
      <h1 class="item-name ${i.rarity}">${i.name}</h1>
      <p><span class="pill r-${i.rarity.startsWith("epic")?"epic":i.rarity}">${i.rarity}</span> ${i.slot||""} ${i.unique?"\u00b7 unique":""}</p>
      ${i.notes?`<p class="lede">${i.notes}</p>`:""}
      ${i.mods?`<ul class="mods">${i.mods.map((m)=>`<li>${m}</li>`).join("")}</ul>`:""}
      ${i.variants&&i.variants.length?`<h2>Found variants</h2><table><thead><tr><th>Rolled name</th><th>Seen</th><th>Flag</th></tr></thead><tbody>${i.variants.map((v)=>`<tr><td>${v.name}</td><td>${v.seen||""}</td><td>${v.flag||""}</td></tr>`).join("")}</tbody></table>`:""}
      <h2>Observed sources</h2>
      ${sources.length?`<table><thead><tr><th>Boss</th><th>Sample</th><th>Rate</th></tr></thead><tbody>
        ${sources.map((s)=>`<tr><td><a href="#/boss/${s.boss.id}">${s.boss.name}</a></td><td>${s.sample.label} (${s.sample.kills})</td><td>${rate(s.drop.count,s.sample.kills)}${s.drop.flag?" \u00b7 "+s.drop.flag:""}</td></tr>`).join("")}
      </tbody></table>`:"<p class='meta'>No remnant sample attached yet.</p>"}`;
  }
  function dropsView() {
    const acts = bossesByAct();
    return `<h1>Drop tables</h1>
      <p class="lede">One page per boss. Never mix remnant tables. +0 / +3 / +5 are separate samples.</p>
      ${Object.entries(acts).map(([name, list]) => `<h2>${name}</h2><div class="grid">${list.map(bossCard).join("")}</div>`).join("")}
      <h2>Not remnant tables</h2>
      <ul class="muted-list">${(D.excluded || []).map((e) => `<li><strong>${e.name}</strong> \u2014 ${e.reason}</li>`).join("")}</ul>`;
  }
  function bossView(id) {
    const b = D.bosses.find((x)=>x.id===id);
    if (!b) return "<p>Unknown boss.</p>";
    const s0 = sampleByAres(b, 0);
    const s3 = sampleByAres(b, 3);
    const s5 = sampleByAres(b, 5);
    const portrait = b.image
      ? `<img class="portrait-img" src="${b.image}" alt="${b.name}" />`
      : `<div class="portrait-ph">${b.name.charAt(0)}</div>`;
    return `<p class="meta"><a href="#/drops">Drops</a> \u00b7 Act ${b.act} \u00b7 ${b.kind||""}</p>
      <header class="boss-head"><h1>${b.name}</h1><p class="lede">${b.title||""}</p></header>
      <div class="boss-hero">
        <div class="portrait">${portrait}<div class="portrait-cap">${b.imageCredit || (b.image ? "arena / concept" : "need screenshot \u2014 drop img/"+b.id+".jpg")}</div></div>
        <div class="infobox"><h2>Quick info</h2>
          <dl>
            <dt>Location</dt><dd>${b.zone||"\u2014"}</dd>
            <dt>Nearest waypoint</dt><dd>${b.waypoint||"unlogged"}</dd>
            <dt>Fight complexity</dt><dd>${b.complexity||"unlogged"}</dd>
            <dt>Remnant</dt><dd>${b.remnant} ${b.remnantConfirmed?'<span class="pill r-named">confirmed</span>':'<span class="pill r-off">needs confirm</span>'}</dd>
          </dl>
          ${b.notes?`<p class="lede">${b.notes}</p>`:""}
        </div>
      </div>
      <details class="ares" open><summary>Ares +0 baseline</summary>${dropTable(s0)}</details>
      <details class="ares"><summary>Ares +3 modifier trial</summary>${dropTable(s3)}</details>
      <details class="ares"><summary>Ares +5 maximum difficulty</summary>${dropTable(s5)}</details>`;
  }
  function initials(name) {
    return name.split(/\s+/).map((w) => w[0]).join("").slice(0, 3).toUpperCase();
  }
  function skillNode(n) {
    const kind = n.type === "passive" ? "passive-skill" : n.type === "sustained" ? "sustained active-skill" : "active-skill";
    const mods = n.mods ? `<ul class="mods">${n.mods.map((x)=>`<li>${x}</li>`).join("")}</ul>` : "";
    const feats = n.feats ? `<div class="meta">Feats: ${n.feats}</div>` : "";
    const stats = [n.tags, n.cost && ("Cost " + n.cost), n.cd && ("CD " + n.cd)].filter(Boolean).join(" \u00b7 ");
    return `<button class="sk ${kind}" type="button"><span class="sk-icon">${initials(n.name)}</span><span class="sk-name">${n.name}</span><div class="sk-tip"><strong>${n.name}</strong><div class="meta">${stats}</div><div class="meta">${n.note||""}</div>${feats}${mods}</div></button>`;
  }
  function skillsView(mid) {
    const m = D.masteries.find((x)=>x.id===mid)||D.masteries[0];
    const raw = D.skills[m.id];
    const actives = Array.isArray(raw) ? raw.filter((n)=>n.type!=="passive") : ((raw && raw.actives) || []);
    const passives = Array.isArray(raw) ? raw.filter((n)=>n.type==="passive") : ((raw && raw.passives) || []);
    const byName = {};
    actives.concat(passives).forEach((n) => { byName[n.name] = n; });
    const actRows = (raw && raw.layout && raw.layout.actives) || [
      actives.slice(0, 2).map((n) => n.name),
      actives.slice(2, 5).map((n) => n.name),
      actives.slice(5, 8).map((n) => n.name),
      actives.slice(8).map((n) => n.name)
    ];
    const pasRows = (raw && raw.layout && raw.layout.passives) || (function () {
      const rows = [];
      for (let i = 0; i < passives.length; i += 5) rows.push(passives.slice(i, i + 5).map((n) => n.name));
      return rows;
    })();
    const board = (actives.length || passives.length) ? `<div class="board mastery"><div class="tier-rail"><span>IV</span><span>III</span><span>II</span><span>I</span></div><div class="act-tree">${actRows.map((row) => `<div class="act-row">${row.map((name) => skillNode(byName[name] || { name: name, type: "active" })).join("")}</div>`).join("")}</div><div class="pas-tree">${pasRows.map((row) => `<div class="pas-row cols-${row.length}">${row.map((name) => skillNode(byName[name] || { name: name, type: "passive" })).join("")}</div>`).join("")}</div></div>` : "<p class='meta'>No nodes logged.</p>";
    return `<h1>Skill trees</h1>
      <p class="warn">Rogue slots locked from your board callouts. Hover a node for modifiers.</p>
      <div class="filters">${D.masteries.map((x)=>`<a href="#/skills/${x.id}"><button class="${x.id===m.id?"on":""}">${x.name}</button></a>`).join("")}</div>
      <h2>${m.name} <span class="meta">${m.tag}</span></h2>
      ${raw && raw.source ? `<p class="meta">${raw.source}</p>` : ""}
      ${board}
      <h2>Dual-mastery classes</h2>
      <div class="grid">${D.classes.map((c)=>`<div class="card"><h3>${c.name}</h3><div class="meta">${c.a} + ${c.b}</div></div>`).join("")}</div>`;
  }
  function render() {
    const hash = location.hash.slice(2) || "";
    const [route, arg] = hash.split("/");
    if (!route) app.innerHTML = home();
    else if (route === "items") app.innerHTML = itemsView(arg || "all");
    else if (route === "item") app.innerHTML = itemView(arg);
    else if (route === "drops") app.innerHTML = dropsView();
    else if (route === "boss") app.innerHTML = bossView(arg);
    else if (route === "skills") app.innerHTML = skillsView(arg);
    else app.innerHTML = home();
  }
  document.querySelectorAll('header nav a[href="#/items"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      if (location.hash === "#/items" || location.hash === "#/items/all") render();
      else location.hash = "#/items";
    });
  });
  q.addEventListener("input", () => {
    const term = q.value.trim().toLowerCase();
    let box = document.getElementById("results");
    if (!box) { box = document.createElement("div"); box.id = "results"; box.className = "results"; document.body.appendChild(box); }
    if (!term) { box.style.display = "none"; return; }
    const hits = [
      ...D.items.filter((i) => i.name.toLowerCase().includes(term)).map((i) => ({ href: "#/item/" + (i.aliasOf || i.id), label: i.name })),
      ...D.bosses.filter((b) => b.name.toLowerCase().includes(term)).map((b) => ({ href: "#/boss/" + b.id, label: b.name + " (boss)" }))
    ].slice(0, 12);
    box.innerHTML = hits.map((h) => `<a href="${h.href}">${h.label}</a>`).join("") || "<a>No hits</a>";
    box.style.display = "block";
    box.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => { box.style.display = "none"; }));
  });
  window.addEventListener("hashchange", render);
  render();
})();
