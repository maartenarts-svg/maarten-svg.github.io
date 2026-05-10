/* ============================================================
   H11 / H11_schemadefa.js → deel 1
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_???', nummer:'S1', soort:'inoefenen',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  const {tbody} = maakSchemaTabel(inhoud,'25%');

  /* ============================================================
     BLOK A — opbouw vergelijking
     ============================================================ */

  // --- Rij 1: onbekende en gelijkheidsteken ---
  const H11_schema_A1 = document.createElement('span');
  const H11_schema_A1_s1 = document.createElement('span');
  H11_schema_A1_s1.style.cssText = `width: 4cm; text-align: right; display: inline-block;`;
  H11_schema_A1_s1.textContent = 'onbekende';
  const H11_schema_A1_s2 = document.createElement('span');
  H11_schema_A1_s2.style.cssText = `width: 3.6cm; display: inline-block;`;
  const H11_schema_A1_s3 = document.createElement('span');
  H11_schema_A1_s3.textContent = 'gelijkheidsteken';
  H11_schema_A1.appendChild(H11_schema_A1_s1);
  H11_schema_A1.appendChild(H11_schema_A1_s2);
  H11_schema_A1.appendChild(H11_schema_A1_s3);

  // --- Rij 2: x + 3 = 7 ---
  const H11_schema_A2 = document.createElement('span');
  const H11_schema_A2_s1 = document.createElement('span');
  H11_schema_A2_s1.style.cssText = `width: 4.2cm; display: inline-block;`;
  const H11_schema_A2_vL = document.createElement('span');
  H11_schema_A2_vL.style.cssText = `border: 1.5px solid var(--blauw-oplossing); padding: 0.05cm 0.2cm; display: inline-block;`;
  H11_schema_A2_vL.innerHTML = '<i>x</i> + 3';
  const H11_schema_A2_g = document.createElement('span');
  H11_schema_A2_g.style.cssText = `margin: 0 0.1cm;`;
  H11_schema_A2_g.textContent = '=';
  const H11_schema_A2_vR = document.createElement('span');
  H11_schema_A2_vR.style.cssText = `border: 1.5px solid var(--blauw-oplossing); padding: 0.05cm 0.2cm; display: inline-block;`;
  H11_schema_A2_vR.textContent = '7';
  H11_schema_A2.appendChild(H11_schema_A2_s1);
  H11_schema_A2.appendChild(H11_schema_A2_vL);
  H11_schema_A2.appendChild(H11_schema_A2_g);
  H11_schema_A2.appendChild(H11_schema_A2_vR);

  // --- Rij 3: linkerlid en rechterlid ---
  const H11_schema_A3 = document.createElement('span');
  const H11_schema_A3_s1 = document.createElement('span');
  H11_schema_A3_s1.style.cssText = `width: 4cm; text-align: right; display: inline-block;`;
  H11_schema_A3_s1.textContent = 'linkerlid';
  const H11_schema_A3_s2 = document.createElement('span');
  H11_schema_A3_s2.style.cssText = `width: 3.6cm; display: inline-block;`;
  const H11_schema_A3_s3 = document.createElement('span');
  H11_schema_A3_s3.textContent = 'rechterlid';
  H11_schema_A3.appendChild(H11_schema_A3_s1);
  H11_schema_A3.appendChild(H11_schema_A3_s2);
  H11_schema_A3.appendChild(H11_schema_A3_s3);

  // --- SVG pijlen over de 3 schrijflijnen ---
  const H11_schema_figuur = document.createElement('div');
  H11_schema_figuur.classList.add('opl');
  H11_schema_figuur.style.cssText = `
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
    z-index: 10;
  `;

  const CM = 37.8;
  function cm(v) { return v * CM; }

  const svgPijlen = document.createElementNS('http://www.w3.org/2000/svg','svg');
  svgPijlen.style.cssText = `width: 100%; height: 100%; overflow: visible;`;

  function maakPijlSvg(x1,y1,x2,y2) {
    const line = document.createElementNS('http://www.w3.org/2000/svg','line');
    line.setAttribute('x1', cm(x1)); line.setAttribute('y1', cm(y1));
    line.setAttribute('x2', cm(x2)); line.setAttribute('y2', cm(y2));
    line.setAttribute('stroke','#1155cc');
    line.setAttribute('stroke-width','1.2');
    line.setAttribute('marker-end','url(#pijl)');
    return line;
  }

  const defs = document.createElementNS('http://www.w3.org/2000/svg','defs');
  const marker = document.createElementNS('http://www.w3.org/2000/svg','marker');
  marker.setAttribute('id','pijl');
  marker.setAttribute('markerWidth','6');
  marker.setAttribute('markerHeight','6');
  marker.setAttribute('refX','0');
  marker.setAttribute('refY','3');
  marker.setAttribute('orient','auto');
  const polygon = document.createElementNS('http://www.w3.org/2000/svg','polygon');
  polygon.setAttribute('points','0 0, 6 3, 0 6');
  polygon.setAttribute('fill','#1155cc');
  marker.appendChild(polygon);
  defs.appendChild(marker);
  svgPijlen.appendChild(defs);

  // Pijl onbekende → x (rij1 naar rij2)
  svgPijlen.appendChild(maakPijlSvg(4.05, 0.6,  4.4, 1.05));
  // Pijl gelijkheidsteken → = (rij1 naar rij2)
  svgPijlen.appendChild(maakPijlSvg(7.5, 0.6,  5.8, 1.15));
  // Pijl linkerlid → vakLinks (rij3 naar rij2)
  svgPijlen.appendChild(maakPijlSvg(4.05, 2.35,  4.7, 1.8));
  // Pijl rechterlid → vakRechts (rij3 naar rij2)
  svgPijlen.appendChild(maakPijlSvg(7.5, 2.35,  6.3, 1.8));

  H11_schema_figuur.appendChild(svgPijlen);

  const BLOKA_schrijflijnen = 3;

  const BLOKA = [
    {inhoud: htmlSpan('Noteer een vergelijking en duid het linkerlid, het rechterlid, het gelijkheidsteken en de onbekende aan.'), type: 'grijs'},
  ];

  /* ============================================================
     BLOK B — vergelijking oplossen: 2 basisstappen
     ============================================================ */

  // term weg
  const H11_schema_B1 = document.createElement('span');
  const H11_schema_B1_b1 = maakSpanBreedte('5.75cm', 'term weg');
  H11_schema_B1.appendChild(H11_schema_B1_b1);
  H11_schema_B1.appendChild(htmlSpan('factor weg'));

  const H11_schema_B2 = document.createElement('span');
  const H11_schema_B2_b1 = maakSpanBreedte('5.75cm', 'beide leden met gepaste term');
  H11_schema_B2.appendChild(H11_schema_B2_b1);
  H11_schema_B2.appendChild(htmlSpan('beide leden vermenigvuldigen met'));

  const H11_schema_B3 = document.createElement('span');
  const H11_schema_B3_b1 = maakSpanBreedte('5.75cm', 'vermeerderen of verminderen');
  H11_schema_B3.appendChild(H11_schema_B3_b1);
  H11_schema_B3.appendChild(htmlSpan('of delen door gepaste factor'));

  const H11_schema_B4 = document.createElement('span');
  const H11_schema_B4_b1 = maakSpanBreedte('5.75cm', '<i>x</i> + 3 = 7');
  H11_schema_B4.appendChild(H11_schema_B4_b1);
  H11_schema_B4.appendChild(htmlSpan('2<i>x</i> = 8'));

  const H11_schema_B5 = document.createElement('span');
  const H11_schema_B5_b0= document.createElement('span');
  H11_schema_B5_b0.appendChild(htmlSpan('<i>x</i> + 3 <span class="markeer-lila">- 3</span> = 7 <span class="markeer-lila">- 3</span>'));
  const H11_schema_B5_b1 = maakSpanBreedte('5.75cm', H11_schema_B5_b0);
  H11_schema_B5.appendChild(H11_schema_B5_b1);
  const H11_schema_B5_b2= document.createElement('span');
  H11_schema_B5_b2.appendChild(htmlSpan('2<i>x</i> <span class="markeer-lila">: 2</span> = 8 <span class="markeer-lila">: 2</span>'));
  H11_schema_B5.appendChild(H11_schema_B5_b2);

  const H11_schema_B6 = document.createElement('span');
  const H11_schema_B6_b1 = maakSpanBreedte('5.75cm', '<i>x</i> = 4');
  H11_schema_B6.appendChild(H11_schema_B6_b1);
  H11_schema_B6.appendChild(htmlSpan('<i>x</i> = 4'));

  const BLOKB = [
    {inhoud: htmlSpan('Noteer hier van elke basisvergelijking een voorbeeld en los op met duidelijke tussenstappen.<br>Noteer bij elke basisvergelijking wat weg moet en hoe je dat doet.'), type: 'grijs'},
    {inhoud: H11_schema_B1, type: 'toggle'},
    {inhoud: H11_schema_B2, type: 'toggle'},
    {inhoud: H11_schema_B3, type: 'toggle'},
    {inhoud: H11_schema_B4, type: 'toggle'},
    {inhoud: H11_schema_B5, type: 'toggle'},
    {inhoud: H11_schema_B6, type: 'toggle'},
  ];

  /* ============================================================
     BLOK C — vergelijking oplossen
     ============================================================ */

  const H11_schema_C1 = document.createElement('span');
  H11_schema_C1.appendChild(htmlSpan('6 - 4<i>x</i> + 14 = 13 - 2<i>x</i>'));

  const H11_schema_C2 = document.createElement('span');
  H11_schema_C2.appendChild(htmlSpan('6 - 4<i>x</i> + 14 <span class="markeer-lila">- 13 + 4<i>x</i></span> = 13 - 2<i>x</i> <span class="markeer-lila">- 13 + 4<i>x</i></span>'));

  const H11_schema_C3 = document.createElement('span');
  H11_schema_C3.appendChild(htmlSpan('7 = 2<i>x</i>'));

  const H11_schema_C4 = document.createElement('span');
  H11_schema_C4.appendChild(htmlSpan('7 <span class="markeer-lila">: 2</span> = 2<i>x</i> <span class="markeer-lila">: 2</span>'));

  const H11_schema_C5 = document.createElement('span');
  H11_schema_C5.appendChild(htmlSpan('3,5 = <i>x</i>'));

  const H11_schema_C6 = document.createElement('span');
  const H11_schema_C6_b1 = maakSpanBreedte('0.85cm', 'LL:');
  H11_schema_C6.appendChild(H11_schema_C6_b1);
  H11_schema_C6.appendChild(htmlSpan('6 - 4 · 3,5 + 14 = 6'));

  const H11_schema_C7 = document.createElement('span');
  const H11_schema_C7_b1 = maakSpanBreedte('0.85cm', 'RL:');
  H11_schema_C7.appendChild(H11_schema_C7_b1);
  H11_schema_C7.appendChild(htmlSpan('13 - 2 · 3,5 = 6'));

  const BLOKC = [
    {inhoud: htmlSpan('Los de vergelijking 6 - 4<i>x</i> + 14 = 13 - 2<i>x</i> op.<br>Zeg luidop wat je doet en neem op.<br>Dien je audiobestand in via de link op de projectsite.'), type: 'grijs'},
    {inhoud: H11_schema_C1, type: 'toggle'},
    {inhoud: H11_schema_C2, type: 'toggle'},
    {inhoud: H11_schema_C3, type: 'toggle'},
    {inhoud: H11_schema_C4, type: 'toggle'},
    {inhoud: H11_schema_C5, type: 'toggle'},
    {inhoud: H11_schema_C6, type: 'toggle'},
    {inhoud: H11_schema_C7, type: 'toggle'},
  ];

  /* ============================================================
     BLOKKEN TOEVOEGEN
     ============================================================ */

  // Blok A: handmatig (schrijflijnen + zwevende figuur)
  {
    const tr = document.createElement('tr');

    // Linkerkolom
    const tdL = document.createElement('td');
    tdL.style.border = '1.2px solid var(--groen-donker)';
    tdL.style.verticalAlign = 'top';
    tdL.style.width = '25%';
    const tabelL = document.createElement('table');
    tabelL.style.tableLayout = 'fixed';
    tabelL.style.width = '100%';
    const trL = document.createElement('tr');
    const tdLi = document.createElement('td');
    tdLi.style.paddingTop = '0.02cm';
    tdLi.style.paddingLeft = '0.05cm';
    tdLi.style.paddingRight = '0.05cm';
    tdLi.appendChild(htmlSpan('opbouw vergelijking'));
    trL.appendChild(tdLi);
    tabelL.appendChild(trL);
    tdL.appendChild(tabelL);
    tr.appendChild(tdL);

    // Rechterkolom
    const tdR = document.createElement('td');
    tdR.style.border = '1.2px solid var(--groen-donker)';
    const tabelR = document.createElement('table');
    tabelR.style.tableLayout = 'fixed';
    tabelR.style.width = '100%';

    // Grijze tekstrij
    const trGrijs = document.createElement('tr');
    const tdGrijs = document.createElement('td');
    tdGrijs.style.color = 'var(--sl-kleur)';
    tdGrijs.style.paddingLeft = '0.05cm';
    tdGrijs.appendChild(htmlSpan('Noteer een vergelijking en duid het linkerlid, het rechterlid, het gelijkheidsteken en de onbekende aan.'));
    trGrijs.appendChild(tdGrijs);
    tabelR.appendChild(trGrijs);

    // 3 schrijflijnen met zwevende figuur erboven
    const trSl = document.createElement('tr');
    const tdSl = document.createElement('td');
    tdSl.style.position = 'relative';

    const innerTable = document.createElement('table');
    innerTable.classList.add('oef-tabel');
    const innerTbody = document.createElement('tbody');
    const slInhoud = [H11_schema_A1, H11_schema_A2, H11_schema_A3];
    for (let i = 0; i < BLOKA_schrijflijnen; i++) {
      const slTr = document.createElement('tr');
      const slTd = maakSlTdZonderInsprong(slInhoud[i], false);
      slTr.appendChild(slTd);
      innerTbody.appendChild(slTr);
    }
    innerTable.appendChild(innerTbody);
    tdSl.appendChild(innerTable);
    tdSl.appendChild(H11_schema_figuur);
    trSl.appendChild(tdSl);
    tabelR.appendChild(trSl);

    tdR.appendChild(tabelR);
    tr.appendChild(tdR);
    tbody.appendChild(tr);
  }

  maakBlok(tbody, htmlSpan('vergelijking oplossen: 2 basisstappen'), BLOKB, '0.02cm', '0.05cm', false);
  maakBlok(tbody, htmlSpan('vergelijking oplossen'), BLOKC, '0.02cm', '0.05cm', false);

})();
