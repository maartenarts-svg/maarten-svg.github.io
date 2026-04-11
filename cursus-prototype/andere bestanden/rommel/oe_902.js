// LET OP: voorgedrukte oplossingen gebruiken de klasse 'opl-vast'.
// Pas in helpers.js de badge-toggle aan zodat .opl-vast altijd zichtbaar blijft:
//
//   ovs.forEach(o => {
//     if (!o.classList.contains('opl-vast'))
//       o.classList.toggle('zichtbaar', !zichtbaar);
//   });
//

/* ============================================================
   H10 / P10_4 / oe_904.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_904', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel'], tools:[],
    toggleModus:'oefening', container:'.pagina'
  });

  voegTekstToe(inhoud, 'Bereken.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Opgave a */
  const trLblA = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', (function(){
      const s=document.createElement('span');
      s.appendChild(maakBreuk('5','2','opgave'));
      const p1=document.createElement('span'); p1.innerHTML=' + '; s.appendChild(p1);
      s.appendChild(maakBreuk('-1','3','opgave'));
      return s;})(), true);
  tdLblA.classList.add('kolom-links');
  trLblA.appendChild(tdLblA);
  tbody.appendChild(trLblA);

  const tra0 = document.createElement('tr');
    const tda0 = maakSlTd((function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      const p0=document.createElement('span'); p0.innerHTML='= '; s.appendChild(p0);
      s.appendChild(maakBreuk('15','6','oplossing'));
      const p2=document.createElement('span'); p2.innerHTML=' + '; s.appendChild(p2);
      s.appendChild(maakBreuk('-2','6','oplossing'));
      return s;})(), true);
    tda0.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tda0.classList.add('kolom-links');
    tra0.appendChild(tda0);
  tbody.appendChild(tra0);
  const tra1 = document.createElement('tr');
    const tda1 = maakSlTd((function(){
      const s=document.createElement('span');
      s.style.fontFamily='var(--font-oplossing)';
      s.style.color='var(--blauw-oplossing)';
      const p0=document.createElement('span'); p0.innerHTML='= '; s.appendChild(p0);
      s.appendChild(maakBreuk('13','6','oplossing'));
      return s;})(), true);
    tda1.classList.add('kolom-links');
    tra1.appendChild(tda1);
  tbody.appendChild(tra1);

  /* Opgave b */
  const trLblB = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', '<i>a</i><sup>4</sup>', true);
  tdLblB.classList.add('kolom-links');
  trLblB.appendChild(tdLblB);
  tbody.appendChild(trLblB);

  const trb0 = document.createElement('tr');
    const tdb0 = maakSlTd('= <i>a</i><sup>3</sup> · a', true);
    tdb0.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tdb0.classList.add('kolom-links');
    trb0.appendChild(tdb0);
  tbody.appendChild(trb0);
  const trb1 = document.createElement('tr');
    const tdb1 = maakSlTd('= <i>a</i><sup>2</sup> · <i>a</i><sup>2</sup>', true);
    tdb1.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
    tdb1.classList.add('kolom-links');
    trb1.appendChild(tdb1);
  tbody.appendChild(trb1);
  const trb2 = document.createElement('tr');
    const tdb2 = maakSlTd('= <i>a</i> · <i>a</i><sup>3</sup>', true);
    tdb2.classList.add('kolom-links');
    trb2.appendChild(tdb2);
  tbody.appendChild(trb2);

})();
