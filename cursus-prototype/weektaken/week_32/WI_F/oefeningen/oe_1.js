// ============================================================
//  oefeningen/oe_1.js  —  Theorie
// ============================================================
window.__taakOefening = (function () {

  function render(container) {
    const inhoud = maakOefening({ id: 'oe_1', nummer: 1, container });
    voegTekstToe(inhoud, 'Bestudeer de theorie nog een keer.', ['intro-tekst']);

    const img = document.createElement('img');
    img.src = '../WI_F/afbeeldingen/theorie.png';
    img.alt = 'Theorie';
    img.style.cssText = 'max-width:100%; margin-top:0.3cm; display:block;';
    inhoud.appendChild(img);
  }

  function getAntwoorden() { return []; }

  return { render, getAntwoorden };
})();
