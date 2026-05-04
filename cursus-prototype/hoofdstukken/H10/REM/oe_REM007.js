/* ============================================================
   H10 / REM / oe_REM007.js
   soort: test
   ============================================================ */

(function () {

  const inhoud = maakOefening({
    id:'oe_REM007', nummer:'?', soort:'test',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  /* Titel */
  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    { const _v = 'Reflectie'; if (typeof _v === 'string') _p.innerHTML = _v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Reflectie-items */
  const _items = [
    'Dit begrijp ik al goed:',
    'Dit vind ik nog moeilijk:',
    'Hierbij heb ik hulp nodig:',
  ];

  _items.forEach(tekst => {
    /* Label + tekst */
    {
      const _span = document.createElement('span');
      _span.appendChild(htmlSpan(tekst));
      const _tr = document.createElement('tr');
      const _td = maakOpTdazGeenStreep('&#x1F4AC;', _span, false);
      _td.querySelector('.rij').style.alignItems = 'flex-end';
      _tr.appendChild(_td);
      tbody.appendChild(_tr);
    }
    /* Schrijflijn 1 */
    {
      const _tr = document.createElement('tr');
      _tr.appendChild(maakSlTd(null, false));
      tbody.appendChild(_tr);
    }
    /* Schrijflijn 2 */
  });

})();
