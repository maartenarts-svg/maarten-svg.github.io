/* ============================================================
   H11 / P11_1 / oe_111K07.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_111K07_1 = document.createElement('span');
  oe_111K07_1.appendChild(htmlSpan('Bereken de prijs van het artikel met een kostprijs van 195,99 euro en verzendkosten van  4,5 euro. <br>Gebruik een vergelijking.'));

  const hulp1 = document.createElement('span');
  hulp1.appendChild(htmlSpan('In de formule '));
  hulp1.appendChild(maakMarkering('<i>k</i>','#bbdefb',true));
  hulp1.appendChild(htmlSpan(' = <i>p</i> + '));
  hulp1.appendChild(maakMarkering('<i>v</i>','#fff9c4',true));
  hulp1.appendChild(htmlSpan(' vervang je <i>k</i> door '));
  hulp1.appendChild(maakMarkering('195,99','#bbdefb',true));
  hulp1.appendChild(htmlSpan(' en <i>v</i> door '));
  hulp1.appendChild(maakMarkering('4,5','#fff9c4',true));
  hulp1.appendChild(htmlSpan('.'));

  const oe_111K07_2 = document.createElement('span');
  oe_111K07_2.appendChild(maakMarkering('195,99','#bbdefb',false));
  oe_111K07_2.appendChild(htmlSpan(' = <i>p</i> + '));
  oe_111K07_2.appendChild(maakMarkering('4,5','#fff9c4',true));

  const oe_111K07_3 = document.createElement('span');
  oe_111K07_3.appendChild(htmlSpan('195,99 <span class="markeer-lila">- 4,5</span> = <i>p</i> + 4,5 <span class="markeer-lila">- 4,5</span>'));

  const oe_111K07_4 = document.createElement('span');
  oe_111K07_4.appendChild(htmlSpan('191,49 = <i>p</i>'));

  const oe_111K07_5 = document.createElement('span');
  oe_111K07_5.appendChild(htmlSpan('De prijs is 191,49 euro.'));

  const inhoud = maakOefening({
    id:'oe_111K07', nummer:'?', soort:'inoefenen',
    niveaus:['vierkant','zeshoek'], tools:[],
    toggleModus:'oefening'
  });
  inhoud.style.position = 'relative';

  function maakFiguurContainer(naam, breedte) {
    const div = document.createElement('div');
    div.id = naam;
    div.style.position      = 'absolute';
    div.style.right         = '0';
    div.style.width         = breedte;
    div.style.display       = 'flex';
    div.style.alignItems    = 'center';
    div.style.justifyContent = 'center';
    div.style.boxSizing     = 'border-box';
    return div;
  }

  /* Introductietekst */
  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    { const _v='Bij een bestelling op internet betaal je verzendkosten.<br>De formule om de kostprijs te	berekenen is <i>k</i> = <i>p</i> + <i>v</i>. Hierbij is <i>k</i> de kostprijs, <i>p</i> de prijs van het artikel dat je bestelt en <i>v</i> de verzendkosten, allemaal in euro.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  /* Opgave 1 */
  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    const _o = oe_111K07_1; if(typeof _o==='string') _p.innerHTML=_o; else _p.appendChild(_o);
    inhoud.appendChild(_p);
  }
  const {tbody: tbody_0} = maakOefTabel(inhoud, 1, false);

  /* Schrijflijn 1 van 1 */
  {
    const _tr_0_0 = document.createElement('tr');
    const _td_0_0 = maakSlTdZonderInsprong(hulp1, false);
    _td_0_0.classList.add('kolom-links');
    _tr_0_0.appendChild(_td_0_0); tbody_0.appendChild(_tr_0_0);
  }
  {
    const _tr_0_0 = document.createElement('tr');
    const _td_0_0 = maakSlTdZonderInsprong(oe_111K07_2, false);
    _td_0_0.classList.add('kolom-links');
    _tr_0_0.appendChild(_td_0_0); tbody_0.appendChild(_tr_0_0);
  }

  /* Schrijflijn 2 van 1 */
  {
    const _tr_0_1 = document.createElement('tr');
    const _td_0_1 = maakSlTdZonderInsprong(oe_111K07_3, false);
    _td_0_1.classList.add('kolom-links');
    _tr_0_1.appendChild(_td_0_1); tbody_0.appendChild(_tr_0_1);
  }

  /* Schrijflijn 3 van 1 */
  {
    const _tr_0_2 = document.createElement('tr');
    const _td_0_2 = maakSlTdZonderInsprong(oe_111K07_4, false);
    _td_0_2.classList.add('kolom-links');
    _tr_0_2.appendChild(_td_0_2); tbody_0.appendChild(_tr_0_2);
  }

  /* Schrijflijn 4 van 1 */
  {
    const _tr_0_3 = document.createElement('tr');
    const _td_0_3 = maakSlTdZonderInsprong(oe_111K07_5, false);
    _td_0_3.classList.add('kolom-links');
    _tr_0_3.appendChild(_td_0_3); tbody_0.appendChild(_tr_0_3);
  }

})();
