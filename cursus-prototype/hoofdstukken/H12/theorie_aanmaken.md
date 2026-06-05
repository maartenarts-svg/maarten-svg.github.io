# Theorie aanmaken — werkwijze en afspraken

## Bestandsstructuur

```
H12/
├── afbeeldingen/          ← alle SVG- en afbeeldingsbestanden
│   ├── th_121_001_omtrek.svg
│   └── ...
├── theorie/               ← alle JS-bestanden voor theorie
│   ├── th_121_demo.js
│   ├── th_121_demoVB.js
│   └── ...
└── H12_theorie.html       ← de HTML-pagina die de JS-bestanden laadt
```

**Naamgeving JS-bestanden:**
- Theoriekader: `th_[paragraaf]_[onderwerp].js`
- Voorbeeldkader: `th_[paragraaf]_[onderwerp]VB.js`

**Naamgeving SVG-bestanden:**
- `th_[paragraaf]_[volgnummer]_[beschrijving].svg`
- Herbruikbare SVG's (zoals ladders) krijgen een beschrijvende naam zonder nummer: `eenhedenladderLengte.svg`

**Afbeeldingen staan altijd in `H12/afbeeldingen/`**, niet in een submap van `theorie/`.  
In de JS-bestanden verwijs je ernaar als `"afbeeldingen/naam.svg"` (relatief aan de HTML-pagina, niet aan het JS-bestand).

---

## Helpers en hulpfuncties

De volgende functies zijn beschikbaar via `helpers.js`:

| Functie | Wat het doet |
|---|---|
| `maakTheorie()` | Maakt de container aan en voegt die toe aan de pagina. Altijd als eerste aanroepen. |
| `htmlSpan(html)` | Maakt een `<span>` met de gegeven HTML-string als innerHTML. |
| `maakSpanBreedte(breedte, inhoud)` | Maakt een `inline-block` span met vaste breedte. Gebruik voor insprong of bullets. |
| `maakSpanMetRuimte(element, hoogte)` | Voegt een lege block-span toe als witruimte na het laatste kind van `element`. |
| `voegWitruimteToe(element, hoogte)` | Voegt verticale ruimte toe (als `<tr><td>`). Gebruik aan begin en einde van `tdInhoud`, en na het volledige kader. |

---

## CSS-klassen

| Klasse | Gebruik |
|---|---|
| `.theorie` | Vette groene tekst (`font-weight: bold; color: var(--groen-donker)`). Gebruik voor termen/begrippen in een theoriekader. |
| `.theorietekst` | Normale tekst met `line-height: 1.2`. Gebruik voor langere zinnen zodat tekst goed afbreekt. |
| `.lbl` | Vette groene label-stijl, vaste breedte. Gebruik voor bullets (`•`) of stap-labels (`1|`). |

---

## Structuur: theoriekader (groen)

```javascript
/* ============================================================
   H12 / th_XXX_naam.js
   ============================================================ */
(function () {

  const inhoud = maakTheorie();
  const paddingkader = '0.1cm';
  const breedteSoort = '37%';

  {
    const kader = document.createElement('table');
    kader.style.borderCollapse = 'collapse';
    kader.style.width = '100%';
    kader.style.tableLayout = "fixed";

    // Titelrij
    const trTitel = document.createElement('tr');
    trTitel.style.height = '0.9cm';

    const tdSoort = document.createElement('td');
    tdSoort.style.border = '1.2px solid var(--groen-scheiding)';
    tdSoort.style.backgroundColor = 'var(--groen-scheiding)';
    tdSoort.style.paddingLeft = paddingkader;
    tdSoort.style.width = breedteSoort;
    tdSoort.style.verticalAlign = 'middle';
    tdSoort.style.fontWeight = 'bold';
    tdSoort.appendChild(htmlSpan('begrip'));          // ← soort: 'begrip', 'werkwijze', ...

    const tdKort = document.createElement('td');
    tdKort.style.paddingLeft = paddingkader;
    tdKort.style.paddingRight = paddingkader;
    tdKort.style.verticalAlign = 'middle';
    tdKort.appendChild(htmlSpan('korte omschrijving'));  // ← invullen

    trTitel.appendChild(tdSoort);
    trTitel.appendChild(tdKort);

    // Inhoudsrij
    const trInhoud = document.createElement("tr");
    const tdInhoud = document.createElement("td");
    tdInhoud.colSpan = 2;
    tdInhoud.style.border = '1.2px solid var(--groen-scheiding)';
    tdInhoud.style.paddingLeft = paddingkader;
    tdInhoud.style.paddingRight = paddingkader;
    tdInhoud.style.width = '100%';
    trInhoud.appendChild(tdInhoud);

    voegWitruimteToe(tdInhoud, '0.1cm');

    // ── INHOUD HIER ──

    voegWitruimteToe(tdInhoud, '0.1cm');

    kader.appendChild(trTitel);
    kader.appendChild(trInhoud);
    inhoud.appendChild(kader);
  }

  voegWitruimteToe(inhoud, '0.5cm');

})();
```

---

## Structuur: voorbeeldkader (oranje)

Identiek aan theoriekader, maar met oranje kleuren en `'Voorbeeld'` als soort:

```javascript
tdSoort.style.border = '1.2px solid var(--oranje-scheiding)';
tdSoort.style.backgroundColor = 'var(--oranje-scheiding)';
tdSoort.appendChild(htmlSpan('Voorbeeld'));

tdKort.appendChild(htmlSpan(''));   // ← mag leeg blijven

tdInhoud.style.border = '1.2px solid var(--oranje-scheiding)';
```

---

## Veelgebruikte inhoudspatronen

### Tekstregel zonder bullet
```javascript
const div = document.createElement('div');
div.style.display = 'flex';
div.style.flexDirection = 'column';
tdInhoud.appendChild(div);
div.appendChild(htmlSpan('De tekst hier.'));
maakSpanMetRuimte(div, '0.1cm');
```

### Tekstregel met bullet
```javascript
const rij = document.createElement('span');
const lbl = maakSpanBreedte('0.4cm', '•');
lbl.classList.add('lbl');
rij.appendChild(lbl);
rij.appendChild(htmlSpan('De tekst hier.'));
```

### Langere tekst met bullet (goede afbreking bij wrapping)
```javascript
const rij = document.createElement('div');
rij.style.display = 'flex';
rij.style.alignItems = 'flex-start';
const lbl = maakSpanBreedte('0.4cm', '•');
lbl.classList.add('lbl');
lbl.style.flexShrink = '0';
rij.appendChild(lbl);
const tekst = htmlSpan('Langere zin die kan afbreken...');
tekst.style.flex = '1';
tekst.style.minWidth = '0';
tekst.classList.add('theorietekst');
rij.appendChild(tekst);
```

### Tekst links + afbeelding rechts (bovenuitgelijnd)
```javascript
const wrapper = document.createElement("div");
wrapper.style.display = "flex";
wrapper.style.alignItems = "flex-start";   // ← tekst begint bovenaan
wrapper.style.gap = "10px";

const textDiv = document.createElement("div");
textDiv.style.display = "flex";
textDiv.style.flexDirection = "column";
textDiv.style.flex = "1";

// ... voeg tekst toe aan textDiv ...

const img = document.createElement("img");
img.src = "afbeeldingen/naam.svg";
img.style.width = '100px';                 // ← grootte aanpasbaar

wrapper.appendChild(textDiv);
wrapper.appendChild(img);
tdInhoud.appendChild(wrapper);
```

### Twee kolommen naast elkaar
```javascript
const kolommen = document.createElement('div');
kolommen.style.display = 'flex';
kolommen.style.gap = '1cm';
kolommen.style.alignItems = 'flex-start';

const links = document.createElement('div');
links.style.flex = '1';
links.style.display = 'flex';
links.style.flexDirection = 'column';
links.style.alignItems = 'center';

const rechts = document.createElement('div');
rechts.style.flex = '1';
rechts.style.display = 'flex';
rechts.style.flexDirection = 'column';
rechts.style.alignItems = 'center';

kolommen.appendChild(links);
kolommen.appendChild(rechts);
tdInhoud.appendChild(kolommen);
```

---

## SVG-bestanden aanmaken

### Gedraaide tekst naast een ladder (`rotate(-90)`)

Tekst die 90° tegen de klok in gedraaid wordt, loopt van onder naar boven.  
- **`y` aanpassen** om de tekst dichter bij of verder van de ladder te zetten (niet `x`).  
- **`x` aanpassen** om de tekst hoger of lager te plaatsen.

Pijlkarakters draaien mee met de tekst:

| In de tekst | Zichtbaar na rotate(-90) |
|---|---|
| `→` | ↑ |
| `←` | ↓ |

Gebruik dit om pijlen inline in de tekst te zetten:  
`"Bij elke stap omhoog wordt de eenheid 10 keer groter. →"`

### Aanpasbare waarden in SVG

Zet bovenaan elk SVG-bestand een commentaarblok met de waarden die je het vaakst wil aanpassen:

```xml
<!--
  AANPASBARE WAARDEN:
  - Lettergrootte tekst:  font-size="13"
  - Afstand tot ladder:   y="190" links / y="167" rechts
    → groter y = verder naar onder (dichter bij midden)
    → kleiner y = hoger (verder van midden)
-->
```

### Positie van labels op sporten

De tekstbasislijn zet je op `y = sport_top + sport_hoogte` zodat de tekst op de sport staat (niet eronder):

```
sport op y=25, hoogte=12  →  tekst op y=37
sport op y=73, hoogte=12  →  tekst op y=85
```

---

## Afspraken en wensen

- **Stap voor stap werken**: eerst bevestiging vragen, dan pas code schrijven.
- **Vragen stellen bij twijfel**: niet zelf aannames maken.
- **Afbeeldingen**: altijd externe SVG-bestanden, nooit inline SVG in JS. Bestanden horen in `H12/afbeeldingen/`.
- **Verticale uitlijning**: tekst naast een figuur altijd `alignItems: "flex-start"` (bovenuitgelijnd), niet gecentreerd.
- **Titels in een voorbeeldkader**: gebruik `<strong>` voor gewone vette tekst; gebruik `.theorie` alleen als de groene kleur ook gewenst is.
- **Bullets in een voorbeeldkader**: bij korte tekst volstaat een gewone `span`; bij langere tekst een `flex`-rij gebruiken zodat de tekst correct afbreekt.
- **Grootte van afbeeldingen**: expliciet opgeven in pixels (bv. `180px`); meerdere afbeeldingen in één kader krijgen dezelfde breedte tenzij anders gevraagd.
