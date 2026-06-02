/* ============================================================
   oe_W32WID_dotplot.js
   Dotplot — rooster met oplossingslaag
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_W32WID_dotplot', nummer:'?', soort:'inoefenen',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  const spanOpg1 = document.createElement('span');
  spanOpg1.appendChild(htmlSpan('Dotplot'));
  spanOpg1.classList.add('theorie');
  const spanOpg2 = document.createElement('span');
  spanOpg2.appendChild(htmlSpan('<br>Teken een dotplot.'));

  voegTekstToe(inhoud, spanOpg1);
  voegTekstToe(inhoud, spanOpg2);

  /* ---- Afmetingen ---- */
  const HOK       = 0.4;
  const COLS      = 24;
  const ROWS      = 24;
  const OPL_KLEUR = '#1a4fa0';
  const OPL_FONT  = "'Comic Sans MS', 'Comic Sans', cursive";
  const SL_KLEUR  = '#b0b0b0';
  const PX_PER_CM = 37.795;

  const hokPx  = HOK * PX_PER_CM;
  const breedte = COLS * hokPx;
  const hoogte  = ROWS * hokPx;

  /* ---- Berekeningen ---- */
  const freqTabel = berekenFrequentietabel(ACTIEVE_DATA);
  const uniek     = freqTabel.map(([waarde]) => waarde);
  const freqMap   = Object.fromEntries(freqTabel);

  /* ---- SVG ---- */
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width',  breedte + 'px');
  svg.setAttribute('height', hoogte  + 'px');
  svg.style.display = 'block';
  svg.style.margin  = '0 auto';

  /* ---- Rooster ---- */
  for (let c = 0; c <= COLS; c++) {
    const lijn = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    lijn.setAttribute('x1', c * hokPx);
    lijn.setAttribute('y1', 0);
    lijn.setAttribute('x2', c * hokPx);
    lijn.setAttribute('y2', hoogte);
    lijn.setAttribute('stroke', SL_KLEUR);
    lijn.setAttribute('stroke-width', '0.5');
    svg.appendChild(lijn);
  }
  for (let r = 0; r <= ROWS; r++) {
    const lijn = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    lijn.setAttribute('x1', 0);
    lijn.setAttribute('y1', r * hokPx);
    lijn.setAttribute('x2', breedte);
    lijn.setAttribute('y2', r * hokPx);
    lijn.setAttribute('stroke', SL_KLEUR);
    lijn.setAttribute('stroke-width', '0.5');
    svg.appendChild(lijn);
  }

  /* ---- As op rij 23 ---- */
  const asY = 23 * hokPx;

  const asLijn = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  asLijn.setAttribute('x1', 0);
  asLijn.setAttribute('y1', asY);
  asLijn.setAttribute('x2', breedte);
  asLijn.setAttribute('y2', asY);
  asLijn.setAttribute('stroke', OPL_KLEUR);
  asLijn.setAttribute('stroke-width', '1.2');
  asLijn.classList.add('opl-toggle');
  svg.appendChild(asLijn);

  /* ---- Maatstreepjes, labels en stippen ---- */
  uniek.forEach((waarde, i) => {
    const x    = (1 + i * 2) * hokPx;
    const freq = freqMap[waarde];

    // Maatstreepje
    const streep = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    streep.setAttribute('x1', x);
    streep.setAttribute('y1', asY - 4);
    streep.setAttribute('x2', x);
    streep.setAttribute('y2', asY + 4);
    streep.setAttribute('stroke', OPL_KLEUR);
    streep.setAttribute('stroke-width', '1.2');
    streep.classList.add('opl-toggle');
    svg.appendChild(streep);

    // Label onder maatstreepje
    const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    label.setAttribute('x', x);
    label.setAttribute('y', asY + hokPx * 0.8);
    label.setAttribute('text-anchor', 'middle');
    label.setAttribute('fill', OPL_KLEUR);
    label.setAttribute('font-family', OPL_FONT);
    label.setAttribute('font-size', '9pt');
    label.classList.add('opl-toggle');
    label.textContent = waarde;
    svg.appendChild(label);

    // Stippen
    for (let s = 0; s < freq; s++) {
      const y = (22 - s) * hokPx;
      const cirkel = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      cirkel.setAttribute('cx', x);
      cirkel.setAttribute('cy', y);
      cirkel.setAttribute('r',  hokPx * 0.35);
      cirkel.setAttribute('fill', OPL_KLEUR);
      cirkel.classList.add('opl-toggle');
      svg.appendChild(cirkel);
    }
  });

  /* ---- Container ---- */
  const container = document.createElement('div');
  container.style.textAlign = 'center';
  container.style.marginTop = '0.2cm';
  container.appendChild(svg);

  /* ---- Label variabele2 ---- */
  const asLabel = document.createElement('div');
  asLabel.classList.add('opl-toggle');
  asLabel.appendChild(htmlSpan('$$variabele2$$'));
  asLabel.style.textAlign  = 'center';
  asLabel.style.width      = breedte + 'px';
  asLabel.style.fontFamily = OPL_FONT;
  asLabel.style.fontSize   = '10pt';
  asLabel.style.color      = OPL_KLEUR;
  asLabel.style.margin     = '0.1cm auto 0';
  container.appendChild(asLabel);

  inhoud.appendChild(container);

})();