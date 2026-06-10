# Toets aanmaken — werkwijze en afspraken

## Bestandsstructuur

```
H11/
├── H11_W34WIE.html              ← HTML-pagina die de toets laadt
├── H11_INHW34WIE.html           ← analoge inhaaltoets (zelfde opbouw)
├── H11_W34WIE/                  ← map met JS-bestanden voor de toets
│   ├── W34WIE_hoofding.js       ← hoofding (titel, naam/coach-velden)
│   ├── W34WIE_sc.js             ← succescriteria
│   ├── oe_1.js                  ← vraag 1
│   ├── oe_2.js                  ← vraag 2
│   └── oe_3.js                  ← vraag 3
└── H11_INHW34WIE/                ← map met JS voor de inhaaltoets
    ├── INHW34WIE_hoofding.js
    ├── INHW34WIE_sc.js
    ├── oe_1.js
    ├── oe_2.js
    └── oe_3.js
```

**Naamgeving:**
- HTML-bestand: `H[hoofdstuk]_W[week][type].html`, bv. `H11_W34WIE.html`
- Inhaaltoets: prefix `INH` vóór de toetscode → `H11_INHW34WIE.html`, map `H11_INHW34WIE/`
- JS-map: zelfde naam als het HTML-bestand zonder extensie
- hoofding/sc-bestanden: `[toetscode]_hoofding.js` en `[toetscode]_sc.js`
- vraag-bestanden: `oe_1.js`, `oe_2.js`, ... (oplopend per vraag)

---

## HTML-structuur

Kopieer een bestaand toets-HTML-bestand (bv. `H11_W34WIE.html`) als basis en pas alleen aan:
- `<title>`
- `hoofdstuk-titel-header`-tekst (in `nieuwePagina()`)
- de bestandspaden in `laadOefeningen(...)`

Typische opbouw:
```javascript
nieuwePagina();   // pagina 1
voegContentToe('content-pagina');
laadOefeningen('#content-pagina', [
  'H11_W34WIE/W34WIE_hoofding.js',
  'H11_W34WIE/W34WIE_sc.js',
]);

witregel(onderTitel);
voegContentToe('content-pagina-1');
laadOefeningen('#content-pagina-1', [
  'H11_W34WIE/oe_1.js',
]);

forceerPaginawissel();
voegContentToe('content-pagina-2');
laadOefeningen('#content-pagina-2', [
  'H11_W34WIE/oe_2.js',
  'H11_W34WIE/oe_3.js',
]);
```

**Instellingen bovenaan het script:**
- `TOON_OPLOSSINGEN = false` → leerlingversie (lege schrijflijnen); `true` → correctiesleutel
- `TOGGLE_TOEGESTAAN = false` → geen interactieve toggle bij toetsen

---

## Hoofding (`*_hoofding.js`)

Kader met logo, invulvelden Naam/Coach en titelbalk (titel + werktijd + "Markeer:"). Kopieer een bestaande hoofding en pas alleen de titeltekst aan:
```javascript
spanTitel.appendChild(htmlSpan('Toets: 11.2 Vergelijkingen oplossen'));
```
→ voor een inhaaltoets: `'Inhaaltoets: 11.2 Vergelijkingen oplossen'`

---

## Succescriteria (`*_sc.js`)

Tabel met per criterium: nummer, omschrijving (incl. verwijzing naar vraagnummer + leerplandoel) en score-opties A/B/C.

```javascript
const criteria = [
  {
    nummer: '1|',
    tekst:  'Ik los een vergelijking op. (vraag 1 en 2, 6.17)',
    scores: [
      { lbl: 'A:', tekst: 'Ik doe dit bijna foutloos.' },
      { lbl: 'B:', tekst: 'Ik laat met de tussenstappen zien dat ik dit kan, maar maak nog wel wat rekenfouten.' },
      { lbl: 'C:', tekst: 'Ik kan dit nog niet.' },
    ],
  },
  // ...
];
```

Voor een inhaaltoets met analoge vragen blijven de criteria **ongewijzigd** (zelfde vaardigheden worden getoetst).

---

## Vraagtypes (`oe_X.js`)

Elk vraagbestand is een IIFE met dit skelet:
```javascript
(function () {
  // 1. spans opbouwen voor opgave + oplossingsstappen
  // 2. maakOefening({...}) → geeft 'inhoud'-container terug
  // 3. voegTekstToe(inhoud, '...', ['intro-tekst']) → opgavetekst
  // 4. tabel opbouwen met maakOefTabel + rij-helpers
})();
```

`maakOefening({ id, nummer, soort, niveaus, tools, toggleModus })` voor een toetsvraag:
```javascript
const inhoud = maakOefening({
  id:'oe_1', nummer:'?', soort:'test',
  niveaus:[], tools:[],
  toggleModus:'oefening'
});
```

### Type 1 — Twee vergelijkingen naast elkaar (`oe_1.js`)
- `maakOefTabel(inhoud, 2, true)` → 2 kolommen met scheidingslijn
- Eerste rij: `maakOpTdaz('a', ..., true)` / `maakOpTdaz('b', ..., true)` (label + opgave)
- Daarna 8 rijen met `maakSlTd(stap, true)` per kolom (oplossingsstappen + controle LL/RL, `null` voor lege rijen)
- Wat in een stap **verandert**: omhullen met `<span class="markeer-lila">...</span>`
- Antwoordwaarde (ook breuken) bewaren in een variabele met klasse `markeer-lila`, hergebruiken via `.cloneNode(true)` in de controle

### Type 2 — Eén vergelijking met breuken (`oe_2.js`)
- `maakOefTabel(inhoud, 1, false)` → 1 kolom
- `voegWitruimteToe(tbody, '0.3cm')` als opening
- Opgaverij: gewone `<tr><td>`
- Stappenrijen: `maakSlTdZonderInsprong(stap, true)` (geen tab/insprong)
- Breuken met `maakBreuk(teller, noemer, 'opgave')`
- Lila-markeringen op wat per stap verandert (zelfde patroon als type 1)

### Type 3 — Contextvraag met formule (`oe_3.js`)
- `maakOefTabel(inhoud, 1, false)`
- Opgavetekst: variabele en gegeven getal markeren met `maakMarkering(htmlSpan('...'), '#bbdefb', true)`
- Stappenrijen met `maakOpTdDubbelZStrZdub(label, tekst, ruimte, false, stap)`:
  - `'•', 'uitwerking:'` → eerste regel, met `maakMarkering('46', '#bbdefb')` voor het gegeven getal
  - `'', ''` → tussenstappen
  - `'•', 'antwoord:'` → antwoord in woorden
  - `'•', 'controle:'` → controle, lila-markering op de gevonden waarde
  - laatste rij leeg (`''`, `''`, lege span) als opvulling
- `ruimte = '2cm'` (breedte van het label-veld)

---

## Veelgebruikte conventies

| Element | Hoe |
|---|---|
| Cursieve variabele | `<i>x</i>` |
| Vermenigvuldiging | `·` |
| Deling | `:` |
| Wat verandert in een stap | `<span class="markeer-lila">...</span>` |
| Breuk | `maakBreuk('teller','noemer','opgave')` |
| Markering van gegeven waarde (context) | `maakMarkering(htmlSpan('...'), '#bbdefb', true)` |
| LL/RL-labels | `maakSpanBreedte('0.65cm', 'LL:')` / `'RL:'` |
| Antwoordwaarde hergebruiken | bewaar in variabele met klasse `markeer-lila`, `.cloneNode(true)` bij hergebruik |

---

## Een inhaaltoets maken (analoge versie)

1. Kopieer de map `H11_WxxWIx/` → `H11_INHWxxWIx/` en het HTML-bestand → `H11_INHWxxWIx.html`
2. Pas in de HTML alle paden aan: `H11_WxxWIx/...` → `H11_INHWxxWIx/...`
3. Hoofding: titel `"Toets: ..."` → `"Inhaaltoets: ..."`
4. Succescriteria: ongewijzigd laten
5. Per vraag: zelfde structuur, stappenpatroon en moeilijkheidsgraad — alleen andere getallen/context
   - Reken **alle** stappen en de controle (LL = RL) na vóór je de bestanden schrijft
   - Varieer waar mogelijk: andere variabelenamen, andere context (niet exact hetzelfde verhaaltje)
