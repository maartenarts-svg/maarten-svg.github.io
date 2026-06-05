/* ============================================================
   H11 / H11_schemadefb.js
   ============================================================ */
(function () {

  const inhoud = maakOefening({
    id:'oe_???', nummer:'S2', soort:'inoefenen',
    niveaus:[], tools:[],
    toggleModus:'oefening'
  });

  const {tbody} = maakSchemaTabel(inhoud,'25%');

  /* ============================================================
     BLOK D — vraagstukken oplossen met een vergelijking
     ============================================================ */

  const H11_schema_D1 = document.createElement('span');
  H11_schema_D1.appendChild(maakSpanBreedte('0.85cm','1|'));
  H11_schema_D1.appendChild(htmlSpan('keuze onbekende'));

  const H11_schema_D2 = document.createElement('span');
  H11_schema_D2.appendChild(maakSpanBreedte('0.85cm','2|'));
  H11_schema_D2.appendChild(htmlSpan('vergelijking opstellen'));

  const H11_schema_D3 = document.createElement('span');
  H11_schema_D3.appendChild(maakSpanBreedte('0.85cm','3|'));
  H11_schema_D3.appendChild(htmlSpan('vergelijking oplossen'));

  const H11_schema_D4 = document.createElement('span');
  H11_schema_D4.appendChild(maakSpanBreedte('0.85cm','4|'));
  H11_schema_D4.appendChild(htmlSpan('antwoord'));

  const H11_schema_D5 = document.createElement('span');
  H11_schema_D5.appendChild(maakSpanBreedte('0.85cm','5|'));
  H11_schema_D5.appendChild(htmlSpan('controle'));

  const BLOKD = [
    {inhoud: htmlSpan('Noteer hier welke stappen je zet om een vraagstuk op te lossen met een vergelijking.'), type: 'grijs'},
    {inhoud: H11_schema_D1, type: 'toggle'},
    {inhoud: H11_schema_D2, type: 'toggle'},
    {inhoud: H11_schema_D3, type: 'toggle'},
    {inhoud: H11_schema_D4, type: 'toggle'},
    {inhoud: H11_schema_D5, type: 'toggle'},
  ];

  /* ============================================================
     BLOKKEN TOEVOEGEN
     ============================================================ */

  maakBlok(tbody, htmlSpan('vraagstukken oplossen met een vergelijking'), BLOKD, '0.02cm', '0.05cm', false);

})();
