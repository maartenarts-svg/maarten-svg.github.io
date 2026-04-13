/* ============================================================
   H10 / P10_1 / oe_101004.js
   soort: voorbeeld
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_101004', nummer:'?', soort:'voorbeeld',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Boven sommige gelijkheidstekens staat een nummer. <br>Noteer elk nummer bij de eigenschap die wordt toegepast.', ['intro-tekst']);

  const rijHoogtes1 = ['0.9cm', '0.9cm', '0.9cm', '0.9cm'];
  const kolomBreedtes1 = ['33%', '33%', '33%'];

  const matrix1 = [
    [
      { inhoud: '16 + 12 + 4', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '13 + (-13) + 47', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '17 · 101', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
    ],
    [
      { inhoud: maakGelijkheidMetNummer('= 16 + 4 + 12', '(1)'), type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: maakGelijkheidMetNummer('= 0 + 47', '(2)'), type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: maakGelijkheidMetNummer('= 17 · 100 + 17 · 1', '(4)'), type: 'opgave', hAlign: 'left', vAlign: 'middle' },
    ],
    [
      { inhoud: '= 20 + 12', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: maakGelijkheidMetNummer('= 17', '(3)'), type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '= 1 700 + 17', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
    ],
    [
      { inhoud: '= 32', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '= 1 717', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
    ],
  ];
  
  const tabel1 = maakZichtbareTabel(inhoud, 4, 3, {
    hoofding: null,
    rijHoogtes: rijHoogtes1,
    kolomBreedtes: kolomBreedtes1,
    matrix:matrix1,
  });
  // Verwijder horizontale tussenlijnen
  tabel1.querySelectorAll('tr:not(:first-child) td').forEach(td => {
    td.style.borderTop = 'none';
  });
  tabel1.querySelectorAll('tr:not(:last-child) td').forEach(td => {
    td.style.borderBottom = 'none';
  });
  // meer ruimte tussen linkerrand kolom en de inhoud van een cel
  tabel1.querySelectorAll('td').forEach(td => {
  td.style.paddingLeft = '0.2cm';  // ← HIER AANPASSEN
  });

  const wit1 = document.createElement('div');
  wit1.style.height = '0.0cm';  // ← HIER AANPASSEN
  inhoud.appendChild(wit1);

  const matrix2 = [
    [
      { inhoud: (function(){
      const s=document.createElement('span');
      s.appendChild(maakBreuk('5','2','opgave'));
      const p1=document.createElement('span'); p1.innerHTML=' · '; s.appendChild(p1);
      s.appendChild(maakBreuk('2','5','opgave'));
      const p3=document.createElement('span'); p3.innerHTML=' · (-10)'; s.appendChild(p3);
      return s;})(), type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '316 · 713 · 0', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '17 · 125 · 8', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
    ],
    [
      { inhoud: maakGelijkheidMetNummer('= 1 · (-10)', '(5)'), type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: maakGelijkheidMetNummer('= 0', '(7)'), type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: maakGelijkheidMetNummer('= 17 · 1 000', '(8)'), type: 'opgave', hAlign: 'left', vAlign: 'middle' },
    ],
    [
      { inhoud: maakGelijkheidMetNummer('= -10', '(6)'), type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '= 17 000', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
    ],
  ];
  
  const tabel2 = maakZichtbareTabel(inhoud, 3, 3, {
    hoofding: null,
    rijHoogtes: rijHoogtes1,
    kolomBreedtes: kolomBreedtes1,
    matrix:matrix2,
  });
  // Verwijder horizontale tussenlijnen
  tabel2.querySelectorAll('tr:not(:first-child) td').forEach(td => {
    td.style.borderTop = 'none';
  });
  tabel2.querySelectorAll('tr:not(:last-child) td').forEach(td => {
    td.style.borderBottom = 'none';
  });
  // meer ruimte tussen linkerrand kolom en de inhoud van een cel
  tabel2.querySelectorAll('td').forEach(td => {
  td.style.paddingLeft = '0.2cm';  // ← HIER AANPASSEN
  });

  const wit2 = document.createElement('div');
  wit2.style.height = '0.3cm';  // ← HIER AANPASSEN
  inhoud.appendChild(wit2);

  const rijHoogtes3 = ['0.9cm', '0.9cm', '0.9cm', '0.9cm', '0.9cm', '0.9cm', '0.9cm', '0.9cm', '0.9cm', '0.9cm', '0.9cm'];
  const kolomBreedtes3 = ['85%', '15%'];

  const matrix3 = [
    [
      { inhoud: 'Eigenschap', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: 'Nummer', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'De optelling van rationale getallen is commutatief.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '1', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'De optelling van rationale getallen is associatief.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '0 is het neutraal element voor de optelling van rationale getallen.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '3', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'Elk rationaal getal heeft een symmetrisch element voor de optelling.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '2', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'De vermenigvuldiging van rationale getallen is commutatief.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'De vermenigvuldiging van rationale getallen is associatief.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '8', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '1 is het neutraal element voor de vermenigvuldiging van rationale getallen.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '6', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'Elk rationaal getal verschillend van 0 heeft een symmetrisch element voor de vermenigvuldiging.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '5', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '0 is het opslorpend element voor de vermenigvuldiging van rationale getallen.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '7', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'De vermenigvuldiging van rationale getallen is distributief ten opzichte van de optelling van rationale getallen.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '4', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  const tabel3 = maakZichtbareTabel(inhoud, 11, 2, {
    hoofding: 'boven',
    rijHoogtes: rijHoogtes3,
    kolomBreedtes: kolomBreedtes3,
    matrix:matrix3,
  });

})();
