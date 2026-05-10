/* ============================================================
   H11 / P11_3 / oe_113K06.js
   soort: inoefenen
   ============================================================ */
(function () {

  /* ---- Span-variabelen ---- */
  const breedte1 = '4cm';
  const breedte2 = '7cm';
  
  const oe_113K05_1 = document.createElement('span');
  oe_113K05_1.appendChild(htmlSpan('Bereken met behulp van een vergelijking het aantal stemmen van Korneel.'));

  const oe_113K05_2 = document.createElement('span');
  const oe_113K05_2_b1 = maakSpanBreedte('0.65cm', '1|');
  oe_113K05_2.appendChild(oe_113K05_2_b1);
  const oe_113K05_2_b2 = maakSpanBreedte(breedte1, 'keuze onbekende:');
  oe_113K05_2.appendChild(oe_113K05_2_b2);
  const oe_113K05_2_b3 = maakSpanBreedte(breedte2, 'aantal stemmen Joris:  <i>x</i>');
  oe_113K05_2.appendChild(oe_113K05_2_b3);
  const oe_113K05_2_b4 = htmlSpan('4');
  oe_113K05_2_b4.style.color = '#d500f9';
  oe_113K05_2.appendChild(oe_113K05_2_b4);

  const oe_113K05_3 = document.createElement('span');
  const oe_113K05_3_b1 = maakSpanBreedte('0.65cm', '');
  oe_113K05_3.appendChild(oe_113K05_3_b1);
  const oe_113K05_3_b2 = maakSpanBreedte(breedte1, '');
  oe_113K05_3.appendChild(oe_113K05_3_b2);
  const oe_113K05_3_b3 = maakSpanBreedte(breedte2, 'aantal stemmen Piet:  3<i>x</i>');
  oe_113K05_3.appendChild(oe_113K05_3_b3);
  const oe_113K05_3_b4 = htmlSpan('3 · 4 = 12');
  oe_113K05_3_b4.style.color = '#d500f9';
  oe_113K05_3.appendChild(oe_113K05_3_b4);

  const oe_113K06_8 = document.createElement('span');
  const oe_113K06_8_b1 = maakSpanBreedte('0.65cm', '');
  oe_113K06_8.appendChild(oe_113K06_8_b1);
  const oe_113K06_8_b2 = maakSpanBreedte(breedte1, '');
  oe_113K06_8.appendChild(oe_113K06_8_b2);
  const oe_113K06_8_b3 = maakSpanBreedte(breedte2, 'aantal stemmen Jan:  3<i>x</i> + 1');
  oe_113K06_8.appendChild(oe_113K06_8_b3);
  const oe_113K06_8_b4 = htmlSpan('3 · 4 + 1 = 13');
  oe_113K06_8_b4.style.color = '#d500f9';
  oe_113K06_8.appendChild(oe_113K06_8_b4);

  const oe_113K06_9 = document.createElement('span');
  const oe_113K06_9_b1 = maakSpanBreedte('0.65cm', '');
  oe_113K06_9.appendChild(oe_113K06_9_b1);
  const oe_113K06_9_b2 = maakSpanBreedte(breedte1, '');
  oe_113K06_9.appendChild(oe_113K06_9_b2);
  const oe_113K06_9_b3 = maakSpanBreedte(breedte2, 'aantal stemmen Korneel:  2 · 3<i>x</i> = 6<i>x</i>');
  oe_113K06_9.appendChild(oe_113K06_9_b3);
  const oe_113K06_9_b4 = htmlSpan('6 · 4 = 24');
  oe_113K06_9_b4.style.color = '#d500f9';
  oe_113K06_9.appendChild(oe_113K06_9_b4);

  const oe_113K06_10 = document.createElement('span');
  const oe_113K06_10_b1 = maakSpanBreedte('0.65cm', '2|');
  oe_113K06_10.appendChild(oe_113K06_10_b1);
  const oe_113K06_10_b2 = maakSpanBreedte(breedte1, 'vergelijking opstellen:');
  oe_113K06_10.appendChild(oe_113K06_10_b2);
  oe_113K06_10.appendChild(htmlSpan('<i>x</i> + 3<i>x</i> + 3<i>x</i> + 1 + 6<i>x</i> = 53'));

  const oe_113K06_11 = document.createElement('span');
  const oe_113K06_11_b1 = maakSpanBreedte('0.65cm', '3|');
  oe_113K06_11.appendChild(oe_113K06_11_b1);
  const oe_113K06_11_b2 = maakSpanBreedte(breedte1, 'vergelijking oplossen:');
  oe_113K06_11.appendChild(oe_113K06_11_b2);
  oe_113K06_11.appendChild(htmlSpan('<i>x</i> = 4'));

  const oe_113K05_4 = document.createElement('span');
  const oe_113K05_4_b1 = maakSpanBreedte('0.65cm', '4|');
  oe_113K05_4.appendChild(oe_113K05_4_b1);
  const oe_113K05_4_b2 = maakSpanBreedte(breedte1, 'antwoord:');
  oe_113K05_4.appendChild(oe_113K05_4_b2);
  oe_113K05_4.appendChild(htmlSpan('Korneel kreeg 24 stemmen.'));

  const oe_113K05_5 = document.createElement('span');
  const oe_113K05_5_b1 = maakSpanBreedte('0.65cm', '5|');
  oe_113K05_5.appendChild(oe_113K05_5_b1);
  const oe_113K05_5_b2 = maakSpanBreedte(breedte1, 'controle:');
  oe_113K05_5.appendChild(oe_113K05_5_b2);
  oe_113K05_5.appendChild(htmlSpan('4 + 12 + 13 + 24 = 53'));

  const inhoud = maakOefening({
    id:'oe_113K06', nummer:'?', soort:'inoefenen',
    niveaus:['vierkant','zeshoek'], tools:['rekenmachine'],
    toggleModus:'oefening'
  });

  voegTekstToe(inhoud, 'Bij de selectie voor een nieuwe trainer van de jeugdploeg zijn er vier kandidaten.<br>Ouders en spelers mogen hun stem uitbrengen. In totaal zijn er 53 stemmen uitgebracht.<br>Jan heeft 1 stem meer gekregen dan Piet. Piet heeft 3 keer zoveel stemmen als Joris. Korneel kreeg dubbel zoveel stemmen als Piet.', ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 1, false);

    {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        const _o = oe_113K05_1;
        if (typeof _o === 'string') td.innerHTML = _o;
        else td.appendChild(_o);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }

    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_113K05_2, false);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_113K05_3, false);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_113K06_8, false);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_113K06_9, false);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_113K06_10, false);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_113K06_11, false);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_113K05_4, false);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    {
        const tr = document.createElement('tr');
        const td = maakSlTdZonderInsprong(oe_113K05_5, false);
        if (false) td.querySelector('.opl').classList.add('zichtbaar', 'opl-vast');
        tr.appendChild(td);
        tbody.appendChild(tr);
    }

})();
