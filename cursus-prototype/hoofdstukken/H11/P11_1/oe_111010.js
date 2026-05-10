/* ============================================================
   H11 / P11_1 / oe_111010.js
   soort: inoefenen
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_111010_1 = document.createElement('span');
  const oe_111010_1_m1 = maakMarkering(htmlSpan('2<i>x</i> + 6 = 15 - <i>x</i>'), '#bbdefb', true);
  oe_111010_1.appendChild(oe_111010_1_m1);

  const oe_111010_4 = document.createElement('span');
  oe_111010_4.appendChild(htmlSpan('10 - <i>x</i> = 5<i>x</i> - 4'));

  const inhoud = maakOefening({
    id:'oe_111010', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Gebruik het stappenplan om te onderzoeken of het getal 3 een oplossing is van de vergelijking.<br>', ['intro-tekst']);

  const {tbody: tbody2} = maakOefTabel(inhoud,1,false);

  {
    voegWitruimteToe(tbody2,'0.3cm');  

    /* Stap 1 */
    const trLblA = document.createElement('tr');
    const tdLblA = maakStap('1', htmlSpan('Bereken de getalwaarde van het linkerlid (LL) voor <i>x</i> = 3.'));
    tdLblA.querySelector('.rijstap').style.alignItems = 'flex-start';
    tdLblA.querySelector('.lbl').style.paddingTop = '0cm';
    tdLblA.classList.add('kolom-links');
    trLblA.appendChild(tdLblA);
    tbody2.appendChild(trLblA);

    /* Stap 2 */
    const trLblB = document.createElement('tr');
    const tdLblB = maakStap('2', htmlSpan('Bereken de getalwaarde van het rechterlid (RL) voor <i>x</i> = 3.'));
    tdLblB.querySelector('.rijstap').style.alignItems = 'flex-start';
    tdLblB.querySelector('.lbl').style.paddingTop = '0cm';
    tdLblB.classList.add('kolom-links');
    trLblB.appendChild(tdLblB);
    tbody2.appendChild(trLblB);

    /* Stap 3 */
    const trLblC = document.createElement('tr');
    const tdLblC = maakStap('3', htmlSpan('Krijg je een gelijkheid? (LL = RL?)<br>Zo ja, dan is 3 een oplossing van de vergelijking. Markeer dan de vergelijking.<br>Zo nee, dan is 3 geen oplossing van de vergelijking. Markeer de vergelijking niet.'), false);
    tdLblC.querySelector('.rijstap').style.alignItems = 'flex-start';
    tdLblC.querySelector('.lbl').style.paddingTop = '0cm';
    tdLblC.classList.add('kolom-links');
    trLblC.appendChild(tdLblC);
    tbody2.appendChild(trLblC);
  }

  voegWitruimteToe(tbody2,'0.5cm');

  const trhulp = document.createElement('tr');
  const tdhulp = document.createElement('td');
  trhulp.appendChild(tdhulp);
  tbody2.appendChild(trhulp);
  const {tbody} = maakOefTabel(tdhulp, 2, true);


  /* Rij 1: labels */
  const trL1 = document.createElement('tr');
  const tdLblA = maakOpTdaz('a', oe_111010_1, false);
  tdLblA.classList.add('kolom-links');
  trL1.appendChild(tdLblA);
  const tdLblB = maakOpTdaz('b', oe_111010_4, false);
  tdLblB.classList.add('kolom-rechts');
  trL1.appendChild(tdLblB);
  tbody.appendChild(trL1);

  const BREEDTE = '0.8cm';

  const subblokkenA = [
    ['SL', htmlSpan('2 · 3 + 6 = 12'), '6.1cm'],
  ];
  const subblokkenB = [
    ['SL', htmlSpan('15 - 3 = 12'), '6.1cm'],
  ];
  const subblokkenC = [
    ['SL', htmlSpan('10 - 3 = 7'), '6.1cm'],
  ];
  const subblokkenD = [
    ['SL', htmlSpan('5 · 3 - 4 = 11'), '6.1cm'],
  ];

  const tr1 = document.createElement('tr');
  const tdA = maakSamengesteldeTdAangepast('', htmlSpan('LL:'), BREEDTE, subblokkenA, false);
  tdA.classList.add('kolom-links');
  tr1.appendChild(tdA);
  const tdC = maakSamengesteldeTdAangepast('', htmlSpan('LL:'), BREEDTE, subblokkenC, false);
  tdC.classList.add('kolom-rechts');
  tr1.appendChild(tdC);
  tbody.appendChild(tr1);

  const tr2 = document.createElement('tr');
  const tdB = maakSamengesteldeTdAangepast('', htmlSpan('RL:'), BREEDTE, subblokkenB, false);
  tdB.classList.add('kolom-links');
  tr2.appendChild(tdB);
  const tdD = maakSamengesteldeTdAangepast('', htmlSpan('RL:'), BREEDTE, subblokkenD, false);
  tdD.classList.add('kolom-rechts');
  tr2.appendChild(tdD);
  tbody.appendChild(tr2);

})();

/*
  maakSamengesteldeTdZlbl — td met label + tekst + = + samengestelde subblokken
  label: 'a', 'b', ...
  tekst: de opgave zoals '(3a - 2) · (-4)'
  tekstBreedte: CSS-waarde voor de opgave (bijv '3cm')
  subblokken: array van arrays, elk subarray = [type, inhoud, breedte]
              type: 'SL' of 'vast'
              inhoud: bij SL = oplossing ('-' als leeg), bij vast = tekst
              breedte: 'berekenen' of vaste breedte zoals '1cm'
  breuk: boolean, grotere rijhoogte
*/
function maakSamengesteldeTdAangepast(label, tekst, tekstBreedte='2.7cm', subblokken=[], breuk=false) {
  const td = document.createElement('td');
  const rij = document.createElement('div');
  rij.classList.add('rij');
  if (breuk) rij.classList.add('breuk');

  // Label + streep
  const lbl = document.createElement('span');
  lbl.classList.add('lbl', 'subopgave-label');
  lbl.innerHTML = `${label}`;
  rij.appendChild(lbl);

  // Opgave zelf
  const txt = document.createElement('span');
  txt.classList.add('txt');
  txt.style.width = tekstBreedte;
  if (typeof tekst === 'string') txt.innerHTML = tekst;
  else txt.appendChild(tekst);
  rij.appendChild(txt);

  // Moederblok voor subblokken
  const moeder = document.createElement('span');
  moeder.classList.add('samengestelde');
  moeder.style.display = 'inline-flex';
  moeder.style.alignItems = 'center';
  moeder.style.gap = '0.0cm'; // optionele kleine ruimte tussen blokken

  subblokken.forEach(sub => {
    const [type, inhoud, breedte] = sub;
    const subEl = document.createElement('span');
    subEl.style.display = 'inline-block';
    subEl.style.position = 'relative';
    subEl.style.marginRight = '0.1cm';

    if (type === 'SL') {
      subEl.classList.add('sl');
      subEl.textContent = SL;
      if (breedte !== 'berekenen') subEl.style.width = breedte;

      // altijd oplossing toevoegen, gecentreerd
      const oplDiv = document.createElement('div');
      oplDiv.classList.add('opl');
      oplDiv.style.position = 'absolute';
      oplDiv.style.left = '0%';
      oplDiv.style.top = '0';
      oplDiv.style.width = 'auto';
      oplDiv.style.textAlign = 'left';
      oplDiv.appendChild(wiskundeNaarHTML(inhoud));
      subEl.appendChild(oplDiv);
    } 
    else if (type === 'vast') {
      subEl.appendChild(wiskundeNaarHTML(inhoud));
      if (breedte === 'berekenen') {
        // Breedte aanpassen op basis van inhoud
        subEl.style.whiteSpace = 'nowrap';
      } else {
        subEl.style.width = breedte;
      }
      subEl.style.fontFamily = 'Comic Sans MS';
      subEl.style.color = '#1a4fa0';
    }

    moeder.appendChild(subEl);
  });

  rij.appendChild(moeder);
  td.appendChild(rij);
  return td;
}
