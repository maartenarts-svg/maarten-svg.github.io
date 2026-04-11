/* ============================================================
   H10 / P10.4 / oe_003.js — Oppervlakte rechthoeken
   soort: inoefenen | niveaus: cirkel, vierkant, zeshoek
   ============================================================ */

(function () {

  const inhoud = maakOefening({
    id:'oe_003', nummer:'99', soort:'inoefenen',
    niveaus:['cirkel'],
    tools:[], toggleModus:'oefening', container:'.pagina'
  });

  voegTekstToe(inhoud,
    'Vul het toestandsteken aan.',
    ['intro-tekst']);

  const {tbody} = maakOefTabel(inhoud, 2, true);

  const BREEDTE = '2.5cm';

  const subblokkenA = [
    ['SL','\u2212', '0.7cm'],          // eerste schrijflijn (centraal op -)
    ['vast','12a','berekenen'], // vast tekst
    ['SL','+', '0.7cm'],          // tweede schrijflijn (centraal op +)
    ['vast','8','berekenen']    // vast tekst
  ];
  const subblokkenB = [
    ['SL','\u2212', '0.7cm'],          // eerste schrijflijn (centraal op -)
    ['vast','15t','berekenen'], // vast tekst
    ['SL','\u2212', '0.7cm'],          // tweede schrijflijn (centraal op +)
    ['vast','24','berekenen']    // vast tekst
  ];
  const subblokkenC = [
    ['SL','+', '0.7cm'],          // eerste schrijflijn (centraal op -)
    ['vast','5x','berekenen'], // vast tekst
    ['SL','+', '0.7cm'],          // tweede schrijflijn (centraal op +)
    ['vast','10','berekenen']    // vast tekst
  ];
  const subblokkenD = [
    ['SL','+', '0.7cm'],          // eerste schrijflijn (centraal op -)
    ['vast','4z','berekenen'], // vast tekst
    ['SL','\u2212', '0.7cm'],          // tweede schrijflijn (centraal op +)
    ['vast','12','berekenen']    // vast tekst
  ];

  /* Rij 1: a en c */
  const tr1 = document.createElement('tr');
  const tdA = maakSamengesteldeTd('a', '(3<i>a</i> - 2) · (-4)', BREEDTE, subblokkenA, false);
  tdA.classList.add('kolom-links');
  tr1.appendChild(tdA);
  const tdC = maakSamengesteldeTd('c', '-3(5<i>t</i> + 8)', BREEDTE, subblokkenB, false);
  tdC.classList.add('kolom-rechts');
  tr1.appendChild(tdC);
  tbody.appendChild(tr1);

  /* Rij 2: b en d */
  const tr2 = document.createElement('tr');
  const tdB = maakSamengesteldeTd('b', '(3<i>a</i> - 2) · (-4)', BREEDTE, subblokkenC, false);
  tdB.classList.add('kolom-links');
  tr2.appendChild(tdB);
  const tdD = maakSamengesteldeTd('d', '-3(5<i>t</i> + 8)', BREEDTE, subblokkenD, false);
  tdD.classList.add('kolom-rechts');
  tr2.appendChild(tdD);
  tbody.appendChild(tr2);


})();
