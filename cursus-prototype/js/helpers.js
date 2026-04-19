/* ============================================================
   HELPERS.JS
   ============================================================ */

let ACTIEVE_CONTAINER = '.pagina';
var OEFENING_TELLER = 1;  // ← beginwaarde voor dit hoofdstuk
var TOON_OPLOSSINGEN = false; // ← true = alle oplossingen zichtbaar bij laden
var TOGGLE_TOEGESTAAN = true;

/* ============================================================
   oefeningen afhandelen
   ============================================================ */
const OEFENING_WACHTRIJ = [];

function laadOefeningen(container, bestanden) {
  bestanden.forEach(src => {
    OEFENING_WACHTRIJ.push({ container, src });
  });
}

function laadTheorieOnderdeel(container, bestanden) {
  bestanden.forEach(item => {
    if (typeof item === 'string') {
      OEFENING_WACHTRIJ.push({ container, src: item, trefwoorden: [] });
    } else {
      OEFENING_WACHTRIJ.push({ container, src: item.bestand, trefwoorden: item.trefwoorden || [] });
    }
  });
}

function verwerkWachtrij() {
  function laadVolgende(index) {
    if (index >= OEFENING_WACHTRIJ.length) {
      // Alle oefeningen geladen
      if (TOON_OPLOSSINGEN) zetAlleOplossingen();
      return;
    }
    const { container, src } = OEFENING_WACHTRIJ[index];
    ACTIEVE_CONTAINER = container;
    const s = document.createElement('script');
    s.src = src;
    s.dataset.container = container;
    s.onload = () => laadVolgende(index + 1);
    document.head.appendChild(s);
  }
  laadVolgende(0);
}

function zetAlleOplossingen() {
  document.querySelectorAll('.oefening').forEach(oefDiv => {
    const ovs     = oefDiv.querySelectorAll('.opl, .opl-toggle, .opl2, .overlay, .overlayspan, .overlaypiramide');
    const ovsMark = oefDiv.querySelectorAll('.opl-toggle-markering');
    const ovsLijn = oefDiv.querySelectorAll('.opl-toggle-lijn');
    ovs.forEach(o => o.classList.add('zichtbaar'));
    ovsMark.forEach(m => m.style.backgroundColor = m.dataset.markeerKleur);
    ovsLijn.forEach(l => l.style.display = 'block');
    document.body.classList.add('toon-oplossingen');

    // SVG-lagen zichtbaar maken
    oefDiv.querySelectorAll('.svg-opl-laag').forEach(laag => {
      laag.style.display = 'block';
    });

    const badge = oefDiv.querySelector('.badge');
    if (badge) badge.classList.add('actief');
  });
}

window.addEventListener('load', verwerkWachtrij);

// Constante voor de schrijflijn-inhoud
const SL = '__________________________________________________' +
           '__________________________________________________' +
           '__________________________________________________';

function maakOefening(config) {
  const { id, soort, niveaus=[], tools=[], toggleModus='oefening', container=ACTIEVE_CONTAINER } = config;
  const actueleContainer = document.currentScript?.dataset?.container || container;
  const bestandsnaam = document.currentScript?.src?.split('/').pop() || '';
  const teltMee = /^(oe_|_oe_|p_oe_)/.test(bestandsnaam);
  const nummer = teltMee ? OEFENING_TELLER++ : config.nummer;
  const isCircel = (soort==='ontdek'||soort==='voorbeeld');
  const badgeKlasse = isCircel ? 'cirkel-badge' : 'vierkant-badge';
  const toolIconMap = {
    rekenmachine: { icoon: '🖩', size: '25pt', offset: '-2px' },
    geogebra: { icoon: '📐', size: '18pt', offset: '0px' }
  };

  const oefDiv = document.createElement('div');
  oefDiv.classList.add('oefening');
  oefDiv.id = id;

  const margeDiv = document.createElement('div');
  margeDiv.classList.add('oefening-marge');

  const badge = document.createElement('div');
  badge.classList.add('badge', badgeKlasse);
  badge.textContent = nummer;
  badge.title = 'Klik om oplossing te tonen/verbergen';

  const ICOON = 14;
  function maakSVG(type) {
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns,'svg');
    svg.setAttribute('width',ICOON); svg.setAttribute('height',ICOON);
    svg.setAttribute('viewBox',`0 0 ${ICOON} ${ICOON}`);
    svg.style.cssText='display:inline-block;vertical-align:middle;';
    if (type==='cirkel') {
      const c=document.createElementNS(ns,'circle');
      c.setAttribute('cx',ICOON/2);c.setAttribute('cy',ICOON/2);
      c.setAttribute('r',ICOON/2-0.5);c.setAttribute('fill','#000');svg.appendChild(c);
    } else if (type==='vierkant') {
      const r=document.createElementNS(ns,'rect');
      r.setAttribute('x',0.5);r.setAttribute('y',0.5);
      r.setAttribute('width',ICOON-1);r.setAttribute('height',ICOON-1);
      r.setAttribute('fill','#000');svg.appendChild(r);
    } else if (type==='zeshoek') {
      const cx=ICOON/2,cy=ICOON/2,r=ICOON/2-0.5;
      const pts=Array.from({length:6},(_,i)=>{
        const a=(Math.PI/180)*(60*i-30);
        return `${cx+r*Math.cos(a)},${cy+r*Math.sin(a)}`;
      });
      const p=document.createElementNS(ns,'polygon');
      p.setAttribute('points',pts.join(' '));p.setAttribute('fill','#000');svg.appendChild(p);
    }
    return svg;
  }

  const niveauDiv = document.createElement('div');
  niveauDiv.classList.add('niveau-iconen');
  ['cirkel','vierkant','zeshoek'].forEach(n => {
    const w=document.createElement('span');
    w.style.cssText=`display:inline-flex;width:${ICOON}px;height:${ICOON}px;align-items:center;justify-content:center;`;
    if (niveaus.includes(n)){w.appendChild(maakSVG(n));w.title=n;}
    niveauDiv.appendChild(w);
  });

  const toolDiv = document.createElement('div');
  toolDiv.classList.add('tool-iconen');
  tools.forEach(t => {
    const s = document.createElement('span');
    const tool = toolIconMap[t] || { icoon: t, size: '25pt', offset: '0px' };
    s.textContent = tool.icoon;
    s.title = t;
    s.style.cssText = `
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      font-size: ${tool.size};
      transform: translateY(${tool.offset});
    `;
    toolDiv.appendChild(s);
  });

  margeDiv.appendChild(badge);
  margeDiv.appendChild(niveauDiv);
  if (tools.length>0) margeDiv.appendChild(toolDiv);

  const inhoudDiv = document.createElement('div');
  inhoudDiv.classList.add('oefening-inhoud');
  oefDiv.appendChild(margeDiv);
  oefDiv.appendChild(inhoudDiv);

  if (toggleModus==='oefening') {
    badge.addEventListener('click',()=>{
      if (!TOGGLE_TOEGESTAAN) return; 
      const ovs = oefDiv.querySelectorAll('.opl, .opl-toggle, .opl2,.overlay,.overlayspan,.overlaypiramide');
      const ovsMark = oefDiv.querySelectorAll('.opl-toggle-markering');
      const ovsLijn = oefDiv.querySelectorAll('.opl-toggle-lijn');
  
      const zichtbaar = [...ovs].some(o=>o.classList.contains('zichtbaar') && !o.classList.contains('opl-vast'))
        || [...ovsMark].some(m => m.style.backgroundColor !== 'transparent' && m.style.backgroundColor !== '')
        || [...ovsLijn].some(l => l.style.display === 'block');

      ovs.forEach(o => {
        if (!o.classList.contains('opl-vast'))
          o.classList.toggle('zichtbaar', !zichtbaar);
      });
      ovsMark.forEach(m => {
        m.style.backgroundColor = !zichtbaar ? m.dataset.markeerKleur : 'transparent';
      });
      ovsLijn.forEach(l => {
        l.style.display = !zichtbaar ? 'block' : 'none';
      });

      badge.classList.toggle('actief', !zichtbaar);
    });
  }

  document.querySelector(actueleContainer).appendChild(oefDiv);

  if (TOON_OPLOSSINGEN) {
    const ovs     = oefDiv.querySelectorAll('.opl, .opl-toggle, .opl2, .overlay, .overlayspan, .overlaypiramide');
    const ovsMark = oefDiv.querySelectorAll('.opl-toggle-markering');
    const ovsLijn = oefDiv.querySelectorAll('.opl-toggle-lijn');
    ovs.forEach(o => o.classList.add('zichtbaar'));
    ovsMark.forEach(m => m.style.backgroundColor = m.dataset.markeerKleur);
    ovsLijn.forEach(l => l.style.display = 'block');
    badge.classList.add('actief');
  }

  return inhoudDiv;
}

function voegTekstToe(container, tekst, klasses=[]) {
  if (typeof tekst === 'string') {
    const p=document.createElement('p');
    if (klasses.length) p.classList.add(...klasses);
    p.innerHTML=tekst;
    container.appendChild(p);
  } else {
    const p=document.createElement('span');
    if (klasses.length) p.classList.add(...klasses);
    container.appendChild(p);
  } 
}

function maakBreuk(teller, noemer, stijl='opgave') {
  const span = document.createElement('span');
  span.classList.add('breuk-html');
  if (stijl === 'oplossing') {
    span.style.fontFamily = 'var(--font-oplossing)';
    span.style.color = 'var(--blauw-oplossing)';
  }
  const t = document.createElement('span'); 
  t.classList.add('teller'); 
  if (teller instanceof Node) t.appendChild(teller);
  else t.innerHTML = teller;
  const n = document.createElement('span'); 
  n.classList.add('noemer');
  if (noemer instanceof Node) n.appendChild(noemer);
  else n.innerHTML = noemer;
  span.appendChild(t); 
  span.appendChild(n);
  return span;
}

function maakOefTabel(container, aantalKolommen=2, metLijn=false) {
  const tabel=document.createElement('table');
  tabel.classList.add('oef-tabel');
  if (metLijn) tabel.classList.add('met-lijn');
  const cg=document.createElement('colgroup');
  for (let i=0;i<aantalKolommen;i++) {
    const col=document.createElement('col');
    col.style.width=`${100/aantalKolommen}%`;
    cg.appendChild(col);
  }
  tabel.appendChild(cg);
  const tbody=document.createElement('tbody');
  tabel.appendChild(tbody);
  container.appendChild(tabel);
  return {tabel,tbody};
}

/*
  maakSlTd — td met tab + schrijflijn (oefening 1-stijl)
  oplossing: HTML-string (optioneel)
  breuk: grotere rijhoogte
*/
function maakSlTd(oplossing=null, breuk=false) {
  const td = document.createElement('td');
  const rij = document.createElement('div');
  rij.classList.add('rij');
  if (breuk) rij.classList.add('breuk');

  const tab = document.createElement('span');
  tab.classList.add('tab');
  rij.appendChild(tab);

  const sl = document.createElement('span');
  sl.classList.add('sl');
  sl.textContent = SL;
  rij.appendChild(sl);

  if (oplossing !== null) {
    const ov = document.createElement('div');
    ov.classList.add('opl');
    // Oplossing start na de tab
    ov.style.left = 'var(--insprong-stap)';
    if (typeof oplossing === 'string') ov.innerHTML = oplossing;
    else ov.appendChild(oplossing);
    rij.appendChild(ov);
  }

  td.appendChild(rij);
  return td;
}

/*
  maakOpTd — td met label + tekst (vaste breedte) + = + schrijflijn
  oplossing: HTML-string of Node (optioneel)
  tekstBreedte: CSS-waarde, standaard '2.7cm'
  breuk: grotere rijhoogte
*/
function maakOpTd(label, tekst, tekstBreedte='2.7cm', breuk=false, oplossing=null) {
  tekst = tekst ?? '';  // null én undefined worden ''
  const td = document.createElement('td');
  const rij = document.createElement('div');
  rij.classList.add('rij');
  if (breuk) rij.classList.add('breuk');

  const lbl = document.createElement('span');
  lbl.classList.add('lbl', 'subopgave-label');
  lbl.innerHTML = `${label}<span class="streep">|</span>`;
  rij.appendChild(lbl);

  const txt = document.createElement('span');
  txt.classList.add('txt');
  txt.style.width = tekstBreedte;
  if (typeof tekst === 'string') txt.innerHTML = tekst;
  else txt.appendChild(tekst);
  rij.appendChild(txt);

  const is = document.createElement('span');
  is.classList.add('is');
  is.textContent = '=';
  rij.appendChild(is);

  const sl = document.createElement('span');
  sl.classList.add('sl');
  sl.textContent = SL;
  rij.appendChild(sl);

  if (oplossing !== null) {
    const ov = document.createElement('div');
    ov.classList.add('opl');
    // Oplossing-positie wordt na render berekend op basis van sl-positie
    ov.style.left = `calc(${tekstBreedte} + 1.15cm)`; // label ~0.3cm + = ~0.3cm = ~0.6cm extra
    if (typeof oplossing === 'string') ov.innerHTML = oplossing;
    else ov.appendChild(oplossing);
    rij.appendChild(ov);
  }

  td.appendChild(rij);
  return td;
}

/*
  maakOpTdGeen — td met label + tekst (vaste breedte) + geen = + schrijflijn
  oplossing: HTML-string of Node (optioneel)
  tekstBreedte: CSS-waarde, standaard '2.7cm'
  breuk: grotere rijhoogte
*/
function maakOpTdGeen(label, tekst, tekstBreedte='2.7cm', breuk=false, oplossing=null) {
  tekst = tekst ?? '';  // null én undefined worden ''
  const td = document.createElement('td');
  const rij = document.createElement('div');
  rij.classList.add('rij');
  if (breuk) rij.classList.add('breuk');

  const lbl = document.createElement('span');
  lbl.classList.add('lbl', 'subopgave-label');
  lbl.innerHTML = `${label}<span class="streep">|</span>`;
  rij.appendChild(lbl);

  const txt = document.createElement('span');
  txt.classList.add('txt');
  txt.style.width = tekstBreedte;
  if (typeof tekst === 'string') txt.innerHTML = tekst;
  else txt.appendChild(tekst);
  rij.appendChild(txt);

  const sl = document.createElement('span');
  sl.classList.add('sl');
  sl.textContent = SL;
  rij.appendChild(sl);

  if (oplossing !== null) {
    const ov = document.createElement('div');
    ov.classList.add('opl');
    // Oplossing-positie wordt na render berekend op basis van sl-positie
    ov.style.left = `calc(${tekstBreedte} + 0.65cm)`; // label ~0.3cm + = ~0.3cm = ~0.6cm extra
    if (typeof oplossing === 'string') ov.innerHTML = oplossing;
    else ov.appendChild(oplossing);
    rij.appendChild(ov);
  }

  td.appendChild(rij);
  return td;
}

/*
  maakOpTdDubbel — td met label + tekst (vaste breedte) + : + schrijflijn
  oplossing: HTML-string of Node (optioneel)
  tekstBreedte: CSS-waarde, standaard '2.7cm'
  breuk: grotere rijhoogte
*/
function maakOpTdDubbel(label, tekst, tekstBreedte='2.7cm', breuk=false, oplossing=null) {
  tekst = tekst ?? '';  // null én undefined worden ''
  const td = document.createElement('td');
  const rij = document.createElement('div');
  rij.classList.add('rij');
  if (breuk) rij.classList.add('breuk');

  const lbl = document.createElement('span');
  lbl.classList.add('lbl', 'subopgave-label');
  lbl.innerHTML = `${label}<span class="streep">|</span>`;
  rij.appendChild(lbl);

  const txt = document.createElement('span');
  txt.classList.add('txt');
  txt.style.width = tekstBreedte;
  if (typeof tekst === 'string') txt.innerHTML = tekst;
  else txt.appendChild(tekst);
  rij.appendChild(txt);

  const is = document.createElement('span');
  is.classList.add('is');
  is.textContent = ':';
  rij.appendChild(is);

  const sl = document.createElement('span');
  sl.classList.add('sl');
  sl.textContent = SL;
  rij.appendChild(sl);

  if (oplossing !== null) {
    const ov = document.createElement('div');
    ov.classList.add('opl');
    // Oplossing-positie wordt na render berekend op basis van sl-positie
    ov.style.left = `calc(${tekstBreedte} + 1.15cm)`; // label ~0.3cm + = ~0.3cm = ~0.6cm extra
    if (typeof oplossing === 'string') ov.innerHTML = oplossing;
    else ov.appendChild(oplossing);
    rij.appendChild(ov);
  }

  td.appendChild(rij);
  return td;
}

/*
  maakOpTdKeuzeZ — td zonder label + tekst (vaste breedte) + = of : + schrijflijn naar keuze
  oplossing: HTML-string of Node (optioneel)
  tekstBreedte: CSS-waarde, standaard '2.7cm'
  breuk: grotere rijhoogte
*/

function maakOpTdKeuzeZ(tekst, tekstBreedte='2.7cm', breuk=false, oplossing=null,scheidingsteken = '=', schrijflijn = SL) {
  tekst = tekst ?? '';  // null én undefined worden ''
  const td = document.createElement('td');
  const rij = document.createElement('div');
  rij.classList.add('rij');
  if (breuk) rij.classList.add('breuk');

  const txt = document.createElement('span');
  txt.classList.add('txt');
  txt.style.width = tekstBreedte;
  if (typeof tekst === 'string') txt.innerHTML = tekst;
  else txt.appendChild(tekst);
  rij.appendChild(txt);

  const is = document.createElement('span');
  is.classList.add('is');
  is.textContent = scheidingsteken;
  rij.appendChild(is);

  const sl = document.createElement('span');
  sl.classList.add('sl');
  sl.textContent = schrijflijn;
  rij.appendChild(sl);

  if (oplossing !== null) {
    const ov = document.createElement('div');
    ov.classList.add('opl');
    // Oplossing-positie wordt na render berekend op basis van sl-positie
    if (scheidingsteken === '=') ov.style.left = `calc(${tekstBreedte} + 0.5cm)`; // label ~0.3cm + = ~0.3cm = ~0.6cm extra
    else ov.style.left = `calc(${tekstBreedte} + 0.4cm)`;
    if (typeof oplossing === 'string') ov.innerHTML = oplossing;
    else ov.appendChild(oplossing);
    rij.appendChild(ov);
  }

  td.appendChild(rij);
  return td;
}


/*
  maakOpTdKeuzeZ2 — td zonder label maar wel insprong + tekst (vaste breedte) + = of : + schrijflijn naar keuze
  oplossing: HTML-string of Node (optioneel)
  tekstBreedte: CSS-waarde, standaard '2.7cm'
  breuk: grotere rijhoogte
*/

function maakOpTdKeuzeZ2(tekst, tekstBreedte='2.7cm', breuk=false, oplossing=null,scheidingsteken = '=', schrijflijn = SL) {
  tekst = tekst ?? '';  // null én undefined worden ''
  const td = document.createElement('td');
  const rij = document.createElement('div');
  rij.classList.add('rij');
  if (breuk) rij.classList.add('breuk');

  const lbl = document.createElement('span');
  lbl.classList.add('lbl', 'subopgave-label');
  rij.appendChild(lbl);

  const txt = document.createElement('span');
  txt.classList.add('txt');
  txt.style.width = tekstBreedte;
  if (typeof tekst === 'string') txt.innerHTML = tekst;
  else txt.appendChild(tekst);
  rij.appendChild(txt);

  const is = document.createElement('span');
  is.classList.add('is');
  is.textContent = scheidingsteken;
  rij.appendChild(is);

  const sl = document.createElement('span');
  sl.classList.add('sl');
  sl.textContent = schrijflijn;
  rij.appendChild(sl);

  if (oplossing !== null) {
    const ov = document.createElement('div');
    ov.classList.add('opl');
    // Oplossing-positie wordt na render berekend op basis van sl-positie
    if (scheidingsteken === '=') ov.style.left = `calc(${tekstBreedte} + 1.15cm)`; // label ~0.3cm + = ~0.3cm = ~0.6cm extra
    else ov.style.left = `calc(${tekstBreedte} + 0.4cm)`;
    if (typeof oplossing === 'string') ov.innerHTML = oplossing;
    else ov.appendChild(oplossing);
    rij.appendChild(ov);
  }

  td.appendChild(rij);
  return td;
}

/*
  maakOpTdaz — td met label + tekst
  tekstBreedte: 
  breuk: grotere rijhoogte
*/
function maakOpTdaz(label, tekst, breuk=false) {
  tekst = tekst ?? '';  // null én undefined worden ''
  const td = document.createElement('td');
  const rij = document.createElement('div');
  rij.classList.add('rij');
  if (breuk) rij.classList.add('breuk');

  const lbl = document.createElement('span');
  lbl.classList.add('lbl', 'subopgave-label');
  lbl.innerHTML = `${label}<span class="streep">|</span>`;
  rij.appendChild(lbl);

  const txt = document.createElement('span');
  txt.classList.add('txt');
  if (typeof tekst === 'string') txt.innerHTML = tekst;
  else txt.appendChild(tekst);
  rij.appendChild(txt);

  td.appendChild(rij);
  return td;
}

/*
  maakOpTdazZonder — td zonder label + tekst
  tekstBreedte: 
  breuk: grotere rijhoogte
*/
function maakOpTdazZonder(tekst, breuk=false) {
  tekst = tekst ?? '';  // null én undefined worden ''
  const td = document.createElement('td');
  const rij = document.createElement('div');
  rij.classList.add('rij');
  if (breuk) rij.classList.add('breuk');

  const txt = document.createElement('span');
  txt.classList.add('txt');
  if (typeof tekst === 'string') txt.innerHTML = tekst;
  else txt.appendChild(tekst);
  rij.appendChild(txt);

  td.appendChild(rij);
  return td;
}

/*
  maakOpTdazExtra — td met label + tekst + tab + tekst
  tekstBreedte: 
  breuk: grotere rijhoogte
*/
function maakOpTdazExtra(label, tekst, extraTekst,opgaveBreedte='4cm', breuk=false) {
  const td = document.createElement('td');
  const rij = document.createElement('div');
  rij.classList.add('rij');
  if (breuk) rij.classList.add('breuk');

  const lbl = document.createElement('span');
  lbl.classList.add('lbl', 'subopgave-label');
  lbl.innerHTML = `${label}<span class="streep">|</span>`;
  rij.appendChild(lbl);

  const txt = document.createElement('span');
  txt.classList.add('txt');
  txt.style.width = opgaveBreedte;
  if (typeof tekst === 'string') txt.innerHTML = tekst;
  else txt.appendChild(tekst);
  rij.appendChild(txt);

  // extra tekst (start altijd op dezelfde positie)
  const extra = document.createElement('span');
  extra.classList.add('txt');
  if (typeof extraTekst === 'string') extra.innerHTML = extraTekst;
  else extra.appendChild(extraTekst);
  rij.appendChild(extra);

  td.appendChild(rij);
  return td;
}


/* SVG helpers */
function wiskundeNaarSVGTspan(ns, tekst) {
  const tokens=tekst.match(/[a-zA-Z]|[^a-zA-Z]+/g)||[];
  return tokens.map(token=>{
    const ts=document.createElementNS(ns,'tspan');
    ts.textContent=token;
    ts.setAttribute('font-style',/^[a-zA-Z]$/.test(token)?'italic':'normal');
    return ts;
  });
}

function tekenRechthoek(container, basis, hoogte, opties={}) {
  const {breedte_px=170, hoogte_px=100}=opties;
  const ns='http://www.w3.org/2000/svg';
  const mx=38,my=22,rw=breedte_px-2*mx,rh=hoogte_px-2*my;
  const svg=document.createElementNS(ns,'svg');
  svg.setAttribute('width',breedte_px); svg.setAttribute('height',hoogte_px);
  svg.setAttribute('viewBox',`0 0 ${breedte_px} ${hoogte_px}`);
  svg.style.cssText='display:block;margin:0 auto;font-family:Arial,sans-serif;font-size:9pt;';
  const rect=document.createElementNS(ns,'rect');
  rect.setAttribute('x',mx);rect.setAttribute('y',my);
  rect.setAttribute('width',rw);rect.setAttribute('height',rh);
  rect.setAttribute('fill','none');rect.setAttribute('stroke','#1a1a1a');rect.setAttribute('stroke-width','1.2');
  svg.appendChild(rect);
  const lb=document.createElementNS(ns,'text');
  lb.setAttribute('x',mx+rw/2);lb.setAttribute('y',my+rh+15);
  lb.setAttribute('text-anchor','middle');lb.setAttribute('fill','#1a1a1a');
  wiskundeNaarSVGTspan(ns,basis).forEach(t=>lb.appendChild(t));
  svg.appendChild(lb);
  const lh=document.createElementNS(ns,'text');
  lh.setAttribute('x',mx-5);lh.setAttribute('y',my+rh/2);
  lh.setAttribute('text-anchor','end');lh.setAttribute('dominant-baseline','middle');
  lh.setAttribute('fill','#1a1a1a');
  wiskundeNaarSVGTspan(ns,hoogte).forEach(t=>lh.appendChild(t));
  svg.appendChild(lh);
  if (container) container.appendChild(svg);
  return svg;
}


/* ============================================================
   HELPERS VOOR GEMENGDE SCHRIJFLIJN EN TEKST
   ============================================================ */
/*
  maakSamengesteldeTd — td met label + tekst + = + samengestelde subblokken
  label: 'a', 'b', ...
  tekst: de opgave zoals '(3a - 2) · (-4)'
  tekstBreedte: CSS-waarde voor de opgave (bijv '3cm')
  subblokken: array van arrays, elk subarray = [type, inhoud, breedte]
              type: 'SL' of 'vast'
              inhoud: bij SL = oplossing ('-' als leeg), bij vast = tekst
              breedte: 'berekenen' of vaste breedte zoals '1cm'
  breuk: boolean, grotere rijhoogte
*/
function maakSamengesteldeTd(label, tekst, tekstBreedte='2.7cm', subblokken=[], breuk=false) {
  const td = document.createElement('td');
  const rij = document.createElement('div');
  rij.classList.add('rij');
  if (breuk) rij.classList.add('breuk');

  // Label + streep
  const lbl = document.createElement('span');
  lbl.classList.add('lbl', 'subopgave-label');
  lbl.innerHTML = `${label}<span class="streep">|</span>`;
  rij.appendChild(lbl);

  // Opgave zelf
  const txt = document.createElement('span');
  txt.classList.add('txt');
  txt.style.width = tekstBreedte;
  if (typeof tekst === 'string') txt.innerHTML = tekst;
  else txt.appendChild(tekst);
  rij.appendChild(txt);

  // Gelijkheidsteken
  const isEl = document.createElement('span');
  isEl.classList.add('is');
  isEl.textContent = '=';
  rij.appendChild(isEl);

  // Moederblok voor subblokken
  const moeder = document.createElement('span');
  moeder.classList.add('samengestelde');
  moeder.style.display = 'inline-flex';
  moeder.style.alignItems = 'center';
  moeder.style.gap = '0.0cm'; // optionele kleine ruimte tussen blokken

  subblokken.forEach(sub => {
    const [type, inhoud, breedte] = sub;
    const subEl = document.createElement('span');
    subEl.style.display = 'inline-block';
    subEl.style.position = 'relative';
    subEl.style.marginRight = '0.1cm';

    if (type === 'SL') {
      subEl.classList.add('sl');
      subEl.textContent = SL;
      if (breedte !== 'berekenen') subEl.style.width = breedte;

      // altijd oplossing toevoegen, gecentreerd
      const oplDiv = document.createElement('div');
      oplDiv.classList.add('opl');
      oplDiv.style.position = 'absolute';
      oplDiv.style.left = '50%';
      oplDiv.style.transform = 'translateX(-25%)';
      oplDiv.style.top = '0';
      oplDiv.style.width = 'auto';
      oplDiv.style.textAlign = 'center';
      oplDiv.appendChild(wiskundeNaarHTML(inhoud));
      subEl.appendChild(oplDiv);
    } 
    else if (type === 'vast') {
      subEl.appendChild(wiskundeNaarHTML(inhoud));
      if (breedte === 'berekenen') {
        // Breedte aanpassen op basis van inhoud
        subEl.style.whiteSpace = 'nowrap';
      } else {
        subEl.style.width = breedte;
      }
      subEl.style.fontFamily = 'Comic Sans MS';
      subEl.style.color = '#1a4fa0';
    }

    moeder.appendChild(subEl);
  });

  rij.appendChild(moeder);
  td.appendChild(rij);
  return td;
}

/* ============================================================
   HELPERS VOOR GEMENGDE SCHRIJFLIJN EN TEKST
   ============================================================ */
/*
  maakSamengesteldeTd2 — td met samengestelde subblokken
  subblokken: array van arrays, elk subarray = [type, inhoud, breedte]
              type: 'SL' of 'vast'
              inhoud: bij SL = oplossing ('-' als leeg), bij vast = tekst
              breedte: 'berekenen' of vaste breedte zoals '1cm'
  breuk: boolean, grotere rijhoogte
*/

function verwerkInhoud(inhoud) {
  if (inhoud instanceof Node) {
    return inhoud;
  } 
  else if (typeof inhoud === 'string' && inhoud.includes('<')) {
    const span = document.createElement('span');
    span.innerHTML = inhoud;
    return span;
  } 
  else {
    return wiskundeNaarHTML(inhoud);
  }
}

function maakSamengesteldeTd2(subblokken=[], breuk=false) {
  const td = document.createElement('td');
  const rij = document.createElement('div');
  rij.classList.add('rij');
  if (breuk) rij.classList.add('breuk');

  // Moederblok voor subblokken
  const moeder = document.createElement('span');
  moeder.classList.add('samengestelde');
  moeder.style.display = 'inline-flex';
  moeder.style.alignItems = 'center';
  moeder.style.gap = '0.0cm'; // optionele kleine ruimte tussen blokken

  subblokken.forEach(sub => {
    const [type, inhoud, breedte, oplosstijl] = sub;
    const subEl = document.createElement('span');
    subEl.style.display = 'inline-block';
    subEl.style.position = 'relative';
    subEl.style.marginRight = '0.1cm';

    if (type === 'SL') {
      subEl.classList.add('sl');
      subEl.textContent = SL;
      if (breedte !== 'berekenen') subEl.style.width = breedte;

      // altijd oplossing toevoegen, gecentreerd
      const oplDiv = document.createElement('div');
      if (oplosstijl) {
        oplDiv.classList.add('opl');
      } else {
        oplDiv.classList.add('opl.zichtbaar');
      }
      oplDiv.style.position = 'absolute';
      oplDiv.style.left = '50%';
      oplDiv.style.transform = 'translateX(-25%)';
      oplDiv.style.top = '0';
      oplDiv.style.width = 'auto';
      oplDiv.style.textAlign = 'center';
      oplDiv.style.fontFamily = 'Comic Sans MS';
      //oplDiv.style.color = '#d500f9';
      oplDiv.appendChild(verwerkInhoud(inhoud));
      subEl.appendChild(oplDiv);
    } 
    else if (type === 'vast') {
      subEl.appendChild(verwerkInhoud(inhoud));
      if (breedte === 'berekenen') {
        // Breedte aanpassen op basis van inhoud
        subEl.style.whiteSpace = 'nowrap';
      } else {
        subEl.style.width = breedte;
      }
      subEl.classList.add('voorgedrukt');
    }

    moeder.appendChild(subEl);
  });

  rij.appendChild(moeder);
  td.appendChild(rij);
  return td;
}

/* ============================================================
   HELPERS VOOR GEMENGDE SCHRIJFLIJN EN TEKST
   ============================================================ */
/*
  maakSamengesteldeTd2 — td met samengestelde subblokken
  subblokken: array van arrays, elk subarray = [type, inhoud, breedte]
              type: 'SL' of 'vast'
              inhoud: bij SL = oplossing ('-' als leeg), bij vast = tekst
              breedte: 'berekenen' of vaste breedte zoals '1cm'
  breuk: boolean, grotere rijhoogte
  zichtbaar: boolean, voor toggle
  hoogte: als oplossing verborgen is, zet oplossing beter
  compensatie: om hoogte te compenseren bij SL
  SLmetvast: compensatie voor SL in aanroepen waarbij oplossing zichtbaar is en combinatie met vaste tekst
  oplzichtSLmetvast: compensatie voor oplossing waarbij oplossing zichtbaar is en combinatie met vaste tekst
  oplzichtSLzondervast: compensatie voor oplossing waarbij oplossing zichtbaar is zonder combinatie met vaste tekst
*/
function maakSamengesteldeTd3(subblokken=[], breuk=false, zichtbaar=false, hoogte='0.9cm', compensatie='0cm',SLmetvast='0cm',oplzichtSLmetvast='0cm',oplzichtSLzondervast='0cm') {
  const td = document.createElement('td');
  const rij = document.createElement('div');
  rij.classList.add('rij');
  if (breuk) rij.classList.add('breuk');

  // Moederblok voor subblokken
  const moeder = document.createElement('span');
  moeder.classList.add('samengestelde');
  moeder.style.display = 'inline-flex';
  moeder.style.alignItems = 'center';
  moeder.style.gap = '0.0cm'; // optionele kleine ruimte tussen blokken
  moeder.style.marginTop = '0cm';

  subblokken.forEach(sub => {
    const [type, inhoud, breedte] = sub;
    const subEl = document.createElement('span');
    subEl.style.display = 'inline-block';
    subEl.style.position = 'relative';
    subEl.style.marginRight = '0.1cm';
    subEl.style.height = hoogte; //eerste
    subEl.style.verticalAlign = 'middle';
    const slSpan = subEl.querySelector ? subEl : subEl;
    

    if (type === 'SLmv' || type === 'SLzv' || type === 'SL') {
      subEl.classList.add('sl');
      subEl.textContent = SL;
      if (breedte !== 'berekenen') subEl.style.width = breedte;

      // altijd oplossing toevoegen, gecentreerd
      const oplDiv = document.createElement('div');
      if (zichtbaar === false) {
        subEl.style.paddingTop = compensatie; //tweede
        oplDiv.classList.add('opl');
        oplDiv.style.top = '0cm'; //zesde, geen parameter
      } else {
        subEl.style.paddingTop = compensatie; //tweede
        if (type === 'SLmv') {
          subEl.style.paddingTop = SLmetvast; //derde
          oplDiv.style.top = oplzichtSLmetvast; //vierde
        }
        else {
          subEl.style.paddingTop = compensatie; //tweede
          oplDiv.style.top = oplzichtSLzondervast; //vijfde
        }
        oplDiv.style.fontFamily = 'Comic Sans MS';
        oplDiv.style.color = '#1a4fa0';
      }
      oplDiv.style.position = 'absolute';
      oplDiv.style.left = '50%';
      oplDiv.style.transform = 'translateX(-25%)';
      oplDiv.style.width = 'auto';
      oplDiv.style.textAlign = 'center';
      if (typeof inhoud === 'string') oplDiv.appendChild(htmlSpan(inhoud));
      else {
        oplDiv.appendChild(inhoud); // fallback voor string of tekst
      }
      subEl.appendChild(oplDiv);
    } 
    else if (type === 'vast') {
      if (zichtbaar === true) subEl.style.paddingTop = '0.7cm'; //tweede
      else subEl.style.paddingTop = compensatie; //tweede
      if (typeof inhoud === 'string') subEl.appendChild(htmlSpan(inhoud));
      else subEl.appendChild(inhoud);
      if (breedte === 'berekenen') {
        // Breedte aanpassen op basis van inhoud
        subEl.style.whiteSpace = 'nowrap';
      } else {
        subEl.style.width = breedte;
      }
      // subEl.style.fontFamily = 'Comic Sans MS';
      // subEl.style.color = '#1a4fa0';
    }

    moeder.appendChild(subEl);
  });

  rij.appendChild(moeder);
  td.appendChild(rij);
  return td;
}

function wiskundeNaarHTML(tekst) {
  if (tekst instanceof Node) return tekst;
  const container = document.createDocumentFragment();
  const tokens = tekst.match(/[a-zA-Z]|[^a-zA-Z]+/g) || [];
  tokens.forEach(token => {
    const span = document.createElement('span');
    span.textContent = token;
    if (/^[a-zA-Z]$/.test(token)) span.style.fontStyle = 'italic';
    container.appendChild(span);
  });
  return container;
}

/*============================================================
  maakZichtbareTabel

  container: DOM-element
  rijen: aantal rijen
  kolommen: aantal kolommen

  opties:
    - hoofding: 'boven' | 'links' | null
    - rijHoogtes: array (bv ['1cm','1.2cm',...])
    - kolomBreedtes: array (bv ['2cm','3cm',...])

  gedrag:
    - rijhoogte default = 0.9cm
    - kolombreedte default = 100% / kolommen
============================================================*/

function maakZichtbareTabel(container, rijen, kolommen, opties = {}) {
  const {
    hoofding = null,
    rijHoogtes = [],
    kolomBreedtes = [],
    matrix = [],
    celPadding = '0.05cm'
  } = opties;

  const DEFAULT_RIJ_HOOGTE = '0.9cm';

  const tabel = document.createElement('table');
  tabel.classList.add('zichtbare-tabel');

  /* ========================
     KOLOMBREEDTES
     ======================== */
  const colgroup = document.createElement('colgroup');

  let totaalBreedte = 0; // optioneel: check totaal bij percentages

  for (let c = 0; c < kolommen; c++) {
    const col = document.createElement('col');
  
    if (kolomBreedtes[c]) {
      // Als het eindigt op '%' of 'px' of 'cm', gebruik direct
      col.style.width = kolomBreedtes[c];
    } else {
      // default verdeling: 100% / kolommen
      col.style.width = (100 / kolommen) + '%';
    }

    colgroup.appendChild(col);
  }

  tabel.appendChild(colgroup);

  /* ========================
     RIJEN
     ======================== */
  const tbody = document.createElement('tbody');

  for (let r = 0; r < rijen; r++) {
    const tr = document.createElement('tr');

    for (let c = 0; c < kolommen; c++) {
      const td = document.createElement('td');

      /* ---- HOOGTE ---- */
      td.style.height = rijHoogtes[r] || DEFAULT_RIJ_HOOGTE;

      /* ---- HOOFDING ---- */
      if (hoofding === 'boven' && r === 0) td.classList.add('hoofding');
      if (hoofding === 'links' && c === 0) td.classList.add('hoofding');

      /* ========================
         CEL-INHOUD (MATRIX)
         ======================== */
      const celData = matrix[r]?.[c];

      // defaults voor uitlijning
      let hAlign = 'center';
      let vAlign = 'middle';
      let inhoud = '';

      let type = 'opgave';

      if (celData) {
        inhoud = celData.inhoud ?? '';
        type = celData.type ?? 'opgave';
        hAlign = celData.hAlign ?? hAlign;
        vAlign = celData.vAlign ?? vAlign;
      }

      // wrapper voor positionering
      const wrapper = document.createElement('div');
      wrapper.style.display = 'flex';

      // horizontale uitlijning
      const hMap = {
        left: 'flex-start',
        center: 'center',
        right: 'flex-end'
      };

      // verticale uitlijning
      const vMap = {
        top: 'flex-start',
        middle: 'center',
        bottom: 'flex-end'
      };

      wrapper.style.justifyContent = hMap[hAlign] || 'center';
      wrapper.style.alignItems = vMap[vAlign] || 'center';
      wrapper.style.height = '100%';
      wrapper.style.width = '100%';
      wrapper.style.textAlign = 'initial'; // overschrijf eventuele CSS text-align
      wrapper.style.padding = celPadding; 

      // inhoud in span of div
      if (type === 'toggle') {
        const ov = document.createElement('div');
        ov.classList.add('opl', 'opl-toggle');
        ov.style.position = 'static';
        if (typeof inhoud === 'string') ov.innerHTML = inhoud;
        else ov.appendChild(inhoud);
        wrapper.appendChild(ov);
      } else {
        const span = document.createElement('span');
        if (typeof inhoud === 'string') span.innerHTML = inhoud;
        else span.appendChild(inhoud);

        if (type === 'oplossing') {
          span.classList.add('voorgedrukt');
        } else {
          span.classList.add('txt');
        }

        wrapper.appendChild(span);
      }

      td.appendChild(wrapper);
      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  }

  tabel.appendChild(tbody);
  container.appendChild(tabel);

  return tabel;
}

/* Tabel is de tabelnaam, config is matrix cellen die wel een rand moeten hebben: [{r:1,c:2},{r:1,c:4},]
Opletten: tellen vanaf rij 0 en cel 0 */
function pasRandenAan(tabel, config) {
  const { geenRanden = true, cellenMetRand = [] } = config;

  if (geenRanden) {
    tabel.querySelectorAll('td').forEach(td => {
      td.style.border = 'none';
    });
  }

  cellenMetRand.forEach(({ r, c }) => {
    const cel = tabel.rows[r]?.cells[c];
    if (cel) {
      cel.style.border = '1px solid black';
    }
  });
}


/* ============================================================
   maakSlTdZonderInsprong
   Variant van maakSlTd, maar:
   - GEEN tab (dus geen insprong)
   - wel ondersteuning voor breuken (via .breuk)
   - oplossing start links (left = 0)

   Wordt gebruikt voor sjabloon K0SLT1V
   ============================================================ */
function maakSlTdZonderInsprong(oplossing=null, breuk=false) {
  const td = document.createElement('td');

  const rij = document.createElement('div');
  rij.classList.add('rij');

  // 🔑 BELANGRIJK: zorgt voor grotere hoogte bij breuken
  if (breuk) rij.classList.add('breuk');

  // ❌ GEEN tab → dus geen insprong

  const sl = document.createElement('span');
  sl.classList.add('sl');
  sl.textContent = SL;
  rij.appendChild(sl);

  if (oplossing !== null) {
    const ov = document.createElement('div');
    ov.classList.add('opl');

    // 🔑 oplossing start volledig links (geen insprong)
    ov.style.left = '0';

    if (typeof oplossing === 'string') ov.innerHTML = oplossing;
    else ov.appendChild(oplossing);

    rij.appendChild(ov);
  }

  td.appendChild(rij);
  return td;
}

/* ============================================================
   MAAK PARABOOL
   Tekent een deel van een parabool f(x) = a(x-b)²+c als SVG
   over de oefening heen.

   opties:
     a        : steilheid (negatief = naar boven open)
     b        : horizontale positie van top in cm vanaf linkermarge
     c        : verticale positie van top in cm vanaf bovenkant oefening
     d        : halve breedte in cm (tekent van b-d tot b+d)
     variant  : 'zwart' | 'vast' | 'toggle'
                zwart  = altijd zwart zichtbaar
                vast   = altijd blauw zichtbaar (onafhankelijk van toggle)
                toggle = verschijnt mee met oplossingen
   ============================================================ */
function maakParabool(container, opties) {
  const {
    a = -1,
    b = 3,
    c = 1,
    d = 1,
    variant = 'zwart'
  } = opties;

  const CM = 37.8; // 1cm in pixels

  // SVG overlay, even groot als de container
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.style.position   = 'absolute';
  svg.style.top        = '0';
  svg.style.left       = '0';
  svg.style.width      = '100%';
  svg.style.height     = '100%';
  svg.style.overflow   = 'visible';
  svg.style.pointerEvents = 'none';

  // Kleur en zichtbaarheid
  let kleur;
  if (variant === 'zwart') {
    kleur = '#1a1a1a';
  } else {
    kleur = '#1a4fa0'; // blauw-oplossing
  }

  // Punten berekenen
  const stappen = 60;
  const xStart  = b - d;
  const xEinde  = b + d;
  const punten  = [];

  for (let i = 0; i <= stappen; i++) {
    const x = xStart + (i / stappen) * (xEinde - xStart);
    const y = a * Math.pow(x - b, 2) + c;
    punten.push({ px: x * CM, py: y * CM });
  }

  const d_attr = punten.map((p, i) =>
    (i === 0 ? `M ${p.px},${p.py}` : `L ${p.px},${p.py}`)
  ).join(' ');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', d_attr);
  path.setAttribute('fill', 'none');
  path.setAttribute('stroke', kleur);
  path.setAttribute('stroke-width', '1.5');

  // Variant: toggle
  if (variant === 'toggle') {
    path.classList.add('opl');
    svg.classList.add('opl');
    svg.style.display = 'none';
    // Luister naar zichtbaarheid via MutationObserver
    const observer = new MutationObserver(() => {
      const oefening = container.closest('.oefening');
      if (!oefening) return;
      const zichtbaar = [...oefening.querySelectorAll('.opl')]
        .some(o => o.classList.contains('zichtbaar') && !o.classList.contains('opl-vast'));
      svg.style.display = zichtbaar ? 'block' : 'none';
    });
    const oefening = container.closest('.oefening');
    if (oefening) {
      observer.observe(oefening, { attributes: true, subtree: true, attributeFilter: ['class'] });
    }
  }

  // Variant: vast (altijd zichtbaar, onafhankelijk van toggle)
  if (variant === 'vast') {
    path.classList.add('opl-vast');
  }

  svg.appendChild(path);
  container.appendChild(svg);
  return svg;
}

/* ============================================================
  maakParabool2(inhoud, {
    sx: -1,           // ← x-coördinaat startpunt links in cm
    sy: 3,            // ← y-coördinaat startpunt links in cm
    br: 1,            // ← afstand tussen eindpunten parabool in cm
    h: 0.2,           // ← hoogte van de boog in cm
    variant: 'zwart'  // ← 'zwart', 'vast' of 'toggle'
  });
   ============================================================ */

function maakParabool2(container, opties) {
  const {
    sx = -1,
    sy = 3,
    br = 1,
    h = 0.2,
    variant = 'zwart'
  } = opties;

  const d = br / 2;
  const a = h / d**2;
  const b = sx + d;
  const c = sy - h;


  const CM = 37.8; // 1cm in pixels

  // SVG overlay, even groot als de container
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.style.position   = 'absolute';
  svg.style.top        = '0';
  svg.style.left       = '0';
  svg.style.width      = '100%';
  svg.style.height     = '100%';
  svg.style.overflow   = 'visible';
  svg.style.pointerEvents = 'none';

  // Kleur en zichtbaarheid
  let kleur;
  if (variant === 'zwart') {
    kleur = '#1a1a1a';
  } else {
    kleur = '#1a4fa0'; // blauw-oplossing
  }

  // Punten berekenen
  const stappen = 60;
  const xStart  = b - d;
  const xEinde  = b + d;
  const punten  = [];

  for (let i = 0; i <= stappen; i++) {
    const x = xStart + (i / stappen) * (xEinde - xStart);
    const y = a * Math.pow(x - b, 2) + c;
    punten.push({ px: x * CM, py: y * CM });
  }

  const d_attr = punten.map((p, i) =>
    (i === 0 ? `M ${p.px},${p.py}` : `L ${p.px},${p.py}`)
  ).join(' ');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', d_attr);
  path.setAttribute('fill', 'none');
  path.setAttribute('stroke', kleur);
  path.setAttribute('stroke-width', '1.5');

  // Variant: toggle
  if (variant === 'toggle') {
    path.classList.add('opl');
    svg.classList.add('opl');
    svg.style.display = 'none';
    // Luister naar zichtbaarheid via MutationObserver
    const observer = new MutationObserver(() => {
      const oefening = container.closest('.oefening');
      if (!oefening) return;
      const zichtbaar = [...oefening.querySelectorAll('.opl')]
        .some(o => o.classList.contains('zichtbaar') && !o.classList.contains('opl-vast'));
      svg.style.display = zichtbaar ? 'block' : 'none';
    });
    const oefening = container.closest('.oefening');
    if (oefening) {
      observer.observe(oefening, { attributes: true, subtree: true, attributeFilter: ['class'] });
    }
  }

  // Variant: vast (altijd zichtbaar, onafhankelijk van toggle)
  if (variant === 'vast') {
    path.classList.add('opl-vast');
  }

  svg.appendChild(path);
  container.appendChild(svg);
  return svg;
}

/* ============================================================
  maak2Parabolen(inhoud, {
    sx: -1,           // ← x-coördinaat startpunt links in cm
    sy: 3,            // ← y-coördinaat startpunt links in cm
    br1: 1,           // ← afstand tussen eindpunten grote parabool in cm
    br2: 1,           // ← afstand tussen eindpunten kleine parabool in cm
    pos: 0,           // ← 0: factor staat links, 1: factor staat rechts
    h1: 0.2,          // ← hoogte van de grote boog in cm
    h2: 0.15,          // ← hoogte van de kleine boog in cm
    variant: 'zwart'  // ← 'zwart', 'vast' of 'toggle'
  });
   ============================================================ */

function maak2Parabolen(container, opties) {
  const {
    sx = -1,
    sy = 3,
    br1 = 2,
    br2 = 1,
    pos = 1,
    h1 = 0.2,
    h2 = 0.15,
    variant = 'zwart'
  } = opties;

  //parameters grote parabool
  const d1 = br1 / 2;
  const a1 = h1 / d1**2;
  const b1 = sx + d1;
  const c1 = sy - h1;

  const d2 = br2 / 2;
  const a2 = h2 / d2**2;
  const b2 = sx + (-1)**pos * d2 + pos * br1;
  const c2 = sy - h2;

  const pargroot = maakParabool(container, {a:a1,b:b1,c:c1,d:d1,variant:variant});
  const parklein = maakParabool(container, {a:a2,b:b2,c:c2,d:d2,variant:variant});
}   


/* ============================================================
   MAAK PARABOOL TD
   Tekent een deel van een parabool f(x) = a(x-b)²+c als SVG
   vastgemaakt aan een <td> (via het id van die td).

   opties:
     a        : steilheid (negatief = naar boven open)
     b        : horizontale positie van top in cm vanaf linkerkant van de td
     c        : verticale positie van top in cm vanaf bovenkant van de td
     d        : halve breedte in cm (tekent van b-d tot b+d)
     variant  : 'zwart' | 'vast' | 'toggle'
                zwart  = altijd zwart zichtbaar
                vast   = altijd blauw zichtbaar (onafhankelijk van toggle)
                toggle = verschijnt mee met oplossingen
     anker    : id van de <td> waarop de SVG vastgemaakt wordt
                De td krijgt automatisch position:relative.
                Verplicht voor maakParaboolTd.
   ============================================================ */
function maakParaboolTd(container, opties) {
  const {
    a = -1,
    b = 3,
    c = 1,
    d = 1,
    variant = 'zwart',
    anker = null
  } = opties;

  // Zoek de anker-td op via id
  const ankerEl = anker ? document.getElementById(anker) : null;
  if (!ankerEl) {
    console.warn('maakParaboolTd: anker "' + anker + '" niet gevonden.');
    return null;
  }

  // td moet position:relative hebben voor de SVG overlay
  ankerEl.style.position = 'relative';

  const CM = 37.8; // 1cm in pixels

  // SVG overlay, even groot als de td
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.style.position      = 'absolute';
  svg.style.top           = '0';
  svg.style.left          = '0';
  svg.style.width         = '100%';
  svg.style.height        = '100%';
  svg.style.overflow      = 'visible';
  svg.style.pointerEvents = 'none';

  // Kleur
  const kleur = variant === 'zwart' ? '#1a1a1a' : '#1a4fa0';

  // Punten berekenen
  const stappen = 60;
  const xStart  = b - d;
  const xEinde  = b + d;
  const punten  = [];

  for (let i = 0; i <= stappen; i++) {
    const x = xStart + (i / stappen) * (xEinde - xStart);
    const y = a * Math.pow(x - b, 2) + c;
    punten.push({ px: x * CM, py: y * CM });
  }

  const d_attr = punten.map((p, i) =>
    (i === 0 ? `M ${p.px},${p.py}` : `L ${p.px},${p.py}`)
  ).join(' ');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', d_attr);
  path.setAttribute('fill', 'none');
  path.setAttribute('stroke', kleur);
  path.setAttribute('stroke-width', '1.5');

  // Variant: toggle
  if (variant === 'toggle') {
    path.classList.add('opl');
    svg.classList.add('opl');
    svg.style.display = 'none';
    const observer = new MutationObserver(() => {
      const oefening = container.closest('.oefening');
      if (!oefening) return;
      const zichtbaar = [...oefening.querySelectorAll('.opl')]
        .some(o => o.classList.contains('zichtbaar') && !o.classList.contains('opl-vast'));
      svg.style.display = zichtbaar ? 'block' : 'none';
    });
    const oefening = container.closest('.oefening');
    if (oefening) {
      observer.observe(oefening, { attributes: true, subtree: true, attributeFilter: ['class'] });
    }
  }

  // Variant: vast (altijd zichtbaar, onafhankelijk van toggle)
  if (variant === 'vast') {
    path.classList.add('opl-vast');
  }

  svg.appendChild(path);
  ankerEl.appendChild(svg);
  return svg;
}

/* ============================================================
   Vaste oplossing toch afdrukken
   ============================================================ */
window.addEventListener('load', function() {
  setTimeout(function() {
    document.querySelectorAll('.opl-vast').forEach(el => {
      el.style.setProperty('display', 'flex', 'important');
    });
  }, 1000);  // ← verhoog dit als het nog niet werkt
});

/* ============================================================
   MAAK GELIJKHEID MET NUMMER
   Maakt een span met een nummer boven het gelijkheidsteken.
   Het gelijkheidsteken blijft op dezelfde verticale positie.
   
   tekst   : de volledige celinhoud, bv. '= 16 + 4 + 12'
   nummer  : het nummer boven het gelijkheidsteken, bv. '①' of '1'
   ============================================================ */
function maakGelijkheidMetNummer(tekst, nummer) {
  const span = document.createElement('span');
  span.style.display = 'inline-flex';
  span.style.alignItems = 'baseline';

  // Splits op het gelijkheidsteken
  const delen = tekst.split('=');
  const voor  = delen[0];
  const na    = delen.slice(1).join('=');

  // Stuk voor het gelijkheidsteken
  if (voor) {
    const voorSpan = document.createElement('span');
    voorSpan.innerHTML = voor;
    span.appendChild(voorSpan);
  }

  // Gelijkheidsteken met nummer erboven
  const gelijkheidsWrapper = document.createElement('span');
  gelijkheidsWrapper.style.display        = 'inline-flex';
  gelijkheidsWrapper.style.position       = 'relative';
  gelijkheidsWrapper.style.verticalAlign  = 'baseline';

  const nummerSpan = document.createElement('span');
  nummerSpan.textContent   = nummer;
  nummerSpan.style.fontSize    = '7pt';   // ← HIER AANPASSEN
  nummerSpan.style.lineHeight  = '1';
  nummerSpan.style.color       = '#1a1a1a';
  nummerSpan.style.position    = 'absolute';
  nummerSpan.style.bottom      = '100%';
  nummerSpan.style.left        = '50%';
  nummerSpan.style.transform   = 'translateX(-50%)';

  const gelijkheidsSpan = document.createElement('span');
  gelijkheidsSpan.textContent  = '=';
  gelijkheidsSpan.style.fontSize   = 'var(--fontsize)';


  gelijkheidsWrapper.appendChild(nummerSpan);
  gelijkheidsWrapper.appendChild(gelijkheidsSpan);
  span.appendChild(gelijkheidsWrapper);

  // Stuk na het gelijkheidsteken
  if (na) {
    const naSpan = document.createElement('span');
    naSpan.innerHTML = '\u200A' + na;
    span.appendChild(naSpan);
  }

  return span;
}

/* ============================================================
   VOEG HOE VER STA IK TEKST TOE
   parameter: 'tekst1', 'tekst2' of 'tekst3'
   ============================================================ */
function voegHoeVerStaIkTekstToe(type) {
  const kader = document.createElement('div');
  kader.classList.add('hvsi-kader');

  const teksten = {
    tekst1: {
      intro: 'Verbeter met behulp van de correctiesleutel.',
      bullets: [
        'Niet volledig begrepen? Maak alle opdrachten met een ⬤.',
        'In orde? Maak de opdrachten met een ⏹.'
      ]
    },
    tekst2: {
      intro: 'Verbeter met behulp van de correctiesleutel.',
      bullets: [
        'Niet volledig begrepen? Maak alle opdrachten met een ⬤.',
        'In orde? Maak de volgende opdrachten.'
      ]
    },
    tekst3: {
      intro: 'Verbeter met behulp van de correctiesleutel.',
      bullets: [
        'Niet volledig begrepen? Maak alle opdrachten met een ⏹.',
        'In orde? Maak de opdrachten met een ⬢.'
      ]
    }
  };

  const data = teksten[type];
  if (!data) return;

  const p = document.createElement('p');
  p.textContent = data.intro;
  kader.appendChild(p);

  const ul = document.createElement('ul');
  data.bullets.forEach(tekst => {
    const li = document.createElement('li');
    li.textContent = tekst;
    ul.appendChild(li);
  });
  kader.appendChild(ul);

  huidigePagina().appendChild(kader);
  return kader;
}

/* ============================================================
   VOEG LIJST TOE
   container  : DOM-element waar de lijst in komt
   type       : 'bullet' (•) of 'streep' (-)
   insprong   : afstand van linkerrand, bv. '0.4cm'
   gap        : ruimte tussen teken en tekst, bv. '0.2cm'
   items      : array van strings of DOM-nodes
   ============================================================ */
function voegLijstToe(container, type, insprong, gap, items) {
  const ul = document.createElement('ul');
  ul.style.listStyle   = 'none';
  ul.style.margin      = '0';
  ul.style.padding     = '0';
  ul.style.paddingLeft = insprong;

  const teken = type === 'streep' ? '-' : '•';

  items.forEach(item => {
    const li = document.createElement('li');
    li.style.display      = 'flex';
    li.style.alignItems   = 'baseline';
    li.style.marginBottom = '0.05cm';

    const tekenSpan = document.createElement('span');
    tekenSpan.textContent    = teken;
    tekenSpan.style.flexShrink  = '0';
    tekenSpan.style.marginRight = gap;

    const tekstSpan = document.createElement('span');
    if (typeof item === 'string') tekstSpan.innerHTML = item;
    else tekstSpan.appendChild(item);

    li.appendChild(tekenSpan);
    li.appendChild(tekstSpan);
    ul.appendChild(li);
  });

  container.appendChild(ul);
  return ul;
}

/* ============================================================
   VOEG LIJST TOE
   container  : DOM-element waar de lijst in komt
   type       : 'bullet' (•) of 'streep' (-)
   insprong   : afstand van linkerrand, bv. '0.4cm'
   gap        : ruimte tussen teken en tekst, bv. '0.2cm'
   items      : array van strings of DOM-nodes
   ============================================================ */
function voegLijstToe2(container, type, insprong, gap, items,lijnhoogte = '1.2',tussen = '0.05cm') {
  const ul = document.createElement('ul');
  ul.style.listStyle   = 'none';
  ul.style.margin      = '0';
  ul.style.padding     = '0';
  ul.style.paddingLeft = insprong;

  const teken = type === 'streep' ? '-' : '•';

  items.forEach(item => {
    const li = document.createElement('li');
    li.style.display      = 'flex';
    li.style.alignItems   = 'baseline';
    li.style.marginBottom = tussen;

    const tekenSpan = document.createElement('span');
    tekenSpan.textContent    = teken;
    tekenSpan.style.flexShrink  = '0';
    tekenSpan.style.marginRight = gap;

    const tekstSpan = document.createElement('span');
    if (typeof item === 'string') tekstSpan.innerHTML = item;
    else tekstSpan.appendChild(item);
    tekstSpan.style.lineHeight = lijnhoogte;

    li.appendChild(tekenSpan);
    li.appendChild(tekstSpan);
    ul.appendChild(li);
  });

  container.appendChild(ul);
  return ul;
}

/* ============================================================
   MAAK GEMARKEERDE SPAN
   tekst    : string of DOM-node
   kleur    : CSS-kleur, bv. '#bbdefb' (blauw) of '#fff9c4' (geel)
   toggle   : true = verschijnt via toggle | false = altijd zichtbaar
   ============================================================ */
function maakMarkering(tekst, kleur, toggle) {
  const span = document.createElement('span');
  span.style.borderRadius = '2px';
  span.style.padding      = '0 1px';

  if (typeof tekst === 'string') span.innerHTML = tekst;
  else span.appendChild(tekst);

  if (toggle) {
    span.classList.add('opl-toggle-markering');
    span.style.backgroundColor = 'transparent';
    span.dataset.markeerKleur  = kleur;
  } else {
    span.style.backgroundColor = kleur;
  }

  return span;
}


/* ============================================================
   Opmaak in oefeningen vanuit tabellen
   ============================================================ */

//____witregel tussen opgaven__________________________________
function voegWitruimteToe(tbody, hoogte = '0.3cm') {
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  td.style.height = hoogte;
  tr.appendChild(td);
  tbody.appendChild(tr);
}

function voegWitruimteToe2(tbody, hoogte = '0.3cm') {
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  td1.style.borderRight = '1.2px solid var(--groen-donker)';
  td1.style.height = hoogte;
  tr.appendChild(td1);
  const td2 = document.createElement('td');
  td2.style.height = hoogte;
  tr.appendChild(td2);
  tbody.appendChild(tr);
}

// Uitlijnen gelijkheidstekens
function maakSpanBreedte(breedte, inhoud = '') {
  const span = document.createElement('span');
  span.style.display = 'inline-block';
  span.style.width   = breedte;
  if (typeof inhoud === 'string') span.innerHTML = inhoud;
  else if (inhoud instanceof Node) span.appendChild(inhoud);
  return span;
}

// helper om string → span om te zetten
function htmlSpan(html) {
  const span = document.createElement('span');
  span.innerHTML = html;
  return span;
}

// extra wit op een tabelregel
function maakRegel(marge = '6px') {
  const div = document.createElement('div');
  div.style.marginBottom = marge;  // hier bepaal je de ruimte
  return div;
}


/* ============================================================
   Omzetten naar oplossing
   - String → je kunt HTML erin zetten: '1<i>a</i>'
      const td = document.createElement('td');
      td.innerHTML = zetOmNaarOpl('1').outerHTML + '<i>a</i><sup>2</sup>';
   - DOM-node → wordt gekloond en als kind toegevoegd
      const td = document.createElement('td');
      td.appendChild(zetOmNaarOpl('1'));
      td.appendChild(htmlSpan('<i>a</i><sup>2</sup>'));
   ============================================================ */

function zetOmNaarOpl(inhoud) {
  const span = document.createElement('span');
  span.classList.add('opl-toggle');

  if (typeof inhoud === 'string') {
    span.innerHTML = inhoud;
  } else if (inhoud instanceof Node) {
    span.appendChild(inhoud.cloneNode(true));
  }

  return span;
}

/* ============================================================
   MAAK ONDERSTREPING
   Geeft een span terug met onderstreping, optioneel via toggle.

   inhoud   : string of DOM-node
   stijl    : 'enkel' | 'dubbel' | 'golf'
   diepte   : afstand tussen inhoud en lijn, bv. '0.1cm' of '0.3cm'
              (verhoog bij breuken zodat lijn onder de noemer komt)
   toggle   : true = verschijnt via toggle | false = altijd zichtbaar
   ============================================================ */
function maakOnderstreping(inhoud, stijl, diepte, toggle = true, hoogte = `calc(${diepte} + 0.02cm)`) {
  const wrapper = document.createElement('span');
  wrapper.style.display       = 'inline-block';
  wrapper.style.position      = 'relative';
  wrapper.style.paddingBottom = diepte;
  wrapper.style.paddingTop    = hoogte;

  const inhoudSpan = document.createElement('span');
  if (typeof inhoud === 'string') inhoudSpan.innerHTML = inhoud;
  else inhoudSpan.appendChild(inhoud);
  wrapper.appendChild(inhoudSpan);

  const kleur = toggle ? '#1a4fa0' : 'currentColor';

  function maakLijn() {
    const lijn = document.createElement('span');
    lijn.style.position = 'absolute';
    lijn.style.left     = '0';
    lijn.style.right    = '0';
    lijn.style.bottom   = '0';
    if (toggle) {
      lijn.style.display = 'none';
      lijn.classList.add('opl-toggle-lijn');
    }
    return lijn;
  }

  if (stijl === 'enkel') {
    const lijn = maakLijn();
    lijn.style.borderBottom = `1.5px solid ${kleur}`;
    wrapper.appendChild(lijn);
  } else if (stijl === 'dubbel') {
    const lijn1 = maakLijn();
    lijn1.style.borderBottom = `1.5px solid ${kleur}`;
    lijn1.style.bottom       = '0';
    wrapper.appendChild(lijn1);
    const lijn2 = maakLijn();
    lijn2.style.borderBottom = `1.5px solid ${kleur}`;
    lijn2.style.bottom       = '3px';
    wrapper.appendChild(lijn2);
  } else if (stijl === 'golf') {
    const lijn = maakLijn();
    lijn.style.height             = '4px';
    lijn.style.bottom             = '0';
    const kleurHex                = toggle ? '%231a4fa0' : '%23000000';
    lijn.style.backgroundImage    = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='4'%3E%3Cpath d='M0 2 Q2 0 4 2 Q6 4 8 2' fill='none' stroke='${kleurHex}' stroke-width='1.5'/%3E%3C/svg%3E")`;
    lijn.style.backgroundRepeat   = 'repeat-x';
    lijn.style.backgroundPosition = 'bottom left';
    lijn.style.backgroundSize     = '8px 4px';
  wrapper.appendChild(lijn);
  }

  return wrapper;
}

/*
 * maakTdTekst(tekst, align)
 * Maakt een eenvoudige tabelcel met tekst.
 * tekst: de weer te geven tekst (string)
 * align: horizontale uitlijning ('left', 'center', 'right')
 */
function maakTdTekst(tekst, align) {
  const td = document.createElement('td');
  td.style.cssText = `vertical-align:middle; text-align:${align};`;
  td.appendChild(htmlSpan(tekst));
  return td;
}

/*
 * maakTdBasisOverlay(overlaySpan, hoogte, zichtbaarheid)
 * Maakt een tabelcel met een basislaag (schrijflijn) en een overlaylaag (antwoord).
 * overlaySpan: de span met de inhoud van de overlay
 * hoogte: de hoogte van de cel (bv. '1.2cm')
 * zichtbaarheid: true = overlay meteen zichtbaar (voorgedrukt), false = verborgen (standaard)
 */
function maakTdBasisOverlay(overlaySpan, hoogte, zichtbaarheid = false) {
  const td = document.createElement('td');
  td.style.cssText = `position:relative; vertical-align:middle; text-align:left; height:${hoogte};`;

  const basis = document.createElement('div');
  basis.classList.add('basis');
  basis.style.height = hoogte;
  const spanBasis = htmlSpan(SL);
  spanBasis.style.display = 'block';
  basis.appendChild(spanBasis);
  td.appendChild(basis);

  const overlay = document.createElement('div');
  if (zichtbaarheid === true) overlay.classList.add('overlayvoorgedrukt');
  else overlay.classList.add('overlay');
  overlay.style.height = hoogte;
  overlaySpan.style.display = 'block';
  overlay.appendChild(overlaySpan);
  td.appendChild(overlay);

  return td;
}

/*
 * maakSpanBasisOverlay(overlaySpan, hoogte, zichtbaarheid)
 * Maakt een inline span met een basislaag (schrijflijn) en een overlaylaag (antwoord).
 * overlaySpan: de span met de inhoud van de overlay
 * hoogte: de hoogte van de span (bv. '1.2cm')
 * zichtbaarheid: true = overlay meteen zichtbaar (voorgedrukt), false = verborgen (standaard)
 */
function maakSpanBasisOverlay(overlaySpan, hoogte, zichtbaarheid = false) {
  const wrapper = document.createElement('span');
  wrapper.style.cssText = `position:relative; display:inline-flex; align-items:center; height:${hoogte};`;

  const basis = document.createElement('span');
  basis.classList.add('basisspan');
  basis.style.height = hoogte;
  const spanBasis = htmlSpan(SL);
  spanBasis.style.display = 'inline';
  basis.appendChild(spanBasis);
  wrapper.appendChild(basis);
  wrapper.style.cssText = `
    position: relative;
    display: inline-flex;
    align-items: center;
    height: ${hoogte};
    width: 100%;          /* vul resterende ruimte op */
    overflow: hidden;     /* knip de SL af aan de rand */
    flex: 1 1 0;          /* krimp/groei mee in flex-context van de td */
    min-width: 0;         /* nodig zodat flex-kinderen kunnen krimpen */
  `;
  const overlay = document.createElement('span');
  if (zichtbaarheid === true) overlay.classList.add('overlayspanvoorgedrukt');
  else overlay.classList.add('overlayspan');
  overlay.style.height = hoogte;
  overlaySpan.style.display = 'inline';
  overlay.appendChild(overlaySpan);
  wrapper.appendChild(overlay);

  return wrapper;
}


/*====helpers voor schema====*/
//stap 1: basistabel → via maakSchemaTabel(inhoud,'25%');
function maakSchemaTabel(container,breedte1 = '25%') {
  const tabel = document.createElement('table');
  tabel.classList.add('oef-tabel');
  const cg=document.createElement('colgroup');
  for (let i=0;i<2;i++) {
    const col=document.createElement('col');
    if (i === 0) col.style.width = breedte1;
    if (i === 1) col.style.width = `calc(100% - ${breedte1})`;
    cg.appendChild(col);
  }
  tabel.appendChild(cg);
  const tbody=document.createElement('tbody');
  tabel.appendChild(tbody);
  container.appendChild(tabel);  
  return {tabel,tbody};
}

//stap 2: blokken definiëren
/*
const BLOKA = [
  {inhoud: htmlSpan('lettervorm: coëfficiënt en letterdeel'),type: 'grijs'},
  {inhoud: htmlSpan('5 + 3<i>x</i>'), type: 'oplvast'},
  {inhoud: htmlSpan('5 + 3<i>x</i>'), type: 'toggle'},
];
*/

//stap 3: maakBlok(tbody,htmlSpan('lettervorm: coëfficiënt en letterdeel'),BLOKA,'0cm','0.05cm',false);
function maakBlok(container, links = htmlSpan('opdracht'), blokinfo, uitlijningLinks = '0cm',wit = '0.05cm', breuk = false) {
  //tabellen maken links en rechts
  const tr = document.createElement('tr');
  for (let i=0;i<2;i++) {
    const td = document.createElement('td');
    td.style.border = '1.2px solid var(--groen-donker)';
    if (i === 0) {
      td.style.verticalAlign = 'top';
    }
    const tabel = document.createElement('table');
    td.appendChild(tabel);
    tabel.style.tableLayout = 'fixed';
    tabel.style.width = '100%';
    tr.appendChild(td);
    if (i===0) {
      //linkerkolom vullen
      const tr = document.createElement('tr');
      const tdL = document.createElement('td');
      tdL.style.paddingTop = uitlijningLinks;
      tdL.style.paddingLeft = wit;
      tdL.style.paddingRight = wit;
      tdL.appendChild(links);
      tr.appendChild(tdL);
      tabel.appendChild(tr);
    } else {
      //rechterkolom vullen
      blokinfo.forEach(item => {
        const trItem = document.createElement('tr');
        let td;

        if (item.type === 'grijs') {
          td = document.createElement('td');
          td.appendChild(item.inhoud);
          td.style.color = 'var(--sl-kleur)';
        } else if (item.type === 'oplvast') {
          td = maakSlTdZonderInsprong(item.inhoud, breuk);
          td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        } else if (item.type === 'toggle') {
          td = maakSlTdZonderInsprong(item.inhoud, breuk);
        } else {
          td = document.createElement('td'); // fallback
          td.appendChild(item.inhoud);
        }

        td.style.height = breuk ? '1.2cm' : '0.9cm';
        td.style.paddingLeft = wit;
        td.style.paddingRight = wit;
        trItem.appendChild(td);
        tabel.appendChild(trItem);
      });
    }
  }
  container.appendChild(tr);
}


/*====helpers voor tbody subopgave====
const tbodyA = maakNestedTabel(tbody,'4.19%');
*/
function maakNestedTabel(body=tbody,insprong='4.19%'){
  const trhulp = document.createElement('tr');
  const tdhulp = document.createElement('td');  
  trhulp.appendChild(tdhulp);
  body.appendChild(trhulp);
  const tabelhulp = document.createElement('table');
  tabelhulp.style.width = '100%';
  tabelhulp.style.borderCollapse = 'collapse';
  const colg = document.createElement('colgroup');
  for (let i=0;i<2;i++) {
    const col=document.createElement('col');
    if (i === 0) col.style.width = insprong;
    if (i === 1) col.style.width = `calc(100% - ${insprong})`;
    colg.appendChild(col);
  }
  tabelhulp.appendChild(colg);
  const tbodyhulp = document.createElement('tbody');
  tabelhulp.appendChild(tbodyhulp);
  tdhulp.appendChild(tabelhulp);
  const trtabel = document.createElement('tr');
  const tdleeg  = document.createElement('td');
  trtabel.appendChild(tdleeg);
  const tdtabel = document.createElement('td');
  trtabel.appendChild(tdtabel);
  tbodyhulp.appendChild(trtabel);
  const {tbody: tbody2} = maakOefTabel(tdtabel, 1, false);
  return tbody2;
}



/*====helpers voor theorie====*/
function maakTheorie() {
  const actueleContainer = document.currentScript?.dataset?.container || ACTIEVE_CONTAINER;

  const inhoudDiv = document.createElement('div');
  inhoudDiv.classList.add('oefening-inhoud');
  document.querySelector(actueleContainer).appendChild(inhoudDiv);

  return inhoudDiv;
}

function maakSpanMetRuimte(inhoud,hoogte = '0.1cm') {
  const span = document.createElement('span');
  span.style.display = 'block';
  span.style.marginBottom = hoogte;
  inhoud.appendChild(span);
}


/*====pop-up voor instructievideos====*/
function toonVideoPopup(link) {
  document.getElementById('video-popup-overlay')?.remove();

  // Zet gewone YouTube link om naar embed link
  const embedLink = link.includes('youtube.com/watch?v=')
    ? link.replace('watch?v=', 'embed/')
    : link.includes('youtu.be/')
    ? link.replace('youtu.be/', 'www.youtube.com/embed/')
    : link;

  const overlay = document.createElement('div');
  overlay.id = 'video-popup-overlay';
  overlay.style.cssText = `
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.6);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const box = document.createElement('div');
  box.style.cssText = `
    background: white;
    border-radius: 6px;
    padding: 0.4cm;
    max-width: 90vw;
    box-shadow: 0 4px 24px rgba(0,0,0,0.3);
    display: flex;
    flex-direction: column;
    gap: 0.3cm;
  `;

  const sluitKnop = document.createElement('button');
  sluitKnop.textContent = '✕ Sluiten';
  sluitKnop.style.cssText = `
    align-self: flex-end;
    background: var(--groen-donker);
    color: white;
    border: none;
    border-radius: 4px;
    padding: 4px 12px;
    font-size: var(--fontsize);
    font-family: var(--font);
    cursor: pointer;
  `;
  sluitKnop.addEventListener('click', () => {
    // Stop het filmpje bij sluiten
    iframe.src = '';
    overlay.remove();
  });

  const iframe = document.createElement('iframe');
  iframe.src = embedLink;
  iframe.style.cssText = `
    width: 80vw;
    height: 70vh;
    border: none;
    border-radius: 4px;
  `;
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;

  box.appendChild(sluitKnop);
  box.appendChild(iframe);
  overlay.appendChild(box);

  overlay.addEventListener('click', e => {
    if (e.target === overlay) {
      iframe.src = '';
      overlay.remove();
    }
  });

  document.body.appendChild(overlay);
}