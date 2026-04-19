/* ============================================================
   H10 / P10_ZE / oe_10ZE008.js
   soort: voorbeeld
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const oe_10ZE008_10 = document.createElement('span');
  const oe_10ZE008_10_b1 = maakSpanBreedte('0.3cm', '•');
  oe_10ZE008_10.appendChild(oe_10ZE008_10_b1);
  oe_10ZE008_10.appendChild(htmlSpan('20 euro per week'));

  const oe_10ZE008_11 = document.createElement('span');
  const oe_10ZE008_11_b1 = maakSpanBreedte('0.3cm', '');
  oe_10ZE008_11.appendChild(oe_10ZE008_11_b1);
  oe_10ZE008_11.appendChild(htmlSpan('52 · 20 = 1 040'));

  const oe_10ZE008_12 = document.createElement('span');
  const oe_10ZE008_12_b1 = maakSpanBreedte('0.3cm', '');
  oe_10ZE008_12.appendChild(oe_10ZE008_12_b1);
  oe_10ZE008_12.appendChild(htmlSpan('Volgens dit systeem verdient Stephanie 1 040 euro.'));

  const oe_10ZE008_13 = document.createElement('span');
  const oe_10ZE008_13_b1 = maakSpanBreedte('0.3cm', '•');
  oe_10ZE008_13.appendChild(oe_10ZE008_13_b1);
  oe_10ZE008_13.appendChild(htmlSpan('eerste week 1 euro, dan 2 euro, dan 3 euro ...'));

  const oe_10ZE008_14 = document.createElement('span');
  const oe_10ZE008_14_b1 = maakSpanBreedte('0.3cm', '');
  oe_10ZE008_14.appendChild(oe_10ZE008_14_b1);
  oe_10ZE008_14.appendChild(htmlSpan('1 + 2 + 3 + ... + 51 + 52 = 52 · 53 : 2 = 1 378'));

  const oe_10ZE008_15 = document.createElement('span');
  const oe_10ZE008_15_b1 = maakSpanBreedte('0.3cm', '');
  oe_10ZE008_15.appendChild(oe_10ZE008_15_b1);
  oe_10ZE008_15.appendChild(htmlSpan('Volgens dit systeem verdient Stephanie 1 378 euro.'));

  const oe_10ZE008_16 = document.createElement('span');
  oe_10ZE008_16.appendChild(htmlSpan('De keuze van de baas is niet zo verstandig.'));

  const inhoud = maakOefening({
    id:'oe_10ZE008', nummer:'?', soort:'voorbeeld',
    niveaus:[], tools:['rekenmachine'],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Stephanie onderhandelt in december met haar baas over het loon voor het nieuwe jaar. Haar baas stelt voor, haar 20 euro per week te geven. Stephanie doet een tegenvoorstel: de eerste week wil ze één euro, de tweede week twee euro, de derde week drie euro ... zo tot het einde van het jaar. Haar baas is erg verbaasd over dit voorstel van Stephanie en gaat meteen akkoord.<br>Onderzoek of dit een verstandige keuze is van de baas van Stephanie. (Neem voor een jaar 52 weken.)', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_10ZE008_10, false);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_10ZE008_11, false);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_10ZE008_12, false);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_10ZE008_13, false);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_10ZE008_14, false);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_10ZE008_15, false);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_10ZE008_16, false);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }

})();
