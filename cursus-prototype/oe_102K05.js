/* ============================================================
   H10 / P10_2 / oe_102K05.js
   soort: inoefenen
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_102K05', nummer:'?', soort:'inoefenen',
    niveaus:['zeshoek'], tools:[],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Bij behandeling van een te snel werkende schildklier wordt in de geneeskunde onder andere de radioactieve stof jodium gebruikt. Gelukkig blijft jodium niet eeuwig radioactief. <br>Het percentage straling *s* neemt na de behandeling af volgens de formule *s* = 100 · 0,9^{*t*}. <br>Hierbij stelt *t* de tijd (in dagen) voor sinds de start van de behandeling.', ['intro-tekst']);

  const rijHoogtes = ['0.9cm', '0.9cm'];
  const kolomBreedtes = ['17%', '17%', '17%', '17%', '17%', '17%'];

  const matrix = [
    [
      { inhoud: 'tijd <i>t</i> (dagen)', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '4', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '8', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '15', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '30', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '50', type: 'opgave', hAlign: 'center', vAlign: 'middle' },
    ],
    [
      { inhoud: 'straling s (%)', type: 'hoofding', hAlign: 'center', vAlign: 'middle' },
      { inhoud: '100 · 0,9<sup>4</sup> <br>&#8776 65,61', type: 'toggle', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '100 · 0,9<sup>8</sup> <br>&#8776 43,05', type: 'toggle', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '100 · 0,9<sup>15</sup> <br>&#8776 20,59', type: 'toggle', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '100 · 0,9<sup>30</sup> <br>&#8776 4,24', type: 'toggle', hAlign: 'left', vAlign: 'middle' },
      { inhoud: '100 · 0,9<sup>50</sup> <br>&#8776 0,52', type: 'toggle', hAlign: 'left', vAlign: 'middle' },
    ],
  ];

  maakZichtbareTabel(inhoud, 2, 6, {
    hoofding: 'links',
    rijHoogtes,
    kolomBreedtes,
    matrix,
  });

})();
