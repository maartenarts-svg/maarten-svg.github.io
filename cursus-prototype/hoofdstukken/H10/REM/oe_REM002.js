/* ============================================================
   H10 / REM / oe_REM002.js
   soort: test
   ============================================================ */

(function () {

  const inhoud = maakOefening({
    id:'oe_REM002', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  /* Titel */
  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    { const _v = 'Breuken gelijknamig maken'; if (typeof _v === 'string') _p.innerHTML = _v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Checkboxes */
  const _items = [
    'Ik wist niet hoe ik hieraan moest beginnen.',
    'Ik ken de rekenregels niet.',
    'Ik vond geen juiste gemeenschappelijke noemer.',
    'Ik veranderde de tellers niet correct.',
    'Ik vermenigvuldigde teller en noemer niet met hetzelfde getal.',
    'Ik maakte heel wat rekenfouten.',
  ];

  _items.forEach(tekst => {
    const _span = document.createElement('span');
    _span.appendChild(htmlSpan(tekst));
    const _tr = document.createElement('tr');
    const _td = maakOpTdazGeenStreep('&#9744;', _span, false);
    _td.querySelector('.rij').style.height = '0.65cm';
    _tr.appendChild(_td);
    tbody.appendChild(_tr);
  });

  /* Vrije aanvulrij */
  {
    const _tr = document.createElement('tr');
    const _td = maakSlTd(null, false);
    const _tab = _td.querySelector('.tab');
    _tab.classList.add('lbl', 'subopgave-label');
    _tab.innerHTML = '&#9744;';
    _tr.appendChild(_td);
    tbody.appendChild(_tr);
  }

})();
