/* ============================================================
   H10 / P10_1 / oe_101012.js
   soort: voorbeeld
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_101012', nummer:'?', soort:'inoefenen',
    niveaus:['cirkel','vierkant','zeshoek'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Boven sommige gelijkheidstekens staat een nummer. <br>Noteer elk nummer bij de eigenschap die wordt toegepast.', ['intro-tekst']);

  const rijHoogtes1 = ['0.9cm', '0.9cm', '0.9cm', '0.9cm'];
  const kolomBreedtes1 = ['33%', '33%', '33%'];

  const matrix1 = [
    [
      { inhoud: '25 + 47 + (-15)', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '0,5 · 2 · 58', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '47 · 6', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
    ],
    [
      { inhoud: maakGelijkheidMetNummer('= 25 + (-15) + 47', '(1)'), type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: maakGelijkheidMetNummer('= 1 · 58', '(2)'), type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: maakGelijkheidMetNummer('= 40 · 6 + 7 · 6', '(4)'), type: 'opgave', hAlign: 'left', vAlign: 'middle' },
    ],
    [
      { inhoud: '= 10 + 47', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: maakGelijkheidMetNummer('= 58', '(3)'), type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '= 240 + 6', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
    ],
    [
      { inhoud: '= 57', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '= 246', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
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
  wit1.style.height = '0.3cm';  // ← HIER AANPASSEN
  inhoud.appendChild(wit1);

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
      { inhoud: '', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'Elk rationaal getal heeft een symmetrisch element voor de optelling.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'De vermenigvuldiging van rationale getallen is commutatief.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'De vermenigvuldiging van rationale getallen is associatief.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '1 is het neutraal element voor de vermenigvuldiging van rationale getallen.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '3', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'Elk rationaal getal verschillend van 0 heeft een symmetrisch element voor de vermenigvuldiging.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '2', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: '0 is het opslorpend element voor de vermenigvuldiging van rationale getallen.', type: 'opgave', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
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
