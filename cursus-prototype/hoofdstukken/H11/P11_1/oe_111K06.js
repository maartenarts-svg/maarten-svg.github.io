/* ============================================================
   H11 / P11_1 / oe_111K06.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const oe_111K06_1 = document.createElement('span');
  const oe_111K06_1_s1 = document.createElement('span');
  oe_111K06_1_s1.appendChild(htmlSpan('De snelheid <i>v</i> bereken je met de formule <i>v</i> = '));
  oe_111K06_1_s1.appendChild(maakBreuk('<i>s</i>','<i>t</i>','opgave'));
  oe_111K06_1_s1.appendChild(htmlSpan('.  Hierbij is <i>s</i> de afstand (in m) en <i>t</i> de tijd (in s).<br>Bereken de afstand die de panter heeft afgelegd na 6 seconden. <br>Gebruik een vergelijking.'));
  oe_111K06_1.appendChild(oe_111K06_1_s1);

  const hulp1 = document.createElement('span');
  hulp1.appendChild(htmlSpan('In de formule '));
  hulp1.appendChild(maakMarkering('<i>v</i>','#bbdefb',true));
  hulp1.appendChild(htmlSpan(' = '));
  const hulp1a = (maakMarkering('<i>t</i>','#fff9c4',true));
  hulp1.appendChild(maakBreuk('<i>s</i>',hulp1a,'opgave'));
  hulp1.appendChild(htmlSpan(' vervang je <i>v</i> door '));
  hulp1.appendChild(maakMarkering('16','#bbdefb',true));
  hulp1.appendChild(htmlSpan(' en <i>t</i> door '));
  hulp1.appendChild(maakMarkering('6','#fff9c4',true));
  hulp1.appendChild(htmlSpan('.'));

  const oe_111K07_2 = document.createElement('span');
  oe_111K07_2.appendChild(maakMarkering('16','#bbdefb',false));
  const oe_111K07_3 = document.createElement('span');
  oe_111K07_3.appendChild(maakMarkering('6','#fff9c4',true));

  const oe_111K06_2 = document.createElement('span');
  oe_111K06_2.appendChild(oe_111K07_2);
  oe_111K06_2.appendChild(htmlSpan(' = '));
  oe_111K06_2.appendChild(maakBreuk('<i>s</i>',oe_111K07_3,'opgave'));

  const oe_111K06_3 = document.createElement('span');
  const oe_111K06_3_s1 = document.createElement('span');
  oe_111K06_3_s1.appendChild(htmlSpan('16 <span class="markeer-lila">· 6</span> = '));
  oe_111K06_3_s1.appendChild(maakBreuk('<i>s</i>','6','opgave'));
  oe_111K06_3_s1.appendChild(htmlSpan(' <span class="markeer-lila">· 6</span>'));
  oe_111K06_3.appendChild(oe_111K06_3_s1);

  const oe_111K06_4 = document.createElement('span');
  oe_111K06_4.appendChild(htmlSpan('96 = <i>s</i>'));

  const oe_111K06_5 = document.createElement('span');
  oe_111K06_5.appendChild(htmlSpan('De panter heeft 96 m afgelegd.'));

  const inhoud = maakOefening({
    id:'oe_111K06', nummer:'?', soort:'inoefenen',
    niveaus:['zeshoek'], tools:[],
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
    { const _v='De topsnelheid van een panter is 16 m/s.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  /* Opgave 1 */
  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    const _o = oe_111K06_1; if(typeof _o==='string') _p.innerHTML=_o; else _p.appendChild(_o);
    inhoud.appendChild(_p);
  }
  const {tbody: tbody_0} = maakOefTabel(inhoud, 1, false);

  /* Schrijflijn 1 van 1 */
  {
    const _tr_0_0 = document.createElement('tr');
    const _td_0_0 = maakSlTdZonderInsprong(hulp1, true);
    _td_0_0.classList.add('kolom-links');
    _tr_0_0.appendChild(_td_0_0); tbody_0.appendChild(_tr_0_0);
  }
  {
    const _tr_0_0 = document.createElement('tr');
    const _td_0_0 = maakSlTdZonderInsprong(oe_111K06_2, true);
    _td_0_0.classList.add('kolom-links');
    _tr_0_0.appendChild(_td_0_0); tbody_0.appendChild(_tr_0_0);
  }

  /* Schrijflijn 2 van 1 */
  {
    const _tr_0_1 = document.createElement('tr');
    const _td_0_1 = maakSlTdZonderInsprong(oe_111K06_3, true);
    _td_0_1.classList.add('kolom-links');
    _tr_0_1.appendChild(_td_0_1); tbody_0.appendChild(_tr_0_1);
  }

  /* Schrijflijn 3 van 1 */
  {
    const _tr_0_2 = document.createElement('tr');
    const _td_0_2 = maakSlTdZonderInsprong(oe_111K06_4, true);
    _td_0_2.classList.add('kolom-links');
    _tr_0_2.appendChild(_td_0_2); tbody_0.appendChild(_tr_0_2);
  }

  /* Schrijflijn 4 van 1 */
  {
    const _tr_0_3 = document.createElement('tr');
    const _td_0_3 = maakSlTdZonderInsprong(oe_111K06_5, true);
    _td_0_3.classList.add('kolom-links');
    _tr_0_3.appendChild(_td_0_3); tbody_0.appendChild(_tr_0_3);
  }
  {
    const _tr_0_3 = document.createElement('tr');
    const hulp2 = document.createElement('span');
    hulp2.appendChild(htmlSpan('controle: '));
    hulp2.appendChild(maakBreuk('96','\u00A06\u00A0','opgave'));
    hulp2.appendChild(htmlSpan(' = 16'));
    const _td_0_3 = maakSlTdZonderInsprong(hulp2, true);
    _td_0_3.classList.add('kolom-links');
    _tr_0_3.appendChild(_td_0_3); tbody_0.appendChild(_tr_0_3);
  }

})();
