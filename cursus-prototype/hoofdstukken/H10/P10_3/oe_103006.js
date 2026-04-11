/* ============================================================
   H10 / P10_3 / oe_103006.js
   soort: voorbeeld
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_103006', nummer:'?', soort:'voorbeeld',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Herleid.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);
  const minderw = '-0.3cm'
  const minderw2 = '-0.2cm'

  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', '2 · 3<i>a</i> + 6 · 5<i>a</i> - 2 · 4<i>b</i>', false);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblB = maakOpTdaz('b', '3 · 4<i>n</i> - 3 - 2<i>n</i> · 7 + 8', false);
  tdLblB.classList.add('kolom-rechts');
  trL1.appendChild(tdLblB);
  tbody.appendChild(trL1);

  tdLblA.querySelector('.rij').style.marginBottom = minderw;
  tdLblB.querySelector('.rij').style.marginBottom = minderw;

  /* Oplossingen rij 1 */
  const h4 = document.createElement('span');
  h4.appendChild(htmlSpan('= '));
  h4.appendChild(maakOnderstreping('6<i>a</i>','enkel','0.1cm'));
  h4.appendChild(htmlSpan(' '));
  h4.appendChild(maakOnderstreping('+ 30<i>a</i>','enkel','0.1cm'));
  h4.appendChild(htmlSpan(' - 8<i>b</i>'));
  const h5 = document.createElement('span');
  h5.appendChild(htmlSpan('= '));
  h5.appendChild(maakOnderstreping('12<i>n</i>','enkel','0.1cm'));
  h5.appendChild(htmlSpan(' '));
  h5.appendChild(maakOnderstreping('- 3','dubbel','0.18cm'));
  h5.appendChild(htmlSpan(' '));
  h5.appendChild(maakOnderstreping('- 14<i>n</i>','enkel','0.1cm'));
  h5.appendChild(htmlSpan(' '));
  h5.appendChild(maakOnderstreping('+ 8','dubbel','0.18cm'));
  h5.appendChild(htmlSpan(' '));
  
  const tr1 = document.createElement('tr');
  const tdA1 = maakSlTd(h4, true);
  tdA1.classList.add('kolom-links');
  tr1.appendChild(tdA1);
  const tdB1 = maakSlTd(h5, true);
  tdB1.classList.add('kolom-rechts');
  tr1.appendChild(tdB1);
  tbody.appendChild(tr1);  

  const tr2 = document.createElement('tr');
  const tdA2 = maakSlTd('= 36<i>a</i>\u200A - 8<i>b</i>', false);
  tdA2.classList.add('kolom-links');
  tr2.appendChild(tdA2);
  const tdB2 = maakSlTd('= -2<i>n</i>\u200A + 5', false);
  tdB2.classList.add('kolom-rechts');
  tr2.appendChild(tdB2);
  tbody.appendChild(tr2); 
  
  tdA1.querySelector('.rij').style.marginBottom = minderw2;
  tdB1.querySelector('.rij').style.marginBottom = minderw2;

})();
