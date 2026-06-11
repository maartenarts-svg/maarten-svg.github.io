/* ============================================================
   H12 / checkin / checkin.js
   soort: ontdek
   ============================================================ */

(function () {

  /* ---- Span-variabelen ---- */
  const checkin_1 = document.createElement('span');
  checkin_1.appendChild(htmlSpan('Onderzoek welke emoji de grootste omtrek heeft.'));

  const checkin_2 = document.createElement('span');
  const checkin_2_b1 = maakSpanBreedte('0.4cm', '•');
  checkin_2.appendChild(checkin_2_b1);
  checkin_2.appendChild(htmlSpan('Tel je de roosterrandjes van het hartje, dan zijn dat er 60.'));

  const checkin_3 = document.createElement('span');
  const checkin_3_b1 = maakSpanBreedte('0.4cm', '');
  checkin_3.appendChild(checkin_3_b1);
  checkin_3.appendChild(htmlSpan('De omtrek van het hartje is dus 60 · 0,5 cm = 30 cm.'));

  const checkin_4 = document.createElement('span');
  const checkin_4_b1 = maakSpanBreedte('0.4cm', '•');
  checkin_4.appendChild(checkin_4_b1);
  checkin_4.appendChild(htmlSpan('Tel je de roosterrandjes van de smiley, dan zijn dat er 56.'));

  const checkin_5 = document.createElement('span');
  const checkin_5_b1 = maakSpanBreedte('0.4cm', '');
  checkin_5.appendChild(checkin_5_b1);
  checkin_5.appendChild(htmlSpan('De omtrek van de smiley is dus 56 · 0,5 cm = 28 cm.'));

  const checkin_6 = document.createElement('span');
  checkin_6.appendChild(htmlSpan('Het hartje heeft de grootste omtrek.'));

  const checkin_7 = document.createElement('span');
  checkin_7.appendChild(htmlSpan('Onderzoek welke emoji de grootste oppervlakte heeft.'));

  const checkin_9 = document.createElement('span');
  const checkin_9_b1 = maakSpanBreedte('0.4cm', '•');
  checkin_9.appendChild(checkin_9_b1);
  checkin_9.appendChild(htmlSpan('Tel je het aantal roostervakjes binnen het hartje, dan zijn dat er 129.'));

  const checkin_10 = document.createElement('span');
  const checkin_10_b1 = maakSpanBreedte('0.4cm', '');
  checkin_10.appendChild(checkin_10_b1);
  checkin_10.appendChild(htmlSpan('De oppervlakte van het hartje is dus 129 · 0,25 cm<sup>2</sup> = 32,25 cm<sup>2</sup>.'));

  const checkin_11 = document.createElement('span');
  const checkin_11_b1 = maakSpanBreedte('0.4cm', '•');
  checkin_11.appendChild(checkin_11_b1);
  checkin_11.appendChild(htmlSpan('Tel je het aantal roostervakjes binnen de smiley, dan zijn dat er 164.'));

  const checkin_12 = document.createElement('span');
  const checkin_12_b1 = maakSpanBreedte('0.4cm', '');
  checkin_12.appendChild(checkin_12_b1);
  checkin_12.appendChild(htmlSpan('De oppervlakte van de smiley is dus 164 · 0,25 cm<sup>2</sup> = 41 cm<sup>2</sup>.'));

  const checkin_13 = document.createElement('span');
  checkin_13.appendChild(htmlSpan('De smiley heeft de grootste oppervlakte.'));

  const inhoud = maakOefening({
    id:'checkin', nummer:'CI', soort:'ontdek',
    niveaus:[], tools:[],
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
    const _wrap = document.createElement('div');
    _wrap.dataset.figuur = 'afbeelding1';
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    _p.style.width = '30%';
    { const _v='Op een beeldscherm van een computer worden beelden gevormd door pixels. Een pixel is een gekleurd punt. Hoe meer pixels er op een bepaalde oppervlakte staan, hoe scherper het beeld.<br>De emoji\'s zijn opgebouwd uit pixels die de vorm hebben van een vierkant met een zijde van 0,5 cm.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    _wrap.appendChild(_p); inhoud.appendChild(_wrap);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  voegWitruimteToe(tbody,'0.6cm');

  /* Opgave b */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('a', checkin_1, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van b */
  {
    const _tr_b_0 = document.createElement('tr');
    const _td_b_0 = maakSlTd(checkin_2, false);
    _td_b_0.classList.add('kolom-links');
    _tr_b_0.appendChild(_td_b_0); tbody.appendChild(_tr_b_0);
  }

  /* Schrijflijn 2 van b */
  {
    const _tr_b_1 = document.createElement('tr');
    const _td_b_1 = maakSlTd(checkin_3, false);
    _td_b_1.classList.add('kolom-links');
    _tr_b_1.appendChild(_td_b_1); tbody.appendChild(_tr_b_1);
  }

  /* Schrijflijn 3 van b */
  {
    const _tr_b_2 = document.createElement('tr');
    const _td_b_2 = maakSlTd(checkin_4, false);
    _td_b_2.classList.add('kolom-links');
    _tr_b_2.appendChild(_td_b_2); tbody.appendChild(_tr_b_2);
  }

  /* Schrijflijn 4 van b */
  {
    const _tr_b_3 = document.createElement('tr');
    const _td_b_3 = maakSlTd(checkin_5, false);
    _td_b_3.classList.add('kolom-links');
    _tr_b_3.appendChild(_td_b_3); tbody.appendChild(_tr_b_3);
  }

  /* Schrijflijn 5 van b */
  {
    const _tr_b_4 = document.createElement('tr');
    const _td_b_4 = maakSlTd(checkin_6, false);
    _td_b_4.classList.add('kolom-links');
    _tr_b_4.appendChild(_td_b_4); tbody.appendChild(_tr_b_4);
  }

  voegWitruimteToe(tbody,'0.3cm');

  /* Opgave c */
  {
    const _trLbl = document.createElement('tr');
    const _tdLbl = maakOpTdaz('b', checkin_7, false);
    _tdLbl.classList.add('kolom-links');
    _trLbl.appendChild(_tdLbl); tbody.appendChild(_trLbl);
  }

  /* Schrijflijn 1 van c */
  {
    const _tr_c_0 = document.createElement('tr');
    const _td_c_0 = maakSlTd(checkin_9, false);
    _td_c_0.classList.add('kolom-links');
    _tr_c_0.appendChild(_td_c_0); tbody.appendChild(_tr_c_0);
  }

  /* Schrijflijn 2 van c */
  {
    const _tr_c_1 = document.createElement('tr');
    const _td_c_1 = maakSlTd(checkin_10, false);
    _td_c_1.classList.add('kolom-links');
    _tr_c_1.appendChild(_td_c_1); tbody.appendChild(_tr_c_1);
  }

  /* Schrijflijn 3 van c */
  {
    const _tr_c_2 = document.createElement('tr');
    const _td_c_2 = maakSlTd(checkin_11, false);
    _td_c_2.classList.add('kolom-links');
    _tr_c_2.appendChild(_td_c_2); tbody.appendChild(_tr_c_2);
  }

  /* Schrijflijn 4 van c */
  {
    const _tr_c_3 = document.createElement('tr');
    const _td_c_3 = maakSlTd(checkin_12, false);
    _td_c_3.classList.add('kolom-links');
    _tr_c_3.appendChild(_td_c_3); tbody.appendChild(_tr_c_3);
  }

  /* Schrijflijn 5 van c */
  {
    const _tr_c_4 = document.createElement('tr');
    const _td_c_4 = maakSlTd(checkin_13, false);
    _td_c_4.classList.add('kolom-links');
    _tr_c_4.appendChild(_td_c_4); tbody.appendChild(_tr_c_4);
  }

  /* ============================================================
     FIGUUR-CONTAINERS
     ============================================================ */

  /* afbeelding1 */
  {
    const _fig = maakFiguurContainer('afbeelding1', '70%'); /* ← breedte aanpassen indien nodig */
    requestAnimationFrame(() => {
      const _els = [...inhoud.querySelectorAll('[data-figuur="afbeelding1"]')];
      if (_els.length === 0) return;
      const _base   = inhoud.getBoundingClientRect();
      const _top    = _els[0].getBoundingClientRect().top    - _base.top    + inhoud.scrollTop;
      const _bottom = _els[_els.length-1].getBoundingClientRect().bottom - _base.top + inhoud.scrollTop;
      const FIG_OFFSET_AFBEELDING1 = 0; /* ← offset in px: positief = naar beneden, negatief = naar boven */
      _fig.style.top    = (_top + FIG_OFFSET_AFBEELDING1) + 'px';
      _fig.style.height = (_bottom - _top) + 'px';
      const _img = document.createElement('img');
      _img.src = 'afbeeldingen/checkinH12.svg'; /* ← bestandsnaam */
      _img.style.width     = '120%';
      _img.style.height    = '120%';
      _img.style.objectFit = 'contain';
      _fig.innerHTML = '';
      _fig.appendChild(_img);
      inhoud.appendChild(_fig);
    });
  }

})();
