// ============================================================
// OVERZICHT-OEFENING.JS
// Opent één oefening in een apart tabblad (oefening-viewer.html).
//
// Voordeel t.o.v. de fullscreen-container aanpak:
//   - De oefening wordt geladen in een schone pagina met de
//     juiste CSS-variabelen, exact zoals in de cursus.
//   - Geen conflicten tussen stijlen van het overzicht en de oefening.
//
// Gebruik:
//   laadOefening(oefening, opties)
//     oefening : { bestandsnaam, paragraaf, nr }
//     opties   : { messagebox, onTerug, opslaanFn }
//
// Na het sluiten van het tabblad wordt onTerug aangeroepen
// via een focus-listener op het overzicht-venster.
//
// Pad naar oefening-viewer.html (relatief vanuit de js/-map):
//   ../H10/oefening-viewer.html
// !! Pas VIEWER_PAD aan als oefening-viewer.html ergens anders staat !!
// ============================================================

// ── Constanten ────────────────────────────────────────────────
// !! Pas HOOFDSTUK aan per hoofdstuk !!
const HOOFDSTUK = 'H10';

// !! Pas VIEWER_PAD aan als oefening-viewer.html ergens anders staat !!
// Pad is relatief t.o.v. de huidige pagina (het overzicht)
const VIEWER_PAD = 'oefening-viewer.html';

// ── State ─────────────────────────────────────────────────────
let _viewerVenster = null;   // referentie naar het geopende tabblad
let _focusListener = null;   // listener om het sluiten te detecteren

// ── Oefening laden ────────────────────────────────────────────
export function laadOefening(oefening, opties) {
  // oefening : { bestandsnaam, paragraaf, nr }
  // opties   : { messagebox, onTerug, opslaanFn }

  const onTerug   = opties.onTerug  || (() => {});
  const messagebox = opties.messagebox !== false;

  // Bepaal het paragraafnummer: laatste cijfer van paragraaf
  // bv. "10.4" → "4"
  const paragraafnr = oefening.paragraaf.split('.').pop();

  // ── URL opbouwen met alle nodige parameters ───────────────
  const urlParams = new URLSearchParams({
    bestandsnaam: oefening.bestandsnaam,
    paragraaf:    oefening.paragraaf,
    nr:           oefening.nr,
    hoofdstuk:    HOOFDSTUK,
    paragraafnr:  paragraafnr,
    messagebox:   messagebox ? 'true' : 'false',
  });

  const viewerUrl = `${VIEWER_PAD}?${urlParams.toString()}`;

  // ── Nieuw tabblad openen ──────────────────────────────────
  _viewerVenster = window.open(viewerUrl, '_blank');

  // ── Vorige focus-listener verwijderen ────────────────────
  // (voorkomt dat meerdere listeners opstapelen bij herhaald klikken)
  if (_focusListener) {
    window.removeEventListener('focus', _focusListener);
    _focusListener = null;
  }

  // ── Focus-listener: detecteert wanneer het tabblad gesloten is ──
  // Wanneer de gebruiker terugkeert naar het overzicht-venster,
  // controleren we of het viewer-tabblad gesloten is.
  _focusListener = () => {
    if (_viewerVenster && _viewerVenster.closed) {
      window.removeEventListener('focus', _focusListener);
      _focusListener  = null;
      _viewerVenster  = null;
      onTerug();
      //setTimeout(onTerug, 5000);  // ← wacht tot Firebase klaar is
    }
  };

  window.addEventListener('focus', _focusListener);
}

// ── Oefening sluiten (niet meer nodig, maar behouden voor compatibiliteit) ──
// Het tabblad sluit zichzelf via window.close() in oefening-viewer.html
export function sluitOefening() {
  if (_viewerVenster && !_viewerVenster.closed) {
    _viewerVenster.close();
  }
}