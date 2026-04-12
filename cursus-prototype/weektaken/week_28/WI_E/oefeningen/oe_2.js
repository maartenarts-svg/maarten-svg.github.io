// ============================================================
//  oefeningen/oe_1.js  —  Voorbeeld oefening
//
//  Elke oefening exporteert via window.__taakOefening:
//    render(container, antwoorden, verbeterd)
//    getAntwoorden()  → array (null = niet ingevuld)
//
//  Het aantal null-waarden bij init bepaalt het aantal verwachte
//  antwoorden (voor de eindpagina-telling).
// ============================================================

window.__taakOefening = (function() {

  // ── Staat van deze oefening ───────────────────────────────
  // Pas het aantal antwoorden aan: één null per verwacht antwoord
  let _antwoorden = [
    {antwoord: null, score: 0},
    {antwoord: null, score: 0},
    {antwoord: null, score: 0},
    {antwoord: null, score: 0},
    {antwoord: null, score: 0},
    {antwoord: null, score: 0},
  ];
  let _invoerVelden = [];

  // ── render ────────────────────────────────────────────────
  function render(container, opgeslagenAntwoorden, verbeterd) {
    // Herstel opgeslagen antwoorden indien aanwezig
    if (opgeslagenAntwoorden && Array.isArray(opgeslagenAntwoorden)) {
      _antwoorden = opgeslagenAntwoorden.map(a =>
        (a && typeof a === 'object' && 'antwoord' in a)
          ? a
          : { antwoord: a, score: 0 }
      );
      while (_antwoorden.length < 6) _antwoorden.push({ antwoord: null, score: 0 });
    }

    _invoerVelden = [];
    container.innerHTML = '';

    // ── Oefening opbouwen via helpers ─────────────────────
    const inhoud = maakOefening({ id: 'oe_2', nummer: 2, container });

    voegTekstToe(inhoud, htmlSpan('Beantwoord de vragen.'), ['intro-tekst']);
    voegLijstToe(inhoud, 'bullet', '0cm', '0.1cm', 
      [
        'Antwoord steeds met een natuurlijk getal <span class="markeer-lila">ZONDER</span> eenheid.',
        'Rond elk antwoord af.',
        'Kijk goed naar de eenheid waarin je moet antwoorden.'
      ])

    const { tbody } = maakOefTabel(inhoud, 1, false);

    const tussenruimte = '0.3cm';

    {
      // Labels-rij 1
      const trL1 = document.createElement('tr');
      const td1 = maakOpTdaz('a','Hoeveel <span class="markeer-lila">minuten</span> doe je erover om naar school te komen?',false)
      td1.classList.add('kolom-links');
      const td2 = document.createElement('td');
      td2.classList.add('kolom-rechts');
      trL1.appendChild(td1);
      trL1.appendChild(td2);
      tbody.appendChild(trL1);

      // Antwoord-rij met invoervelden
      const { tr: tr1, invoer } = maakTrOpl2(_antwoorden, verbeterd, 0,true,'geheel');
      _invoerVelden.push(invoer);
      tbody.appendChild(tr1);

      const trW = document.createElement('tr');
      const tdW = document.createElement('td');
      tdW.style.height = tussenruimte;
      trW.appendChild(tdW);
      tbody.appendChild(trW);
    }
    {
      // Labels-rij 2
      const trL1 = document.createElement('tr');
      const td1 = maakOpTdaz('b','Hoeveel <span class="markeer-lila">uur</span> slaap je gemiddeld per nacht?',false)
      td1.classList.add('kolom-links');
      const td2 = document.createElement('td');
      td2.classList.add('kolom-rechts');
      trL1.appendChild(td1);
      trL1.appendChild(td2);
      tbody.appendChild(trL1);

      // Antwoord-rij met invoervelden
      const { tr: tr1, invoer } = maakTrOpl2(_antwoorden, verbeterd, 1,true,'geheel');
      _invoerVelden.push(invoer);
      tbody.appendChild(tr1);

      const trW = document.createElement('tr');
      const tdW = document.createElement('td');
      tdW.style.height = tussenruimte;
      trW.appendChild(tdW);
      tbody.appendChild(trW);            
    }
    {
      // Labels-rij 3
      const trL1 = document.createElement('tr');
      const td1 = maakOpTdaz('c','Hoeveel <span class="markeer-lila">minuten</span> per dag besteed je aan huiswerk?',false)
      td1.classList.add('kolom-links');
      const td2 = document.createElement('td');
      td2.classList.add('kolom-rechts');
      trL1.appendChild(td1);
      trL1.appendChild(td2);
      tbody.appendChild(trL1);

      // Antwoord-rij met invoervelden
      const { tr: tr1, invoer } = maakTrOpl2(_antwoorden, verbeterd, 2,true,'geheel');
      _invoerVelden.push(invoer);
      tbody.appendChild(tr1);

      const trW = document.createElement('tr');
      const tdW = document.createElement('td');
      tdW.style.height = tussenruimte;
      trW.appendChild(tdW);
      tbody.appendChild(trW);      
    }
    {
      // Labels-rij 4
      const trL1 = document.createElement('tr');
      const td1 = maakOpTdaz('d','Hoeveel <span class="markeer-lila">uur</span> schermtijd heb je thuis per dag?',false)
      td1.classList.add('kolom-links');
      const td2 = document.createElement('td');
      td2.classList.add('kolom-rechts');
      trL1.appendChild(td1);
      trL1.appendChild(td2);
      tbody.appendChild(trL1);

      // Antwoord-rij met invoervelden
      const { tr: tr1, invoer } = maakTrOpl2(_antwoorden, verbeterd, 3,true,'geheel');
      _invoerVelden.push(invoer);
      tbody.appendChild(tr1);

      const trW = document.createElement('tr');
      const tdW = document.createElement('td');
      tdW.style.height = tussenruimte;
      trW.appendChild(tdW);
      tbody.appendChild(trW);      
    }
    {
      // Labels-rij 5
      const trL1 = document.createElement('tr');
      const td1 = maakOpTdaz('e','Hoeveel <span class="markeer-lila">minuten</span> per dag luister je naar muziek?',false)
      td1.classList.add('kolom-links');
      const td2 = document.createElement('td');
      td2.classList.add('kolom-rechts');
      trL1.appendChild(td1);
      trL1.appendChild(td2);
      tbody.appendChild(trL1);

      // Antwoord-rij met invoervelden
      const { tr: tr1, invoer } = maakTrOpl2(_antwoorden, verbeterd, 4,true,'geheel');
      _invoerVelden.push(invoer);
      tbody.appendChild(tr1);

      const trW = document.createElement('tr');
      const tdW = document.createElement('td');
      tdW.style.height = tussenruimte;
      trW.appendChild(tdW);
      tbody.appendChild(trW);      
    }
    {
      // Labels-rij 6
      const trL1 = document.createElement('tr');
      const td1 = maakOpTdaz('f','Hoeveel <span class="markeer-lila">minuten</span> per dag besteed je aan gamen?',false)
      td1.classList.add('kolom-links');
      const td2 = document.createElement('td');
      td2.classList.add('kolom-rechts');
      trL1.appendChild(td1);
      trL1.appendChild(td2);
      tbody.appendChild(trL1);

      // Antwoord-rij met invoervelden
      const { tr: tr1, invoer } = maakTrOpl2(_antwoorden, verbeterd, 5,true,'geheel');
      _invoerVelden.push(invoer);
      tbody.appendChild(tr1);

      const trW = document.createElement('tr');
      const tdW = document.createElement('td');
      tdW.style.height = tussenruimte;
      trW.appendChild(tdW);
      tbody.appendChild(trW);      
    }                          

  }

  function getAntwoorden() {
    _invoerVelden.forEach((veld, i) => {
      _antwoorden[i].antwoord = veld.value.trim() || null;
    });
    return [..._antwoorden];
  }

  return { render, getAntwoorden };
})();
