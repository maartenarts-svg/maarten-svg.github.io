// LET OP: voorgedrukte oplossingen gebruiken 'opl-vast'.
// Pas in helpers.js de badge-toggle aan:
//   ovs.forEach(o => {
//     if (!o.classList.contains('opl-vast'))
//       o.classList.toggle('zichtbaar', !zichtbaar);
//   });
//

/* ============================================================
   H?? / P?? / oe_???.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_???', nummer:'?', soort:'inoefenen',
    niveaus:[], tools:[],
    toggleModus:'oefening', container:'.pagina'
  });

  voegTekstToe(inhoud, 'Bereken.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

  /* Opgave a */
  const trLblA = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', (function(){
      const s=document.createElement('span');
      s.appendChild(maakBreuk('1','2','opgave'));
      const p1=document.createElement('span'); p1.innerHTML=' opgave opgave  opgave  opgave  opgave  opgave  opgave  opgave  opgave  opgave  opgave  opgave  opgave  opgave  opgave  opgave  opgave  opgave '; s.appendChild(p1);
      
      return s;})(), true);
  /* zet bovenaan */
  tdLblA.querySelector('.rij').style.alignItems = 'flex-start';
  /* geef extra ruimte boven */
  tdLblA.querySelector('.lbl').style.paddingTop = '0.2cm';
  tdLblA.classList.add('kolom-links');
  trLblA.appendChild(tdLblA);
  tbody.appendChild(trLblA);

  const tra0 = document.createElement('tr');
  const tda0 = maakSlTd('a', true);
  tda0.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
  tda0.classList.add('kolom-links');
  tra0.appendChild(tda0);
  tbody.appendChild(tra0);
  const tra1 = document.createElement('tr');
  const tda1 = maakSlTd('a', true);
  tda1.classList.add('kolom-links');
  tra1.appendChild(tda1);
  tbody.appendChild(tra1);

  /* Opgave b */
  const trLblB = document.createElement('tr');
  const tdLblB = maakOpTdaz('b', 'Gewone opgave', true);
  /* zet bovenaan */
  tdLblB.querySelector('.rij').style.alignItems = 'flex-start';
  /* geef extra ruimte boven */
  tdLblB.querySelector('.lbl').style.paddingTop = '0cm';
  tdLblB.classList.add('kolom-links');
  trLblB.appendChild(tdLblB);
  tbody.appendChild(trLblB);

  const trb0 = document.createElement('tr');
  const tdb0 = maakSlTd('b', true);
  tdb0.classList.add('kolom-links');
  trb0.appendChild(tdb0);
  tbody.appendChild(trb0);
  const trb1 = document.createElement('tr');
  const tdb1 = maakSlTd('b', true);
  tdb1.classList.add('kolom-links');
  trb1.appendChild(tdb1);
  tbody.appendChild(trb1);

})();
