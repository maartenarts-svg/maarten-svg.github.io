/* ============================================================
   H?? / P?? / oe_???.js
   soort: inoefenen
   ============================================================ */

(function () {

  /* Zet RAND_ZICHTBAAR op false om de randen van de figuur-containers te verbergen.
     ============================================================ */
  const RAND_ZICHTBAAR = true;

  const inhoud = maakOefening({
    id:'oe_???', nummer:'?', soort:'inoefenen',
    niveaus:[], tools:[],
    toggleModus:'oefening', container:'.pagina'
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
    if (RAND_ZICHTBAAR) {
      div.style.border = '1.5px dashed #aaa';
      const lbl = document.createElement('span');
      lbl.textContent = naam;
      lbl.style.cssText = 'font-size:9pt;color:#999;pointer-events:none;font-family:Arial,sans-serif;';
      div.appendChild(lbl);
    }
    return div;
  }

  /* Introductietekst */
  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    { const _v='a'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Opgave a */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('a', 'opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave ', false);
    _tdLbl.querySelector('.rij').style.alignItems = 'flex-start';  // ← dit
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van a */
  {
    const _tr_a_0 = document.createElement('tr');
    const _td_a_0 = maakSlTd('a', false);
    _td_a_0.classList.add('kolom-links');
    _tr_a_0.appendChild(_td_a_0); tbody.appendChild(_tr_a_0);
  }

  /* Opgave b */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('b', 'opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave opgave ', false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van b */
  {
    const _tr_b_0 = document.createElement('tr');
    const _td_b_0 = maakSlTd('b', false);
    _td_b_0.classList.add('kolom-links');
    _tr_b_0.appendChild(_td_b_0); tbody.appendChild(_tr_b_0);
  }

})();
