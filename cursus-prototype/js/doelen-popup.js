// ============================================================
// DOELEN-POPUP.JS
// Pop-up voor het koppelen van doelen aan een oefening.
//
// Gebruik:
//   toonDoelenPopup(oefening, doelen, gekoppeldeIds, onOpslaan)
//
//   oefening     : { bestandsnaam, nr, paragraaf, ... }
//   doelen       : array van doelobjecten uit Firestore
//   gekoppeldeIds: array van doel-ids die al gekoppeld zijn
//   onOpslaan    : callback(nieuweIds) — wordt aangeroepen na opslaan
//
// Filteren: op type, referentie, leerplandoelcode
// Aanvinken: checkboxen (meerdere doelen per oefening mogelijk)
// Ontkoppelen: checkbox uitvinken en opslaan
// ============================================================

// ── Pop-up aanmaken (eenmalig) ────────────────────────────────
function maakPopupContainer() {
  const bestaand = document.getElementById('doelen-popup-overlay');
  if (bestaand) return bestaand;

  const overlay = document.createElement('div');
  overlay.id = 'doelen-popup-overlay';
  overlay.style.cssText = `
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.45);
    z-index: 2000;
    align-items: center;
    justify-content: center;
  `;

  const box = document.createElement('div');
  box.id = 'doelen-popup-box';
  box.style.cssText = `
    background: white;
    border-radius: 6px;
    width: 680px;
    max-width: 95vw;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 24px rgba(0,0,0,0.25);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 13px;
    overflow: hidden;
  `;

  overlay.appendChild(box);
  document.body.appendChild(overlay);
  return overlay;
}

// ── Pop-up tonen ──────────────────────────────────────────────
export function toonDoelenPopup(oefening, doelen, gekoppeldeIds, onOpslaan) {
  const overlay = maakPopupContainer();
  const box     = overlay.querySelector('#doelen-popup-box');

  // Huidige selectie (werkkopie)
  let selectie = new Set(gekoppeldeIds);

  // ── Render ────────────────────────────────────────────────────
  function render(filter) {
    const { type, referentie, leerplandoel, zoek } = filter;

    // Gefilterde doelen
    let gefilterd = doelen.filter(d => {
      if (type       && d.type !== type)                                          return false;
      if (referentie && !(d.referenties || []).includes(referentie))              return false;
      if (leerplandoel && !(d.leerplandoelcodes || []).includes(leerplandoel))    return false;
      if (zoek) {
        const z = zoek.toLowerCase();
        if (!d.tekst?.toLowerCase().includes(z)) return false;
      }
      return true;
    });

    // Unieke filterwaarden voor dropdowns
    const alleReferenties   = [...new Set(doelen.flatMap(d => d.referenties || []))].sort();
    const alleLeerplandoelen = [...new Set(doelen.flatMap(d => d.leerplandoelcodes || []))].sort();

    box.innerHTML = `
      <!-- Header -->
      <div style="background:#c8e6c9;padding:10px 16px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #a5d6a7;">
        <strong style="color:#4a7c59;">Doelen koppelen — oefening ${oefening.nr} (${oefening.bestandsnaam})</strong>
        <button id="dp-sluiten" style="background:none;border:none;font-size:16px;cursor:pointer;color:#4a7c59;">✕</button>
      </div>

      <!-- Filters -->
      <div style="padding:10px 16px;border-bottom:1px solid #e0e0e0;display:flex;gap:10px;flex-wrap:wrap;align-items:center;background:#fafafa;">
        <select id="dp-filter-type" style="${selectStijl()}">
          <option value="">Alle types</option>
          <option value="voorkennis"      ${type==='voorkennis'       ? 'selected':''}>Voorkennis</option>
          <option value="succescriterium" ${type==='succescriterium'  ? 'selected':''}>Succescriterium</option>
        </select>
        <select id="dp-filter-ref" style="${selectStijl()}">
          <option value="">Alle referenties</option>
          ${alleReferenties.map(r => `<option value="${r}" ${referentie===r?'selected':''}>${r}</option>`).join('')}
        </select>
        <select id="dp-filter-lp" style="${selectStijl()}">
          <option value="">Alle leerplandoelen</option>
          ${alleLeerplandoelen.map(l => `<option value="${l}" ${leerplandoel===l?'selected':''}>${l}</option>`).join('')}
        </select>
        <input id="dp-zoek" type="text" placeholder="Zoek in tekst…" value="${zoek||''}" style="${selectStijl()}">
        <button id="dp-reset" style="padding:4px 10px;font-size:12px;background:white;border:1.5px solid #4a7c59;border-radius:4px;cursor:pointer;color:#4a7c59;">↺ Reset</button>
      </div>

      <!-- Lijst -->
      <div style="overflow-y:auto;flex:1;padding:10px 16px;">
        ${gefilterd.length === 0
          ? '<p style="color:#888;font-style:italic;padding:10px 0;">Geen doelen gevonden.</p>'
          : gefilterd.map(d => `
            <label style="display:flex;align-items:flex-start;gap:10px;padding:8px 0;border-bottom:1px solid #f0f0f0;cursor:pointer;">
              <input type="checkbox"
                data-id="${d.id}"
                ${selectie.has(d.id) ? 'checked' : ''}
                style="margin-top:3px;accent-color:#4a7c59;flex-shrink:0;">
              <span>
                <span style="display:inline-block;background:${d.type==='voorkennis'?'#e3f2fd':'#e8f5e9'};
                  color:${d.type==='voorkennis'?'#1565c0':'#2e7d32'};
                  border-radius:3px;padding:1px 6px;font-size:11px;margin-right:6px;">
                  ${d.type === 'voorkennis' ? 'VK' : 'SC'}
                </span>
                <span style="font-weight:600;">${d.tekst || '(geen tekst)'}</span>
                ${d.leerplandoelcodes?.length ? `<span style="color:#888;font-size:11px;margin-left:6px;">${d.leerplandoelcodes.join(', ')}</span>` : ''}
                ${d.referenties?.length ? `<span style="color:#aaa;font-size:11px;margin-left:6px;">ref: ${d.referenties.join(', ')}</span>` : ''}
                <span style="color:#bbb;font-size:10px;margin-left:6px;">id: ${d.id}</span>
              </span>
            </label>
          `).join('')
        }
      </div>

      <!-- Footer -->
      <div style="padding:10px 16px;border-top:1px solid #e0e0e0;display:flex;justify-content:space-between;align-items:center;background:#fafafa;">
        <span style="font-size:12px;color:#888;">${selectie.size} doel(en) geselecteerd</span>
        <div style="display:flex;gap:8px;">
          <button id="dp-annuleer" style="padding:5px 14px;font-size:12px;background:white;border:1.5px solid #4a7c59;border-radius:4px;cursor:pointer;color:#4a7c59;">Annuleer</button>
          <button id="dp-opslaan" style="padding:5px 14px;font-size:12px;background:#4a7c59;border:none;border-radius:4px;cursor:pointer;color:white;font-weight:600;">Opslaan</button>
        </div>
      </div>
    `;

    // ── Events ────────────────────────────────────────────────
    box.querySelector('#dp-sluiten').onclick  = sluit;
    box.querySelector('#dp-annuleer').onclick = sluit;

    box.querySelector('#dp-opslaan').onclick = () => {
      onOpslaan([...selectie]);
      sluit();
    };

    box.querySelector('#dp-reset').onclick = () => {
      render({ type: '', referentie: '', leerplandoel: '', zoek: '' });
    };

    // Filterwijzigingen
    ['#dp-filter-type', '#dp-filter-ref', '#dp-filter-lp'].forEach(sel => {
      box.querySelector(sel).addEventListener('change', () => herfilter());
    });
    box.querySelector('#dp-zoek').addEventListener('input', () => herfilter());

    // Checkboxen
    box.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.addEventListener('change', () => {
        if (cb.checked) selectie.add(cb.dataset.id);
        else            selectie.delete(cb.dataset.id);
        // Footer teller updaten zonder volledige re-render
        const teller = box.querySelector('span[style*="geselecteerd"]');
        if (teller) teller.textContent = `${selectie.size} doel(en) geselecteerd`;
      });
    });

    function herfilter() {
      render({
        type:        box.querySelector('#dp-filter-type').value,
        referentie:  box.querySelector('#dp-filter-ref').value,
        leerplandoel: box.querySelector('#dp-filter-lp').value,
        zoek:        box.querySelector('#dp-zoek').value,
      });
    }
  }

  function sluit() {
    overlay.style.display = 'none';
  }

  // Klik buiten box sluit popup
  overlay.onclick = (e) => { if (e.target === overlay) sluit(); };

  // Initieel renderen
  render({ type: '', referentie: '', leerplandoel: '', zoek: '' });
  overlay.style.display = 'flex';
}

function selectStijl() {
  return `
    padding: 4px 8px;
    font-size: 12px;
    border: 1px solid #a5d6a7;
    border-radius: 4px;
    font-family: inherit;
    outline: none;
    background: white;
  `;
}
