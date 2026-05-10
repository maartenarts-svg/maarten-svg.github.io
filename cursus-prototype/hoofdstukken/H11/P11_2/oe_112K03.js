/* ============================================================
   H11 / P11_2 / oe_112K03.js
   soort: inoefenen
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_112K03_2 = document.createElement('span');
  oe_112K03_2.appendChild(htmlSpan('2 · 10 + <i>g</i> = 10 + 4'));

  const oe_112K03_3 = document.createElement('span');
  oe_112K03_3.appendChild(htmlSpan('20 + <i>g</i> = 14'));

  const oe_112K03_4 = document.createElement('span');
  oe_112K03_4.appendChild(htmlSpan('20 + <i>g</i> <span class="markeer-lila">- 20</span> = 14 <span class="markeer-lila">- 20</span>'));

  const oe_112K03_5 = document.createElement('span');
  oe_112K03_5.appendChild(htmlSpan('<i>g</i> = -6'));

  const oe_112K03_7 = document.createElement('span');
  oe_112K03_7.appendChild(htmlSpan('-3 · 10 + <i>g</i> = 1 + 10'));

  const oe_112K03_8 = document.createElement('span');
  oe_112K03_8.appendChild(htmlSpan('-30 + <i>g</i> = 11'));

  const oe_112K03_9 = document.createElement('span');
  oe_112K03_9.appendChild(htmlSpan('-30 + <i>9</i> <span class="markeer-lila">+ 30</span> = 11 <span class="markeer-lila">+ 30</span>'));

  const oe_112K03_10 = document.createElement('span');
  oe_112K03_10.appendChild(htmlSpan('<i>g</i> = 41'));

  const oe_112K03_12 = document.createElement('span');
  oe_112K03_12.appendChild(htmlSpan('2,4 · 10 + <i>g</i> = 3 · 10'));

  const oe_112K03_13 = document.createElement('span');
  oe_112K03_13.appendChild(htmlSpan('24 + <i>g</i> = 30'));

  const oe_112K03_14 = document.createElement('span');
  oe_112K03_14.appendChild(htmlSpan('24 + <i>g</i> <span class="markeer-lila">- 24</span> = 30 <span class="markeer-lila">- 24</span>'));

  const oe_112K03_15 = document.createElement('span');
  oe_112K03_15.appendChild(htmlSpan('<i>g</i> = 6'));

  const inhoud = maakOefening({
    id:'oe_112K03', nummer:'?', soort:'inoefenen',
    niveaus:['zeshoek'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Vul de vergelijking aan zodat 10 een oplossing is.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 3, true);

  /* ---- Span-variabelen 2 ---- */
  const oe_1 = document.createElement('span');
  oe_1.appendChild(htmlSpan('2<i>x</i> + '));

  const oe_2 = document.createElement('span');
  oe_2.appendChild(htmlSpan('- 6'));

  const oe_3 = document.createElement('span');
  oe_3.appendChild(htmlSpan(' = <i>x</i> + 4'));  

  const oe_4 = document.createElement('span');
  oe_4.appendChild(htmlSpan('-3<i>y</i> + '));

  const oe_5 = document.createElement('span');
  oe_5.appendChild(htmlSpan('41'));

  const oe_6 = document.createElement('span');
  oe_6.appendChild(htmlSpan(' = 1 + <i>y</i>'));  

  const oe_7 = document.createElement('span');
  oe_7.appendChild(htmlSpan('2,4<i>z</i> + '));

  const oe_8 = document.createElement('span');
  oe_8.appendChild(htmlSpan('6'));

  const oe_9 = document.createElement('span');
  oe_9.appendChild(htmlSpan(' = 3<i>z</i>'));    

  const BREEDTE = '0cm';

  const subblokkenA = [
    ['vast', oe_1, 'berekenen'],
    ['SL', oe_2, '1cm'],
    ['vast', oe_3, 'berekenen'],
  ];
  const subblokkenB = [
    ['vast', oe_4, 'berekenen'],
    ['SL', oe_5, '1cm'],
    ['vast', oe_6, 'berekenen'],
  ];
  const subblokkenC = [
    ['vast', oe_7, 'berekenen'],
    ['SL', oe_8, '1cm'],
    ['vast', oe_9, 'berekenen'],
  ];

  const tr1 = document.createElement('tr');
  const tdA = maakSamengesteldeTdoe_112K03('a', subblokkenA, false);
  tdA.classList.add('kolom-links');
  tr1.appendChild(tdA);
  const tdB = maakSamengesteldeTdoe_112K03('b', subblokkenB, false);
  tdB.classList.add('kolom-midden');
  tr1.appendChild(tdB);
  const tdC = maakSamengesteldeTdoe_112K03('c', subblokkenC, false);
  tdC.classList.add('kolom-rechts');
  tr1.appendChild(tdC);  
  tbody.appendChild(tr1);

  /* Oplossingen rij 1 */
  const oplA = [
    oe_112K03_2,
    oe_112K03_3,
    oe_112K03_4,
    oe_112K03_5,
    htmlSpan(''),
  ];
  const oplB = [
    oe_112K03_7,
    oe_112K03_8,
    oe_112K03_9,
    oe_112K03_10,
    htmlSpan(''),
  ];
  const oplC = [
    oe_112K03_12,
    oe_112K03_13,
    oe_112K03_14,
    oe_112K03_15,
    htmlSpan(''),
  ];
  for (let i=0; i<5; i++) {
    const tr = document.createElement('tr');
    const tdA = maakSlTd(oplA[i], false);
    tdA.classList.add('kolom-links');
    tr.appendChild(tdA);
    const tdB = maakSlTd(oplB[i], false);
    tdB.classList.add('kolom-midden');
    tr.appendChild(tdB);
    const tdC = maakSlTd(oplC[i], false);
    tdC.classList.add('kolom-rechts');
    tr.appendChild(tdC);
    tbody.appendChild(tr);
  }

  function maakSamengesteldeTdoe_112K03(label, subblokken=[], breuk=false) {
    const td = document.createElement('td');
    const rij = document.createElement('div');
    rij.classList.add('rij');
    if (breuk) rij.classList.add('breuk');

    // Label + streep
    const lbl = document.createElement('span');
    lbl.classList.add('lbl', 'subopgave-label');
    lbl.innerHTML = `${label}<span class="streep">|</span>`;
    rij.appendChild(lbl);

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
        oplDiv.style.left = '50%';
        oplDiv.style.transform = 'translateX(-25%)';
        oplDiv.style.top = '0';
        oplDiv.style.width = 'auto';
        oplDiv.style.textAlign = 'center';
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
        subEl.style.fontFamily = 'var(--font)';
        subEl.style.color = 'var(--fontsize)';
      }

      moeder.appendChild(subEl);
    });

    rij.appendChild(moeder);
    td.appendChild(rij);
    return td;
  }


})();
