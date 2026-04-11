/* ============================================================
   H10 / P10_2 / oe_102K05.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_102K05', nummer:'?', soort:'inoefenen',
    niveaus:['zeshoek'], tools:['rekenmachine'],
    toggleModus:'oefening'
  });

  voegTekstToe(
    inhoud,
    'Bij behandeling van een te snel werkende schildklier wordt in de geneeskunde onder andere de radioactieve stof jodium gebruikt. Gelukkig blijft jodium niet eeuwig radioactief. <br>'
    + 'Het percentage straling <i>s</i> neemt na de behandeling af volgens de formule <i>s</i> = 100 · 0,9<sup><i>t</i></sup>.', 
    ['intro-tekst']);

  voegWitruimteToe(inhoud,'0.1cm');

  voegLijstToe(inhoud, 'bullet', '0cm', '0.2cm', [
  'Vul de tabel aan.',
  'Rond af op 0,01 %'
  ]);

  const rijHoogtes = ['0.9cm', '1.8cm'];
  const kolomBreedtes = ['17%', '17%', '17%', '17%', '17%', '17%'];

  const matrix = [
    [
      { inhoud: 'tijd <i>t</i> (dagen)', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '4', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '8', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '15', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '30', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '50', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'straling s (%)', type: 'hoofding', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '100 · 0,9<sup>4</sup> <br>&#8776 65,61', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '100 · 0,9<sup>8</sup> <br>&#8776 43,05', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '100 · 0,9<sup>15</sup> <br>&#8776 20,59', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '100 · 0,9<sup>30</sup> <br>&#8776 4,24', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '100 · 0,9<sup>50</sup> <br>&#8776 0,52', type: 'toggle', hAlign: 'center', vAlign: 'middle' },
    ],
  ];

  maakZichtbareTabel(inhoud, 2, 6, {
    hoofding: 'links',
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

})();
