/* ============================================================
   H12 / H12_W36WIF / oe_1.js
   soort: inoefenen
   ============================================================ */

(function () {

  const inhoud = maakOefening({
    id:'oe_1', nummer:'?', soort:'inoefenen',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });
  inhoud.style.position = 'relative';

  /* Introductietekst */
  {
    const _p = document.createElement('p');
    _p.classList.add('intro-tekst');
    { const _v='Het grondplan hoort bij een nieuw pretpark.'; if(typeof _v==='string') _p.innerHTML=_v; else _p.appendChild(_v); }
    inhoud.appendChild(_p);
  }
  voegLijstToe(inhoud,'bullet','0cm','0.4cm',['Noteer bij iedere attractie het nummer van de locatie.','Maak berekeningen op een kladblad.']);

  /* ============================================================
     ATTRACTIES — afbeelding, naam met oppervlakte en schrijflijn
     ============================================================ */
  const attracties = [
    { afbeelding:'W36WIF001.png', label:'schietattractie, 16 a: ____' },
    { afbeelding:'W36WIF002.png', label:'rollercoaster, 24 a: ____' },
    { afbeelding:'W36WIF003.png', label:'reuzenrad, 18 a: ____' },
    { afbeelding:'W36WIF004.png', label:'avonturenrivier, 28,27 a: ____' },
    { afbeelding:'W36WIF005.png', label:'zwiermolen, 20 a: ____' },
    { afbeelding:'W36WIF006.png', label:'theekopjes, 14 a: ____' },
  ];

  const {tbody} = maakOefTabel(inhoud, 3, false);

  for (let r=0; r<2; r++) {
    const tr = document.createElement('tr');
    for (let c=0; c<3; c++) {
      const {afbeelding, label} = attracties[r*3+c];

      const td = document.createElement('td');
      td.classList.add('figuur-cel');
      td.style.verticalAlign = 'top';

      const img = document.createElement('img');
      img.src = 'afbeeldingen/' + afbeelding;
      img.style.display = 'block';
      img.style.margin = '0 auto';
      img.style.height = '2.5cm';
      img.style.width = 'auto';
      td.appendChild(img);

      const p = document.createElement('p');
      p.style.textAlign = 'center';
      p.style.margin = '0.1cm 0 0 0';
      p.innerHTML = label.replace('____', '<span style="color:var(--sl-kleur)">____</span>');
      td.appendChild(p);

      tr.appendChild(td);
    }
    tbody.appendChild(tr);
    if (r === 0) voegWitruimteToe(tbody, '0.3cm');
  }

  /* ============================================================
     GRONDPLAN
     ============================================================ */
  const grondplan = document.createElement('img');
  grondplan.src = 'afbeeldingen/W36WIF007.png';
  grondplan.style.display = 'block';
  grondplan.style.width = '100%';
  grondplan.style.margin = '0.3cm auto 0';
  inhoud.appendChild(grondplan);

})();
