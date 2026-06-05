/* ============================================================
   H12 / th_122_eenhedenOmzettenVB.js
   ============================================================ */
(function () {

  const inhoud = maakTheorie();
  const paddingkader = '0.1cm';
  const breedteSoort = '37%';

  /* ──────────────────────────────────────────────────────────
     AANPASBARE PARAMETERS
     ────────────────────────────────────────────────────────── */
  const vbBreedte   = 265;   // breedte per voorbeeld (px) — past naast elkaar
  const vbHoogte    = 100;   // hoogte per voorbeeld (px)
  const boogHoogte  = 25;    // hoogte van de bogen (px) — groter = hogere boog

  // Horizontale posities (px, text-anchor="middle")
  const xMaatgetal1  = 47;   // eerste getal
  const xEenheid1    = 85;   // eerste eenheid
  const xGelijkteken = 110;  // gelijkteken
  const xMaatgetal2  = 140;  // tweede getal (antwoord)
  const xEenheid2    = 170;  // tweede eenheid

  // Verticale positie van de conversieregel
  const yMidden = 50;

  // Afstand van de annotaties tot de boog (px) — kleiner = dichter bij de boog
  const offsetLabelBoven = -4;   // ruimte boven de bovenste boog
  const offsetLabelOnder = 2;  // ruimte onder de onderste boog

  // Lettertypes (px)
  const fontConversie = 13;  // getallen en eenheden (≈ 10pt)
  const fontLabel     = 10;  // annotaties boven/onder (≈ 0.85em)

  // Kleuren
  const kleurOplossing = '#1a4fa0';
  const kleurBoog      = '#A8C8E5';
  const kleurTekst     = '#2C3E50';
  /* ────────────────────────────────────────────────────────── */

  function maakOmzetVoorbeeld(maatgetal1, eenheid1, maatgetal2, eenheid2,
                               tekBoven, tekOnder, markerId) {
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('width',   vbBreedte);
    svg.setAttribute('height',  vbHoogte);
    svg.setAttribute('viewBox', `0 0 ${vbBreedte} ${vbHoogte}`);

    // Pijlpunt (uniek id per voorbeeld)
    const defs   = document.createElementNS(ns, 'defs');
    const marker = document.createElementNS(ns, 'marker');
    marker.setAttribute('id',           markerId);
    marker.setAttribute('markerWidth',  '8');
    marker.setAttribute('markerHeight', '4');
    marker.setAttribute('refX',         '6');
    marker.setAttribute('refY',         '2');
    marker.setAttribute('orient',       'auto');
    const punt = document.createElementNS(ns, 'polygon');
    punt.setAttribute('points', '0 0, 8 2, 0 4');
    punt.setAttribute('fill',   kleurBoog);
    marker.appendChild(punt);
    defs.appendChild(marker);
    svg.appendChild(defs);

    const url = `url(#${markerId})`;

    function svgTekst(x, y, tekst, kleur, bold, fontSize) {
      const t = document.createElementNS(ns, 'text');
      t.setAttribute('x',           x);
      t.setAttribute('y',           y);
      t.setAttribute('text-anchor', 'middle');
      t.setAttribute('font-size',   fontSize);
      t.setAttribute('font-family', 'Arial');
      t.setAttribute('fill',        kleur);
      if (bold) t.setAttribute('font-weight', '700');
      t.textContent = tekst;
      return t;
    }

    // Bovenste boog (eenheid)
    const x1B = xEenheid1;
    const x2B = xEenheid2;
    const xmB = (x1B + x2B) / 2;
    const yB  = yMidden - 15;
    const boogBoven = document.createElementNS(ns, 'path');
    boogBoven.setAttribute('d', `M ${x1B} ${yB} Q ${xmB} ${yB - boogHoogte} ${x2B} ${yB}`);
    boogBoven.setAttribute('stroke',       kleurBoog);
    boogBoven.setAttribute('stroke-width', '2.5');
    boogBoven.setAttribute('fill',         'none');
    boogBoven.setAttribute('marker-end',   url);
    svg.appendChild(boogBoven);

    svg.appendChild(svgTekst(xmB, yB - boogHoogte - offsetLabelBoven, tekBoven, kleurOplossing, true, fontLabel));

    // Conversieregel
    svg.appendChild(svgTekst(xMaatgetal1,  yMidden, maatgetal1,  kleurTekst,     true,  fontConversie));
    svg.appendChild(svgTekst(xEenheid1,    yMidden, eenheid1,    kleurTekst,     false, fontConversie));
    svg.appendChild(svgTekst(xGelijkteken, yMidden, '=',         kleurTekst,     false, fontConversie));
    svg.appendChild(svgTekst(xMaatgetal2,  yMidden, maatgetal2,  kleurOplossing, true,  fontConversie));
    svg.appendChild(svgTekst(xEenheid2,    yMidden, eenheid2,    kleurTekst,     false, fontConversie));

    // Onderste boog (maatgetal)
    const x1O = xMaatgetal1;
    const x2O = xMaatgetal2;
    const xmO = (x1O + x2O) / 2;
    const yO  = yMidden + 8;
    const boogOnder = document.createElementNS(ns, 'path');
    boogOnder.setAttribute('d', `M ${x1O} ${yO} Q ${xmO} ${yO + boogHoogte} ${x2O} ${yO}`);
    boogOnder.setAttribute('stroke',       kleurBoog);
    boogOnder.setAttribute('stroke-width', '2.5');
    boogOnder.setAttribute('fill',         'none');
    boogOnder.setAttribute('marker-end',   url);
    svg.appendChild(boogOnder);

    svg.appendChild(svgTekst(xmO, yO + boogHoogte + offsetLabelOnder, tekOnder, kleurOplossing, true, fontLabel));

    return svg;
  }

  /*====voorbeeldkader=========================================*/
  {
    const kader = document.createElement('table');
    kader.style.borderCollapse = 'collapse';
    kader.style.width = '100%';
    kader.style.tableLayout = "fixed";

    const trTitel = document.createElement('tr');
    trTitel.style.height = '0.9cm';

    const tdSoort = document.createElement('td');
    tdSoort.style.border = '1.2px solid var(--oranje-scheiding)';
    tdSoort.style.backgroundColor = 'var(--oranje-scheiding)';
    tdSoort.style.paddingLeft = paddingkader;
    tdSoort.style.width = breedteSoort;
    tdSoort.style.verticalAlign = 'middle';
    tdSoort.style.fontWeight = 'bold';
    tdSoort.appendChild(htmlSpan('Voorbeeld'));

    const tdKort = document.createElement('td');
    tdKort.style.paddingLeft = paddingkader;
    tdKort.style.paddingRight = paddingkader;
    tdKort.style.verticalAlign = 'middle';
    tdKort.appendChild(htmlSpan(''));

    trTitel.appendChild(tdSoort);
    trTitel.appendChild(tdKort);

    const trInhoud = document.createElement("tr");
    const tdInhoud = document.createElement("td");
    tdInhoud.colSpan = 2;
    tdInhoud.style.border = '1.2px solid var(--oranje-scheiding)';
    tdInhoud.style.paddingLeft = paddingkader;
    tdInhoud.style.paddingRight = paddingkader;
    tdInhoud.style.width = '100%';
    trInhoud.appendChild(tdInhoud);

    voegWitruimteToe(tdInhoud, '0.1cm');

    // Twee voorbeelden naast elkaar via maakOefTabel
    const { tbody } = maakOefTabel(tdInhoud, 2);
    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    td1.style.textAlign = 'center';
    td1.style.verticalAlign = 'middle';
    td1.appendChild(maakOmzetVoorbeeld(
      '12,3', 'mm', '0,123', 'dm',
      'de eenheid wordt 10² keer groter',
      'het maatgetal wordt 10² keer kleiner',
      'pijl-vb1'
    ));

    const td2 = document.createElement('td');
    td2.style.textAlign = 'center';
    td2.style.verticalAlign = 'middle';
    td2.appendChild(maakOmzetVoorbeeld(
      '0,068', 'dam', '68', 'cm',
      'de eenheid wordt 10³ keer kleiner',
      'het maatgetal wordt 10³ keer groter',
      'pijl-vb2'
    ));

    tr.appendChild(td1);
    tr.appendChild(td2);
    tbody.appendChild(tr);

    // Tweede rij: extra uitleg onder elk voorbeeld
    const tr2 = document.createElement('tr');

    const td3 = document.createElement('td');
    td3.style.textAlign = 'left';
    td3.style.verticalAlign = 'top';
    td3.style.paddingTop = '0.1cm';
    {
      const span = document.createElement('span');
      span.classList.add('theorietekst');
      span.innerHTML = 'In plaats van te delen door 10<sup>2</sup>, kun je ook 2 keer delen door 10.<br>'
                     + '12,3 : 10 = 1,23<br>'
                     + '1,23 : 10 = 0,123';
      td3.appendChild(span);
    }

    const td4 = document.createElement('td');
    td4.style.textAlign = 'left';
    td4.style.verticalAlign = 'top';
    td4.style.paddingTop = '0.1cm';
    {
      const span = document.createElement('span');
      span.classList.add('theorietekst');
      span.innerHTML = 'In plaats van te vermenigvuldigen met 10<sup>3</sup>, kun je ook 3 keer vermenigvuldigen met 10.<br>'
                     + '0,068 · 10 = 0,68<br>'
                     + '0,68 · 10 = 6,8<br>'
                     + '6,8 · 10 = 68';
      td4.appendChild(span);
    }

    tr2.appendChild(td3);
    tr2.appendChild(td4);
    tbody.appendChild(tr2);

    voegWitruimteToe(tdInhoud, '0.1cm');

    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);
    inhoud.appendChild(kader);
  }

})();
